import { Module } from '@nestjs/common';
import { TestesModule } from './testes/testes.module';
@Module({
  imports: [TestesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
