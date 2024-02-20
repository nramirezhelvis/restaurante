import { Component } from '@angular/core';
import { Platillos } from '../../../model/platillos';

@Component({
  selector: 'app-platillos',
  standalone: true,
  imports: [],
  templateUrl: './platillos.component.html',
  styleUrl: './platillos.component.css'
})
export class PlatillosComponent {
  agregarAlCarrito() {
    alert("se agrego al carrito :)");
  }

  verAgregado() {
    alert("ver agregado");
  }

  data: Platillos[] = [
    {
      "name": "arroz con pollo",
      "codeProduct": "#00000001",
      "image": "http://localhost:8080/images/productos/arroz_con_pollo.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    },
    {
      "name": "lomo saltado",
      "codeProduct": "#00000003",
      "image": "http://localhost:8080/images/productos/lomo_saltado.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    },
    {
      "name": "pure de papa con pollo al sillao",
      "codeProduct": "#00000005",
      "image": "http://localhost:8080/images/productos/pure_papa_con_pollo_al_sillao.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    },
    {
      "name": "tallarin saltado",
      "codeProduct": "#00000006",
      "image": "http://localhost:8080/images/productos/tallarin_saltado.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    },
    {
      "name": "arroz con pollo",
      "codeProduct": "#00000001",
      "image": "http://localhost:8080/images/productos/arroz_con_pollo.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    },
    {
      "name": "lomo saltado",
      "codeProduct": "#00000003",
      "image": "http://localhost:8080/images/productos/lomo_saltado.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    },
    {
      "name": "pure de papa con pollo al sillao",
      "codeProduct": "#00000005",
      "image": "http://localhost:8080/images/productos/pure_papa_con_pollo_al_sillao.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    },
    {
      "name": "tallarin saltado",
      "codeProduct": "#00000006",
      "image": "http://localhost:8080/images/productos/tallarin_saltado.jpg",
      "date": "2024-02-17",
      "price": 11.50,
      "quantity": 12
    }
  ];
}
