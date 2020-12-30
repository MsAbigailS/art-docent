import React, { Component } from 'react';
import { Viewer } from 'react-iiif-viewer'; // Viewer component from https://www.npmjs.com/package/react-iiif-viewer

class ImageWindow extends Component{
    constructor(){
        super();

        this.state = {
            url: ""
        };
    }

    nextImage = (e) => {
        this.setState({url: e.target.value})
        console.log(this.state.url)
    }
    render(){
        return(
            <div>
                This is the image window component.
                <Viewer/>
                <button 
                    // name={this.state.searchTerm}
                    // onClick={e => this.props.onClick(e.target.name)}
                >
                    NEXT
                </button>
            </div>
        )
    }
    
}

export default ImageWindow