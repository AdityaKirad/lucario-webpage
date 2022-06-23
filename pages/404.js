import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../styles/404.module.css';

const NotFound = () => {
    return(
        <React.Fragment>
            <Head>
                <title>Lucario-The Discord Bot</title>
                <meta name="description" content="Lucario is a feature-rich and modular discord bot for your Discord server.
                With web configuration, moderation, anti-spam, auto roles,...." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/Untitled design (2)_auto_x2_colored_toned_light_ai.png" />
                </Head>
            <Box className={styles.main}>
                <Box className={styles.NotFoundContent}>
                    <Typography className={styles.errorNumber}>404</Typography>
                    <Link href='/' passHref>
                        <Button color='inherit' variant='contained' className={styles.home}>Go Back Home</Button>
                    </Link>
                </Box>
                <Box className={styles.NotFoundWorm}></Box>
            </Box>
        </React.Fragment>
    );
};

export default NotFound;