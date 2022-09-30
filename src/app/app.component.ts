import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'design-patterns'
    menu: MenuItem[] = [
      { label: 'Factory', routerLink:'logs' },
      { label: 'Facade', routerLink:'facade' },
      { label: 'Facade service', routerLink:'facade-service' },
      { label: 'Adapter', routerLink:'adapter' },
      { label: 'Strategy', routerLink:'compute' },

    ]
}
