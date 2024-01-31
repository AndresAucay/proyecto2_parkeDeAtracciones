import { Injectable } from '@nestjs/common';
import { PrismaClient, Reservation } from '@prisma/client';  
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  private readonly prisma: PrismaClient = new PrismaClient();  

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    
    const reservation = await this.prisma.reservation.create({
      data: createReservationDto,
    });

    return reservation;
  }

  async findAll(): Promise<Reservation[]> {
    return this.prisma.reservation.findMany();  
  }

  async findOne(id: number): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique({
      where: { id },
    });  
  }

  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    return this.prisma.reservation.update({
      where: { id },
      data: updateReservationDto,
    }); 
  }

  async remove(id: number): Promise<Reservation> {
    return this.prisma.reservation.delete({
      where: { id },
    });  
  }
}
