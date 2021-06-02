import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'ZOO',
    tokenAddress: '0x67E73Fd637bcBDA6adFdaeC00f73E6A9D9c62437',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x67E73Fd637bcBDA6adFdaeC00f73E6A9D9c62437',  // token address
    contractAddress: {
      97: '',
      56: '0xc15eD3B429424d9f30Ed61D064cE75a5e088E338',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
