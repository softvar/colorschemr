import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { Home } from './app/components/home/home';
import { About } from './app/components/about/about';
import { Header } from './app/components/shared/header';
import { Footer } from './app/components/shared/footer';
import { ColorSchemr } from './app/components/color-schemr/colorschemr';
import { PreviewPipe } from './app/pipes/PreviewPipe';
import { SchemrPreviewer } from './app/components/previewer/Previewer';
import { EscapeHtmlTagsPipe } from './app/pipes/EscapeHtmlTagsPipe';
import { routing, appRoutingProviders } from './app.routing';
import { ColorService } from './app/services/ColorService';
import { StripService } from './app/services/StripService';
import { QuoteService } from './app/services/QuoteService';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ColorSchemr,
        Home,
        About,
        Header,
        Footer,
        SchemrPreviewer,
        PreviewPipe,
        EscapeHtmlTagsPipe
    ],
    providers: [
        appRoutingProviders,
        ColorService,
        StripService,
        QuoteService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
