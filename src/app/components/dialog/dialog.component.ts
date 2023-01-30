import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(private fb: FormBuilder) {}

  articuloForm = this.fb.group({
    codigo: [],
    descripcion: [],
    precio: [],
  });

  get form() {
    return this.articuloForm.controls;
  }
}
