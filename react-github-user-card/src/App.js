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
      users: [],
      followers: []
    }
  }

  componentDidMount() {
        return(
          axios
          .get(`https://api.github.com/users/christinebussingerdev`)
          .then(res => {
            console.log(res.data)
            this.setState({users: res.data});
          })
          .catch(err => {
            console.log('axios call for other users failed:', err);
          }),

          axios.get('https://api.github.com/users/christinebussingerdev/followers')
          .then(res => {
            this.setState({followers: res.data})
            console.log(res.data)
          })
        )
    }

  render() {
    return (
      <div className="App">
          return (
            <UserCard user={this.state.users} />
            {this.state.followers.map(follower => {
              return (
                <UserCard user={follower} />
              )
            })}
          )
        )
        </div>
      
    );
  }
}

export default App;
