import React, { Component } from 'react';

class ArtSearchBar extends Component{
    constructor(){
        super();

        this.state = {
            searchTerm: ""
        };
    }

    updateSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
        console.log(this.state.searchTerm)
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.state.searchTerm} 
                    onChange={this.updateSearchTerm} 
                    placeholder="Search"
                />
                <button 
                    name={this.state.searchTerm}
                    onClick={e => this.props.onClick(e.target.name)}
                >
                    Enter
                </button>
            </div>
        )
    }
    
}

export default ArtSearchBar