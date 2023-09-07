import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-show',
  templateUrl: './main-show.component.html',
  styleUrls: ['./main-show.component.css'],
})
export class MainShowComponent implements OnInit {
  enterSeries: boolean = false;
  mainBackground: string = 'url(/assets/picts/seriesWorldBackground.png)';

  serieFirst = [
    {
      id: 1,
      pict: '/assets/picts/gameOfThrones/gotLogo.png',
      wallpaper: '/assets/picts/gameOfThrones/gotBackground.jpg',
    },
  ];

  serieSecond = [
    {
      id: 1,
      pict: '/assets/picts/theExpanse/theExpanseLogo.png',
      wallpaper: '/assets/picts/theExpanse/theExpanseBackground.jpg',
    },
  ];

  serieThird = [
    {
      id: 1,
      pict: '/assets/picts/strangerThings/strangerThingsLogo.png',
      wallpaper: '/assets/picts/strangerThings/strangerThingsBackground.jpg',
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {

  }

  showUnivers(image: string) {
    this.mainBackground = 'url(' + image + ')';
    this.enterSeries = true;
  }

  hideUnivers() {
    this.mainBackground = 'url(/assets/picts/seriesWorldBackground.png)';
    this.enterSeries = false;
  }
}
