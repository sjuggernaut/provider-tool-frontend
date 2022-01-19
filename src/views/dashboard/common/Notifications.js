import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {Avatar, Button, CardActions, CardContent, Divider, Grid, Typography} from '@material-ui/core';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone';

import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';
import Avatar5 from 'assets/images/users/avatar-5.png';

// style constant
const useStyles = makeStyles((theme) => ({
    textActive: {
        width: '16px',
        height: '16px',
        verticalAlign: 'sub',
        color: theme.palette.success.main
    },
    timeIcon: {
        fontSize: '0.875rem',
        marginRight: '2px',
        verticalAlign: 'sub'
    },
    ScrollHeight: {
        height: '250px'
    }
}));

const NewClients = () => {
    const classes = useStyles();

    return (
        <MainCard title='Notifications' content={false} iconPrimary={AccountCircleTwoTone}>
            <PerfectScrollbar className={classes.ScrollHeight}>
                <CardContent>
                    <Grid container spacing={gridSpacing} alignItems="center">

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage"  />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div">
                                                Added a new Client Assessment for John Doe
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeIcon} />
                                                15 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid><Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage"  />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div">
                                                Updated the Client Assessment for John Doe
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeIcon} />
                                                20 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage"  />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div">
                                                Added a new assessment form to the Client Assessment for John Doe
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeIcon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>      <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage"  />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div">
                                                Added a new assessment form to the Client Assessment for John Doe
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeIcon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>      <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage"  />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div">
                                                Added a new assessment form to the Client Assessment for John Doe
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeIcon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>      <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage"  />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div">
                                                Added a new assessment form to the Client Assessment for John Doe
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeIcon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>      <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage"  />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div">
                                                Added a new assessment form to the Client Assessment for John Doe
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeIcon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </CardContent>
            </PerfectScrollbar>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button variant="text" size="small">
                    View all Notifications
                </Button>
            </CardActions>
        </MainCard>
    );
};

export default NewClients;