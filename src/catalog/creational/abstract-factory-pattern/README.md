### Definition
**Abstract Factory** is a creational design pattern that lets you
produce families of related objects without specifying their concrete classes.

### Problem

Imagine that you're creating a furniture shop simulator. Your code
consists of  classes that represent:
1. A family of related products, such as: `Chair`, `Table`.
2. Several variants of this family. For example, products `Chair` + `Table`
are available in these variants: `Modern` and `Victorian`.

You need a way to create individual furniture objects so that they
match other objects of the same family. Customers get quite mad when they
receive non-matching furniture.

Also, you don't want to chang existing code when adding new products
or families of products to the program.

### Solution

The first thing the Abstract Factory Pattern suggests is to explicitly
declare interfaces for each distinct product of the product family (e.g.chair, table, or sofa).
Then you can make all variants of products follow these interfaces.
For example, all chair variants can implement the `Chair` interface, and so on.

The next move is to declare the Abstract Factory - an interface with
a list of creation methods for all the products that are part of the product
family (for example, `createChair`, `createTable`). These methods must
return abstract product types represented by the interfaces we extracted previously.

Now, how about the product variants? For each variant of a product family, 
we create a separate factory class based on the `AbstractFactory` interface. 
A factory class that returns products of a particular kind. For example, the `ModernFurniture`
can only create `ModernChair`, `ModernTable`.

The client code has to work with both factories and products via
their respective abstract interfaces. This lets you change
the type of a factory you pass to the client code, as well as 
the product variant that the client code receives, without breaking
the actual client code.

One more thing to clarify: if the client is only exposed to the abstract
interfaces, what creates the actual factory objects? Usually, the
application creates a concrete factory object at the initialization stage.
Just before that, the app must select the factory type depending on
the configuration or the environment settings.

### Structure

- Abstract products declare interfaces for a set of distinct
but related products which make up a product family.
- Concrete products are various implementations of abstract products, grouped by variants. Each
abstract product `Chair`/`Table` must be implemented in all given
variants (Victorian/Modern).
- The `FurnitureFactory` declares a set of methods for creating each of the `Chair` and `Table`.
- `ModernFurnitureFactory` and `VictorianFurnitureFactory` implement creation methods of the `FurnitureFactory`.
Each of them corresponds to a specific variant of `Chair` and `Table` and creates only those variants.

### Applicability
- **Use the Abstract Factory when your code needs to work with
various families of related products, but you don't want it to
depend on the concrete classes of those products - they might
be unknown beforehand, or you simply want to allow for future
extensibility.**
- Consider implementing the Abstract Factory when you have a class
with a set of Factory Methods that blur its primary responsibility.

