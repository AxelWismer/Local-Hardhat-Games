// replace the name of the contract with which one you want to deploy!
// How to take an input from console in js?
const reader = require('readline-sync');


async function main() {
  const selection = reader.question('Select a game (From 1 to 5):')
  if (!["1", "2", "3", "4", "5"].includes(selection)) {throw "The input must be a number from 1 to 5"}
  const contractName = "Game" + selection;
  
  const Game = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const game = await Game.deploy();
  console.log(`${contractName} deployed to address: ${game.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });