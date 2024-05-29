/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let NFTS=[];
function mintNFT (name, colour,owner,dateofcreation) {
     let nft={
      'name':name,
      'colour':colour,
      'owner':owner,
      'date_of_creation':dateofcreation,
     }
     NFTS.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i=0;i<NFTS.length;i++){
      console.log("Displaying "+(i+1)+"th minted NFT");
      console.log("Name of nft :"+NFTS[i].name);
      console.log("Colour of nft :"+NFTS[i].colour);
      console.log("Owner of nft :"+NFTS[i].owner);
      console.log("Date of Creation of nft :"+NFTS[i].date_of_creation);
      console.log("\n");
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFTs Minted are: "+NFTS.length);
}

// call your functions below this line
mintNFT('Warner','Red','Riya','12th May');
mintNFT('Adam','Blue','Utkarsh','14th Feb');
mintNFT('Pack','Orange','Vineet','20th April');
mintNFT('Bigt','Black','Nitya','7th April');
mintNFT('Digi','Green','Rajat','18th June');

listNFTs();
getTotalSupply();



