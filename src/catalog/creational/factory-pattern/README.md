###Structure

- The `Dialog` declares the interface, which is common to all objects that can be produced by the `DialogBaseFactory` and its subclasses.
- `WindowsDialog` and `WebDialog` are different implementations of the `Dialog` interface.
- The `DialogBaseFactory` declares the `createDialog` method that returns new `Dialog` objects. It's important that the return type of this method matches the `Dialog` interface.
- `WindowsDialogFactory` and `WebDialogFactory` override the `createDialog` method, so it returns a different type of `Dialog`.

Note that the factory method doesn't have to create new instances all the time. It cal also return existing objects from a cache, an object pool, or another source.

### Applicability

- **Use the Factory Method when you don't know beforehand the exact types and dependencies of the objects your code should work with.**

The factory method pattern separate `Dialog` construction code from the code that actually uses the dialog. Therefore it's easier to extend the dialog construction code independently from the rest of the code.
For example, to add a new dialog type to the app, you'll only need to create a new dialog subclass and override the `createDialog` method in it.

- **Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components**

Inheritance is probably the easiest way to extend the default behavior
of a library or a framework. But how would the framework recognize that your subclass should be
used instead of a standard component?

The solution is to reduce the code that constructs components across
the framework into a single factory method that let anyone overrides this method
in addition to extending the component itself.

- **Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time**
