### Definition
**Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

### Problem
Imagine you're creating a logistics management application. The first
version of your app can only handle transportation by trucks, so the bulk
of your code lives inside the `Truck` class.

After a while, your app becomes pretty popular. Each day you receive dozens
of requests from sea transportation companies to incorporate sea logistics into the app.

At present, most of your code is coupled to the `Truck` class. Adding `Ships` intot the app
would require changes to the entire codebase. Moreover, if later you decide
to add another type of transportation to the app, you will probably need to make all of these
changes again.

### Solution
The Factory Method pattern suggests that you replace direct object construction
calls (using `new` operator) with calls to a special factory method. Don't worry:
the objects are still created via the `new` operator, but it's being called
from within the factory method. Objects returned by a factory method are
often referred to as "products".

Now you can override the factory method in a subclass and change the class of products being created by the method, there's
a slight limitation though: subclasses may return different types of products
only if these products have a common base class or interface. Also, the factory method
in the base class should have its return type declared as this interface.

For example, both `Truck` and `Ship` classes should implement the `Transport` interface, which
declares a method called `deliver`. Each class implements this method
differently: trucks deliver cargo by land, ships deliver cargo by sea.
The factory method in `RoadLogistics` class returns truck objects, whereas
the factory method in `SeaLogisitcs` class returns ships.

The code that uses the factory method doesn't see a difference between
the actual products return by various subclasses. The client treats all
the products as abstract `Transport`.

The client knows that all transport objects are supposed to have `deliver` method,
but exactly how it works isn't important to the client.

### Structure

- The `Logistics` declares the interface, which is common to all objects that can be produced by the products and its subclasses.
- `RoadLogistics` and `SeaLogistics` are different implementations of the `Logistics` interface.
- The `Logistics` declares the `createTransport` method that returns new `Transport` objects. It's important that the return type of this method matches the `Transport` interface.
- `RoadLogistics` and `SeaLogistics` override the `createTransport` method, so it returns a different type of `Transport`.

Note that the factory method doesn't have to create new instances all the time. It can also return existing objects from a cache, an object pool, or another source.

### Applicability

- **Use the Factory Method when you don't know beforehand the exact types and dependencies of the objects your code should work with.**

The factory method pattern separate `Transport` construction code from the code that actually uses the dialog. Therefore it's easier to extend the dialog construction code independently from the rest of the code.
For example, to add a new dialog type to the app, you'll only need to create a new dialog subclass and override the `createDialog` method in it.

- **Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.**

Inheritance is probably the easiest way to extend the default behavior
of a library or a framework. But how would the framework recognize that your subclass should be
used instead of a standard component?

The solution is to reduce the code that constructs components across
the framework into a single factory method that let anyone overrides this method
in addition to extending the component itself.

- **Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time**.
