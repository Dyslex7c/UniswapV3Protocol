import hre from "hardhat";

async function main() {
  console.log("Deployment in progress");
  const SingleSwap = await hre.ethers.getContractFactory("SingleSwap");
  const singleSwap = await SingleSwap.deploy("0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4");

  const contractAddress = await singleSwap.getAddress();

  console.log("Single Swap contract deployed at:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});