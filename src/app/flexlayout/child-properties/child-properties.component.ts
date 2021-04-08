import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-properties',
  templateUrl: './child-properties.component.html',
  styleUrls: ['./child-properties.component.css']
})
export class ChildPropertiesComponent implements OnInit {
  flexGrow = 0;
  flexShrink = 0;
  flexBasis = 'auto';

  constructor() { }
  ngOnInit(): void {
  }

}
