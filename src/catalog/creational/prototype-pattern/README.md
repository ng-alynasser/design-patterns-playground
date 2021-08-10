### Definition
**Prototype (aka Clone) is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.**

### Problem
Say you have an object, and you want to create an exact copy of it. How would you do it?
First, you have to create a new object of the same class. Then you have to go through all the fields
of the original object and copy their values over to the new object.

Nice! But there's a catch. Not all objects can be copied that way because
some of the object's fields may be private and not visible from outside the object itself.

There's one more problem with the direct approach. Since you have to know
the object's class to create a duplicate, your code becomes dependent on that class.
If the extra dependency doesn't scare you, there's another catch.
Sometimes you only know the interface that object follows, but not its concrete
class, when, for example, a parameter in a method accepts any object
that follow some interface.

### Solution
The Prototype pattern delegates the cloning process to the actual
objects that are being cloned. The pattern declares a common interface
for all the objects that support cloning. This interface lets you clone
an object without coupling your code to the class of the object. Usually, 
such an interface contains just a single `clone` method.

The implementation of the `clone` method is very similar in all classes.
The method creates an object of the current class and carries over
all of the field values of the old object into the new one. You can
even copy private fields because most programming languages let objects
access private fields of other objects that belong to the same class.

An object that supports cloning is called prototype. When your objects
have dozens of fields and hundreds of possible configurations, cloning
them might serve as an alternative to subclassing.

Here's how it works: you create a set of objects, configured in various
ways. When you need an object like the one you've configured, you just clone
a prototype instead of constructing a new object from scratch.

### Structure
- The `Prototype` interface declares the cloning methods. In most cases, it's a single `clone` method.
- The `ShapePrototype` concrete class implements the cloning method. In addition to copying the original object's data to the clone, this method may also handle some edge cases of the cloning process related to cloning linking objects.
- The Client now can produce a copy of an object that follows the prototype interface.

### Applicability

- **Use the Prototype Pattern when your code shouldn't depend on the concrete classes of objects that you need to copy.**
- Use the pattern when you want to reduce the number of subclasses that you only
differ in the way they initialize their respective objects.
