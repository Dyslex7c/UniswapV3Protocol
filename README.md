# UniswapV3Protocol

SingleSwap is used for performing token swaps on Uniswap V3 between WETH and LINK tokens on the sepolia testnet (currently, there is no official swapRouter address for Ethereum Sepolia).

This contract implements two primary swap functions using Uniswap V3's SwapRouter:

1. **Exact Input Swap** - Swap a fixed amount of WETH for the maximum possible amount of LINK
2. **Exact Output Swap** - Swap the minimum necessary amount of WETH to receive a fixed amount of LINK

The contract is configured to use the 0.3% fee tier pool for these swaps.

## Setup and Usage

1. Deploy the contract, providing the address of Uniswap V3's SwapRouter as a constructor parameter

```bash
npx hardhat run --network sepolia scripts/deploySingleSwap.ts
```

You can also configure deployment by using a different network or tokens.

2. Send a decent amount of WETH tokens to the contract address
3. Call either swap function depending on your needs

## Security Notes

- The contract uses a minimum output amount of 0 for simplicity.
- No slippage protection is implemented (`sqrtPriceLimitX96` is set to 0).