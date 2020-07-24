
import React, { Component } from "react";
import "./index.css";

export default class StockData extends Component {
  constructor() {
    this.state = {
      data: null
    };
  }

  onHandleSubmit = () => {
    const date = document.getElementById('app-input').value;
    if (date != undefined || date != null) {
      const new_date = new Date('YYYY-MM-DD',date);

      fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${new_date}`)
      .then(response => response.json())
      .then(data => {
          if (data != undefined || data != null) {
            this.setState({ data })
          } else {
            document.getElementById('no-result') = "No Results";
          }
        });
    }
  }

  render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input"/>
          <button className="" id="submit-button" onClick={onHandleSubmit} data-testid="submit-button">Search</button>
        </section>
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
          <li className="py-10">Open - {this.state.data.open}</li>
          <li className="py-10">Close - {this.state.data.close}</li>
          <li className="py-10">High - {this.state.data.high}</li>
          <li className="py-10">Low - {this.state.data.low}</li>
        </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
      </div>
    );
  }
}
