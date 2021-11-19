require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const INFURA_URL = process.env.INFURA_URL
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby:{
      url: INFURA_URL,
      accounts: [
        ACCOUNT_PRIVATE_KEY
      ]
    }
  }
};
