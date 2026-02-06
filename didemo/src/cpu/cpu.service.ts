import { Injectable } from '@nestjs/common';
import { PowersupplyService } from '../powersupply/powersupply.service';

@Injectable()
export class CpuService {

    constructor(private powerSupplyService: PowersupplyService) {}
    compute(a: number, b: number) {
        this.powerSupplyService.supplyPower(200);
        return a + b;
    }
}
