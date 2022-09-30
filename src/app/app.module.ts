import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { LogsComponent } from './pages/logs/logs.component'
import { ComputerComponent } from './pages/computer/computer.component'
import { Logger } from './services/loggers/logger'
import { environment } from '../environments/environment'
import { DevelopementLoggerService } from './services/loggers/developement-logger.service'
import { ProductionLoggerService } from './services/loggers/production-logger.service'
import { StoreModule } from '@ngrx/store'
import { UserReducer } from './store/user-reducer'
import { FacadeComponent } from './pages/facade/facade.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext'
import { FacadeWithServiceComponent } from './pages/facade-with-service/facade-with-service.component'
import {ListboxModule} from 'primeng/listbox';
import { AdapterComponent } from './pages/adapter/adapter/adapter.component';
import { MenubarModule} from 'primeng/menubar'
import { ComputeService } from './pages/computer/services/compute.service'

@NgModule({
    declarations: [AppComponent, LogsComponent, ComputerComponent, FacadeComponent, FacadeWithServiceComponent, AdapterComponent],
    imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ users: UserReducer.reducer }, {}),
    ReactiveFormsModule, ButtonModule, InputTextModule, ListboxModule, MenubarModule
    ],
    providers: [
        {
            provide: Logger,
            useFactory: () => {
                if (!environment.production) {
                    return new DevelopementLoggerService()
                } else {
                    return new ProductionLoggerService()
                }
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
