import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowersupplyModule } from '../powersupply/powersupply.module';

@Module({
  imports: [PowersupplyModule],
  exports: [DiskService],
  providers: [DiskService]
})
export class DiskModule {}
