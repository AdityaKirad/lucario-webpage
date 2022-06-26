import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
    
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackUrl : process.env.NEXTAUTH_URL,
            token: "https://discord.com/api/oauth2/token",
            userinfo: "https://discord.com/api/users/@me",
            authorization: {
                params: {
                    scope: 'identify email guilds applications.commands.permissions.update'
                }
            },
            callbacks: {
                async session({ session, token, user }) {
                    session.accessToken = token.access_token
                    console.log(session.accessToken);
                    return session;
                },

                async jwt({ token, account }){
                    if (account) token.accessToken = account.access_token
                    return token;
                }
            },
            secret: process.env.NEXTAUTH_SECRET
        }),
    ],
})