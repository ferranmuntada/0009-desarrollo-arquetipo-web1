import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { MenuItems } from '../../shared/interfaces/menuitems.interface';
@Component({
  selector: 'mln-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: UserInterface = {
    name: 'Name',
    lastname: 'Surname1 Surname2',
    patrimony: 0.0,
  };
  @Input() menuItems: Array<MenuItems> = [
    { text: 'Link 1', class: 'active', navigation: '#' },
    { text: 'Link 2', class: '', navigation: '#' },
    { text: 'Link 3', class: '', navigation: '#' },
    { text: 'Link 4', class: '', navigation: '#', disabled: true },
  ];
  @Output() backButtonAction: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() informationUserAction: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() navigationAction: EventEmitter<MenuItems> = new EventEmitter<
    MenuItems
  >();

  public amountInt: number;
  public amountDec: number;
  public initials: string;
  public navigationSelected: string;

  constructor() {}

  ngOnInit(): void {
    this.amountInt = Math.trunc(this.user.patrimony);
    this.amountDec = Math.trunc((this.user.patrimony % 1) * 100);
    this.initials =
      this.user.name[0].toUpperCase() + this.user.lastname[0].toUpperCase();
  }

  public goBackAction(): void {
    this.backButtonAction.emit(true);
  }

  public informationUser(): void {
    this.informationUserAction.emit(true);
  }

  public navigationMenu(item: MenuItems): void {
    this.navigationSelected = item.text;
    this.navigationAction.emit(item);
  }

  public navigationActive(item: MenuItems): boolean {
    const isNavigationSelected = !this.navigationSelected && item.class;
    const isCurrentNavigationActive = this.navigationSelected === item.text;
    if (!item.disabled && (isNavigationSelected || isCurrentNavigationActive)) {
      this.menuItems = this.menuItems.map((d) => {
        d.class = '';
        if (item.text === d.text) {
          d.class = 'active';
        }
        return d;
      });
      return true;
    }
    return false;
  }
}
