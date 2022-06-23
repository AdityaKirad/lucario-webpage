import Link from "next/link";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaDiscord } from "react-icons/fa";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material";
import { signIn } from 'next-auth/react';
import DrawerComo from "./DrawerComo";
import Dropdown from "./Dropdown";
import styles from "../styles/Home.module.css";

const NavBar = () => {
  const [plugin, setPlugin] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Box className={styles.navigationBar}>
        <AppBar
          className={styles.navigation}
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
        >
          <Link href="/">
            <a className={styles.logo}>
              <Avatar
                alt="Brand-Logo"
                src="/pokemon-journeys-mega-lucario-ash.jpg"
              ></Avatar>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.brandName}>Lucario</a>
          </Link>
          {isMatch ? (
            <>
              <DrawerComo />
            </>
          ) : (
            <>
              <Box className={styles.navItemsGroup}>
                  <Typography
                    className={styles.navLinks}
                    color="inherit"
                    onClick={() => setPlugin(!plugin)}
                  >
                    Plugin
                    {plugin ? (
                      <KeyboardArrowUpIcon style={{ marginBottom: "-0.7vh" }} />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{ marginBottom: "-0.7vh" }}
                      />
                    )}
                  </Typography>
                  { plugin && <Collapse in={plugin} timeout="auto" unmountOnExit><Dropdown /></Collapse>}
                <Link href='https://discord.com/api/oauth2/authorize?client_id=961965367767470171&permissions=8&scope=bot%20applications.commands' target='_blank'>
                  <a className={styles.navLinks}>Invite</a>
                </Link>
                <Link href='https://discord.gg/bAEWnAxp2t' target='_blank'>
                  <a className={styles.navLinks}>Support Server</a>
                </Link>
                  <Button className={styles.login} color="inherit" onClick={() => signIn('discord',{modal: true})}>
                  Login <FaDiscord style={{ height: "1.5em", width: "1.5em", marginLeft: "0.5vw" }}/>
                  </Button>
              </Box>
            </>
          )}
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default NavBar;
