import { Component } from '@angular/core';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContributorService } from '../../services/contributor-service';
import { ContributorGetResponse } from '../../types/contributorResponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contributors',
  standalone: true,
  imports: [CommonModule, PrimaryInput, ReactiveFormsModule],
  templateUrl: './contributors.html',
  styleUrl: './contributors.css',
})
export class Contributors {
  contributorsForm!: FormGroup;
  contributors: ContributorGetResponse[] = [];

  constructor(private contributorService: ContributorService) {
    this.contributorsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      isActive: new FormControl(true),
    });
  }

  submit() {
    const { name, phoneNumber, isActive } = this.contributorsForm.value;

    this.contributorService.post(name, phoneNumber, isActive).subscribe({
      next: () => console.log('sucesso!'),
      error: () => console.log('error'),
    });
  }

  refreshContributors() {
    this.contributorService.get().subscribe({
      next: (res) => {
        this.contributors = [...res];
        console.log(this.contributors);
      },
      error: (err) => console.log(err),
    });
  }
}
