import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { RantsComponent } from './rants.component';
import { RantService } from './rant.service';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService), 
  ],
  declarations: [ AppComponent, RantsComponent, ReversePipe ],
  providers: [ RantService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
