import { getGuildWithPermission } from "./guilds";
import { getSession } from "next-auth/react";

export default async function getGuilds(req, res) {
    const session = await getSession({ req });
    const id = session?.user.id;
    try {
        const guilds = await getGuildWithPermission(id);
        res.send({ guilds });
    } catch(err) {
        console.log(err);
        res.status(400).send('Error');
    }
}