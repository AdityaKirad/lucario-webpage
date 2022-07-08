import Head from 'next/head';
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import { FaDiscord } from "react-icons/fa";
import { useTheme } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import '@fontsource/macondo/400.css';
import styles from '../styles/Home.module.css'; 
import { useRouter } from 'next/router';

export default function Home() {
  const theme = useTheme();
  const { data: session, status } = useSession();
  
  const router = useRouter();
  if (status === "authenticated"){
    router.push("/dashboard")
  }
  return (
    <>
      <Head>
        <title>Lucario-The Discord Bot</title>
        <meta name="description" content="Lucario is a feature-rich and modular discord bot for your Discord server.
         With web configuration, moderation, anti-spam, auto roles,...." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Untitled design (2)_auto_x2_colored_toned_light_ai.png" />
      </Head>
      <Box className={styles.background}>  
            <NavBar />
        <Box className={styles.content}>
          <Grow in={true} style={{}}{...{ timeout: 3000}}>
          <Box className={styles.description}>
            <Box className={styles.about}>
              <Typography className={styles.dashboard} variant="h3" sx={{ fontFamily: 'Macondo, cursive', color: 'white', fontWeight: 'bold' }}>Lucario Bot DashBoard</Typography>
              <Typography className={styles.shortDescription}variant="h5" sx={{ fontFamily: 'Macondo, cursive', color: 'white' }}>A fully customizable server moderation Discord bot for
               your Discord server that features a simple and intuitive
                web dashboard. Server management just got a whole lot
                 easier.</Typography>
            </Box>
            <Box className={styles.buttons}>
              <Button className={styles.addToDiscord} color="inherit"
              href='https://discord.com/api/oauth2/authorize?client_id=961965367767470171&permissions=8&scope=bot%20applications.commands'
              target='_blank'>Add To Discord</Button>
              <Button className={styles.loginWithDiscord} color="inherit" onClick={() => signIn('discord')}>Login <FaDiscord style={{ width: "1.5em", height: "1.5em", marginLeft: "0.5vw" }}/></Button>
            </Box>
          </Box>
          </Grow>
        </Box>
      </Box>
      
    </>
  )
}
