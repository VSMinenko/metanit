import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { BoldDirective } from './bold.directive';
import { WhileDirective } from './while.directive';
import { ServicesComponent } from './components/services/services.component';
import { DataComponent } from './components/data/data.component';
import { ModuleComponent } from './components/module/module.component';
import { NgformComponent } from './components/ngform/ngform.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BoldDirective,
    WhileDirective,
    ServicesComponent,
    DataComponent,
    ModuleComponent,
    NgformComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
