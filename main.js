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

//HTML addition
let div1 = document.getElementById("portfolio-value")
div1.textContent = `Portfolio Value: $${portfolioValue}`

let div2 = document.getElementById("portfolio-allocation")
div2.textContent = `Portfolio Allocation: ${portfolioAllocation}`

let p1 = document.getElementById("transaction1")
p1.textContent = transaction1.updateAssetQuantity()

let p2 = document.getElementById("transaction2")
p2.textContent = transaction2.updateAssetQuantity()

let p3 = document.getElementById("transaction3")
p3.textContent = transaction3.updateAssetQuantity()

let p4 = document.getElementById("transaction4")
p4.textContent = transaction4.updateAssetQuantity()
