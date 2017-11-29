import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  status: string = 'logged';

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  logout(event) {
    this.status = 'unlogged';
    console.log('logout!')
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }
}
