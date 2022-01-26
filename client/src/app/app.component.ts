import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentTheme = 'dark-theme';

    togglePageTheme() {
        this.currentTheme = this.isCurrentThemeDark() ? 'light-theme' : 'dark-theme';
    }

    isCurrentThemeDark() {
        return this.currentTheme === 'dark-theme';
    }
}
