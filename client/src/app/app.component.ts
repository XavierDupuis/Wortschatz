import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentTheme = 'dark-theme';

    togglePageTheme() {
        this.currentTheme = this.currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    }
}
