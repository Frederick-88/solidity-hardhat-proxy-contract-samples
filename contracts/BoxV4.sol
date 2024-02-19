// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract BoxV4 is Initializable {
    uint public val;

    function initialize(uint _val) external initializer() {
        val = _val;
    }

    function increment() external {
        val += 1;
    }
}