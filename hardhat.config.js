require('@nomiclabs/hardhat-ethers')

require('./mock-deploy.js')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  paths: {
    sources: "core"
  },
  solidity: {
      version: '0.8.13',
      settings: {
          optimizer: {
          enabled: true,
          runs: 20000
      }
    }
  },
  networks: {
      hardhat: {
          forking: {
              url: process.env["RPC_URL"],
              blockNumber: 19060431,
              chainId: 1,
          },
          accounts: {
              accountsBalance: '1000000000000000000000000000000'
          }
      },
      arbitrum: {
        url: process.env["ARB_RPC_URL"],
        accounts: {
          mnemonic: process.env["ARB_MNEMONIC"]
        },
        chainId: 42161
      }
  }
};
