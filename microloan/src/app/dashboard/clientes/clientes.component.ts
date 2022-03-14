import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clientes = [
    {
      nombre: 'Cliente 1',
      ingreso: '4 Abril 2019',
      prestamos: 3,
      prestamosActivos: 1,
      atrasoPromedio: 15,
      direccion: '3 Cherry Lane, Doylestown,pa, 18901  United States',
      telefono: '9883018728',
      email: 'mail@gmail.com'
    },
    {
      nombre: 'Cliente 2',
      ingreso: '9 Marzo 2019',
      prestamos: 6,
      prestamosActivos: 1,
      atrasoPromedio: 2,
      direccion: '8 N New Street, Dover,de, 19904  United States',
      telefono: '9134854391',
      email: 'mail@gmail.com'
    }
  ]
}
