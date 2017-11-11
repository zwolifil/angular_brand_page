import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { CollapseModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MainPageComponent } from './main-page/main-page.component';
import { CareerComponent } from './career/career.component';
import { WorkComponent} from './work/work.component';
import { QueryRequestComponent} from './query-request/query-request.component';
import { ProductsComponent } from './products/products.component';
import { MucountComponent } from './products/mucount/mucount.component';
import { WildfishComponent } from './products/wildfish/wildfish.component';
import { SensorsComponent } from './products/sensors/sensors.component';
import { SoftwareComponent } from './products/software/software.component';
import { InfplComponent } from './products/infpl/infpl.component';
import { VeniteComponent } from './products/venite/venite.component';
import { WaresComponent } from './products/wares/wares.component';

const AppRoutes: Routes = [
  { path: 'kariera', component: CareerComponent},
  { path: '', redirectTo: '/glowna', pathMatch: 'full'},
  { path: 'glowna', component: MainPageComponent},
  { path: 'glowna/:id', component: MainPageComponent},
  { path: 'mucount', component: MucountComponent},
  { path: 'mucount/:id', component: MucountComponent},
  { path: 'infpl', component: InfplComponent},
  { path: 'infpl/:id', component: InfplComponent},
  { path: 'wildfish', component: WildfishComponent},
  { path: 'wildfish/:id', component: WildfishComponent},
  { path: 'software', component: SoftwareComponent},
  { path: 'software/:id', component: SoftwareComponent},
  { path: 'sensory', component: SensorsComponent},
  { path: 'sensory/:id', component: SensorsComponent},
  { path: 'venite', component: VeniteComponent},
  { path: 'venite/:id', component: VeniteComponent},
  { path: 'wares', component: WaresComponent},
  { path: 'wares/:id', component: WaresComponent},
  { path: 'praca', component: WorkComponent},
  { path: 'zapytania_ofertowe', component: QueryRequestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    CareerComponent,
    WorkComponent,
    QueryRequestComponent,
    ProductsComponent,
    MucountComponent,
    WildfishComponent,
    SensorsComponent,
    SoftwareComponent,
    InfplComponent,
    VeniteComponent,
    WaresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot( AppRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
