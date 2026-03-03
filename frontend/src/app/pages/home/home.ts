import { Component } from '@angular/core';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContributorGetResponse } from '../../types/contributorResponse';
import { ContributorService } from '../../services/contributor-service';
import { CommonModule } from '@angular/common';
import { PurposeGetResponse } from '../../types/purposesResponse.type';
import { DataGridView } from '../../components/data-grid-view/data-grid-view';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PrimaryInput, ReactiveFormsModule, DataGridView],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  entryForm!: FormGroup;
  contributorsList: ContributorGetResponse[] = [];
  purposesList: PurposeGetResponse[] = [];
  entriesList: Object[] = [
    { name: 'test', purpose: 'test', date: '01-01-26' },
    { name: 'test', purpose: 'test', date: '01-01-26' },
  ];

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
        if (res.status == 200) this.contributorsList = res.body ?? [];
        console.log('home.ts: ' + this.contributorsList);
      },
      error: (err) => console.log(err),
    });
  }
}
