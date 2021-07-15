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
      accounts: [`0xd43e9799bdbc27213141f33bf27b449ba5f92cc2066711e97ecada2ccd45d486`], 
    },
    
  },
  
  namedAccounts: {
    deployer: 0,
  },

};
export default config;