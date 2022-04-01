import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-users',
  templateUrl: './dialog-users.component.html',
  styleUrls: ['./dialog-users.component.css']
})
export class DialogUsersComponent implements OnInit {

  title:any="Editar Usuario";
  constructor(
    public dialogRef: MatDialogRef<DialogUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if(this.data.data == null)
      this.title = "Agregar Usuario";
    else
    this.title = "Editar Usuario";
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

}
