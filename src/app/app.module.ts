import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DesboardComponent } from './units/project/desboard/desboard.component';
import { AedsinsComponent } from './units/project/pages/aedsins/aedsins.component';
import { MetaversoComponent } from './units/project/pages/metaverso/metaverso.component';
import { QledComponent } from './units/project/pages/qled/qled.component';
import { SobreComponent } from './units/project/pages/sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'units', pathMatch: 'full' },
  {
    path: 'units',
    component: DesboardComponent,
    children: [
      { path: '', redirectTo: 'aedsins', pathMatch: 'full' },
      { path: 'aedsins', component: AedsinsComponent },
      { path: 'metaverso', component: MetaversoComponent },
      { path: 'qled', component: QledComponent },
      { path: 'sobre', component: SobreComponent}
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DesboardComponent,
    AedsinsComponent,
    MetaversoComponent,
    QledComponent,
    SobreComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
