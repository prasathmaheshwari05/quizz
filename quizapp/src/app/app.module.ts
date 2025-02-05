import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Add this line
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // ... your other components
  ],
  imports: [
    BrowserModule,
    FormsModule,     // Add this line
    // ... your other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }