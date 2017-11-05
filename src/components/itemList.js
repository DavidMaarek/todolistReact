import React from 'react';

class Items extends React.Component{

    doneOrNot(i) {
        this.props.items[i].complete = !this.props.items[i].complete;
        this.setState({
            items: this.props.items
        });

    }

    render(){
        const list = this.props.items.map((item, i) => (
            <li onClick={() => this.doneOrNot(i)} className={(item.complete ? 'done' : '')} key={i}>
                {item.label}
            </li>
        ));
        return (
            <ul>{list}</ul>
        )
    }
}

export default Items;