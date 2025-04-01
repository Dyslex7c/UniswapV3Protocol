import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.7.6",
  networks: {
    base_sepolia: {
      url: process.env.BASE_SEPOLIA_ENDPOINT as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
