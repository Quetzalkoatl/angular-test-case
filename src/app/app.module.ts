import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, NavigationComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
