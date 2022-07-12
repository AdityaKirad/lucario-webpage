import axios from "axios";
import { Prisma } from '../../../prisma/Prisma.server';

function getBotGuilds() {
    return axios.get(`${process.env.DISCORD_API_URL}/users/@me/guilds`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        },
    });
}

async function getUserGuilds(id) {
    const user = await Prisma.userswebinformation.findUnique({
        where: {
            discordId: Number(id),
        },
    });
    const accessToken = user.accessToken;
    return axios.get(`${process.env.DISCORD_API_URL}/users/@me/guilds`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    });
}

export async function getGuildWithPermission(id) {
    const { data: botGuilds } = await getBotGuilds();
    const { data: userGuilds }  = await getUserGuilds(id)
    .catch((e) => {
        throw e
    });

    const permissionUserGuilds = userGuilds.filter( 
        ({ permissions }) => (parseInt(permissions) & 0x20 ) === 0x20 || (parseInt(permissions) & 0x8 ) === 0x8
    );
    const mutualGuilds =  permissionUserGuilds.filter(
        (guild) => botGuilds.some(
            (botGuild) => botGuild.id === guild.id)
    );
    const nonMutualGuilds = permissionUserGuilds.filter(
        (guild) => {
            return mutualGuilds.findIndex((mutualGuild) => mutualGuild.id === guild.id) === -1;
        }
    );
    return [mutualGuilds, nonMutualGuilds];
}