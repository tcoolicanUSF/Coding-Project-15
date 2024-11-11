//Coding Project #15
//Task 4: Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

let totalPortfolioValue = calculatePortfolioValue();
let portfolioDistribution = getPortfolioAllocation();

const transaction1 = new Transaction(1, 'buy', 70);
transaction1.updateQuantity();

const transaction2 = new Transaction(2, 'buy', 60);
transaction2.updateQuantity();

const transaction3 = new Transaction(1, 'sell', 200);
transaction3.updateQuantity();

const transaction4 = new Transaction(2, 'sell', 150);
transaction4.updateQuantity();

console.log(`Portfolio Total Value: $${totalPortfolioValue}`);
console.log(`Portfolio Distribution: ${portfolioDistribution}`);

document.getElementById("portfolio-value").textContent = `Portfolio Value: $${totalPortfolioValue}`;
document.getElementById("portfolio-allocation").textContent = `Portfolio Allocation: ${portfolioDistribution}`;

document.getElementById("transaction1").textContent = `Transaction 1 updated quantity: ${transaction1.updateQuantity()}`;
document.getElementById("transaction2").textContent = `Transaction 2 updated quantity: ${transaction2.updateQuantity()}`;
document.getElementById("transaction3").textContent = `Transaction 3 updated quantity: ${transaction3.updateQuantity()}`;
document.getElementById("transaction4").textContent = `Transaction 4 updated quantity: ${transaction4.updateQuantity()}`;
