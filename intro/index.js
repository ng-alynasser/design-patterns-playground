/**
 * Assigning a variable in this fashion will actually attach it to the current module,
 * not including the variable will be attached to the global object.
 */
const words = "Hello, world!";
console.log(global.words); // undefined

/**
 * Javascript has five primitive types: undefined, null, string, number, boolean.
 * Of these five, only two are what we would expect to be an object anyway. The other three,
 * boolean, string, number all have wrapped versions, which are objects: String, Number, Boolean.
 * Javascript will also box and unbox the primitives as needed.
 */

const numberOne = new Number(1);
const numberTwo = 2;
console.log(typeof numberOne); // 'object'
console.log(typeof numberTwo); // 'number'
const numberThree = numberOne + numberTwo; // unboxing
console.log(typeof numberThree); // 'number'

/**
 * Creating objects
 */

const objectOne = {};
console.log(typeof objectOne); // 'object'
const objectTwo = new Object();
console.log(typeof objectTwo); // 'object'

/**
 * Adding properties to objects, even after the object has been created
 */

const objectThree = {};
objectThree.value = 7;
console.log(objectThree); // {value: 7}

/**
 * Functions are first-class objects, they can be passed around and can be assigned to variables.
 */

const functionObject = {};
functionObject.doThings = function () {
  console.log("I'm a function");
};

functionObject.doThings(); // "I'm a function"

const anotherFunctionObject = {
  // Improving upon syntax
  doOtherThings: function () {
    console.log("I'm a function");
  },
};

anotherFunctionObject.doOtherThings(); // "I'm a function"

/**
 * Mixing data and functionality in an object
 */

const moreFunctionObject = {
  greeting: "Hello, from inside an object",
  sayGreeting: function () {
    console.log(this.greeting);
  },
};

moreFunctionObject.sayGreeting(); // 'Hello, from inside an object'

/**
 * 'this' is bound to the owner of the function in which it is found. In the preceding example
 * 'this' is bound to moreFunctionObject object, however if the function was declared outside
 * of an object 'this' would refer to the global object.
 *
 * In certain circumstances, typically event handlers, 'this' is rebound to the object firing the event.
 *
 * const target = document.getElementById("someId");
 * target.addEventListener(
 *  "resize",
 *  function () {
 *   console.log(this); // refer to the html element
 *  },
 *  false
 * );
 */

/**
 * If we want to create multiple instances of our moreFunctionObject object, we're out of luck.
 * Objects are not classes, objects are instances of classes.
 * Attempting to do so will result into an error.
 *
 * const object = new moreFunctionObject() // TypeError: object is not a function
 *
 * Each time that a new instance is required, the object must be reconstructed. To get around this
 * we can define the object using a function.
 *
 * This syntax allows for a constructor to be defined and for new objects to be created.
 * In Javascript the constructor returns the created object.
 */

const ThingDoer = function () {
  this.greeting = "Hello, from inside an object";
  this.sayGreeting = function () {
    console.log(this.greeting);
  };
};

const instance = new ThingDoer();
instance.sayGreeting(); // 'Hello, from inside an object'

/**
 * You can even assign internal properties using the constructor by making them part of the initial function
 */

const ThingDoer2 = function (greeting) {
  this.greeting = greeting;
  this.sayGreeting = function () {
    console.log(this.greeting);
  };
};

const instance2 = new ThingDoer2("Hello, universe");
instance2.sayGreeting(); // 'Hello, universe'

/**
 * Objects created using the previous structure have a fairly major drawback:
 * creating multiple objects is not only a time consuming but also memory intensive.
 * Each object is completely different from other objects created in the same fashion.
 * This means that the memory used to hold the function definitions is not shared between all instances.
 *
 * You can even redefine individual instances of classes without changing all of the instances.
 */

const Castle = function (name) {
  this.name = name;
  this.build = function () {
    console.log(this.name);
  };
};

const castle1 = new Castle("Winterfell");
const castle2 = new Castle("Harrenhall");

castle1.build = function () {
  console.log("Moat Cailin");
}; // this is called monkey batching

castle1.build(); // 'Moat Cailin'
castle2.build(); // 'Harrenhall'

/**
 * When an object is created, its definition is inherited from a prototype. Each prototype
 * is also an object so even prototypes have prototypes, except for the object which is the top-level
 * prototype.The advantage of attaching functions to the prototype is that only a single copy of
 * the function is created; saving on memory.
 *
 * One thing to note is that only functions can be assigned to prototypes. Instance variables are still
 * assigned to the instance. As these are unique to each instance.
 */

const Company = function (name) {
  this.name = name;
};

Company.prototype.build = function () {
  console.log(this.name);
};

const company1 = new Company("Dell");
company1.build(); // 'Dell'

/**
 * If you make a change to the prototype of an object later, then all objects which share that prototype
 * are updated with the new function.
 *
 * There is an alternative approach to building objects and that is Object.create function
 *
 * Object.create(prototype, [propertiesObject])
 *
 * The syntax will build a new object based on the given prototype, You can also pass in propertiesObject
 * object that describes additional fields on the created object (writable, configurable, enumerable, value)
 *
 * Note that Object.create function bypasses the constructor so the initial assignment won't be called.
 */

const company2 = Object.create(Company.prototype, {
  name: {
    value: "ASUS",
    writable: false,
  },
});

company2.build(); // 'ASUS'
company2.name = "Dell";
company2.build(); // 'ASUS'

/**
 * Let's say we have a base class called BigCompany and we want to customize it into a more specific
 * class called Amazon. We can do so by first copying all of the properties from BigClass prototype
 * onto the Amazon prototype.
 */

const BigCompany = function () {};
BigCompany.prototype.build = function () {
  console.log("Big Company built!");
};

const Amazon = function () {};
Amazon.prototype.build = BigCompany.prototype.build;
Amazon.prototype.addGoods = function () {};

const amazon = new Amazon();
amazon.build(); // 'Big Company built'

/**
 * This can be abstracted in a naive fashion
 */

function clone(source, destination) {
  for (let attr in source.prototype) {
    destination.prototype[attr] = source.prototype[attr];
  }
}

/**
 * There is not first-class support for namespaces but we can easily isolate functionality to
 * the equivalent of a namespace. There are different approaches to creating modules in Javascript.
 *
 * To start simply we need to attach an object to the global namespace, which will contain our
 * root namespace
 */

let Westros = {};

/**
 * A typical usage is to first check if the object already exists and use that version instead of
 * reassigning the variable.
 */

Westros = Westros || {};

/**
 * Once we have the object, we can assign our classes as properties of that object.
 */

Westros.Castle = function (name) {
  this.name = name;
};

Westros.Castle.prototype.build = function () {
  console.log(`Castle built: ${this.name}`);
};

/**
 * If we want to build a hierarchy of namespaces that is more than a single level deep,
 * that is easily to accomplish.
 *
 * An easy way to structure the code is to make use of the ability to create and immediately
 * execute a function
 */

Westros.Structures = Westros.Structures || {};

let BigCastle = (function () {
  function BigCastle(name) {
    this.name = name;
  }

  BigCastle.prototype.build = function () {
    console.log(`Castle built: ${this.name}`);
  };

  return BigCastle;
})();

Westros.Structures.BigCastle = BigCastle;

let winterfell = new Westros.Structures.BigCastle("Winterfell");
winterfell.build(); // 'Castle built: Winterfell'

let BaseStructure = (function () {
  let BaseStructure = function (name) {
    this.name = name;
  };

  BaseStructure.prototype.build = function () {
    console.log(`BaseStructure built: ${this.name}`);
  };

  return BaseStructure;
})();

Westros.Structures.BaseStructure = BaseStructure;

/**
 * Implementing the entire module with a closure syntax
 */

(function (Westros) {
  (function (Structures) {
    let Castle = (function () {
      function Castle(name) {
        this.name = name;
      }

      Castle.prototype.build = function () {
        console.log(`Castle built: ${this.name}`);
      };

      return Castle;
    })();

    Structures.Castle = Castle;

    let Wall = (function () {
      function Wall() {
        console.log("Wall constructed");
      }

      return Wall;
    })();

    Structures.Wall = Wall;
  })(Westros.Structures || (Westros.Structures = {}));
})(Westros || (Westros = {}));

/**
 * ES5 brings support for some syntactic sugar for making classes.
 */

class CastleClass extends Westros.Structures.BaseStructure {
  constructor(name, alliance) {
    super(name);
    this.alliance = alliance;
  }

  build() {
    super.build();
  }
}

const castleInstance = new CastleClass("New Castle", "New Alliance");
castleInstance.build(); // 'BaseStructure built: New Castle'
