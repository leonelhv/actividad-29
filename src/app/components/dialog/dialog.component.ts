import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    this.initForm();
  }

  articuloForm!: FormGroup;

  get form() {
    return this.articuloForm.controls;
  }

  onSave() {
    const { codigo, descripcion, precio } = this.articuloForm
      .value as Partial<Producto>;

    if (this.articuloForm.valid) {
      const newProducto = {
        codigo: Number(codigo),
        descripcion: descripcion,
        precio: Number(precio),
      };
      this.productoService.addProduct(newProducto);
      this.initForm();
      this.dialogRef.close();
    }
  }
  private initForm() {
    this.articuloForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.min(1)]],
      descripcion: ['', [Validators.required, Validators.minLength(4)]],
      precio: ['', [Validators.required, Validators.min(5)]],
    });
  }
}
