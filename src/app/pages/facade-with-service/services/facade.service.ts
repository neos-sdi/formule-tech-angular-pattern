import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../../../store/user-actions';
import { UserSelectors } from '../../../store/user-selectors';
import { UserState } from '../../../store/user-state';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private store: Store<UserState>) { }

  allUsers$ = this.store.select(UserSelectors.selectAllUsers)

  addUser(name: string){
    this.store.dispatch(UserActions.addUser({user: { name, id: name}}))
  }
}
