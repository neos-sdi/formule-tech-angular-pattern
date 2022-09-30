import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Operators } from '../../models/computer'
import { AddService } from './services/add.service'
import { ComputeService } from './services/compute.service'
import { DivideService } from './services/divide.service'
import { MultiplyService } from './services/multiply.service'
import { SubstractService } from './services/substract.service'

@Component({
    selector: 'app-computer',
    templateUrl: './computer.component.html',
    styleUrls: ['./computer.component.scss'],
})
export class ComputerComponent implements OnInit {
    formGroup = new FormGroup({
        num1: new FormControl(0),
        num2: new FormControl(0),
    })
    operators = Operators
    result = ''
    constructor(
        private addService: AddService,
        private divideService: DivideService,
        private substractService: SubstractService,
        private multiplyService: MultiplyService,
        private computerService: ComputeService
    ) {}

    ngOnInit(): void {}
    add() {
        this.result = this.addService.compute(this.formGroup.value.num1!, this.formGroup.value.num2!)
    }

    sub() {
        this.result = this.substractService.compute(this.formGroup.value.num1!, this.formGroup.value.num2!)
    }

    mult() {
        this.result = this.multiplyService.compute(this.formGroup.value.num1!, this.formGroup.value.num2!)
    }

    div() {
        this.result = this.divideService.compute(this.formGroup.value.num1!, this.formGroup.value.num2!)
    }

    strategy(strategy: Operators) {
        this.result = this.computerService.compute(this.formGroup.value.num1!, this.formGroup.value.num2!, strategy)
    }
}
