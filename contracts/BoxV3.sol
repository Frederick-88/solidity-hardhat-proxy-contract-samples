// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BoxV3 {
    uint public val;

    // note: second version of proxy upgradable contract aren't going to initialize anymore
    // function initialize(uint _val) external {
    //     val = _val;
    // }

    function inc() external {
        val += 1;
    }
}