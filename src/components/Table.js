import React, { Component } from 'react';

var data = [{name:'Jhon', age:28, city:'HO'},
            {name:'Onhj', age:82, city:'HN'},
            {name:'Nohj', age:41, city:'IT'}
           ];
class Table extends Component {
    render() {
        return (
            <div>
                    {data.map((row, i) => {
                        return <div key={i} >row.name</div>;
                    })}
            </div>
        );
    }
}

export default Table;