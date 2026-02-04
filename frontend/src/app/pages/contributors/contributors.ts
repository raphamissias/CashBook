import { Component } from '@angular/core';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContributorService } from '../../services/contributor-service';
import { ContributorGetResponse } from '../../types/contributorResponse';

@Component({
  selector: 'app-contributors',
  imports: [PrimaryInput, ReactiveFormsModule],
  templateUrl: './contributors.html',
  styleUrl: './contributors.css',
})
export class Contributors {
  contributorsForm!: FormGroup;
  contributors: ContributorGetResponse[] = [];

  constructor(private contributorService: ContributorService) {
    this.contributorsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      isActive: new FormControl(false),
    });
  }

  submit() {
    const { name, phone, isActive } = this.contributorsForm.value;

    this.contributorService.post(name, phone, isActive).subscribe({
      next: () => console.log('sucesso!'),
      error: () => console.log('error'),
    });
  }

  refreshContributors() {
    this.contributorService.get().subscribe({
      next: (res) => {
        this.contributors = res;
        console.log(this.contributors);
      },
      error: (err) => console.log(err),
    });
  }
}
