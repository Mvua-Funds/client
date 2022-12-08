export const APP_NAME = 'Shift a Life';
export const SEPARATOR = ' | ';
export const APP_SEP = APP_NAME + SEPARATOR;

export const CONTRACT = "mvua.testnet"

export const CONTRACT_TOKEN_VIEW_METHODS = []

export const CONTRACT_VIEW_METHODS = [].concat(CONTRACT_TOKEN_VIEW_METHODS);

export const CONTRACT_TOKEN_CHANGE_METHODS = []

export const CONTRACT_CHANGE_METHODS = [].concat(CONTRACT_TOKEN_CHANGE_METHODS);


export const WHITELISTEDTOKENS = ['usdn.testnet', 'usdt.testnet', 'wrap.testnet', 'dai.fakes.testnet']
export const WHITELISTEDTOKENS_ = [
  {
    name: 'USN',
    symbol: 'USN',
    decimals: 18,
    address: "usdn.testnet",
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    decimals: 6,
    address: "usdt.testnet",
  },
  {
    name: 'WRAPPED NEAR',
    symbol: 'WRAPPED NEAR',
    decimals: 24,
    address: "wrap.testnet",
  },
  {
    name: 'DAI',
    symbol: 'DAI',
    decimals: 18,
    address: "dai.fakes.testnet",
  }
]

export const TOKEN_DETAILS = {
  'usdn.testnet': {
    name: 'USN',
    symbol: 'USN',
    decimals: 18,
    address: "usdn.testnet",
  },
  'usdt.testnet': {
    name: 'USDT',
    symbol: 'USDT',
    decimals: 6,
    address: "usdt.testnet",
  },
  'wrap.testnet': {
    name: 'WRAPPED NEAR',
    symbol: 'WRAPPED NEAR',
    decimals: 24,
    address: "wrap.testnet",
  },
  'dai.fakes.testnet': {
    name: 'DAI',
    symbol: 'DAI',
    decimals: 18,
    address: "dai.fakes.testnet",
  }
}


export const NEAR_OBJECT = { name: 'Near', symbol: 'NEAR', address: 'near', icon: "https://assets.coingecko.com/coins/images/10365/small/near_icon.png?1601359077", decimals: 24 }
