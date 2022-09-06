import React, { Component } from 'react';

class Select extends Component {

    constructor() {
        super();

        this.state={
           flower1: "Rose",
           flower2: "Dalia",
           flower3: "Sunflower",
           flower4: "Lilly",
           show: " ",
           default: "Lilly"
        };
    }

    onChangeHandler=(event) =>{
      let selectedValue = event.target.value;
      this.setState({ show: selectedValue, default: selectedValue});
    }


    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.default}>
                    <option>{this.state.flower1}</option>
                    <option>{this.state.flower2}</option>
                    <option>{this.state.flower3}</option>
                    <option>{this.state.flower4}</option>
                </select>
            </div>
        );
    }
}

export default Select;