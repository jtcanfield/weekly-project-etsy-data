// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let avgPrice = 0;
  for (let i = 0; i < data.length; i++){
      avgPrice = avgPrice + data[i].price;
  }
  avgPrice = (avgPrice/data.length).toFixed(2);
  return console.log("The average price is $" + avgPrice);
}
// Rounding:
// you can use %.01
// avgPrice = avgPrice/data.length
// avgPrice = avgPrice - avgPrice%.01


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let arrayOfItems = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].price >= 14 && data[i].price <= 18){
      arrayOfItems.push(data[i].title)
    }
  }
  return console.log(arrayOfItems.join('\r\n'));
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let GBPItem = "";
  for (let i = 0; i < data.length; i++){
    if (data[i].currency_code === "GBP"){
      GBPItem += data[i].title + " costs " + data[i].price + " pounds."
    }
  }
  return console.log(GBPItem);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodItems = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].materials.includes('wood')){
      woodItems.push(data[i].title + " is made of wood")
    }
  }
  return console.log(woodItems.join('\r\n'));
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let manyMaterials = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].materials.length >= 8){
      manyMaterials.push(data[i].title + " has " + data[i].materials.length + " materials:")
      for (let x = 0; x < data[i].materials.length; x++)
      manyMaterials.push("-" + data[i].materials[x])
    }
  }
  return console.log(manyMaterials.join('\r\n'));
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let madePersonally = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i].who_made === "i_did"){
      madePersonally += 1;
    }
  }
  return console.log(madePersonally + " items were made by their sellers.");
}
