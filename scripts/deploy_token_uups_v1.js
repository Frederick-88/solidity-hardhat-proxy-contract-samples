const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.provider.getBalance(deployer.address);
  console.log("=====");
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", accountBalance.toString());

  const getContract = await ethers.getContractFactory("UUPSToken");
  const isDeployed = await upgrades.deployProxy(getContract, { kind: "uups" });

  console.log("UUPSToken deployed: ", await isDeployed.getAddress());
  console.log("=====");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
