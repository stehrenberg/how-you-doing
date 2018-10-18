import React from 'react';
import emojione from 'emojione';

export const StatusDisplay = (props) => {
    console.log(props.emojis);
    return (<div>
        {
            props.emojis.map((emoji) => <p>`${emoji.id}`</p>)
        }
    </div>);
};