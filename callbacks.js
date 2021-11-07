const axios = require("axios");

function getBitcoinInfor(url, callback) {
  axios
    .get(url)
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

getBitcoinInfor(
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  function (rslt) {
    console.log(rslt.data.bpi);
  }
);
