import Head from "next/head";
import React from "react";
import { getSession } from 'next-auth/react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import '@fontsource/macondo/400.css';
import styles from '../styles/Dashboard.module.css';
import DashboardNavbar from "../components/DashboardNavbar";
import { getGuildWithPermission } from "./api/discord/guilds";

const Dashboard = ({ session, mutualGuilds, nonMutualGuilds }) => {
  return (
    <React.Fragment>
        <Head>
        <title>Lucario-The Discord Bot</title>
        <meta name="description" content="Lucario is a feature-rich and modular discord bot for your Discord server.
         With web configuration, moderation, anti-spam, auto roles,...." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Untitled design (2)_auto_x2_colored_toned_light_ai.png" />
      </Head>
      <Box className={styles.dashboardBackground}>
        <DashboardNavbar />
        <Box className={styles.main}>
          <Typography className={styles.selectServer}>Select A Server</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} md={8}><Paper>1</Paper></Grid>
            <Grid item xs={12} lg={4} md={8}><Paper>2</Paper></Grid>
            <Grid item xs={12} lg={4} md={8}><Paper>3</Paper></Grid>
            <Grid item xs={12} lg={4} md={8}><Paper>4</Paper></Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Dashboard;

export async function getServerSideProps(context){
  const session = await getSession(context);
  const id = session?.user.id;
  if (!session) return { redirect: { destination: '/', permanent: false }};
  try {
    const guilds = await getGuildWithPermission(id);
    const mutualGuilds = guilds[0];
    const nonMutualGuilds = guilds[1];
    return { props: { session, mutualGuilds, nonMutualGuilds } };
  } catch(err) {
    console.log(err);
  }
}
