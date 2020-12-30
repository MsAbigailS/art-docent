import React, { Component } from 'react';
import Button from '../../button/Button';

class SearchButtons extends Component{
    constructor(){
        super();

        this.state = {
            artistName: "",
            subjectName:"",
            periodName:"",
            styleName:"",
            buttonNames:{
                artistNames:{
                    0: "Vincent Van Gogh",
                    1: "Frida Kahlo",
                    2: "Pablo Picaso",
                    3: "Leonardo de Vinci",
                    4: "Claude Monet",
                    5: "Michelangelo"
                },
                subjectNames:{
                    0: "Man",
                    1: "Women",
                    2: "Earth",
                    3: "Revolution",
                    4: "Life",
                    5: "Animals"
                },
                periodNames:{
                    0: "Ancient",
                    1: "Medieval",
                    2: "Renaissance",
                    3: "Mannerism",
                    4: "Baroque",
                    5: "Neoclassicism"
                },
                styleNames:{
                    0: "abstract",
                    1: "impressionism",
                    2: "realism",
                    3: "pop art",
                    4: "cubism",
                    5: "romanticism"
                }
            }
        };
    }

    render(){
        let artistName = this.state.buttonNames.artistNames[Math.floor(Math.random()*(Object.keys(this.state.buttonNames.artistNames).length - 1))]
        let subjectName = this.state.buttonNames.subjectNames[Math.floor(Math.random()*(Object.keys(this.state.buttonNames.subjectNames).length - 1))]
        let periodName = this.state.buttonNames.periodNames[Math.floor(Math.random()*(Object.keys(this.state.buttonNames.periodNames).length - 1))]
        let styleName = this.state.buttonNames.styleNames[Math.floor(Math.random()*(Object.keys(this.state.buttonNames.styleNames).length - 1))]
        
        return(
            <div>
                <div
                    onClick={e => this.props.onClick(`${artistName}`)}
                >
                    <Button
                        buttonText={artistName}
                        color=""
                    />
                </div>
                <div
                    onClick={e => this.props.onClick(`${subjectName}`)}
                >
                    <Button
                        buttonText={subjectName}
                        color=""
                    />
                </div>
                <div
                    onClick={e => this.props.onClick(`${periodName}`)}
                >
                    <Button
                        buttonText={periodName}
                        color=""
                    />
                </div>
                <div
                    onClick={e => this.props.onClick(`${styleName}`)}
                >
                    <Button
                        buttonText={styleName}
                        color=""
                    />
                </div>
            </div>
            
        )
    }
    
}

export default SearchButtons