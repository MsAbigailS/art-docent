import React, { Component } from 'react';

class Button extends Component{
    constructor(){
        super();

        this.state = {
            buttonText: "DEFAULTTEXT",
            color: ""
        };
    }

    render(){
        let {buttonText} = this.props;
        let {color} = this.props;

        return(
            <div>
                <button
                    style={{background: `${color}`}}
                >
                    {buttonText}
                </button>
            </div>
        )
    }
    
}

export default Button