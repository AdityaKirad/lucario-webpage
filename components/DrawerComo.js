import Link from "next/link";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SvgIcon from "@mui/material/SvgIcon";
import Divider from "@mui/material/Divider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ConstructionIcon from "@mui/icons-material/Construction";
import InterestsIcon from '@mui/icons-material/Interests';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { signIn } from "next-auth/react";
import styles from "../styles/Home.module.css";

const DrawerComo = () => {
  const [plugin, setPlugin] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <React.Fragment>
      <IconButton
        aria-label="menu"
        className={styles.menuIcon}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <SvgIcon>
          <path
            d="M7.283 19H20m0-7H4m16-7h-7.028"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            data-stroke="main"
          />
        </SvgIcon>
      </IconButton>


      <Drawer
        open={openMenu}
        anchor="right"
        onClose={() => setOpenMenu(!openMenu)}
        PaperProps={{ sx: { backgroundColor: "#17181f", width: "75%" } }}
      >
        <List>
          <ListItem>
            <ListItemButton onClick={() => setOpenMenu(!openMenu)}>
              <ListItemText>
                <CloseIcon sx={{ color: "#FFFFFF" }} />
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider sx={{ color: "#FFFFFF" }} />


          <ListItem>
            <ListItemButton>
              <ListItemText
                onClick={() => setPlugin(!plugin)}
                primaryTypographyProps={{
                  style: {
                    fontFamily: "Macondo, cursive",
                    textAlign: "center",
                    color: "#cb69c1",
                  },
                }}
              >
                Plugin
                {plugin ? (
                  <KeyboardArrowUpIcon style={{ marginBottom: "-0.7vh", color: "#cb69c1" }} />
                ) : (
                  <KeyboardArrowDownIcon style={{ marginBottom: "-0.7vh", color: "#cb69c1" }} />
                )}
              </ListItemText>
            </ListItemButton>
          </ListItem>


          <Collapse in={plugin} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemIcon>
                  <ConstructionIcon sx={{ color: "#cb69c1" }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#cb69c1",
                        fontFamily: "Macondo, cursive",
                        textAlign: "center",
                      }}
                    >
                      Moderation & Management
                    </a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontFamily: "Macondo, cursive",
                        textAlign: "center",
                      }}
                    >
                      Welcome Plugin, Custom Commands, Reaction Roles, Moderator
                    </a>
                  </Link>
                </ListItemText>
              </ListItem>


              <ListItem>
                <ListItemIcon>
                    <InterestsIcon sx={{ color: "#cb69c1" }} />
                </ListItemIcon>
                <ListItemText>
                    <Link href="/">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#cb69c1",
                        fontFamily: "Macondo, cursive",
                        textAlign: "center",
                      }}
                    >Social Connecters
                    </a>
                    </Link>
                    <br />
                    <Link href="/">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontFamily: "Macondo, cursive",
                        textAlign: "center",
                      }}
                    >Twitch, Youtube, Twitter and Reddit Connection
                    </a>
                    </Link>
                </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <MilitaryTechIcon sx={{ color: "#cb69c1" }} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/">
                        <a
                        style={{
                            textDecoration: "none",
                            color: "#cb69c1",
                            fontFamily: "Macondo, cursive",
                            textAlign: "center",
                        }}
                        >Engagement & Fun
                        </a>
                        </Link>
                        <br />
                        <Link href="/">
                        <a
                        style={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "Macondo, cursive",
                            textAlign: "center",
                        }}
                        >Level, Birthdays, Music, Music Quiz And Economy Plugin
                        </a>
                        </Link>
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <KeyboardCommandKeyIcon sx={{ color: "#cb69c1" }}/>
                    </ListItemIcon>
                    <ListItemText>
                    <Link href="/">
                        <a
                        style={{
                            textDecoration: "none",
                            color: "#cb69c1",
                            fontFamily: "Macondo, cursive",
                            textAlign: "center",
                        }}
                        >Utilities
                        </a>
                        </Link>
                        <br />
                        <Link href="/">
                        <a
                        style={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "Macondo, cursive",
                            textAlign: "center",
                        }}
                        >Embeds, Search Anything, Record, Timers, Statistics, Temporary Channels
                        </a>
                        </Link>
                    </ListItemText>
                </ListItem>
            </List>
          </Collapse>
          <Divider />


          <ListItem>
            <ListItemButton>
              <ListItemText
                primaryTypographyProps={{ style: { textAlign: "center" } }}
              >
                <Link href='https://discord.com/api/oauth2/authorize?client_id=961965367767470171&permissions=8&scope=bot%20applications.commands' target='_blank'>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#cb69c1",
                      fontFamily: "Macondo, cursive",
                      textAlign: "center",
                    }}
                  >
                    Invite
                  </a>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>


          <ListItem>
            <ListItemButton>
              <ListItemText
                primaryTypographyProps={{ style: { textAlign: "center" } }}
              >
                <Link href='https://discord.gg/bAEWnAxp2t' target='_blank'>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#cb69c1",
                      fontFamily: "Macondo, cursive",
                      textAlign: "center",
                    }}
                  >
                    Support Server
                  </a>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />


          <ListItem>
            <ListItemButton
              onClick={() => signIn('discord')}
              sx={{ border: "0.1rem solid transparent", borderRadius: "0.2rem 2rem", background: "#6c72cb", "&:hover": { background: "#6c72cb" } }}
            >
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontFamily: "Macondo, cursive",
                    textAlign: "center",
                    color: "white",
                  },
                }}
              >
                Login
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerComo;
