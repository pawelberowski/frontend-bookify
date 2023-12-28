export function getPriceInPln(
  priceInEur: string | number,
  exchangeRate: number,
) {
  return (Number(priceInEur) * exchangeRate).toFixed(0);
}
