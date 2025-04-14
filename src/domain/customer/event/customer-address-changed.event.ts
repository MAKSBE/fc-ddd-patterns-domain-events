import { IDomainEvent } from "../../@shared/domain/domain-event.interface";
import Address from "../value-object/address";

export interface CustomerAddressChangedEventData {
    id: string;
    name: string;
    address: Address;
}

export class CustomerAddressChangedEvent implements IDomainEvent {
    aggregate_id: string;
    occurred_on: Date;
    event_version: number = 1;
    eventData: CustomerAddressChangedEventData;

    constructor(eventData: CustomerAddressChangedEventData) {
        this.aggregate_id = eventData.id;
        this.occurred_on = new Date();
        this.eventData = eventData;
    }
} 