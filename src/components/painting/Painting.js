import React, { Component } from 'react';
import './Painting.css';
import ArtSearchBar from '../searchBar/ArtSearchBar';
import { Viewer } from 'react-iiif-viewer'; // Viewer component from https://www.npmjs.com/package/react-iiif-viewer
import SlidingBar from '../../front-end/slidingBar/SlidingBar';
import SearchButtons from '../../front-end/searchCategories/SearchButtons';

class Painting extends Component{
    constructor(){
        super();

        this.state = {
            result: "",
            time: "10",
            urlIndex: 0,
            showViewer: false,
            startTour: false,
            artQueue: [],
            returnJson:{
                name: null,
                artist: null,
                date: null,
                dimensions: null,
                medium: null,
                style: null,
                description: null,
                picture: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9"
            }
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name){
        console.log(name);
        switch(name){
            case "showViewer":
                this.setState(prevState => ({
                    showViewer: !prevState.showViewer
                }))
                break;
            default:
                break;
        }
    }

    // changees the search term
    onClick = term => {
        this.setState({
            result: term
        })
        console.log("Search term: " + this.state.result)
    }

    //sets max frames for queue
    setMaxIndex = userTime => {
        this.setState({
            time: userTime
        })
        console.log("the max index is " + this.state.time)
        // this.hideComponent("slider")
    }

    // calls to API and creates Json objects that are stored in an array
    search = () => {
        let maxIndex = parseInt(this.state.time, 10);
        let currIndex = 0;
        let artworkQueue = [];

        fetch(`http://api.artic.edu/api/v1/artworks/search?q=${this.state.result}&fields=title,artist_title,date_display,category_titles,classification_titles,department_titles,description,dimensions,material_titles,medium_display,style_title,thumbnail&limit=${this.state.time}`)
            .then(res => res.json())
            .then(returnInformation => {
                console.log(returnInformation)
                while(currIndex < maxIndex){
                    let artwork = {
                        creator: returnInformation.data[currIndex].artist_title,
                        title: returnInformation.data[currIndex].title,
                        time: returnInformation.data[currIndex].date_display,
                        size: returnInformation.data[currIndex].dimensions,
                        material: returnInformation.data[currIndex].medium_display,
                        period: returnInformation.data[currIndex].style_title,
                        text: returnInformation.data[currIndex].description,
                        image: returnInformation.data[currIndex].thumbnail.url
                    }
                    artworkQueue.push(artwork);
                    currIndex++;
                }  
                this.setState({
                    startTour: true,
                    artQueue: artworkQueue,
                    returnJson: {
                        picture: artworkQueue[0].image
                    }
                })
            })
    }

    nextImage = () => {
        let maxIndex = parseInt(this.state.time, 10);

        if(this.state.urlIndex < maxIndex){
            this.state.urlIndex++;
        }

        this.setState({
            startTour: false
        })

        this.setState({
            startTour: true
        })
        console.log("current indexval: " + this.state.urlIndex)
    }

    prevImage = () => {
        if(this.state.urlIndex > -1){
            this.state.urlIndex--;
        }
        this.setState({
            startTour: false
        })
        this.setState({
            startTour: true
        })
        console.log("current indexval: " + this.state.urlIndex)
    }

    quickSearch = quickSearchTerm => {
        this.setState({
            result: quickSearchTerm
        })
        console.log("the current term is " + quickSearchTerm)
        console.log("therefore " + this.state.result)
        // this.hideComponent("categoryButtons"))
        this.search()
    }

    render(){
        const { showViewer } = this.state;
        return(
            <div>
                <SlidingBar onClick={this.setMaxIndex}/>
                <SearchButtons onClick={this.quickSearch}/>
                <ArtSearchBar onClick={this.onClick}/>
                <button onClick={e => this.search()}>
                    test
                </button>
                {
                    this.state.startTour

                    ?
                    <>
                            <Viewer iiifUrl={this.state.artQueue[this.state.urlIndex].image}/>
                        <button
                            onClick={e => this.nextImage()}    
                        >
                            Next Image
                        </button>
                        <button
                            onClick={e => this.prevImage()}
                        >
                            Previous Image
                        </button>
                        The current image is named {this.state.artQueue[this.state.urlIndex].title}

                    </>
                    :
                        null
                }
            </div>
        )
    }
    
}

export default Painting

// IDEAS:
// MultiViewer Component, load eveything into that, use button to control index in artQueue array