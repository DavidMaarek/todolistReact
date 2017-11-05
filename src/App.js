import React from 'react';
import Items from './components/itemList'
import './App.css'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todoData: [],
            filter: '',
        };
    }

    getData(){
        fetch('https://api.myjson.com/bins/9l2ez')
            .then(function(response){
                return response.json();
            })
            .then(response => {
                this.setState({
                    todoData: response.todos
                });
            })
    }


    filterAll(){
        this.setState({ filter: ''});
    }

    filterDone(){
        this.setState({ filter: true});
    }

    filterTodo(){
        this.setState({ filter: false});
    }

    componentWillMount(){
        this.getData();
    }

  render() {
      let filterData = this.state.todoData;
      if (this.state.filter !== '') {
          filterData = this.state.todoData.filter((item) => item.complete === this.state.filter );
      }
    return (
      <div>
          <p>TodoList React.js</p>
          <Items items={filterData} />
          <br/>
          <p>Filtres:</p>
          <button onClick={() => this.filterAll()}>Tous</button>
          <button onClick={() => this.filterDone()}>Terminés</button>
          <button onClick={() => this.filterTodo()}>À faire</button>
      </div>
    );
  }
}

export default App;
