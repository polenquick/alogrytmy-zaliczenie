import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AlgorytmyComponent} from './algorytmy/algorytmy.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  { path: 'algorytmy', component: AlgorytmyComponent },
  {path: 'menu', component: MenuComponent},
  { path: 'about', component: AboutComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
