import './App.css';
import React from 'react';
import axios from 'axios';


export class App extends React.Component {
  state = {
    btcPprice: {}
  }
  componentDidMount() {
    axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=NVFT11VSGYOKN6QW`)
      .then(res => {
        let price = Math.round(res.data['Realtime Currency Exchange Rate']['5. Exchange Rate']).toLocaleString();
        let btcPprice = {'price': price};
        this.setState({ btcPprice });
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
          <p>USD ${this.state.btcPprice.price}</p>
          <p className="App-date">{this.getToday()}</p>
        </div>
        
      </div>
    )
  }
}

export default App;
