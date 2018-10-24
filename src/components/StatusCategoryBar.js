import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HealingIcon from '@material-ui/icons/Healing';
import ActivityIcon from '@material-ui/icons/DirectionsBike';
import PillsIcon from '../pills-icon.jpg'
import CakeIcon from '@material-ui/icons/Cake';
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {changeCategory} from "../actions";

class StatusCategoryBar extends React.Component {

    handleChange = (_, value) => {
        this.props.dispatch(changeCategory(value));
    };

    render() {
        const {classes, category} = this.props;
        const {label, selected} = this.props.classes;

        return (
            <BottomNavigation className={classes.root} value={category} onChange={this.handleChange} showLabels>
                <BottomNavigationAction classes={{label, selected}} label="Mood" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction classes={{label, selected}} label="Health" icon={<HealingIcon/>}/>
                <BottomNavigationAction classes={{label, selected}} label="Cycle" icon={<RestoreIcon/>}/>
                <BottomNavigationAction classes={{label, selected}} label="Sports" icon={<ActivityIcon/>}/>
                <BottomNavigationAction classes={{label, selected}} label="Meds" icon={<CakeIcon/>}/>
            </BottomNavigation>
        )
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        padding: '0px 10px',
        margin: '5px 2px',
    },
    label: {
        fontSize: '1vw',
    },
    selected: {
        color: '#ff838c',
        fontSize: '2vw',
        fontWeight: 'bold',
    }
});

const mapStateToProps = (state) => {
    return {
        category: state.category,
    }
};

export default withStyles(styles)(connect(mapStateToProps)(StatusCategoryBar));