import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover/Popover";
import { Picker } from 'emoji-mart';
import * as emojione from "emojione";

class SelectDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmojis: [],
        };
    }

    handleClose = () => this.props.onClose([...this.state.selectedEmojis]);

    selectEmoji = (emoji, event) => {
        this.setState(
            {
                selectedEmojis: [...this.state.selectedEmojis, emoji]
            });
    };

    render() {
        const { show, anchorEl } = this.props;

        return (
            <React.Fragment>
                <Popover
                    id="simple-popper"
                    open={show}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <Picker set="emojione" title="How do you feel?"
                            onSelect={this.selectEmoji }
                            emojiTooltip={ true }
                    />
                </Popover>
            </React.Fragment>
        );
    };
}

const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
});

SelectDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object,
    handleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(SelectDialog);

