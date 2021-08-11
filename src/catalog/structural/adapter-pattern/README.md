### Definition
**Adapter** is a structural design pattern that allows objects with incompatible interfaces to collaborate.

### Problem
Imagine that you're creating a stock market monitoring app. The app
downloads the stock data from multiple resources in XML format and then
display nice-looking charts and diagrams for the user.

At some point, you decide to improve the app by integrating a smart
3rd-party library. But there's a catch: the analytics library only works
with data in JSON format.

You could change the library to work with XML. However, this might
break some existing code that relies on the library, And worse, you might
not have access to the library's source code in the first place, making
this approach impossible.

### Solution
You can create an adapter. This is a special object that converts
the interface of one object so that another object can understand it.

An adapter wraps one of the objects to hide the complexity of conversion
happening behind the scenes. The wrapped object isn't even aware of the adapter.
For example, you can wrap an object that operates in meters to kilometers with
an adapter that converts all of the data to imperial units such as feet and miles.

Adapters can not only convert data into various formats but can also
help objects with different interfaces collaborate. Here's how it works:

1. The adapter gets an interface, compatible with one of the existing objects.
2. Using this interface, the existing object can safely call the adapter's methods.
3. Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

Sometimes it's even possible to create two-way adapter that convert
the calls in both directions.

Let's go back to our stock market app. To solve the dilemma of incompatible
formats, you can create XML-to-JSON adapters for every class of the analytics
library that your code works with directly. Then you adjust your code to communicate
with the library only via those adapters. When an adapter receives a call,
it translates the incoming XML data into a JSON structure and passes the call
to the appropriate methods of a wrapped analytics object.

### Structure
- **Object Adapter**

This implementation uses the composite principle: the adapter implements
the interface of one object and wraps the other one. It can be implemented
in all popular programming languages.

1. The Client is a class that contains the existing business logic of the program.
2. The Client Interface describes a protocol that other classes must follow to be able to collaborate with the client code.
3. The Service is some useful class (usually 3rd-party or legacy). The client can't use this class directly because it has an incompatible interface.
4. The Adapter is a class that's able to work with both the client and the service: it implements the client interface, while wrapping
the service object. The adapter receives calls from the client via
the adapter interface and translates them into calls to the wrapped service object in a format
it can understand.
5. The client code doesn't get coupled to the concrete adapter class
as long as it works with the adapter via the client interface. Thanks to this,
you can introduce new types of adapters into the program without
breaking the existing client code. This can be useful when the interface of
the service class gets changed or replaced: you can create a new adapter class
without changing the client code.

### Applicability
- **Use the Adapter pattern when you want to use some existing class, but its interface isn't compatible with the rest of your code.**
- **Use the Adapter pattern when you want to reuse several existing subclasses that lack some common functionality that can't be added to the superclass.**
