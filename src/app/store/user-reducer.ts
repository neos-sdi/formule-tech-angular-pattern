
import { Action, createReducer, on } from '@ngrx/store';
import { UserInitialState } from './user-state'
import { UserActions} from './user-actions'
import { UserAdapter } from './user-adapter';

export abstract class UserReducer{
  static reducer = createReducer(UserInitialState.state,
    on(UserActions.addUser, (state, { user }) => {
      return UserAdapter.adapter.addOne(user, state)
    }),
    on(UserActions.setUser, (state, { user }) => {
      return UserAdapter.adapter.setOne(user, state)
    }),
    on(UserActions.upsertUser, (state, { user }) => {
      return UserAdapter.adapter.upsertOne(user, state);
    }),
    on(UserActions.addUsers, (state, { users }) => {
      return UserAdapter.adapter.addMany(users, state);
    }),
    on(UserActions.upsertUsers, (state, { users }) => {
      return UserAdapter.adapter.upsertMany(users, state);
    }),
    on(UserActions.updateUser, (state, { update }) => {
      return UserAdapter.adapter.updateOne(update, state);
    }),
    on(UserActions.updateUsers, (state, { updates }) => {
      return UserAdapter.adapter.updateMany(updates, state);
    }),
    on(UserActions.mapUser, (state, { entityMap }) => {
      return UserAdapter.adapter.mapOne(entityMap, state);
    }),
    on(UserActions.mapUsers, (state, { entityMap }) => {
      return UserAdapter.adapter.map(entityMap, state);
    }),
    on(UserActions.deleteUser, (state, { id }) => {
      return UserAdapter.adapter.removeOne(id, state);
    }),
    on(UserActions.deleteUsers, (state, { ids }) => {
      return UserAdapter.adapter.removeMany(ids, state);
    }),
    on(UserActions.deleteUsersByPredicate, (state, { predicate }) => {
      return UserAdapter.adapter.removeMany(predicate, state);
    }),
    on(UserActions.loadUsers, (state, { users }) => {
      return UserAdapter.adapter.setAll(users, state);
    }),
    on(UserActions.setUsers, (state, { users }) => {
      return UserAdapter.adapter.setMany(users, state);
    }),
    on(UserActions.clearUsers, state => {
      return UserAdapter.adapter.removeAll({ ...state, selectedUserId: null });
    })

    )
}
