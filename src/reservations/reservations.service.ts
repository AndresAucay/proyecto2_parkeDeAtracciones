import { Injectable } from '@nestjs/common';
import { PrismaClient, Reservation } from '@prisma/client';  // Importa PrismaClient y Reservation
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  private readonly prisma: PrismaClient = new PrismaClient();  // Inicializa PrismaClient

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    // Utiliza Prisma para crear y guardar la reserva en la base de datos
    const reservation = await this.prisma.reservation.create({
      data: createReservationDto,
    });

    return reservation;
  }

  async findAll(): Promise<Reservation[]> {
    return this.prisma.reservation.findMany();  // Utiliza Prisma para obtener todas las reservas
  }

  async findOne(id: number): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique({
      where: { id },
    });  // Utiliza Prisma para obtener una reserva por su ID
  }

  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    return this.prisma.reservation.update({
      where: { id },
      data: updateReservationDto,
    });  // Utiliza Prisma para actualizar una reserva por su ID
  }

  async remove(id: number): Promise<Reservation> {
    return this.prisma.reservation.delete({
      where: { id },
    });  // Utiliza Prisma para eliminar una reserva por su ID
  }
}
