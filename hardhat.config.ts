import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.0',
  },
  paths: {
    sources:   'contracts',
    artifacts: 'hardhatbuild',
  },

  networks: {
    ganache: {
      url: `HTTP://127.0.0.1:5845`,
      //chainId: 1337,
      //accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
      accounts: [`0xb5235cdadb8a5d7ef3e0bdb6a97355d93b8a78cdbe54a49dd6f5a765fc1ea776`], 
    },
    
  },

  namedAccounts: {
    deployer: 0,
  },



};
export default config;