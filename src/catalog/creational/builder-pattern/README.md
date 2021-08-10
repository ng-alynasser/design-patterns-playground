### Definition
**Builder** is a creational design pattern that lets you construct complex objects step by step.
The pattern allows you to produce different types and representationsof an object using the same consturction code.

### Problem
Imagine a complex object that requires laborious, step-by-step
initialization of many fields and nested objects. Such initialization
code is usually inside a monstrous constructor with lots of parameters.
Or even worse: scattered all over the client code.

For example, let's think about how to create a `House` object. To build
a simple house, you need to construct four walls and a floor, install
a door, fit a pair of windows, and build a roof. But what if you want
a bigger, brighter house, with a backyard and other goodies.

The simplest solution is to extend the base `House` class and create
a set of subclasses to cover all combinations of the parameters. But
eventually you'll end up with a considerable number of subclasses.

There's another approach that does not involve breeding subclasses. You
can create a giant constructor right in the `House` class with all
possible parameters that control the house object.

In most cases most of the parameters will be unused, making the constructor
calls pretty ugly. For instance, only a fraction of houses has swimming
pools, so the parameters related to swimming pools will be useless nine times out of ten.


### Solution

The Builder Pattern suggests that you extract the object construction
code out of its own class and move it to separate objects called builders.

The pattern organizes object construction into a set of steps (`buildWalls`, `buildDoors`, etc.).
To create an object, you execute a series of these steps on a builder object.
The important part is that you don't need to call all steps. You can call
only those steps that are necessary for producing a particular configuration of an object.


Some of the construction steps might require different implementations
when you need to build various representations of the product. For example,
walls of cabin may be built of wood, but the castle walls must be built with stone.

In this case, you can create several different builder classes that implement
the same set of building steps, but in a different manner. Then you can
use these builders in the construction process to produce different kinds of objects.

#### Director

You can go further and extract a series of calls to the builder steps
you use to construct a product into a separate class called director.
The director class defines the order in which to execute the building steps, while
the builder provides the implementation for those steps.

Having a director class in your program isn't strictly necessary. You
can always call the building steps in a specific order directly from
the client code. However, the director class might be a good place to
put various construction routines, so you can reuse them across your program.

In addition, the director class completely hides the details of product construction from the client code.
The client only needs to associate a builder with a director, launch the construction
with the director, and get the result from the builder.

### Structure

- The `BasBuilder` interface declares product construction steps that are common to all types of builders.
- `HouseBuilder` a concrete builder provide different implementations of the construction steps. Concrete builders may produce products that don't follow the common interface.
- `House` products are resulting objects. Products constructed by different builders don't have to belong to the same class hierarchy or interface.
- The `HouseDirector` class defines the order in which to call construction steps, so you can create and reuse specific configurations of products.
- The client must associate one of the builder objects with the director. Usually, it's done just once, via parameters of the director's constructor. Then the director uses that builder object for all further construction.

### Applicability
- **Use the Builder Pattern when you want your code to be able to create different representations of some product (for example stone and wooden houses).**
- **Use the Builder Pattern to construct Composite trees or other complex objects.**

A builder doesn't expose the unfinished product while running construction steps. This prevents
the client code from fetching an incomplete result.
