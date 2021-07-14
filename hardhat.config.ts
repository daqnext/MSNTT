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
      url: `HTTP://127.0.0.1:8545`,
      //chainId: 1337,
      //accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
      accounts: [`0xc1291cf81e7e2ab7256c23cb8299689c80f8b2a432f039dab3f11222df03c6f4`], 
    },
    
  },
  
  namedAccounts: {
    deployer: 0,
  },

};
export default config;