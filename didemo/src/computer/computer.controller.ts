import { Controller, Get } from '@nestjs/common';
import {CpuService} from "../cpu/cpu.service";
import { DiskService } from '../disk/disk.service';
import { PowersupplyService } from '../powersupply/powersupply.service';

@Controller('computer')
export class ComputerController {

    constructor(private cpuService: CpuService, private diskService: DiskService, private powersupplyService: PowersupplyService){}

    @Get()
    run(){
        return ['cpu info: ' + this.cpuService.compute(5,10),
                'disk info: ' + this.diskService.getData(),
                'power supply info: ' + this.powersupplyService.getSupply()];
    }
}
