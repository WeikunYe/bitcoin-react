import './App.css';
import React from 'react';
import axios from 'axios';


export class App extends React.Component {
  state = {
    btc_info: {}
  }
  componentDidMount() {
    axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=NVFT11VSGYOKN6QW`)
      .then(res => {
        const btc_info = res.data['Realtime Currency Exchange Rate'];
        console.log(btc_info);
        this.setState({ btc_info });
      })
  }
  getToday(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <p>
            Bitcoin
          </p>
          <p>USD ${Math.round(this.state.btc_info['5. Exchange Rate']).toLocaleString()}</p>
          <p className="App-date">{this.getToday()}</p>
        </div>
        
      </div>
    )
  }
}

export default App;
