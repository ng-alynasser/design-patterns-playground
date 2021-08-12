### Definition
**Bridge** is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies - abstraction and implementation - which can be developed independently of each other.

### Problem
Say you have a geometric `Shape` class with a pair of subclasses: `Circle` and `Square`.
You want to extend this class hierarchy into incorporate classes, so you plan to
create `Red` and `Blue` shape classes. However, since you already
have two subclasses, you'll need to create four combinations such as `BlueCircle` and `RedSquare`.

Adding new shape types and colors to the hierarchy will grow it exponentially.
For example, to add a triangle you'd need to introduce two subclasses,
one for each color. And after that, adding a new color would require
creating three subclasses, one for each shape type.

### Solution
This problem occurs because we're trying to extend the shape class
into two independent dimensions: by form and by color.
That's a very common issue with class inheritance.

The Bridge pattern attempts to solve this problem by switching
from inheritance to composition. What this means is that you extract
one of the dimensions into a separate class hierarchy, so that the original
class will reference an object of the new hierarchy, instead of
having all ot its state and behaviors into one class.

Following this approach, we can extract the color-related code into
its own class with two subclasses: `Red` and `Blue`. The shape class
then gets a reference field pointing to one the color objects. Now
the shape can delegate any color-related work to the linked color object.
That reference will act as a bridge between `Shape` and `Color` classes.
From now on, adding new colors won't require changing the shape hierarchy, and vice versa.

#### Abstraction and Implementation
Abstraction(also called interface) is a high-level control layer
for some entity. This layer isn't supposed to do any real work
on its own. It should delegate the work to the implementation
layer (also called platform).

Note that we're not talking about interfaces or abstract classes
from your programming language. These are not the same thing.

When talking about real applications, the abstraction can be represented
by a graphical user interface (GUI), and the implementation could be
the underlying operating system code (API) which the GUI layer calls
in response to user interactions.

Generally speaking, you can extend such an app in two independent directions:
- Have several different GUIs (for instance, tailored for regular customers or admins).
- Support several different APIs (for example, to be able to launch the app under Windows, MacOS, and Linux).

In worst-case scenario, this app might look like a giant spaghetti bowl, where
hundreds of conditional connect different types of GUI with various
APIs all over the code.

You can bring order to this chaos by extracting the code related to
specific interface-platform combinations into separate classes. However,
soon you'll discover that there are lots of these classes. The class
hierarchy will grow exponentially because adding a new GUI or supporting
a different API would require creating more and more classes.

Let's solve this issue with the Bridge pattern. It suggests that
we divide the classes into two hierarchies:
- **Abstraction**: the GUI layer of the app.
- **Implementation**: the operating systems' APIs.

The abstraction object controls the appearance of the app, delegating
the actual work to the linked implementation object.
Different implementations are interchangeable as long as they follow
a common interface, enabling the same GUI to work under Windows or Linux.

As a result, you can change the GUI classes without the API-related classes.
Moreover, adding support for another operating system only requires
creating a subclass in the implementation hierarchy.

### Structure
- The **Abstraction** provides high-level control logic. It relies on
the implementation object to do the actual low-level work.
- The **Implementation** declares the interface that's common for 
all concrete implementations. An abstraction can only communicate with
an implementation object via methods that are declared here.
The abstraction may list the same methods as the implementation, but
usually the abstraction declares some complex behaviors that rely on
a wide variety of primitive operations declared by the implementation.
- **Concrete Implementations** contain platform-specific code.
- **Refined Abstractions** provide variants of control logic. Like
their parent, they work with different implementations via the general
implementation interface.
- Usually, the **Client** is only interested in working with the abstraction.
However, it's the client's job to link the abstraction object with one of the implementation object.

### Applicability
- **Use the Bridge pattern when you want to divide and organize a monolithic class that has several variants of some functionality (for example, if the class can work with different database servers).**
- **Use the pattern when you need to extend a class in several independent dimensions.**
- **Use the Bridge if you need to be able to switch implementation at runtime.**
