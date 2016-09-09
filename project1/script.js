function ConstuctApple(color,width,height){
//  var test = 100+150;
//  var obj = {PROP: "property"};
  //console.log(test , obj , "string",test+50);

  this.color=color;
  this.width = width;
  this.height =height;
  console.log(this);

}

ConstuctApple.prototype={
  eat: function(){return 'eat that apple';},
  throw:function(){return 'Throw iy!';},
  nibble:function(){return 'nibble like a hamster';}
}

var apple =  new ConstuctApple("red",150,200);
var apple2 = new ConstuctApple("green",300, 170);
var apple3 = new ConstuctApple("yellow",250,180);
