import Link from "next/link";
import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon"
import ConstructionIcon from "@mui/icons-material/Construction";
import InterestsIcon from '@mui/icons-material/Interests';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import styles from '../styles/Home.module.css';

const Dropdown = () => {
  return (
    <React.Fragment>
        <List className={styles.dropdownMenu}>
        <ListItem>
                <ListItemIcon>
                  <ConstructionIcon className={styles.desktopDropdownIcon} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/">
                    <a className={styles.dropdownLinks}
                    >
                      Moderation & Management
                    </a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a className={styles.dropdownLinksDescription}
                    >
                      Welcome Plugin, Custom Commands, Reaction Roles, Moderator
                    </a>
                  </Link>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                    <InterestsIcon className={styles.desktopDropdownIcon} />
                </ListItemIcon>
                <ListItemText>
                    <Link href="/">
                    <a className={styles.dropdownLinks}
                    >Social Connecters
                    </a>
                    </Link>
                    <br />
                    <Link href="/">
                    <a className={styles.dropdownLinksDescription}
                    >Twitch, Youtube, Twitter and Reddit Connection
                    </a>
                    </Link>
                </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <MilitaryTechIcon className={styles.desktopDropdownIcon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/">
                        <a className={styles.dropdownLinks}
                        >Engagement & Fun
                        </a>
                        </Link>
                        <br />
                        <Link href="/">
                        <a className={styles.dropdownLinksDescription}
                        >Level, Birthdays, Music, Music Quiz And Economy Plugin
                        </a>
                        </Link>
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <KeyboardCommandKeyIcon className={styles.desktopDropdownIcon} />
                    </ListItemIcon>
                    <ListItemText>
                    <Link href="/">
                        <a className={styles.dropdownLinks}
                        >Utilities
                        </a>
                        </Link>
                        <br />
                        <Link href="/">
                        <a className={styles.dropdownLinksDescription}
                        >Embeds, Search Anything, Record, Timers, Statistics, Temporary Channels
                        </a>
                        </Link>
                    </ListItemText>
                </ListItem>
        </List>
    </React.Fragment>
  );
};

export default Dropdown;