require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

const {
  ALCHEMY_API_KEY,
  METAMASK_PRIVATE_KEY,
  SEED_PHRASE,
  ETHERSCAN_API_KEY,
  REPORT_GAS,
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY],
    },
  },

  solidity: "0.8.24",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: REPORT_GAS === "true" ? true : false,
    currency: "USD",
    gasPrice: 100,
  },
};
