const { expect } = require("chai");
import { solidity } from "ethereum-waffle" ;
const { ethers , upgrades } = require("hardhat") ;
// const { upgrades } = require( "@openzeppelin/hardhat-upgrades" ) ;

// chai.use( solidity ) ;

let Square: any , square: any ;

describe( "Square (proxy)" , function () {
  this.beforeEach( async function() {
    Square = await ethers.getContractFactory( "Square" ) ;
    square = await upgrades.deployProxy( Square , [ 5 ] , { initializer: 'storeSide' } ) ;
    await square.deployed() ;
    console.log( "Contract Deployed!" , square.address ) ;
  } )

  // test case
  it( "retrieveArea should return the previously calculated area" , async function() {
    // test if the returned value is correct or not
    expect( ( await square.retrieveArea() ).toString() ).to.equal( '25' ) ;
  } )
} )

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
