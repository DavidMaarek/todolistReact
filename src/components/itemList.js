import React from 'react';

class Items extends React.Component{

    render(){
        const todos = this.props.items.map((item, i) => (
            <li className={item.complete} key={i}>
                {item.label}
            </li>
        ));
        return (
            <ul>{todos}</ul>
        )
    }
}

export default Items;