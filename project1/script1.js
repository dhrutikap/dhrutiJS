"use strict";

var obj={
  name:'dhrutika',
  inner:{
    lastName:'Vyas',
    test: function(){ console.log(this);}
  }

};

obj.inner.test();
