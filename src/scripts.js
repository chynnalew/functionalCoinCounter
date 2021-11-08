// Business Logic

// pennies, nickle, dimes, quarters

export default function counter(amount) {
  if (isNaN(amount)) {
    return "not a number";
  }
  if (amount <= 0) {
    return "";
  }
  if (amount >= .25) {
    return (Math.floor(amount / .25) + " quarters ").concat(counter((amount % .25).toFixed(2)));
  }
  if (amount >= .10) {
    return (Math.floor(amount / .10) + " dimes ").concat(counter(amount % .10));
  }
  if (amount >= .05) {
    return (Math.floor(amount / .05) + " nickles ").concat(counter(amount % .05));
  }
  return Math.round((amount * 100)) + " pennies";
}