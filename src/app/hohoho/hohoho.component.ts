import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';

@Component({
   selector: 'hohoho',
    templateUrl: 'hohoho.component.html'
})

export class HoHoHoComponent implements OnInit {
    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }
}