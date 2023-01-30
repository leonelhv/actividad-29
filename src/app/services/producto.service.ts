import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private firestore: Firestore) {}

  addProduct(producto: Partial<Producto>) {
    const productoRef = collection(this.firestore, 'productos');
    return addDoc(productoRef, producto);
  }

  getProductos(): Observable<Producto[]> {
    const productoRef = collection(this.firestore, 'productos');
    return collectionData(productoRef, { idField: 'id' }) as Observable<
      Producto[]
    >;
  }

  deleteProducto(producto: Producto) {
    const productoRef = doc(this.firestore, `productos/${producto.id}`);
    return deleteDoc(productoRef);
  }

  updateProducto(id: string, producto: Producto) {
    const productoRef = doc(this.firestore, `productos/${id}`);
    return updateDoc(productoRef, { ...producto });
  }
}
