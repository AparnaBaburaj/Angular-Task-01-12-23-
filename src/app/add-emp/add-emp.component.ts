import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SeviceService } from '../sevice.service';


@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.scss'
})
export class AddEmpComponent{
  recordForm!: FormGroup;
  responseMessage!: string;
  fetchedData: any;
 

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.recordForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more form fields as needed
    });
  }

  onSubmit() {
    if (this.recordForm.valid) {
      const formData = this.recordForm.value;

      // Send data to the server using an HTTP request
      this.http.post('https://jsonplaceholder.typicode.com/users', formData)
        .subscribe(
          (response) => {
            
            console.log('Record created successfully:', response);
            this.responseMessage = 'Record created successfully';
            this.recordForm.reset();
            
            // You can handle the success response here (e.g., show a success message)
            
          },
          (error) => {
            console.error('Error creating record:', error);
            // You can handle the error here (e.g., show an error message)
          }
        );
    }
  }
}
