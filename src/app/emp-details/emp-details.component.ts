import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeviceService } from '../sevice.service';
import { response } from 'express';

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
  updatedData:any={};

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

  deleteRecord(recordId: string): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${recordId}`)
      .subscribe(() => {
        console.log('Record deleted successfully',recordId);
        this.fetchAllDetails(); // Refresh the list after deletion
      }, error => {
        //console.error('Error deleting record', error);
        console.log('error');
      });
  }

  updateRecord(recordId: string, updatedData: any): void {
    this.http.put(`https://jsonplaceholder.typicode.com/users/${recordId}`, updatedData)
      .subscribe(() => {
        console.log('Record updated successfully',updatedData);
        this.fetchAllDetails(); // Refresh the list after update
      }, error => {
        //console.error('Error updating record', error);
        console.log('error');

      });
  }

  patchRecord(recordId: string, updatedData: any): void {
    this.http.patch(`https://jsonplaceholder.typicode.com/users/${recordId}`, updatedData)
      .subscribe(() => {
        console.log('Record patched successfully',recordId,updatedData);
        this.fetchAllDetails(); // Refresh the list after patch
      }, error => {
        //console.error('Error patching record', error);
        console.log('error');
      });
  }
}
