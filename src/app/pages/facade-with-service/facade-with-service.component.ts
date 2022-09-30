import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FacadeService } from './services/facade.service';

@Component({
  selector: 'app-facade-with-service',
  templateUrl: './facade-with-service.component.html',
  styleUrls: ['./facade-with-service.component.scss']
})
export class FacadeWithServiceComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
})
  constructor(public service: FacadeService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.formGroup.valid) {
        this.service.addUser(this.formGroup.value.name!)
        this.formGroup.reset()
    }
}

}
