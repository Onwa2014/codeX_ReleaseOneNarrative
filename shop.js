/*
var AnotherProducts = require("./most_popular_product");

var anotherProducts = new AnotherProducts({itemMap : 'numberSold', itemMap : 'mostPopularProduct'});

console.log(anotherProducts.groupByItemsSold());
console.log(anotherProducts.mostPopularPrd());
*/
 var fs = require('fs');
 var Products = require("./products");

var products = new Products();

var productList = products.readProductsFromFile('Nelisa Sales History.csv');


var productGroup = products.groupByItemsSold(productList);

var mostPop = products.mostPopularPrd(productGroup);

console.log(mostPop);

 //fs.readFileSync('Nelisa Sales History.csv', 'utf8');

 //console.st
 

 //var fs = require('fs');
 var Products = require("./products");

var products = new Products();

var productList = products.readProductsFromFile('Nelisa Sales History.csv');


var productGroup = products.groupByItemsSold(productList);

var leastPop = products.leastPopularPrd(productGroup);

console.log(leastPop);