import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import * as emoji from 'emojione'

import SelectDialog from "../components/SelectDialog";
import {StatusDisplay} from "../components/StatusDisplay";

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
            emojis: [
                ...this.state.emojis,
                ...selectedEmojis
            ],
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Button variant="fab"
                        color="primary"
                        aria-label="Add"
                        className={classes.button}
                        onClick={this.handleClick}>
                    <AddIcon/>
                </Button>
                <SelectDialog
                    id="simple-popper"
                    className={classes.selectDialog}
                    show={ this.state.showDialog }
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
                <StatusDisplay emojis={ [...this.state.emojis] }/>
            </React.Fragment>
        );
    }
}

const styles = theme => {
    return ({
        button: {
            margin: theme.spacing.unit,
        },
        extendedIcon: {
            marginRight: theme.spacing.unit,
        },
        selectDialog: {
            height: theme.height,
            width: theme.width,
            margin: theme.spacing.unit,
        }
    });
};

EmojiSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmojiSelect);