import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import SelectDialog from "../components/SelectDialog";
import StatusDisplay from "../components/StatusDisplay";

class EmojiSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
            anchorEl: null,
            emojis: [],
        };
    };

    handleClick = event => {
        this.setState({
            showDialog: true,
            anchorEl: event.currentTarget,
        });
    };

    handleClose = (selectedEmojis) => {
        this.setState({
            anchorEl: null,
            showDialog: false,
            emojis: [...selectedEmojis],
        });
    };

    render() {
        const {classes, category} = this.props;

        return (
            <React.Fragment>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center' }}>
                <Button variant="fab"
                        color="inherit"
                        aria-label="Add"
                        className={classes.button}
                        onClick={this.handleClick}>
                    <AddIcon/>
                </Button>
                <SelectDialog
                    id="simple-popper"
                    className={classes.selectDialog}
                    show={ this.state.showDialog }
                    category={ category}
                    anchorEl={ this.state.anchorEl }
                    onClose={ this.handleClose }
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}/>
                </div>
                <StatusDisplay className={classes.statusDisplay} emojis={ [...this.state.emojis] }/>
            </React.Fragment>
        );
    }
}

const styles = theme => {
    return ({
        button: {
            margin: theme.spacing.unit,
            color: theme.palette.common.white,
            position: 'fixed',
            bottom: '10vh',
            zIndex: 100,
        },
        extendedIcon: {
            marginRight: theme.spacing.unit,
        },
        selectDialog: {
            height: 'auto',
            width: 'auto',
            margin: theme.spacing.unit,
        },
        statusDisplay: {
            width: '100%',
            backgroundColor: '#fefffe',
            height: 'calc(10px + 5vh)',
            position: 'relative',
            bottom: 0,
        },
    });
};

EmojiSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        category: state.category,
    }
};

export default withStyles(styles)(connect(mapStateToProps)(EmojiSelect));