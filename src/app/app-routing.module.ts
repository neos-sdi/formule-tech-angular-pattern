import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdapterComponent } from './pages/adapter/adapter/adapter.component';
import { ComputerComponent } from './pages/computer/computer.component';
import { FacadeComponent } from './pages/facade/facade.component';
import { LogsComponent } from './pages/logs/logs.component';

const routes: Routes = [{
  path: 'logs', component: LogsComponent
},{
  path: 'facade', component: FacadeComponent
},{
  path: 'facade-service', component: FacadeComponent
},{
  path: 'adapter', component: AdapterComponent
},{
  path: 'compute', component: ComputerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
