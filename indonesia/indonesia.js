const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";
const url_summaries = "https://api.kawalcorona.com/indonesia/";
const url_details = "https://api.kawalcorona.com/indonesia/provinsi/";

const vm = new Vue({
    el: '#app',
    data: {
      results: [],
      summaries: [],
      details: []
    },
    mounted() {
      axios.get(url).then(response => {
        this.results = response.data
      }),
      axios.get(url_summaries).then(response => {
        this.summaries = response.data
      }),
      axios.get(url_details).then(response => {
        this.details = response.data
      })
    }
});