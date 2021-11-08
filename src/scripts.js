// Business Logic

// pennies, nickle, dimes, quarters

export default function counter(amount) {
  if (amount >= .25) {
    return Math.floor(amount / .25) + " quarters";
  } else if (amount % .05 !== 0) {
    return (amount % .05) * 100 + " pennies";
  } 
}