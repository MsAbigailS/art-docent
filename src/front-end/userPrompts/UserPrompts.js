import React, { Component } from 'react';
import './UserPrompts.css';
import Painting from '../../components/painting/Painting';

class UserPrompts extends Component{
    render(){
        return(
            <div className="user-prompt-container">
                This is where the user prompts will go
                <Painting/>
            </div>
        )
    }
    
}

export default UserPrompts