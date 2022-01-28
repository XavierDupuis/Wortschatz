import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-help-modal',
    templateUrl: './help-modal.component.html',
    styleUrls: ['./help-modal.component.scss'],
})
export class HelpModalComponent {
    constructor(public dialogRef: MatDialogRef<HelpModalComponent>) {}

    close(): void {
        this.dialogRef.close();
    }
}
