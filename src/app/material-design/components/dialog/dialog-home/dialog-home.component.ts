import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { UserAgreementDialogComponent } from '../user-agreement-dialog/user-agreement-dialog.component';


@Component({
  selector: 'app-dialog-home',
  templateUrl: './dialog-home.component.html',
  styleUrls: ['./dialog-home.component.css']
})
export class DialogHomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openUserAgreement() {
    const dialogRef = this.dialog.open(
      UserAgreementDialogComponent
    );

    dialogRef.componentInstance.done.subscribe(() => {
      dialogRef.close();
    });
  }

}
