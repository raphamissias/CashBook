import { Component } from '@angular/core';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContributorGetResponse } from '../../types/contributorResponse';
import { ContributorService } from '../../services/contributor-service';
import { CommonModule } from '@angular/common';
import { PurposeGetResponse } from '../../types/purposesResponse.type';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PrimaryInput, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  entryForm!: FormGroup;
  contributorsList: ContributorGetResponse[] | null = null;
  purposesList: PurposeGetResponse[] | null = null;

  constructor(private contributorService: ContributorService) {
    this.entryForm = new FormGroup({
      contributorId: new FormControl('', Validators.required),
      purposeId: new FormControl('', Validators.required),
      sumValue: new FormControl('', Validators.required),
      totalValue: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.entryForm.value);
  }

  ngOnInit(): void {
    this.contributorService.get().subscribe({
      next: (res) => {
        if (res.status == 200) this.contributorsList = res.body;
        console.log(this.contributorsList);
      },
      error: (err) => console.log(err),
    });
  }
}
