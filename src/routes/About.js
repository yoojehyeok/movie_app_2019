import React from 'react';

function About(props) {
    console.log("about");
    console.log(props);
    let state = props.location.state;
    return (
        <div>
            <span> {state.summary}</span>
        </div>
    )
}

export default About;