import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, DialogComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [TableComponent, DialogComponent],
})
export class ComponentsModule {}
