import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Home } from './app/components/home/home';
import { About } from './app/components/about/about';
import { Header } from './app/components/shared/header';
import { Footer } from './app/components/shared/footer';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        Home,
        About,
        Header,
        Footer
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
