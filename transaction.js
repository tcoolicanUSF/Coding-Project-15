//Coding Project #15
//Task 3: Create the Transaction Module
import {assetArray, getAssetById} from "./asset.js";

export class Transaction {
    constructor(assetId, type, quantity) {
    this.assetId = assetId
    this.type = type 
    this.quantity = quantity
}
updateAssetQuantity() {
const asset = getAssetById(this.assetId)
if (!asset) {
    throw new Error('Asset does not exist')
    }
if (this.type === 'buy') {
        asset.quantity += this.quantity
    return `${this.quantity} of ${asset.name} purchased. New quantity: ${asset.quantity}`
    }
else if (this.type === 'sell') {
if (asset.quantity < this.quantity) {
    throw new Error(`Not enough quantity available to complete the sale of ${asset.name}`);
    }  
    asset.quantity -= this.quantity
    return `${this.quantity} of ${asset.name} sold. New quantity: ${asset.quantity}`
    }
else {
    throw new Error (`Invalid Transaction: type must be either 'buy' or 'sell'`)
}}}
