import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'identify email guilds applications.commands.permissions.update'
                }
            },
        }),
    ],
})