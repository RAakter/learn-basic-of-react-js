import React, { Component } from 'react';

class List extends Component {

    getData=(data)=>{
        // return <li>{data}</li>
        return <li>{data * 10}</li>
    };

    render() {
        // const countries = ["Bangladesh", "India", "United States", "Canada", "France", "Germany"];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const items = numbers.map(this.getData);
        return (
            <div>
                <p>Country Name</p>
                {items}
            </div>
        );
    }
}

export default List;