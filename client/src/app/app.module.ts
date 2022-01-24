import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app/app.component';
import { LanguageSelectorComponent } from '@app/components/language-selector/language-selector.component';
import { WordCardComponent } from '@app/components/word-card/word-card.component';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector/theme-selector.component';
import { WordsListComponent } from './components/words-list/words-list.component';

@NgModule({
    declarations: [AppComponent, WordCardComponent, WordsListComponent, ThemeSelectorComponent, LanguageSelectorComponent],
    imports: [BrowserModule, AppRoutingModule, AppMaterialModule, FormsModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
