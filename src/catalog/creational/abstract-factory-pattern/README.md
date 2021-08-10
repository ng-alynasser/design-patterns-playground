### Definition
**Abstract Factory** is a creational design pattern that lets you
produce families of related objects without specifying their concrete classes.

### Structure

- `Button` and `Checkbox` declare interfaces for a set of distinct
but related products which make up a product family.
- `WindowsButton`, `WindowsCheckbox`, `MacButton`, and `MacCheckbox`
are various implementations of abstract products, grouped by variants. Each
abstract product `Button`/`Checkbox` must be implemented in all given
variants (Windows/Mac).
- The `GuiFactory` declares a set of methods for creating each of the `Button` and `Checkbox`.
- `WindowFactory` and `MacFactory` implement creation methods of the `GuiFactory`.
Each of them corresponds to a specific variant of `Button` and `Checkbox` and creates only those variants.

### Applicability
- **Use the Abstract Factory when your code needs to work with
various families of related products, but you don't want it to
depend on the concrete classes of those products - they might
be unknown beforehand, or you simply want to allow for future
extensibility.**
- Consider implementing the Abstract Factory when you have a class
with a set of Factory Methods that blur its primary responsibility.

