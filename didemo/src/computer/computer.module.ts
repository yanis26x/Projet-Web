import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';
import { PowersupplyModule } from '../powersupply/powersupply.module';

@Module({
  imports: [CpuModule, DiskModule, PowersupplyModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
