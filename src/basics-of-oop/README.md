# Basics of OOP
Object-oriented programming is a paradigm based on the concept of wrapping pieces of data, and behavior related to that
data, into special bundles called **objects**, which are constructed
from a set of "blueprints", defined by a programmer, called **classes**.

> Data stored inside the object's fields is often referenced
> as state, and all the object's methods define its behavior.

### Class hierarchies
A parent class is called a **superclass**, and its children 
are **subclasses**. Subclasses inherit state and behavior
from their parent, defining only attributes or behaviors
that differ.

Subclasses can override the behavior of the methods they
inherit from parent classes. A subclass can either completely
replace the default behavior or just enhance it with some extra
stuff.

### Pillars of OOP

* #### Abstraction
> Abstraction is a model of a real-world object, limited to a specific context, which
represents all details relevant to this context with high accuracy
and omits all the rest.

For example, an `Airplane` class could probably exist in both
a flight simulator and a flight booking application. But in the former
case, it would hold details related to the actual flight,
whereas in the latter case you would care only about the seat map
and which seats are available.

* #### Encapsulation
> Encapsulation is the ability of an object to hide parts of its
state and behaviors from other objects, exposing only a limited interface
to the rest of the program.

For example, to start an engine, you only need to turn a key or press
a button. You don't need to connect wires under the hood, rotate
the crankshaft and cylinders, and initiate the power cycle of
the engine. These details are hidden under the hood of the car.
You have only a simple interface: a start switch, a steering wheel,
and some pedals. This illustrates how each object has an **interface** - a public
part of the object, open to interactions with other objects.

* #### Inheritance
> Inheritance is the ability to build new classes on top of
> existing ones for code reuse.

The consequence of using inheritance is that subclasses have
the same interface as their parent class. You cannot hide a method
in a subclass if it was declared in the superclass. You must
implement all abstract methods, even if they don't make a sense
for your subclass.

* #### Polymorphism
> Polymorphism is the ability of a program to detect the real
> class of an object and call its implementation even when its
> real type is unknown in the current context.

You can think of polymorphism as the ability of an object to "pretend"
to be something else, usually a class it extends or an interface it
implements.

### Relations Between Objects

- **Association** is a type of relation in which one object uses or
interacts with another. In general, you can use an association to represent
something like a field in a class. The link is always there, in that you
can always ask an order of its customer. It need not actually
be a field, if you are modelling from a more interface perspective,
it can just indicate the presence of a method that will return the order's customer.

 
- **Dependency** is a weaker variant of association that usually
implies that there's no permanent link between objects. It typically
(but not always) implies that an object accepts another object as a method parameter, instantiates,
or uses another object. Here's how you can spot a dependency between
classes: a dependency exists between two classes if changes to
the definition of one class results in modifications in another class.


- **Composition** is a "whole-part" relationship between two
objects, one of which is composed of one or more instances of the
other. The distinction between this relation and others is that
the component can only exist as a part of the container.


- **Aggregation** is a less strict variant of composition, where one
object merely contains a reference to another. The container doesn't
control the life cycle of the component. The component can exist without
the container and can be linked to several containers at the same time.

### What's a Design Pattern?
Design patterns are typical solutions to commonly occurring problems in
a software design. They are like pre-made blueprints that you can
customize to solve a recurring design problem in your code.

### What does the pattern consist of?
Most patterns are described very formally so people can reproduce them
in many contexts. Here are the sections that usually present in a 
pattern description:

- **Intent** of the pattern briefly describes the problem and the solution.
- **Motivation** further explains the problem and the solution the pattern makes it possible.
- **Structure** of classes shows each part of the pattern and how they are related.
- **Code Example** makes it easier to grasp the idea behind the pattern.

### Classifications of patterns:

- **Creational patterns** provide object creation mechanisms that increase flexibility and reuse of existing code.
- **Structural patterns** explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.
- **Behavioral patterns** take care of effective communication and the assigment of responsibilities between objects.


## Software Design Principles
- ### Encapsulate what varies
> Identify the aspects of your application that vary and separate them from what stays the same.

You can isolate the parts of your program that vary in independent modules,
protecting the rest of the code from adverse effects. As a result, you spend
less time getting the program back into working shape, implementing and
testing the changes.

- ### Encapsulation on a method level
Say you're making an e-commerce website. Somewhere in your code, there's
a `getOrderTotal` method that calculates a grand total for the order, including taxes.
We can anticipate that tax-related code might need to change in the future.
The tax rate depends on the country, state, or even city where the customer resides,
and the actual formula may change over time due to new laws or regulations.
As a result, you'll need to change the `getOrderTotal` method quite often.
You can extract the tax calculation logic into a separate method, hiding
it from the original method. Moreover, if the tax calculation logic becomes
too complicated, it's now easier to move it to a separate class.

- ### Encapsulation on a class level
Overtime you might add more and more responsibilities to a method which
used to do a simple thing. These added behaviors often come with their own
helper fields and methods that eventually blur the primary responsibility of
the containing class. Extracting everything to a new class might make things
much more clear and simple.

- ### Program to an interface, not an implementation
When you want to make two classes collaborate, you can start by making
one of them dependent on the other. Hell, I often start by doing that myself. However,
there's another, more flexible way to set up collaboration between objects:

1. Determine what exactly one object needs from the other: which methods it executes? 
2. Describe these methods in a new interface or abstract class.
3. Make the class that is a dependency implements this interface.
4. Now make the second class dependent on this interface rather than on the concrete class.

- ### Favor composition over inheritance
Unfortunately, inheritance comes with caveats that often become apparent
only after the program already has tons of classes and changing anything
is pretty hard. Here is the list of those problems:
1. A subclass can't reduce the interface of the base class.
2. When overriding methods you need to make sure that new behavior is compatible with the base one.
3. Inheritance breaks encapsulation of the superclass.
4. Subclasses are tightly coupled to superclasses.

There's an alternative to inheritance called "composition". Whereas
inheritance represents "is a" relationship between classes, composition
represents "has a" relationship.

- ### SOLID principles
#### 1. Single Responsibility Principle
> A class should have just one reason to change.

The main goal of this principle is reducing complexity. You don't need
to invent a sophisticated design for a program that only has about 200
lines of code. Make a dozen methods pretty, and you'll be fine.

The real problem emerge when your program constantly grows and changes.
At some point classes become so big that you can no longer remember their details.
Code navigation slows down to crawl, and you have to scan through whole
classes or even an entire program to find specific things.

#### 2. Open/Closed Principle
> Classes should open for extension but closed for modification.

The main idea of this principle is to keep existing code from breaking
when you implement new features. A class is open if you can extend it, produce
a subclass and do whatever you want with it like adding new methods or fields,
overriding base behavior, etc. After this, the class is no longer open. At the same time, the class
is closed if it's 100% ready to be used by other classes - its interface
is clearly defined and won't be changed in the future.

If a class is already developed, tested, and reviewed, and used in the app,
trying to mess with its code is risky. Instead of changing the code of the class
directly, you can create a subclass and override parts of the original class that
you want to behave differently.

#### 3. Liskov Substitution Principle
> When extending a class, remember that you should be able to pass objects of subclass in the place of objects of the parent class without breaking the client code.

This means that the subclass should remain compatible with the behavior
of the superclass. When overriding a method, extend the base behavior rather than
replacing it something else entirely.

The substitution principle has a set of formal requirements for subclasses,
and specifically for their methods, as following:

- **Parameter type in a method of a subclass should match or be more abstract than parameter types in the method of the superclass.**
- **The return type in a method of a subclass should match or be a subtype of the return type in the method of the superclass.**
- **A method in a subclass shouldn't throw types of exceptions which the base method isn't expected to throw.**
- **A subclass shouldn't strengthen pre-conditions.**
- **A subclass shouldn't weaken post-conditions.**
- **Invariants of a superclass must be preserved.**
- **A subclass shouldn't change values of private fields of the superclass.**


#### 4. Interface Segregation Principle
> Clients shouldn't be forced to depend on methods they don't use.

Try to make your interfaces narrow enough that your client classes
don't have to implement behaviors they don't need.

Class inheritance lets a class have just one superclass, but it doesn't
limit the number of interfaces that the class can implement at the same time.
Hence, there's no need to cram tons of unrelated methods to a single interface.
Break it down into several more refined interfaces - you can implement them all
in a single class if needed. However, some classes may be fine with implementing
just one of them.

#### 5. Dependency Inversion Principle
> High-level classes shouldn't depend on low-level classes. Both should depend on abstractions. Abstractions shouldn't depend on details. Details should depend on abstractions.

Usually when designing software, you can make a distinction between two levels of classes:
- **Low level classes** implement basic operations such as working with a disk transferring data over network, connecting to a database, etc.
- **High level classes** contain complex business logic that direct low-level classes to do something.

Sometimes people design low-level classes first and only then you start working on high-level ones.
This is very common when you start developing a prototype on a new system, and you're
not even sure what's possible at the higher level because low-level stuff isn't yet implemented or clear.
With such an approach business logic classes tend to become dependent on primitive low-level classes.

The dependency inversion principle suggests changing the direction of this dependency.

For starters, you need to describe interfaces for low-level operations that high-level classes rely on, preferably in business terms.
For instance, business logic should call a method `openReport(file)` rather than a series of methods `openFile(x), readBytes(n), closeFile(x)`.
These interfaces count as high-level ones.

Now you can make high-level classes dependent on those interfaces, instead of
on a concrete low-level classes. This dependency will be much softer than the original one.

Once low-level classes implement these interfaces, they become dependent on the business logic level, reversing
the direction of the original dependency.
