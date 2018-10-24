import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import withTheme from "@material-ui/core/styles/withTheme";

import EmojiSelect from "./pages/EmojiSelect";
import Calendar from "./components/Calendar";

import joey from './assets/img/joey.jpeg';
import './assets/styles/App.css';
import StatusDisplay from "./components/StatusDisplay";
import StatusCategoryBar from "./components/StatusCategoryBar";


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            showCalendar: false,
        }
    }

    handleClick = () => {
        this.setState({showCalendar: true});
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Typography className="Title-Typography">
                        How you doin'?
                        <StatusCategoryBar className="StatusCategoryBar"/>
                    </Typography>
                    <img src={joey} className="App-logo" alt="logo"/>
                </header>
                <div className="App-content">

                    { this.state.showCalendar && <Calendar/> }
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        { !(this.state.showCalendar) && <EmojiSelect className="EmojiSelect"/> }
                        <Button variant="fab"
                                color="inherit"
                                aria-label="Calendar"
                                onClick={this.handleClick}>
                            <CalendarIcon style={{
                                fontSize: 30,
                                fill: '#fefffe',
                            }}/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTheme()(App);
