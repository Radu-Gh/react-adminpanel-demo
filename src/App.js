import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      showing: 'Show users',
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }


  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel - Proiectul 1</h1>
        <input type="button" name="users" value="Show users" onClick={(event) => this.show(event)} />
        <input type="button" name="posts" value="Show posts" onClick={(event) => this.show(event)} />
        <br/>
        <label htmlFor="background">Change the color of the background: </label>
        <input type="color" name="background" onChange={(event) => this.changeBackgroundColor(event)}/>

        <label htmlFor="textColor">Change the color of the text on this webpage: </label>
        <input type="color" name="textColor" onChange={(event) => this.changeColor(event)}/>

        <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>

        {this.state.showing === "Show users" 
        ? <UserList users={this.state.users} handleDelete={this.removeUser} /> 
        : null }

        {this.state.showing === "Show posts" 
        ? <PostList/> 
        : null }

      </div>
    );
  }

  removeUser = index => {
    let users = [...this.state.users];
    users.splice(index, 1);
    users.forEach( user => {
      if(user.id > index){
        user.id--;
      }
    } )
    this.setState({ 
      users: users
    })
    alert(`You just deleted the user with the ID: ${index+1}`);
  }
  
  show(event) {
    console.log(event);
    this.setState({showing: event.target.value})
  }

  changeBackgroundColor(event) {
    this.setState({background: event.target.value});
  }

  changeColor(event) {
    this.setState({color: event.target.value});
  }
}

export default App;