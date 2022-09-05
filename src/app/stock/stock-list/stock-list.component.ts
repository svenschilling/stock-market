import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  names: string[];

  constructor() { 
    this.names = ['alf', 'günther','horst'];

  }

  ngOnInit(): void {
  }

}
