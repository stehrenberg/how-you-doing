import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover/Popover";
import { Picker } from 'emoji-mart';
import Moment from 'moment-js';
import {connect} from "react-redux";

class SelectDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmojis: [],
        };
    }

    handleClose = () => this.props.onClose([...this.state.selectedEmojis]);

    selectEmoji = (emoji, event) => {
        const {category} = this.props;
        const newEmoji = {time: Moment(), category, ...emoji};
        console.log(newEmoji);

        this.setState(
            {
                selectedEmojis: [...this.state.selectedEmojis, newEmoji]
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
                    <Picker onSelect={this.selectEmoji }
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
};

const mapStateToProps = (state) => (
    {
        category: state.category,
    }
);

export default withStyles(styles)(connect(mapStateToProps)(SelectDialog));

