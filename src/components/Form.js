import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form id="task-creation-form">
                    <input type="submit" value="+"></input>
                    <input type="text" placeholder='Nom' required></input>
                </form>
            </div>
        );
    }
}

export default Form;