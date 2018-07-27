import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { twitchSearchInjectables } from './shared/twitch-search.injectables';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { TwitchSearchComponent } from './twitch-search/twitch-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearchBoxComponent,
    SearchResultComponent,
    TwitchSearchComponent
  ],
  imports: [BrowserModule, HttpClientModule, HttpModule],
  providers: [twitchSearchInjectables, HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
