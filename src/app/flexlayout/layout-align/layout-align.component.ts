import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-align',
  templateUrl: './layout-align.component.html',
  styleUrls: ['./layout-align.component.css']
})
export class LayoutAlignComponent implements OnInit {

  alignments = [
    'none',
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly'
  ];

  alignment = 'none';


  constructor() { }

  ngOnInit(): void {
  }

}
