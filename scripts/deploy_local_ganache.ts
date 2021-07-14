const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  const MSNTT = await hre.ethers.getContractFactory("MSNTT");
  const msntt = await MSNTT.deploy(100);
  
  await msntt.deployed();

  console.log("Greeter deployed to:", msntt.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
