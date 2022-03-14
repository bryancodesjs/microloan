import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  solicitudes = [
    {
      numero: 2,
      fecha: '06 Marzo 2022',
      nombre: 'Luis Abinader',
      monto: 45000,
      estado: 'pendiente'
    },
    {
      numero: 3,
      fecha: '07 Marzo 2022',
      nombre: 'Hipolito Mejia',
      monto: 23000,
      estado: 'pendiente'
    },
    {
      numero: 4,
      fecha: '08 Marzo 2022',
      nombre: 'Danilo Medina',
      monto: 89000,
      estado: 'pendiente'
    }
  ]
}
