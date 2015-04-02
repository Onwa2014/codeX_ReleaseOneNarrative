var assert = require("assert");
var Products = require("../products");

describe("Find the most popular product", function(){

    //create a function that reads the file and returns a list of ojbects

    it('should return a list of product objects', function(){
        
        var products = new Products();
        var list = products.readProductsFromFile('./Nelisa Sales History.csv');
        
        assert.equal(449, list.length);
        assert.equal("Imasi", list[2].itemName);
        assert.equal(1, list[2].soldItems);

        //console.log(list);

        var groupedProducts = products.groupByItemsSold(list);    
        //console.log(groupedProducts);

    });


    it('should return itemMap', function(){

        var products = new Products('./Nelisa Sales History.csv');
        //create a function that takes a list of objects and sum the number of sold items
        
        var listOfProducts = [
            {itemName: 'Bread', soldItems:20},
            {itemName: 'Milk 1l', soldItems: 102},
            {itemName: 'Imasi', soldItems: 100},
            {itemName: 'Bread', soldItems: 50},
            {itemName: 'Milk 1l', soldItems: 40},
            {itemName: 'Imasi', soldItems: 25},
            {itemName: 'Bread', soldItems: 60}
            ];

        var expectedMap = {'Milk 1l': 142, 'Imasi': 125, 'Bread': 130};

        var productMap = products.groupByItemsSold(listOfProducts);

        assert.deepEqual(expectedMap, productMap);

    });

    it('should return the most popular product', function(){

        var products = new Products();
        
        // ?????    
        var lists = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14 }


           var result ={name: 'Mixed Sweets 5s', amt:172}; //
           var productsResults = products.mostPopularPrd(lists);

            assert.deepEqual(result, productsResults);
    });

    it('should return the least popular product', function(){

        var products = new Products();
        
           
        var lists = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14 }

           var result ={name: 'Rose (plastic)', amt:14}; //
           var productsResults = products.leastPopularPrd(lists);
           
           //console.log(productsResults);

            assert.deepEqual(result, productsResults);      
    });

    it('should return the most popular category', function(){

        var products = new Products();

            var productMap = {
              'Milk 1l': 142,
              'Imasi': 125,
              'Bread': 130,
              'Chakalaka Can': 94,
              'Gold Dish Vegetable Curry Can': 86,
              'Fanta 500ml': 94,
              'Coke 500ml': 159,
              'Cream Soda 500ml': 75,
              'Iwisa Pap 5kg': 47,
              'Top Class Soy Mince': 98,
              'Shampoo 1 litre': 26,
              'Soap Bar': 50,
              'Bananas - loose': 114,
              'Apples - loose': 114,
              'Mixed Sweets 5s': 172,
              'Heart Chocolates': 20,
              'Rose (plastic)': 14,
              'Valentine Cards': 14 }

        
           
        var catMap = {
          'Dairy Products': 267,
          'Bakery': 130,
          'Bulk': 47,
          'Canfectionery': 192,
          'Cosmetics': 76,
          'Fruits': 128,
          'Cold Beverages': 328,
          'Canned Food': 180,
          'Valentines Goodies': 28,
          'Soup': 98 }

           var result = {name: 'Cold Beverages', amt:328}; //
           var mostPopularCategory = products.mostPopularCat(productMap);
           
           //console.log(mostPopularCategory);

            assert.deepEqual(result, mostPopularCategory);      
    });
});
