import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

import EmojiSelect from "./pages/EmojiSelect";

import joey from './joey.jpeg';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Typography className="Title-Typography">How you doin'?</Typography>
                    <img src={joey} className="App-logo" alt="logo"/>
                </header>
                <div className="App-content">
                    <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <EmojiSelect className="EmojiSelect"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
