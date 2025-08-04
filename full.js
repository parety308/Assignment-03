/** Problem -01 ( Divide the Asset ) */
var area = 14.36666;
//write your code here
 var results = area/2;
 console.log(results);

 /** Problem -02 ( Cycle or Laptop ) */
var money = 100;
//write your code here
if (money >= 25000) {
    console.log('Laptop');
}
else if (money < 25000 && money >= 10000) {
    console.log('Cycle');
}
else {
    console.log('Chocolate');
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for(var i=1;i<=lastDay;i++){
    if(i%3==0){
        console.log(i+' - medicine');
    }
    else{
        console.log(i+' - rest');
    }
}