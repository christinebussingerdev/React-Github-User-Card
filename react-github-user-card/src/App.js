import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myUserCard: "",
      users: ""
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/christinebussingerdev')
      .then(res => {
        this.setState(...this.state.myUserCard, res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('axios call for my user card failed:', err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
