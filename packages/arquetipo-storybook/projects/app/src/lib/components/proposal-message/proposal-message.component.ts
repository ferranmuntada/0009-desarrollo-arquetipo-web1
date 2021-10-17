import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mln-proposal-message',
  templateUrl: './proposal-message.component.html',
  styleUrls: ['./proposal-message.component.scss'],
})
export class ProposalMessageComponent implements OnInit {
  @Input() icon: string;
  @Input() textUp: string;
  @Input() textDonw: string;
  constructor() {}

  ngOnInit(): void {}
}
