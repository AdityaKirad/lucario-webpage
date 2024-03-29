import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import GuildBotFeaturesSidebar from '../../components/GuildBotFeaturesSidebar';
import styles from '../../styles/guildBotFeature.module.css';

const GuildBotFeatures = () => {
  const router = useRouter();
  const { guildId } = router.query;
  return (
    <React.Fragment>
      <Head>
        <title>Lucario-The Discord Bot</title>
        <meta name="description" content="Lucario is a feature-rich and modular discord bot for your Discord server.
         With web configuration, moderation, anti-spam, auto roles,...." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Untitled design (2)_auto_x2_colored_toned_light_ai.png" />
      </Head>
        <Box className={styles.background}>
            <GuildBotFeaturesSidebar />
            {guildId}
        </Box>
    </React.Fragment>
  )
}

export default GuildBotFeatures;