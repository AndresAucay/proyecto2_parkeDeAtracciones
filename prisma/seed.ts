import { PrismaClient } from '@prisma/client';

    // Inicializar el Prisma Client
    const prisma = new PrismaClient();

    async function main() {
    try {
        // Crear una reserva ficticia
        const reservation = await prisma.reservation.upsert({
        where: { id: 1 }, // Puedes cambiar esto según tus necesidades de búsqueda
        update: {},
        create: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '123456789',
            numberOfTickets: 2,
            eventDate: new Date('2023-12-31T18:00:00Z'),
            eventId: 1, // Puedes cambiar esto según tus necesidades
        },
        });

        // Crear un evento ficticio
        const event = await prisma.event.upsert({
        where: { id: 1 }, // Puedes cambiar esto según tus necesidades de búsqueda
        update: {},
        create: {
            eventName: 'Awesome Event',
            eventDate: new Date('2023-12-31T18:00:00Z'),
            eventLocation: 'Amusement Park',
            totalTickets: 100,
            ticketsRemaining: 98, // Puedes cambiar esto según tus necesidades
        },
        });

        console.log({ reservation, event });
    } catch (error) {
        console.error(error);
    } finally {
        // Cerrar el Prisma Client al finalizar
        await prisma.$disconnect();
    }
    }

    // Ejecutar la función principal
    main();
