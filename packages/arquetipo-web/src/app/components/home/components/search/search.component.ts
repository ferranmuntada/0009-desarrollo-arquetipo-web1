import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  public settings = { textInputDefault: 'Search', icon: 'search' };
  public amount = 5;

  constructor() { }

  ngOnInit(): void {
  }

  public changes(text: string): void {
    console.log(text);
    this.searchTextChange.emit(text);
  }
}
