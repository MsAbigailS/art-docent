import React from "react";

class SlidingBar extends React.Component {
    slider = React.createRef();

    state = {
        timeInputValue: "0",
        timeInput: {
            0: "5 minutes",
            1: "10 minutes",
            2: "15 minutes",
            3: "25 minutes",
            4: "30 minutes",
            5: "60 minutes"
        },
        indexOutput: {
            trial1: {
            0: "10",
            1: "15",
            2: "20",
            3: "25",
            4: "35",
            5: "40"
            }
        }
        };

    componentDidMount() {
        this.slider.current.setAttribute("min", 0);
        this.slider.current.setAttribute(
            "max",
            Object.keys(this.state.timeInput).length - 1
        );
    }

    handleTimeSlide = e => {
        this.setState({ timeInputValue: e.target.value });
    };

    getIndexData = (obj, pos) => {
        return (obj, pos) !== undefined
          ? obj[this.state.timeInputValue][pos]
          : obj[this.state.timeInputValue];
    };

  render() {
    return (
        <div className="container">
            <div className="slider-and-values">
                <label className="form-slider">
                    <span>How many users do you have?</span>
                        <input 
                            type="range" 
                            defaultValue={this.state.timeInputValue} 
                            ref={this.slider}
                            onChange={this.handleTimeSlide}
                        />
                </label>
                <div className="user-time-input-value">
                    {this.getIndexData(this.state.timeInput)}
                </div>
            </div>

        <button 
            name={this.getIndexData(this.state.indexOutput.trial1)}
            onClick={e => this.props.onClick(e.target.name)}
        >
            Enter
        </button>
      </div>
    );
  }
}

export default SlidingBar;