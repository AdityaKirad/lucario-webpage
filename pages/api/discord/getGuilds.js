import { getBotGuilds, getUserGuilds } from "./guilds";
import { PrismaClient } from '@prisma/client';
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

const circularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if(typeof(value) === "object" && value !== null) {
            if(seen.has(value)) {
                return 'Object';
            }
            seen.add(value);
        }
        return value;
    };
};

export default async function getGuilds(req, res) {
    const session = await getSession({ req });
    const id = session?.user.id;
    try {
        const botGuilds = await getBotGuilds();
        const userGuilds  = await getUserGuilds(id);
        res.json({data1: botGuilds.data, data2: userGuilds.data});
    } catch(err) {
        console.log(err);
        res.status(400).send('Error');
    }
}