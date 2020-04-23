import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapTypeaheadComponent } from './modules/bootstrap-typeahead/bootstrap-typeahead.component';
import { MaterialTypeaheadComponent } from './modules/material-typeahead/material-typeahead.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MockService } from './shared/services/mock.service';
import { HttpClientModule } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapTypeaheadComponent,
    MaterialTypeaheadComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    TypeaheadModule.forRoot()
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
