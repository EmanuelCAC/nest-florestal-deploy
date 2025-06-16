import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AutoInfracaoModule } from './autoInfracao/autoInfracao.module';
import { AutoInfracaoController } from './autoInfracao/autoInfracao.controller';
import { AutoInfracaoService } from './autoInfracao/autoInfracao.service';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    AutoInfracaoModule,
    JwtModule.register({
      secret: 'seu-segredo',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController, AutoInfracaoController],
  providers: [AuthService, AutoInfracaoService],
})
export class AppModule {}
