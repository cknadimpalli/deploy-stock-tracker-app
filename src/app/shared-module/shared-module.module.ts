import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { MatCommonModule } from '@angular/material/core';
import { MaterialComponentsModule } from '../material-components/material-components.module';

@NgModule({
  declarations: [
    SpinnerOverlayComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialComponentsModule
  ], exports:[
    ReactiveFormsModule,
    SpinnerOverlayComponent
  ], providers:[
  ]
})
export class SharedModule { }
