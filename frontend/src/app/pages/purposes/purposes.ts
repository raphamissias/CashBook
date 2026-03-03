import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { PurposeGetResponse } from '../../types/purposesResponse.type';
import { PurposeService } from '../../services/purpose-service';
import { DataGridView } from '../../components/data-grid-view/data-grid-view';

@Component({
  selector: 'app-purposes',
  standalone: true,
  imports: [CommonModule, PrimaryInput, ReactiveFormsModule, DataGridView],
  templateUrl: './purposes.html',
  styleUrl: './purposes.css',
})
export class Purposes {
  purposesForm!: FormGroup;
  purposesList: PurposeGetResponse[] = [];

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

  listPurposes() {
    this.purposeService.get().subscribe({
      next: (res) => {
        if (res.status == 200) this.purposesList = res.body ?? [];
        console.log('home.ts: ' + this.purposesList);
      },
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {
    this.listPurposes();
  }

  ngOnChanges() {
    this.listPurposes();
  }
}
