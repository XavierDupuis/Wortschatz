import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from '@app/components/help-modal/help-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentTheme = 'dark-theme';
    constructor(public dialog: MatDialog) {}

    openHelp(): void {
        // const dialogRef =
        this.dialog.open(HelpModalComponent, {
            width: '250px',
            data: { name: 'this.name, animal: this.animal' },
        });

        // dialogRef.afterClosed().subscribe(() => {});
    }

    togglePageTheme() {
        this.currentTheme = this.isCurrentThemeDark() ? 'light-theme' : 'dark-theme';
    }

    isCurrentThemeDark() {
        return this.currentTheme === 'dark-theme';
    }
}
