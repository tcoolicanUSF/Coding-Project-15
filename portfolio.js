//Coding Project #15
//Task 2: Create the Portfolio Module
import { assetArray, getAssetById } from "./asset.js";
//Export
export function calculatePortfolioValue(){
    const totalAssetValue = assetArray.reduce((total, asset) => {
    return total + (asset.price * asset.quantity)
    }, 0)
return totalAssetValue}

export function getPortfolioAllocation() {
const totalValue = assetArray.reduce((total, asset) => {
    return total + (asset.price * asset.quantity)
      }, 0)

 return assetArray.map(asset => {
    const assetValue = asset.price * asset.quantity
    const pctAllocation = ((assetValue / totalValue) * 100).toFixed(2)
return  `${asset.name}, ${asset.type}, ${pctAllocation}%`  
}).join(', ')}
