import Head from "next/head";
import React from "react";
import { getSession } from 'next-auth/react';
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from '../styles/Dashboard.module.css';
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = ({ session }) => {
  const user = session?.user
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
      </Box>
    </React.Fragment>
  )
}

export default Dashboard;

export async function getServerSideProps(context){
  const session = await getSession(context);
  if (!session) return { redirect: { destination: '/', permanent: false }};
  return {
    props: { session },
  };
}
