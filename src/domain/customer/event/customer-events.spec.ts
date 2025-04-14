import EventDispatcher from "../../@shared/event/event-dispatcher";
import Customer from "../entity/customer";
import Address from "../value-object/address";
import { EnviaConsoleLog1Handler } from "./handler/envia-console-log1.handler";
import { EnviaConsoleLog2Handler } from "./handler/envia-console-log2.handler";
import { EnviaConsoleLogHandler } from "./handler/envia-console-log-address.handler";
import { CustomerCreatedEvent } from "./customer-created.event";
import { CustomerAddressChangedEvent } from "./customer-address-changed.event";
import EventInterface from "../../@shared/event/event.interface";

describe("Customer events tests", () => {
    it("should notify all handlers when customer is created", () => {
        const eventDispatcher = new EventDispatcher();
        const handler1 = new EnviaConsoleLog1Handler();
        const handler2 = new EnviaConsoleLog2Handler();
        const spyHandler1 = jest.spyOn(handler1, "handle");
        const spyHandler2 = jest.spyOn(handler2, "handle");

        eventDispatcher.register("CustomerCreatedEvent", handler1 as any);
        eventDispatcher.register("CustomerCreatedEvent", handler2 as any);

        const customer = new Customer("421", "Gilson Moreira");

        const events = customer.events;
        events.forEach((event: EventInterface) => {
            eventDispatcher.notify(event);
        });

        expect(spyHandler1).toHaveBeenCalled();
        expect(spyHandler2).toHaveBeenCalled();
    });

    it("should notify handler when customer address is changed", () => {
        const eventDispatcher = new EventDispatcher();
        const handler = new EnviaConsoleLogHandler();
        const spyHandler = jest.spyOn(handler, "handle");

        eventDispatcher.register("CustomerAddressChangedEvent", handler as any);

        const customer = new Customer("421", "Gilson Moreira");
        const address = new Address("Rua 10", 421, "00000-000", "Vitoria");

        customer.changeAddress(address);

        const events = customer.events;
        events.forEach((event: EventInterface) => {
            eventDispatcher.notify(event);
        });

        expect(spyHandler).toHaveBeenCalled();
    });
}); 