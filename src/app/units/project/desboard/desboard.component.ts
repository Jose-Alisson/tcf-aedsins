import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-desboard',
  templateUrl: './desboard.component.html',
  styleUrls: ['./desboard.component.css'],
})
export class DesboardComponent implements OnInit {
  img_he: string = 'assets/internet.jpg';
  currentRouter: string = 'aedsins';
  subTitle: string = 'A era digital e seus impactos na sociedade';

  constructor(private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        switch (event.url) {
          case '/units/aedsins':
            this.currentRouter = 'aedsins';
            this.img_he = 'assets/internet.jpg';
            this.subTitle = 'A era digital e seus impactos na sociedade';
            break;
          case '/units/metaverso':
            this.currentRouter = 'metaverso';
            this.img_he = 'assets/metaverso.jpg';
            this.subTitle = 'A tecnologia do futuro';
            break;
          case '/units/qled':
            this.currentRouter = 'qled';
            this.img_he = 'assets/qled.jpg';
            this.subTitle = 'uma tecnologia que esta presente em telas';
            break;
          case '/units/sobre':
            this.currentRouter = 'sobre';
            this.img_he = 'assets/escola.jpg';
            this.subTitle = 'Aqui você vai longe';
            break;
          default:
            this.subTitle = 'A era digital e seus impactos na sociedade';
            break;
        }
      });
    /*window.addEventListener("scroll", function(){
        this.document.getElementById("navbar")?.classList.toggle("on", window.scrollY > 0);
      })*/
  }

  ngOnInit(): void {}

  setCurrentRouter(name: string) {
    this.currentRouter = name;

    switch (name) {
      case 'aedsins':
        this.img_he = 'assets/internet.jpg';
        this.subTitle = 'A era digital e seus impactos na sociedade';
        break;
      case 'metaverso':
        this.img_he = 'assets/metaverso.jpg';
        this.subTitle = 'A tecnologia do futuro';
        break;
      case 'qled':
        this.img_he = 'assets/qled.jpg';
        this.subTitle = 'uma tecnologia que esta presente em telas';
        break;
      case 'sobre':
        this.img_he = 'assets/escola.jpg';
        this.subTitle = 'Aqui você vai longe';
        break;
      default:
        this.subTitle = 'sei la';
        break;
    }
  }

  expanded() {
    document.querySelector('.navbar')?.classList.toggle('on');
    document.querySelector('.nav-con')?.classList.toggle('on');
    document.querySelector('.nav-min-con')?.classList.toggle('on');
    document.querySelector('.nav-itens')?.classList.toggle('on');
  }
}
