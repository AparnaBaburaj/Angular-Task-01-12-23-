import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { SeviceService } from './sevice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,AddEmpComponent,EmpDetailsComponent,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';
}
