import React from 'react';
import './App.css';
import axios from 'axios';

import UserCard from './components/UserCard';

const usersArray = [
  'christinebussingerdev',
  'robsalzberg',
  'TheeSweeney',
  'radelmann',
  'tetondan',
  'pjhyett'
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
      usersArray.map(user => {
        return(
          axios
          .get(`https://api.github.com/users/${user}`)
          .then(res => {
            this.setState(...this.state.users, res.data);
          })
          .catch(err => {
            console.log('axios call for other users failed:', err);
          })
        )
      })
    }

  render() {
    return (
      <div className="App">
        {this.state.users.map((passeduser, index) => {
          return (
            <UserCard key={index} user={passeduser} />
          )
        })
        }
      </div>
    );
  }
}

export default App;
