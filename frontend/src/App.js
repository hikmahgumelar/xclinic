import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
this.state = {
  status : [],
};
}
  componentDidMount(){
    this.panggilAPI()
    .then(res => this.setState({ status: res.json()}))
    .catch(err => console.log('ada yang salah state tidak ada value'));
  }

  panggilAPI = async () => {
    const hasil = await fetch('/api/list');
    const body = await hasil.json();
    if(hasil.status !== 200)throw Error(body.message);
    return body;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.status.map(hasilnya => {
            return(
              <div>{hasilnya.nama}</div>

            )
          })
        }
        </p>
      </div>
    );
  }
}

export default App;
