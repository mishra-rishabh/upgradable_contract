// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4 ;

contract Square {
  uint256 private _side ;

  // Emitted when the stored value changes
  event ValueChanged( uint256 value ) ;

  // Stores a new side in the contract
  function storeSide( uint256 side ) public {
    _side = side ;
    emit ValueChanged( side ) ;
  }

  // Reads the last stored area
  function retrieveArea() public view returns ( uint256 ) {
    uint256 area = _side * _side ;
    return area ;
  }
}