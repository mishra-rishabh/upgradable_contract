async function upgradeContract() {
  const SquareV2 = await ethers.getContractFactory( "SquareV2" ) ;
  let square = await upgrades.upgradeProxy( "0xe16f4926c94cA94Fe349b9E4BF6Da842788A3Bd9" , SquareV2 ) ;
  console.log( "Upgraded Proxy done!" , square.address ) ;

}

upgradeContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});