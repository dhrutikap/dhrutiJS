/*for(var i =0 ; i < array.length ; i++){
console.log( array[i]);
}
console.log( "**************************");

for(var i =1 ; i < 3 ; i++){
console.log( array[i]);
}
console.log( "**************************");
for(var i =2 ; i < 3 ; i++){
console.log( array[i]);
}*/


var obj ={color:"red",width:200,height:300};
var array = Object.keys(obj);

for(var i =0 ; i < array.length ; i++){
console.log( obj[array[i]]);
}
