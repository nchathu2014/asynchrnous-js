const axios = require("axios");

/* function getBitCoinData(url) {
  return new Promise((resolve, reject) => {
    return axios
      .get(url)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

async function getDataAync() {
  try {
    const data = await getBitCoinData(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

getDataAync().then((data) => console.log(data.data.bpi)); */

async function getData() {
  try {
    const data = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const result = data.data.bpi;
    return result;
  } catch (err) {}
}

getData().then((data) => console.log(data));
