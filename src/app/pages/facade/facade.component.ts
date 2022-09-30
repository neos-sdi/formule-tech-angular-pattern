import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { User } from '../../models/user'
import { UserActions } from '../../store/user-actions'
import { UserSelectors } from '../../store/user-selectors'
import { UserState } from '../../store/user-state'

@Component({
    selector: 'app-facade',
    templateUrl: './facade.component.html',
    styleUrls: ['./facade.component.scss'],
})
export class FacadeComponent implements OnInit {
    formGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
    })
    users: User[] = []
    constructor(private store: Store<UserState>) {}

    ngOnInit(): void {
        this.store.select(UserSelectors.selectAllUsers).subscribe((users) => {
            this.users = users
        })
    }

    submit() {
        if (this.formGroup.valid) {
            this.store.dispatch(
                UserActions.addUser({ user: { id: this.formGroup.value.name!, name: this.formGroup.value.name! } })
            )
            this.formGroup.reset()
        }
    }
}
