import { Component, OnInit } from '@angular/core';
import { Theme } from '@app/components/selectors/theme-selector/themes';

@Component({
    selector: 'app-theme-selector',
    templateUrl: './theme-selector.component.html',
    styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
    themes = Object.keys(Theme).filter((theme) => {
        return isNaN(Number(theme));
    });

    selectedThemes = new Map<string, boolean>();

    ngOnInit(): void {
        for (const theme of this.themes) {
            this.selectedThemes.set(theme, false);
        }
    }

    changeThemeStatus(theme: string) {
        const status = this.selectedThemes.get(theme);
        this.selectedThemes.set(theme, !status);
    }
}
