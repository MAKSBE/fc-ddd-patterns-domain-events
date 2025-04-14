import { IDomainEvent } from "../../@shared/domain/domain-event.interface";

export class CustomerCreatedEvent implements IDomainEvent {
    aggregate_id: string;
    occurred_on: Date;
    event_version: number = 1;
    eventData: any;

    constructor(eventData: any) {
        this.aggregate_id = eventData.id;
        this.occurred_on = new Date();
        this.eventData = eventData;
    }
} 