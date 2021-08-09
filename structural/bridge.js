/**
 * The bridge pattern takes the adapter pattern to a new level. Given an interface, we can build multiple
 * adapters, each one of which acts as an intermediary to a different implementation.
 *
 * An example is dealing with two different services that provide more or less the same functionality
 * and are used in a fail over configuration. Neither service provides exactly the interface required
 * by the application and both services provide different APIs. In order to simplify the code, adapters
 * are written to provide a consistent interface and provide fills so that each API can be called consistently.
 */
