import React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/';
import styles from '../styles/Dashboard.module.css';


const GuildCards = ({ mutualGuilds, nonMutualGuilds }) => {
    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          }
        }
      })
  return (
    <React.Fragment>
        <Grid container spacing={2}>
        {
              mutualGuilds.map((item, index) => {
                if(item.owner === true){
                  if(item.icon === null || item.icon === ''){
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                          <Box className={styles.guildCardPrimary}>
                            <Typography className={styles.serverNameInitial}>{item.name.split(' ').map(word => word[0]).join('')}</Typography>
                          </Box>
                          <Divider />
                          <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                              <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                              <Link href={`/dashboard/${item.id}`}>
                                <Button variant="contained" sx={{ fontFamily: 'Macondo, cursive' }}>Go</Button>
                              </Link>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  } else {
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                        <Box className={styles.guildCardPrimary}>
                          <CardMedia component='img' alt='guild-icon' image={`https://cdn.discordapp.com/icons/${item.id}/${item.icon}.png`} sx={{ height: '80px', width: '80px', border: '2px solid transparent', borderRadius: '50%'}} />
                        </Box>
                        <Divider />
                          <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0', marginLeft: '1px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                              <Link href={`/dashboard/${item.id}`}>
                                <Button variant="contained" sx={{ fontFamily: 'Macondo, cursive' }}>Go</Button>
                              </Link>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  }
                } else {
                  if(item.icon === null || item.icon === ''){
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                        <Box className={styles.guildCardPrimary}>
                            <Typography className={styles.serverNameInitial}>{item.name.split(' ').map(word => word[0]).join('')}</Typography>
                        </Box>
                        <Divider />
                        <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0', marginLeft: '1px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                              <Link href={`/dashboard/${item.id}`}>
                                <Button variant="contained" sx={{ fontFamily: 'Macondo, cursive' }}>Go</Button>
                              </Link>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  } else {
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                        <Box className={styles.guildCardPrimary}>
                          <CardMedia component='img' alt='guild-icon' image={`https://cdn.discordapp.com/icons/${item.id}/${item.icon}.png`} sx={{ height: '80px', width: '80px', border: '2px solid transparent', borderRadius: '50%'}} />
                        </Box>
                        <Divider />
                        <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0', marginLeft: '1px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                              <Link href={`/dashboard/${item.id}`}>
                                <Button variant="contained" sx={{ fontFamily: 'Macondo, cursive' }}>Go</Button>
                              </Link>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  }
                }
              })
            }

{
              nonMutualGuilds.map((item, index) => {
                if(item.owner === true){
                  if(item.icon === null || item.icon === ''){
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                        <Box className={styles.guildCardPrimary}>
                            <Typography className={styles.serverNameInitial}>{item.name.split(' ').map(word => word[0]).join('')}</Typography>
                        </Box>
                        <Divider />
                        <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0', marginLeft: '1px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                            <Button variant="contained" sx={{ fontFamily: 'Macond, cursive' }}>Setup</Button>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  } else {
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                        <Box className={styles.guildCardPrimary}>
                          <CardMedia component='img'  alt='guild-icon' image={`https://cdn.discordapp.com/icons/${item.id}/${item.icon}.png`} sx={{ height: '80px', width: '80px', border: '2px solid transparent', borderRadius: '50%'}} />
                        </Box>
                        <Divider />
                        <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0', marginLeft: '1px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                            <Button variant="contained" sx={{ fontFamily: 'Macondo, cursive' }}>Setup</Button>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  }
                } else {
                  if(item.icon === null || item.icon === ''){
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                        <Box className={styles.guildCardPrimary}>
                            <Typography className={styles.serverNameInitial}>{item.name.split(' ').map(word => word[0]).join('')}</Typography>
                        </Box>
                        <Divider />
                        <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0', marginLeft: '1px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                            <Button variant="contained" sx={{ fontFamily: 'Macondo, cursive' }}>Setup</Button>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  } else {
                    return (
                      <Grid item md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" className={styles.guildCard}>
                        <Box className={styles.guildCardPrimary}>
                          <CardMedia component='img' alt='guild-icon' image={`https://cdn.discordapp.com/icons/${item.id}/${item.icon}.png`} sx={{ height: '80px', width: '80px', border: '2px solid transparent', borderRadius: '50%'}} />
                        </Box>
                        <Divider />
                        <CardContent sx={{display: 'flex', flexDirection: 'row', padding: '0', marginLeft: '1px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={styles.serverName}>{item.name}</Typography>
                              <Typography className={styles.serverRole}>Owner</Typography>
                            </Box>
                            <CardActions sx={{marginLeft: 'auto'}}>
                            <Button variant="contained" sx={{ fontFamily: 'Macondo, cursive' }}>Setup</Button>
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  }
                }
              })
            }
        </Grid>
    </React.Fragment>
  )
}

export default GuildCards;
