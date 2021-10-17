import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mln-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input() settings: { textInputDefault: string; icon: string };
  @Input() amount: number;
  @Output() changes: EventEmitter<string> = new EventEmitter<string>();

  public formGroupSearch: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroupSearch = this.formBuilder.group({ search: [''] });
    this.subscribeToFormFilters();
  }

  private subscribeToFormFilters(): void {
    this.formGroupSearch.valueChanges.subscribe(({ search }): void =>
      this.changes.emit(search)
    );
  }
}
