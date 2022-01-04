import {BigNumber as BN} from 'ethers';
const { ethers, upgrades } = require("hardhat");


export async function deployWithProxyContract(contractName: string , accountHolder: string, initialSupply : string){
    console.log("Starting to deploy to contract")
    const Square = await ethers.getContractFactory(contractName);
    const square = await upgrades.deployProxy(Square, [accountHolder, initialSupply],  { kind: 'uups' });
    await square.deployed();
    console.log("Deployment Completed")
    return square;
  }

  // for this project, kindly ignore this helper.ts file