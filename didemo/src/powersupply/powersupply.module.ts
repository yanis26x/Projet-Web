import { Module } from '@nestjs/common';
import { PowersupplyService } from './powersupply.service';

@Module({
  exports: [PowersupplyService],
  providers: [PowersupplyService]
})
export class PowersupplyModule {}
