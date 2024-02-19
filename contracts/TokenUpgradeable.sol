//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract TokenUpgradeable is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    function initialize() external initializer {
        __ERC20_init("TestToken", "TT");
        __Ownable_init(msg.sender);
    }

    function mint(address to, uint amount) external onlyOwner {
        _mint(to, amount);
    }
}