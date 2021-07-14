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
      url: `HTTP://127.0.0.1:7545`,
      chainId: 1337,
      //accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
      accounts: [`0x4eb6d8ba60b93477f7a47dd5af76b7088b2618e9a5302de8a84edc3c29fd6ba1`], 
    },
    
  },
  
  namedAccounts: {
    deployer: 0,
  },

};
export default config;