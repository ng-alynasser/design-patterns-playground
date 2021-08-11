### Definition
**Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

### Problem
The Singleton Pattern solves two problems at the same time, violating the Single Responsibility Principle:
1. **Ensure that a class is just a single instance**. Why would anyone want to control how many instances a class has?
The most common reason for this is to control access to some shared resource - for example, a database or a file.

Here's how it works: image you create an object, but after a while
decided to create a new one. Instead of receiving a fresh object, you'll get the one already created.

Note that this behavior is impossible to implement with a regular constructor
since a constructor call must always return a new object by design.

2. **Provide a global access point to that instance**. Remember those global variables
that you used to store some essential objects? While they're very handy, they're also very unsafe
since any code can potentially overwrite the contents of those variables and crash the app.

Just like a global variable, the Singleton Pattern lets you access
some object from anywhere in the program. However, it also protects that instance
from being overwritten by other code.

### Solution
All implementations of the Singleton have these two steps in common:

- Make the default constructor private, to prevent other objects from using the `new` operator with the Singleton class.
- Create a static creation method that acts as the constructor. Under the hood, this method calls the private constructor
to create an object and saves it in a static field. All following calls to this method return the cached object.

### Structure
- The Singleton class declares the static method `getInstance` that returns the same instance of its own class.

The Singleton's constructor should be hidden from the client code. Calling `getInstance` method should be the only way of getting Singleton object.

### Applicability

- **Use the Singleton pattern when a class in your program should have just one single instance available to all the clients; for example, a single database object shared by different parts of the program.**

The Singleton pattern disables all other means of creating objects of a class
except for the special creation method. This method either creates a new object
or returns an existing one if it has already been created.

- **Use the Singleton pattern when you need stricter control over global variables.**

Unlike global variables, the Singleton pattern guarantees that there's just one instance ofa class.
Nothing, except for the Singleton class itself, can replace the cached instance.

Note that you can always adjust the limitation and allow creating any
number of Singleton instances. The only piece of code that needs changing
is the body of the `getInstance()` method.
