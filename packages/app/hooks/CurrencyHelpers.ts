const SATOSHIS_IN_BITCOIN = 100_000_000

/**
 * Converts an amount in Satoshi (SAT) to Bitcoin (BTC).
 *
 * @param satoshis - The amount in Satoshi.
 * @returns The equivalent amount in Bitcoin.
 */
export function satToBtc(satoshis: number): number {
  return satoshis / SATOSHIS_IN_BITCOIN
}

/**
 * Converts an amount in Bitcoin (BTC) to Satoshi (SAT).
 *
 * @param bitcoin - The amount in Bitcoin.
 * @returns The equivalent amount in Satoshi.
 */
export function btcToSat(bitcoin: number): number {
  return bitcoin * SATOSHIS_IN_BITCOIN
}
