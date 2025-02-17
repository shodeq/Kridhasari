/**
 * Currency types supported by the converter
 * @typedef {'IDR' | 'USD' | 'EUR' | 'JPY' | 'CNY'} CurrencyType
 */

/**
 * Options for currency formatting
 * @typedef {Object} CurrencyOptions
 * @property {CurrencyType} [type='IDR'] - Type of currency
 * @property {boolean} [withSymbol=true] - Whether to include currency symbol
 * @property {boolean} [withDecimal=false] - Whether to include decimal places
 * @property {number} [decimalDigits=0] - Number of decimal places
 * @property {boolean} [compact=false] - Whether to use compact notation for large numbers
 */

/**
 * Formats a number into currency format
 * @param {string|number} amount - Amount to format
 * @param {CurrencyOptions} [options={}] - Formatting options
 * @returns {string} Formatted currency string
 */
export const convertCurrency = (amount, options = {}) => {
    const {
      type = "IDR",
      withSymbol = true,
      withDecimal = false,
      decimalDigits = 0,
      compact = false,
    } = options;
  
    try {
      // Convert input to number
      let value = typeof amount === "string"
        ? parseFloat(amount.replace(/[^\d.-]/g, ""))
        : amount;
  
      // Validation
      if (isNaN(value)) {
        throw new Error("Invalid number input");
      }
  
      // Currency configuration
      const currencyConfig = {
        IDR: { symbol: "Rp", position: "front" },
        USD: { symbol: "$", position: "front" },
        EUR: { symbol: "€", position: "front" },
        JPY: { symbol: "¥", position: "front" },
        CNY: { symbol: "¥", position: "front" },
      };
  
      // Format number according to options
      let formattedNumber;
      if (compact && Math.abs(value) >= 1000) {
        // Compact format for large numbers
        const tiers = [
          { threshold: 1e12, suffix: "T" },
          { threshold: 1e9, suffix: "B" },
          { threshold: 1e6, suffix: "M" },
          { threshold: 1e3, suffix: "K" },
        ];
        const tier = tiers.find((t) => Math.abs(value) >= t.threshold);
        
        if (tier) {
          value = value / tier.threshold;
          formattedNumber = value.toFixed(1) + tier.suffix;
        } else {
          formattedNumber = value.toFixed(decimalDigits);
        }
      } else {
        // Normal format
        formattedNumber = withDecimal
          ? value.toFixed(decimalDigits)
          : Math.round(value).toString();
        // Add thousand separators
        formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  
      // Add currency symbol if requested
      if (withSymbol) {
        const { symbol, position } = currencyConfig[type];
        return position === "front"
          ? `${symbol} ${formattedNumber}`
          : `${formattedNumber} ${symbol}`;
      }
  
      return formattedNumber;
    } catch (error) {
      console.error("Error formatting currency:", error);
      return "Invalid amount";
    }
  };
  
  // Usage examples:
  const amount = 1234567.89;
  
  // Basic format
  console.log(convertCurrency(amount)); // "Rp 1,234,568"
  console.log(convertCurrency(amount, { type: "USD" })); // "$ 1,234,568"
  
  // With decimal
  console.log(convertCurrency(amount, {
    withDecimal: true,
    decimalDigits: 2,
  })); // "Rp 1,234,567.89"
  
  // Compact format
  console.log(convertCurrency(amount, {
    compact: true,
  })); // "Rp 1.2M"
  
  // Without symbol
  console.log(convertCurrency(amount, {
    withSymbol: false,
  })); // "1,234,568"
  
  // Combined options
  console.log(convertCurrency(amount, {
    type: "EUR",
    withDecimal: true,
    decimalDigits: 2,
    compact: false,
  })); // "€ 1,234,567.89"
  
  // With string input
  console.log(convertCurrency("1234567.89")); // "Rp 1,234,568"
  console.log(convertCurrency("1,234,567.89")); // "Rp 1,234,568"