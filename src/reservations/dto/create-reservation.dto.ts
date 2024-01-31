// create-reservation.dto.ts
export class CreateReservationDto {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    numberOfTickets: number;
    eventDate: Date;
    eventId: number;  // Asegúrate de que coincida con el tipo y nombre del campo en tu modelo
}
