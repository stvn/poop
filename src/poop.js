(function (global) {
  global.poop = function () {
    var mixin = function (obj, source) {
      for (var property in source) {
        obj[property] = source[property];
      }
      return obj;
    }

    if (Object.extend === undefined){
      Object.prototype.extend = function (source) {
        function F() {};
        F.prototype = this;
        source._super = this; //add reference to super
        return mixin(new F(), source);
      }
    }
   
    if (Object.create === undefined) { 
      Object.prototype.create = function (source) {
        return Object.extend(source);
      }
    }
  };
}(window));
