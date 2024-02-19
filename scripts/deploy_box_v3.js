const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0x6bb02093b7353C17Efd007e0E342Eef80323dc01";

  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.provider.getBalance(deployer.address);
  console.log("=====");
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", accountBalance.toString());

  const getContract = await ethers.getContractFactory("BoxV3");
  const isDeployed = await upgrades.upgradeProxy(proxyAddress, getContract);

  console.log("Upgraded to BoxV3: ", await isDeployed.getAddress());
  console.log("=====");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
