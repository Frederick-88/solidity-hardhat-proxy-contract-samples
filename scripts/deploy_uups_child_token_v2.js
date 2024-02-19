const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0xfF91FE8B5a05B83940561F100e6eb526bc833C75";

  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.provider.getBalance(deployer.address);
  console.log("=====");
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", accountBalance.toString());

  const getContract = await ethers.getContractFactory("UUPSChildTokenV2");
  const isDeployed = await upgrades.upgradeProxy(proxyAddress, getContract, {
    kind: "uups",
  });

  console.log("UUPSChildTokenV2 deployed: ", await isDeployed.getAddress());
  console.log("=====");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
