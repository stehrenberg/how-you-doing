import React from 'react';
import Emoji from 'react-emoji-render';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from "@material-ui/core/styles/withStyles";
import Paperbox from '@material-ui/core/Paper';
import StatusCategoryBar from "./StatusCategoryBar";

class StatusDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTooltip: false,
        };
    }

    handleClick = () => {
        this.setState({showTooltip: true});
        setTimeout(() => this.setState({showTooltip: false}), 3000);
    };

    render() {
        const {emojis, classes} = this.props;

        return (
            <React.Fragment>
                <Paperbox className={classes.paperbox}>
                    {
                        emojis.map((emoji) => (
                            <Tooltip classes={{tooltip: classes.lightTooltip}}
                                     key={emoji.id}
                                     title={`@${emoji.time.format('hh:mm')}`}
                                     open={this.state.showTooltip}
                            >
                <span key={emoji.id} onClick={this.handleClick}>
                         <Emoji key={emoji.id}
                                text={`${emoji.native}`}
                                style={{fontSize: '10vmin'}}
                         />
                </span>
                            </Tooltip>))
                    }
                </Paperbox>
            </React.Fragment>
        );
    }
}

const styles = theme => ({
    lightTooltip: {
        background: theme.palette.common.white,
        color: theme.palette.text.primary,
        fontFamily: '"Noteworthy", serif',
        boxShadow: theme.shadows[1],
        fontSize: 10,
    },
    paperbox: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '60vw',
        height: '50vmin',
    }
});

export default withStyles(styles)(StatusDisplay);
