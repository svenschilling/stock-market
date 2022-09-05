import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public name!: string;
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public positiveChange!: boolean;
  public favorite!: boolean;




  constructor() { }

  ngOnInit(): void {
    this.name = 'test stock company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
    if (this.positiveChange) {
      console.log('der horst');
    }
  }

  toggleFavorite(event: Event) {
    console.log('toggle fav-state for this stock' ,event);
    this.favorite = !this.favorite;
  }
}
