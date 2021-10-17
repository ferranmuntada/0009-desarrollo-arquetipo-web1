import { Component, OnInit, ViewChild } from '@angular/core';
import { FormLoginComponent } from './components/form-login.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    @ViewChild(FormLoginComponent, { static: false }) public formLoginComponent: FormLoginComponent;

    constructor() {}

    ngOnInit(): void {}
}
