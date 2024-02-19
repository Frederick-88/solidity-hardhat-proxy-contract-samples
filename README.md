# Solidity Proxy 01

This project demonstrates Proxy Upgradable Smart Contract Practices ( Both `TransparentUpgradeableProxy` & `UUPSUpgradeable` ).

## Sepolia Testnet URL =

A. Box Smart Contract `(TransparentUpgradeableProxy)`

1. Proxy Admin Contract = https://sepolia.etherscan.io/address/0xb69a585ad15008906fa054e594466d575f080f74#code
2. TransparentUpgradeableProxy Contract = https://sepolia.etherscan.io/address/0x6bb02093b7353C17Efd007e0E342Eef80323dc01#code
3. Box V2 Contract = https://sepolia.etherscan.io/address/0x53931c13033708875c26eaeb71fa901a43b08eb3#code
4. Box V3 Contract = https://sepolia.etherscan.io/address/0xa43ea0e675dc03e144c7a30298d75e55cfc88a8d#code
5. Box V4 Contract = https://sepolia.etherscan.io/address/0xd60aee8ba3a3f1f37e3a5e6458908bdd8b804064#code

B. Token Upgradable Smart Contract `(TransparentUpgradeableProxy)`

1. Proxy Admin Contract = https://sepolia.etherscan.io/address/0xfe33e2f2326f141b3fd7419344fcb93380c46b6f#code
2. TransparentUpgradeableProxy Contract = https://sepolia.etherscan.io/address/0x5558402c3b248f96e38c8e960683dcdd7d70ce50#code
3. Token V1 Contract = https://sepolia.etherscan.io/address/0x3c9ddaa3f1e76966113a92ae25371300df00e48e#code

C. UUPS Token Smart Contract `(Universal Upgradeable Proxy Standard - UUPS)`

1. ERC1967Proxy Contract = https://sepolia.etherscan.io/address/0x5c68C2A3750e25563936A4Fc2eC8c8640e928451#code
2. UUPSToken Contract = https://sepolia.etherscan.io/address/0x3deb945a9e08a099a3f9a81291e92b54daec4b11#code

D. Upgraded UUPS Child Token Smart Contract `(Universal Upgradeable Proxy Standard - UUPS)`

1. ERC1967Proxy Contract = https://sepolia.etherscan.io/address/0xfF91FE8B5a05B83940561F100e6eb526bc833C75#code
2. UUPSChildToken Contract = https://sepolia.etherscan.io/address/0x764d131432c219cbac0f31e4fa522f60addda720#code
3. UUPSChildToken V2 Contract = https://sepolia.etherscan.io/address/0x6353e44c10aa617577f6f2c073f9ca998c9227b7#code

## Personal Notes :

- ensure when you upgrade contract don't change the previous version variables.
- Need to ensure all deployed contracts verified, so you can have whole proxy contract successfully verified
- When you upgraded a proxy upgradable contract, ensure the new created contract version is verified. Then you go to your `TransparentUpgradeableProxy` contract > `is this a proxy?` again & verify
- difference between `TransparentUpgradeableProxy` contract with other contract is that it always have `is this a proxy?` button
- Verify example = `npx hardhat verify --network sepolia 0x45F63B9AE007b6604299125ED367b605A86bb93c`

===

## Source :

- generate SC basics = https://wizard.openzeppelin.com/#
- basic proxy upgradable contract = https://www.youtube.com/watch?v=JgSj7IiE4jA / https://www.youtube.com/watch?v=JRXd2_0b0Zk (same video)
- ERC20 proxy upgradable contract = https://www.youtube.com/watch?v=Vt20jCu8OC8
- UUPS = https://www.youtube.com/watch?v=tIHrNhr_OOQ
- deploying UUPS contract = https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades / https://github.com/wighawag/hardhat-deploy/issues/242#issuecomment-998790266
