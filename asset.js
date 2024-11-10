//Coding Project #15
//Task 1: Create the Asset Module
export const assetArray = [
    { 
        id: 1,
        name: "Riddell",
        type: "stock",
        price: 250,
        quantity: 400
    },

    {
        id: 2,
        name: "Schutt",
        type: "bond",
        price: 150,
        quantity: 250
    }]

export function getAssetById(assetId) {
    const assetWanted = assetArray.find(asset => assetId === asset.id)
    if (assetWanted) {
        return assetWanted
    } else {
        return null
    }      }
