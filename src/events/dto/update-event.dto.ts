import { PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
    eventName?: string;
    eventDate?: Date;
    eventLocation?: string;
    totalTickets?: number;
    ticketsRemaining?: number;
  }
  

