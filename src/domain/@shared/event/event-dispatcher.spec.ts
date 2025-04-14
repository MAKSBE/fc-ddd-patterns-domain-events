import EventDispatcher from "./event-dispatcher";
import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

class TestEvent implements EventInterface {
    aggregate_id: string;
    occurred_on: Date;
    event_version: number = 1;
    eventData: any;

    constructor(eventData: any) {
        this.aggregate_id = "123";
        this.occurred_on = new Date();
        this.eventData = eventData;
    }
}

class TestEventHandler implements EventHandlerInterface<TestEvent> {
    handle(event: TestEvent): void {
        console.log("Test event handler was called");
    }
}

describe("Domain events tests", () => {
    it("should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new TestEventHandler();

        eventDispatcher.register("TestEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["TestEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["TestEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["TestEvent"][0]).toMatchObject(eventHandler);
    });

    it("should unregister an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new TestEventHandler();

        eventDispatcher.register("TestEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["TestEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregister("TestEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["TestEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["TestEvent"].length).toBe(0);
    });

    it("should unregister all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new TestEventHandler();

        eventDispatcher.register("TestEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["TestEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregisterAll();

        expect(eventDispatcher.getEventHandlers["TestEvent"]).toBeUndefined();
    });

    it("should notify all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new TestEventHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("TestEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["TestEvent"][0]).toMatchObject(eventHandler);

        const event = new TestEvent({
            name: "Test event"
        });

        eventDispatcher.notify(event);

        expect(spyEventHandler).toHaveBeenCalled();
    });
});
