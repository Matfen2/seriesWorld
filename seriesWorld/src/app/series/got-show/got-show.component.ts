import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-got-show',
  templateUrl: './got-show.component.html',
  styleUrls: ['./got-show.component.css']
})
export class GotShowComponent {
    gotId!: number;
    gotDetails: any;

    gotData = [
      {
        id: 1,
        affiche: ''
      }
    ]

    constructor (private routes: ActivatedRoute) {}

    ngOnInit(): void {
      this.routes.params.subscribe((params) => {
        this.gotId =+ params['id'];
        this.gotDetails = this.gotData.find((first) => first.id === this.gotId)
      })
    }
}
