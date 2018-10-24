import React from 'react';
import {Card, CardContent, CardHeader/*, CardActions*/} from '@material-ui/core';
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

//import { data } from '../data/data.json';


class Calendar extends React.Component {

    render() {
        const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        const {classes} = this.props;

        return (
            <Card className={classes.calendar}>
                <CardHeader id='calendar-title' title="October"/>
                <CardContent>
                    <div id='weekdays'
                         className={classes.weekdays}>
                        {
                            WEEKDAYS.map(day => <span className={classes.day}>{`${day}`}</span>)
                        }
                    </div>
                    <div id='days-of-month'
                         className={classes.weeksOfMonth}>
                        {
                            [0, 1, 2, 3, 4].map((number) => (
                                <div className={classes.daysOfWeek}>
                                    {
                                        WEEKDAYS
                                            .map((day, i) => (<span className={classes.day}>{`${number * 7 + ++i}`}</span>))
                                    }
                                </div>)
                            )
                        }
                    </div>
                </CardContent>
            </Card>
        )
    }

}

const styles = theme => (
    {
        calendar: {
            width: '80vmax',
        },
        weekdays: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 12,
            color: '#26cbb5',
        },
        daysOfMonth: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            color: '#9c9c9c'
        },
        weeksOfMonth: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        daysOfWeek: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: 16,
            color: '#9c9c9c',
        },
        day: {
            width: 30,
        }
    }
);

export default withStyles(styles)(Calendar);