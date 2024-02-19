// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Box {
    uint public val;

    constructor(uint _val) {
        val = _val;
    }
}