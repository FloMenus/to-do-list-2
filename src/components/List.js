import React, { Component } from 'react';

class List extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <p>{this.props.tasks}</p>
            </div>
        );
    }
}

export default List;