// events.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient, Event } from '@prisma/client';  // Asegúrate de importar PrismaClient y Event
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  private readonly prisma: PrismaClient = new PrismaClient();

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const event = await this.prisma.event.create({
      data: createEventDto,
    });

    return event;
  }

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async findOne(id: number): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    return this.prisma.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async remove(id: number): Promise<Event> {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
