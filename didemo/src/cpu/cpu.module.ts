import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowersupplyModule } from '../powersupply/powersupply.module';

@Module({
  exports: [CpuService],
  imports: [PowersupplyModule],
  providers: [CpuService]
})
export class CpuModule {}
