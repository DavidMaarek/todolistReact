import React from 'react';
import Items from './components/itemList'
import './App.css'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todoData: [],
            filter: '',
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.value === ''){
            //Afficher un message d'erreur
        } else{
            let item = {
                'label': this.state.value,
                'complete': false
            };
            this.setState({
                value: '',
                todoData: [...this.state.todoData, item]
            });
        }
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

          <form onSubmit={this.handleSubmit}>
              <label htmlFor="">Nom :</label>
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
              <input type="submit" value="Ajouter"/>
          </form>

          <Items items={filterData} />

          <p>Filtres:</p>
          <button onClick={() => this.filterAll()}>Tous</button>
          <button onClick={() => this.filterDone()}>Terminés</button>
          <button onClick={() => this.filterTodo()}>À faire</button>
      </div>
    );
  }
}

export default App;
