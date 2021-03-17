import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  if(!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} sm={12} md={4} lg={2} className={cx(styles.card, styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={confirmed.value}
                duration={1}
                separator=','
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of confirmed cases</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} sm={12} md={4} lg={2} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Currently infected</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={confirmed.value - recovered.value - deaths.value}
                duration={1}
                separator=','
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} sm={12} md={4} lg={2} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={recovered.value}
                duration={1}
                separator=','
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recoveries cases</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} sm={12} md={4} lg={2} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={deaths.value}
                duration={1}
                separator=','
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;