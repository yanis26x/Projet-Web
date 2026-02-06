import { Injectable } from '@nestjs/common';
import { PowersupplyService } from '../powersupply/powersupply.service';

@Injectable()
export class DiskService {
    constructor(private powerSupplyService: PowersupplyService) {}
    getData() {
        this.powerSupplyService.supplyPower(100);
        return "Here is your data from the disk.";
    }
}
