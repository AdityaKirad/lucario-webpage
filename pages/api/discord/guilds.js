import axios from "axios";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function getBotGuilds() {
    return axios.get(`${process.env.DISCORD_API_URL}/users/@me/guilds`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        },
    });
}

export async function getUserGuilds(id) {
    const user = await prisma.userswebinformation.findUnique({
        where: {
            discordId: Number(id),
        },
    }).catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
    const accessToken = user.accessToken;
    return axios.get(`${process.env.DISCORD_API_URL}/users/@me/guilds`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    });
}