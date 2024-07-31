require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "37....";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.9",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
