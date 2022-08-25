import Link from "next/link";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { createTheme } from "@mui/material";
import { useSession } from "next-auth/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { signOut } from "next-auth/react";
import DrawerComo from "./DrawerComo";
import Dropdown from "./Dropdown";
import styles from "../styles/Dashboard.module.css";

const DashboardNavbar = () => {
  const { data: session, status } = useSession();
  const [plugin, setPlugin] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const user = session?.user;
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
          {
            isMatch ?
            <Box className={styles.navItemsGroup}>
              <Typography sx={{ alignSelf: "center", cursor: 'pointer', display: 'inline-flex'}} onClick={() => setMainMenu(!mainMenu)}>
                <Avatar alt='User-image' src={user.image} />
                { mainMenu ? <KeyboardArrowUpIcon style={{ color: 'white', alignSelf: 'center', marginLeft: '1vw' }}/> : <KeyboardArrowDownIcon style={{ color: 'white', alignSelf: 'center', marginLeft: '1vw' }}/> }
            </Typography>
            <Collapse in={mainMenu} timeout='auto' unmountOnExit>
                <List className={styles.menuDropdown}>
                    <ListItem sx={{ cursor: "pointer" }}>
                    <ListItemText onClick={() => signOut()} sx={{ textAlign: "center", color: "#cb69c1"}}>Log Out</ListItemText>
                    </ListItem>
                </List>
            </Collapse>
            <DrawerComo />
            </Box>
            : <Box className={styles.navItemsGroup}>
            <a
              className={styles.navLinks}
              onClick={() => setPlugin(!plugin)}
            >
              Plugin
              {plugin ? (
                <KeyboardArrowUpIcon style={{ marginBottom: "-0.7vh" }} />
              ) : (
                <KeyboardArrowDownIcon style={{ marginBottom: "-0.7vh" }} />
              )}
            </a>
            {plugin && (
              <Collapse in={plugin} timeout="auto" unmountOnExit>
                <Dropdown />
              </Collapse>
            )}
            <Link
              href="https://discord.com/api/oauth2/authorize?client_id=961965367767470171&permissions=8&scope=bot%20applications.commands"
              target="_blank"
            >
              <a className={styles.navLinks}>Invite</a>
            </Link>
            <Link href="https://discord.gg/bAEWnAxp2t" target="_blank">
              <a className={styles.navLinks}>Support Server</a>
            </Link>
            <Typography sx={{ alignSelf: "center", cursor: 'pointer', display: 'inline-flex'}} onClick={() => setMainMenu(!mainMenu)}>
                <Avatar alt='User-image' src={user.image} />
                { mainMenu ? <KeyboardArrowUpIcon style={{ color: 'white', alignSelf: 'center', marginLeft: '1vw' }}/> : <KeyboardArrowDownIcon style={{ color: 'white', alignSelf: 'center', marginLeft: '1vw' }}/> }
            </Typography>
            <Collapse in={mainMenu} timeout='auto' unmountOnExit>
                <List className={styles.menuDropdown}>
                    <ListItem sx={{ cursor: "pointer" }}>
                    <ListItemText onClick={() => signOut()} sx={{ textAlign: "center", color: "#cb69c1"}}>Log Out</ListItemText>
                    </ListItem>
                </List>
            </Collapse>
          </Box>
          }
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default DashboardNavbar;
