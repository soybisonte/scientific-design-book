import axios from 'axios';

export default class InfoIP {
  constructor() {
    this.ipdata = 'xx.xx.xx.xx';
  }
  getIp() {
    axios.get('https://jsonip.com/').then((response) => {
      this.ipdata = response.data;
    });
  }
}
