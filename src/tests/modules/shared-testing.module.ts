import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { NavController, provideIonicAngular } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  providers: [
    provideIonicAngular(),
    provideRouter([]),
    { provide: NavController, useValue: {} },
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedTestingModule {}
