   //task #1
   
   let array = [1, "two", 3, 4, 5];

array.length = 2; 
console.log( array ); 

array.length = 5; 
console.log( array[3] ); 
console.log( array[1] ); 
   
   //task #2

   let fruits = ["Apple", "Orange"];
    
   fruits.push("Banana");
   console.log( fruits );
    
   fruits[Math.floor(fruits.length - 1)/2] = "Mango";
   console.log( fruits );
   
   console.log(fruits.shift());
   console.log(fruits);

   fruits.unshift("Pear", "Melon");
   console.log(fruits);

   //task #3

   let arr=["o", "f", "a", "n", "g"];
   
   arr[1]='r';
   arr.push("e");
   console.log(arr.join(''));

   