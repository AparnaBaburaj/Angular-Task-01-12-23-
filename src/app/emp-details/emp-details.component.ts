import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeviceService } from '../sevice.service';

@Component({
  selector: 'app-emp-details',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.scss'
})
export class EmpDetailsComponent implements OnInit{


  records: any[] = [];
  displaySingleRecord: boolean = false;
  singleRecordId: string = '';
  singleRecord: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   // this.fetchAllDetails();
  }

  fetchAllDetails(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(response => {
        console.log('All details fetched successfully', response);
        this.records = response as any[];
        this.displaySingleRecord = false; // Reset the flag
      }, error => {
        console.error('Error fetching all details', error);
      });
  }

  fetchSingleRecord(): void {
    if (this.singleRecordId) {
      this.http.get(`https://jsonplaceholder.typicode.com/users/${this.singleRecordId}`)
        .subscribe(response => {
          console.log('Single record fetched successfully', response);
          this.singleRecord = response;
          this.displaySingleRecord = true; // Set the flag to display a single record
        }, error => {
          console.error('Error fetching single record', error);
        });
    }
  }
}
