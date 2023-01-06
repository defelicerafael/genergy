import { Component, OnInit } from '@angular/core';
import {ScrollingService}from '../../services/scrolling.service'


@Component({
  selector: 'app-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrls: ['./two-columns.component.css']
})
export class TwoColumnsComponent implements OnInit {

  constructor(
    public scroll:ScrollingService,
  ) { }

  ngOnInit(): void {
  }

}
