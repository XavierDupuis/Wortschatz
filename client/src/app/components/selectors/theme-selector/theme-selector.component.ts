import { Component, OnInit } from '@angular/core';
import { Theme } from '@app/components/selectors/theme-selector/themes';

@Component({
    selector: 'app-theme-selector',
    templateUrl: './theme-selector.component.html',
    styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
    static themes = Object.values(Theme);

    selectedTheme = [];

    ngOnInit(): void {}
}
