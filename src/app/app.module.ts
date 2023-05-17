import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerComponent } from './components/beer/beer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,NavbarComponent, BeerListComponent, BeerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
