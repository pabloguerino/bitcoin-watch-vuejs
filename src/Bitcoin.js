import axios from 'axios';
export const API_URL = 'https://api.coindesk.com/v1/bpi';

export default class Bitcoin {
  static fetchPrice(callback) {
    return axios.get(API_URL + '/currentprice.json')
      .then(response => {
        callback(Math.round(response.data.bpi.USD.rate_float * 100) / 100);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static fetchHistory(callback) {
    return axios.get(API_URL + '/historical/close.json')
      .then(response => {
        callback(response.data.bpi);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
