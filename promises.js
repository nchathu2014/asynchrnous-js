const axios = require("axios");

function getBitCoinData(url) {
  return new Promise((resolve, reject) => {
    return axios
      .get(url)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

getBitCoinData("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((data) => console.log(data.data.bpi))
  .catch((err) => console.log(err.message));
