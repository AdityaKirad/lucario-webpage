import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';
import { Prisma } from '../../../prisma/Prisma.server';

const DISCORD_AUTHORIZATION_URL = "https://discord.com/api/oauth2/authorize" + 
    new URLSearchParams({
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
    })

async function refreshAccessToken(token) {
    try {
        const url = "https://discord.com/api/oauth2/token" +
        new URLSearchParams({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: token.refreshToken,
        })

        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
        })

        const refreshedTokens = await response.json()

        if (!response.ok) {
            throw refreshedTokens
        }

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
        }
    } catch ( error ) {
        console.log( error )

        return {
            ...token,
            error: "RefreshAccessTokenError",
        }
    }
}

async function updateTokeninDatabase(discordId, discordName, accessToken, refreshToken ){
    try {
        const existingUser = await Prisma.userswebinformation.findUnique({
            where: {
                discordId: Number(discordId),
            },
        });
        if(existingUser) {
            const existingUser = await Prisma.userswebinformation.update({
                where: {
                    discordId: Number(discordId),
                },
                data: {
                    discordId: Number(discordId),
                    discordName: discordName,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                }
            });
            return existingUser;
        }
        else {
            const newUser = await Prisma.userswebinformation.create({
                data: {
                    discordId: Number(discordId),
                    discordName: discordName,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                },
            });
            return newUser;
        }
    } catch(err) {
        console.log(err);
    }
}

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
        }),
    ],

    callbacks: {
        async jwt({ token, user, account }) {
            if ( account && user ) {
                return {
                    accessToken: account.access_token,
                    accessTokenExpires: Date.now() + account.expires_at * 1000,
                    refreshToken: account.refresh_token,
                    user,
                }
            }

            if ( Date.now() < token.accessTokenExpires ) {
                return token
            }

            return refreshAccessToken(token)
        },

        async session({ session, token, accessToken, refreshToken, discordId, discordName }) {
            session.user = token.user
            accessToken = token.accessToken
            refreshToken = token.refreshToken
            session.error = token.error
            discordId = token.user.id
            discordName = token.user.name
            updateTokeninDatabase(discordId, discordName, accessToken, refreshToken)
            .catch((e) => {
                throw e
            });
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
})