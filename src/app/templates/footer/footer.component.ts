import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{ GlobalComponent,Nav } from '../global-component';
import { ScrollingService } from '../../services/scrolling.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [TitleCasePipe]
})
export class FooterComponent implements OnInit {

  public nav:Nav[] = GlobalComponent.navItems;

  constructor(
    public scroll:ScrollingService,
  ) { }

  ngOnInit(): void {
  }

}
