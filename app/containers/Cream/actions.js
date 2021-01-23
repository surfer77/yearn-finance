/**
 * Placeholders for API data loading
 */
// import { CREAM_DATA_LOADED } from './constants';
// export function creamDataLoaded(payload) {
//   return {
//     type: CREAM_DATA_LOADED,
//     payload,
//   };
// }

import { CREAM_ENTER_MARKETS, INITIALIZE_CREAM } from './constants';

export function initializeCream() {
  return {
    type: INITIALIZE_CREAM,
  };
}

export function creamEnterMarkets({
  tokenContract,
  tokenContractAddress,
  creamCTokenAddress,
  creamComptrollerContract,
}) {
  return {
    type: CREAM_ENTER_MARKETS,
    tokenContract,
    tokenContractAddress,
    creamCTokenAddress,
    creamComptrollerContract,
  };
}
