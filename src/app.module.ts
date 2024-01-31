import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ReservationsModule } from './reservations/reservations.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [PrismaModule, ReservationsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
