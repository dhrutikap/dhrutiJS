# dhrutiJS
Project created to learn basic UI  stuff

JavaScript Learning Notes:

Objects:
--------

-Numbers, Booleans, and strings are the bricks that data structures are built from. But you can’t make much of a house out of a single brick. Objects allow us to group values—including other objects—together and thus build more complex structures.

- Objects are passed around by reference.They are never copied.

- JavaScript includes a prototype linkage feature that allows one object to inherit the properties of another.Whn used well, this can reduce object initialization time and memory consumption.

- every object is linked to prototype object from which it can inherit properties.Akk objects created from object literals are linked to Object.prototype- an object that comes standard with JavaScript.

- The binary 'in' operator, when applied to a string and an object, returns a Boolean value that indicates whether that object has that property.


Functions:
----------
- functions are objects, they can be used like any other value. Since functions are objects, functions can have methods.

Function Literal - function objects are created with function literals:
var add = function(a, b){
	return a+b;
};

Closure:
--------
A closure is a special kind of object that combines two things: a function, and the environment in which that function was created.


                  


                                               