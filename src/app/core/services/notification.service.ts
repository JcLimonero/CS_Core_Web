import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private snackBar: MatSnackBar) { }

    public errorSnackBar(message: string): any {
        this.snackBar.open(message, '', {
            duration: 5000,
            panelClass: ['error-snackbar']
        });
    }

    public openSnackBar(message: string): any {
        this.snackBar.open(message, '', {
            duration: 5000,
            panelClass: ['error-snackbar']
        });
    }

    

    public OkSnackBar(message: string): any {
        this.snackBar.open(message, '', {
            duration: 5000,
            panelClass: ['ok-snackbar']
        });
    }
}
