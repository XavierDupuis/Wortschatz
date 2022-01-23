import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { WordCardComponent } from '@app/components/word-card/word-card.component';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { WordsListComponent } from './components/words-list/words-list.component';

@NgModule({
    declarations: [AppComponent, WordCardComponent, WordsListComponent],
    imports: [BrowserModule, AppRoutingModule, AppMaterialModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
