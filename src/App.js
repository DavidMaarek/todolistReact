import React from 'react';
import Items from './components/itemList'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todoData: []
        };
    }

    getData(){
        fetch('https://api.myjson.com/bins/9l2ez')
            .then(function(response){
                console.log(response);
                return response.json();
            })
            .then(response => {
                this.setState({
                    todoData: response
                });
                console.log(this.state.todoData.todos);
            })
    }

    componentWillMount(){
        this.getData();
    }

  render() {
    return (
      <div>
          <p>Fetch API</p>
          <Items items={this.state.todoData.todos} />
      </div>
    );
  }
}

export default App;
