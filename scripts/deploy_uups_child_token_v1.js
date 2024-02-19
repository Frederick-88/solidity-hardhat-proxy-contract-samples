const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.provider.getBalance(deployer.address);
  console.log("=====");
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", accountBalance.toString());

  const getContract = await ethers.getContractFactory("UUPSChildTokenV1");
  const isDeployed = await upgrades.deployProxy(
    getContract,
    ["0xF4e85aa37036AdB5bAc40cb69aB0Bf5F25E2c646"], // can also use this https://web3-tools.netlify.app/ to format address
    { kind: "uups" }
  );

  console.log("UUPSChildTokenV1 deployed: ", await isDeployed.getAddress());
  console.log("=====");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
