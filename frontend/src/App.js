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
//set header
    const opsi = {
  methode: 'GET',
  headers: {
    'rahasia': 'xcidic'

  }
}
  ///ambil API
  const ambildata = async () => {

      //const baseURI = 'http://wahidganteng.ga/process/api/ca7a091d7a53bb8df780b1bb2d3450cb/cek-resi';
      const baseURI = '/api/list';
      const results = await fetch(baseURI, opsi)
      const hasil = await results.json();
      console.log(hasil);
     this.setState({status : hasil})

   }
 ambildata();
 }

//   panggilAPI = async (req, res) => {
//     fetch('/api/list',opsi)
//     .then(response => response.json())
//     .then(data => this.setState({ status: data }))
//     .catch(err => console.log('ada yang salah state tidak ada value'));
//
//     // if(hasil.status !== 200)throw Error(body.message);
//     // return body;
// };

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
