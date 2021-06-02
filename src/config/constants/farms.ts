import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ZOO',
    lpAddresses: {
      97: '',
      56: '0x67E73Fd637bcBDA6adFdaeC00f73E6A9D9c62437',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x67E73Fd637bcBDA6adFdaeC00f73E6A9D9c62437',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'ZOO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x59Cc012BD0c9d751EFD430aD8d563D62B452007C',   // lp address token-bnb
    },
    tokenSymbol: 'ZOO',
    tokenAddresses: {
      97: '',
      56: '0x67E73Fd637bcBDA6adFdaeC00f73E6A9D9c62437', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
