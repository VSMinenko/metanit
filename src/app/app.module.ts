import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { BoldDirective } from './bold.directive';
import { WhileDirective } from './while.directive';

@NgModule({
  declarations: [AppComponent, ChildComponent, BoldDirective, WhileDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
