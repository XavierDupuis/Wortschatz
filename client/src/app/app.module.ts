import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app/app.component';
import { LanguageSelectorComponent } from '@app/components/selectors/language-selector/language-selector.component';
import { WordCardComponent } from '@app/components/word-card/word-card.component';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { ThemeSelectorComponent } from './components/selectors/theme-selector/theme-selector.component';
import { WordCountSelectorComponent } from './components/selectors/word-count-selector/word-count-selector.component';
import { WordsListComponent } from './components/words-list/words-list.component';
import { HelpModalComponent } from './components/help-modal/help-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        WordCardComponent,
        WordsListComponent,
        ThemeSelectorComponent,
        LanguageSelectorComponent,
        WordCountSelectorComponent,
        HelpModalComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, AppMaterialModule, FormsModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
