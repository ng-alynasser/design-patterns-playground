/**
 * Identification:
 *  Factory methods can be recognized by creation methods, which create objects from concrete classes, but
 *  return them as objects of abstract type or interface.
 *
 * The Creator class declares the factory method that is supposed to return an object of Product class.
 * The Creator's subclasses usually provide the implementation of this method.
 */

abstract class Dialog {
  public abstract createButton(): Button;
}

/**
 * Concrete creators override the factory method in order to change the resulting product's type,
 * even though the concrete product is actually returned from the method. This way Creator can
 * stay independent of concrete product classes.
 */

class WindowsDialog extends Dialog {
  public createButton(): Button {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  public createButton(): Button {
    return new HTMLButton();
  }
}

/**
 * The product interface provides the operations that all concrete products must implement.
 */
export interface Button {
  render(): void;
  onClick(): void;
}

/**
 * Concrete products provide various implementations of the Product interface.
 */

export class WindowsButton implements Button {
  render() {
    console.log("WindowsButton rendered");
  }

  onClick() {
    console.log("WindowsButton clicked");
  }
}

export class HTMLButton implements Button {
  render() {
    console.log("HTMLButton rendered");
  }

  onClick() {
    console.log("HTMLButton clicked");
  }
}

/**
 * The client code works with an instance of a concrete creator, albeit through its base interface.
 * As long as the client keeps working with the creator via the base interface, you can pass it
 * any creator's concrete class.
 */
function clientCode(dialog: Dialog): void {
  const button = dialog.createButton();
  button.onClick();
  button.render();
}

/**
 * The application picks a creator's type depending on the configuration or the environment.
 */
console.log(`App launched with WindowsDialog`);
clientCode(new WindowsDialog());
console.log(" ");

console.log(`App launched with WebDialog`);
clientCode(new WebDialog());
