import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { PurposeGetResponse } from '../../types/purposesResponse.type';
import { PurposeService } from '../../services/purpose-service';

@Component({
  selector: 'app-purposes',
  standalone: true,
  imports: [CommonModule, PrimaryInput, ReactiveFormsModule],
  templateUrl: './purposes.html',
  styleUrl: './purposes.css',
})
export class Purposes {
  purposesForm!: FormGroup;
  purposes: PurposeGetResponse[] = [];

  constructor(private purposeService: PurposeService) {
    this.purposesForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      isActive: new FormControl(true, [Validators.required]),
    });
  }

  submit() {
    const { name, isActive } = this.purposesForm.value;
    this.purposeService.post(name, isActive).subscribe({
      next: () => console.log('sucesso!'),
      error: () => console.log('error'),
    });
  }

  refreshPurposes() {
    this.purposeService.get().subscribe({
      next: (res) => {
        this.purposes = [...res];
        console.log(this.purposes);
      },
      error: (err) => console.log(err),
    });
  }
}
