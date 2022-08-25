import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styles from '../styles/guildBotFeature.module.css'

const GuildBotFeaturesSidebar = () => {
  const router = useRouter();
  const { guildId } = router.query
  return (
    <React.Fragment>
        <Box className={styles.sidebarBackground}>
          <Box className={styles.sidebarTop}>
            <Link href={`/dashboard/${guildId}`}>
              <a className={styles.logo}>
                <Avatar alt='brand-logo' src='/pokemon-journeys-mega-lucario-ash.jpg'/>
              </a>
            </Link>
            <Link href={`/dashboard/${guildId}`}>
              <a className={styles.brandName}>Lucario</a>
            </Link>
          </Box>
          <Typography>Dashboard</Typography>
          <Typography>Leaderboard</Typography>
          <Typography>Settings</Typography>
        </Box>
    </React.Fragment>
  )
}

export default GuildBotFeaturesSidebar