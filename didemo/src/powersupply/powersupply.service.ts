import { Injectable } from '@nestjs/common';
import {Scope } from '@nestjs/common'; 

@Injectable()
export class PowersupplyService {
    private supply = 500;
    supplyPower(watts: number) {
        return `Supplying ${watts} watts of power.`;
    }

    getSupply() {
        return this.supply;
    }
}   
