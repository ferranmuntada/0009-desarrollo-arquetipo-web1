import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mln-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss'],
})
export class ProfileTableComponent implements OnInit {
  @Input() public title: string;

  constructor() {}

  ngOnInit(): void {}
}
