import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];
  dataSource!: MatTableDataSource<Producto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productoService: ProductoService,
    public dialog: MatDialog
  ) {
    // Asigna los datos a la fuente de datos para que la tabla los represente y ademas de configuarar el paginador y el sort
    this.productoService.getProductos().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    producto: Producto
  ): void {
    this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { ...producto },
    });
  }
}
