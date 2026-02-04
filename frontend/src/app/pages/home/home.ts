import { Component } from '@angular/core';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [PrimaryInput, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  entryForm!: FormGroup;

  constructor() {
    this.entryForm = new FormGroup({
      contributorId: new FormControl(0, Validators.required),
      purposeId: new FormControl(0, Validators.required),
      sumValue: new FormControl('', Validators.required),
      totalValue: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.entryForm.value);
  }
}
