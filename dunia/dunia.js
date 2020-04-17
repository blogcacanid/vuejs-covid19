const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";
const url_sumConfirmed = "https://api.kawalcorona.com/positif/";
const url_sumRecovered = "https://api.kawalcorona.com/sembuh/";
const url_sumDeaths = "https://api.kawalcorona.com/meninggal/";
const url_details = "https://api.kawalcorona.com/";

const vm = new Vue({
    el: '#app',
    data: {
      results: [],
      sumConfirmed: [],
      sumRecovered: [],
      sumDeaths: [],
      details: []
    },
    mounted() {
      axios.get(url).then(response => {
        this.results = response.data
      }),
      axios.get(url_sumConfirmed).then(response => {
        this.sumConfirmed = response.data
      }),
      axios.get(url_sumRecovered).then(response => {
        this.sumRecovered = response.data
      }),
      axios.get(url_sumDeaths).then(response => {
        this.sumDeaths = response.data
      }),
      axios.get(url_details).then(response => {
        this.details = response.data
      })
    }
});