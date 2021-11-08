// Business Logic

// pennies, nickle, dimes, quarters

export default function counter(amount){
  if (amount % 5 !== 0) {
    return (amount % 5) + " pennies";
  } 
}