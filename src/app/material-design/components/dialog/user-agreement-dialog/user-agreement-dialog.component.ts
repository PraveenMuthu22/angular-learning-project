import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-agreement-dialog',
  templateUrl: './user-agreement-dialog.component.html',
  styleUrls: ['./user-agreement-dialog.component.css']
})
export class UserAgreementDialogComponent implements OnInit {
  
  @Output() done = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<UserAgreementDialogComponent>
    ) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
