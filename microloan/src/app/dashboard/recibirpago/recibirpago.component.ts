import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recibirpago',
  templateUrl: './recibirpago.component.html',
  styleUrls: ['./recibirpago.component.scss']
})
export class RecibirpagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prestamo = {
    numero: '023949',
    cliente: 'Raul Rodriguez',
    monto: '22000',
    tasa: '10',
    pagado: '10000',
    atraso: '2200',
    montoCuotas: '2200'
  }
}
