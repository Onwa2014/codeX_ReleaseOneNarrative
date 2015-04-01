var fs = require('fs');

module.exports = function(){

	//read the files and create a list of objects
	this.readProductsFromFile = function(filePath){

		var linesInfile = fs.readFileSync(filePath, "utf-8");
 		//console.log("====>" + fs.readFileSync('Nelisa Sales History.csv', 'utf8'));

 		var rows = linesInfile.split("\n");
 		
 		var listOfProducts = [];
 		
 		// think about creating a list of objects from the csv
 		rows.forEach(function(row){
 			var columns = row.split(';');
 			var currentItem = columns[2]; // this is the Product Name e.g Milk
 			var numberSold = columns[3]; // number of the product sold for that day on my list

 			var salesObj = {
 		    	itemName: columns[2],
 		    	soldItems: Number(columns[3])
 		    };
 		    listOfProducts.push(salesObj);
 		});

		return listOfProducts;
		}

		//takes a list of products and return total sold
 		this.groupByItemsSold = function(products){
	
 			var itemMap = {};

 		// think about creating a list of objects from the csv
 		//
 			products.forEach(function(product){
 				var currentItem = product.itemName; // this is the products Name e.g Milk
 				var numberSold = product.soldItems; // number of the product sold for that day on my list

 				if(itemMap[currentItem] === undefined){
 					//listOfProducts.push(currentItem);
 					itemMap[currentItem] = 0;
 				}

 				itemMap[currentItem] = itemMap[currentItem] + Number(numberSold);
 			
 			});

 			return itemMap;

 		//create a function that find the most popular, put it in a module and write a unit test for it 
 	
 		//create another function for least popular
 		//callback(null, itemMap);
 		//console.log(mostPopularProduct);

 		};


  	this.mostPopularPrd = function(itemMap){
 		var mostPopularProduct = {};
		var max = 0;
 		for(var prop in itemMap) {
 				var value = itemMap[prop];
				if(itemMap[prop] > max){
					max = itemMap[prop];
					mostPopularProduct = {
			 				name: prop,
			 				amt: max
			 			}
				}
 		}

 		return mostPopularProduct;
 	};
 
 	this.leastPopularPrd = function(itemMap){
 		var leastPopularProduct = {};
		var min = 172;
 		for(var prop in itemMap) {
 				var value = itemMap[prop];
				if(itemMap[prop] < min){
					min = itemMap[prop];
					leastPopularProduct = {
			 				name: prop,
			 				amt: min
			 			}
				}
 		}

 		return leastPopularProduct;
 	};	
 };

//};*/