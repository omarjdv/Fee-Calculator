/**
 * Format amount of money using dot for thousands delimiter y comma for decimals
 * @param {number} amount
 * @param {number} decimals
 * @param {string} currencySymbol
 * @returns {string} - formatted string: $0.000.000,00
 */
export function formatMoney(amount = 0, decimals = 2, currencySymbol = '$') {
  if (Number.isNaN(amount) || !Number.isFinite(amount)) {
    return null;
  }
  const isNegative = Math.sign(amount) === -1;
  const absValue = Math.abs(amount);

  return `${isNegative ? '-' : ''}${currencySymbol}${absValue
    .toFixed(decimals)
    .replace(/\d(?=(\d{3})+\.)/g, '$&.')
    .replace(/\.(?=(\d{2})+$)/, ',')}`;
}
