const axios = require("axios");

function* getData() {
  yield axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

  yield axios.get("https://api.coindesk.com/v1/bpi/currentprice.json1");
}

const getDataIte = getData();

getDataIte.next().value.then((data) => console.log(data.data.bpi));
getDataIte
  .next()
  .value.then((data) => console.log(data.data.bpi))
  .catch((err) => console.log(err.message));
