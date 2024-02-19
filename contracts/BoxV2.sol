// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BoxV2 {
    uint public val;

    // note: proxy upgradable contract doesn't work well with "constructor" section
    // constructor(uint _val) {
    //     val = _val;
    // }

    function initialize(uint _val) external {
        val = _val;
    }
}