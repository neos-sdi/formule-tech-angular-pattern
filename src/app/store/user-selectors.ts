import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UserAdapter } from './user-adapter'
import { UserState } from './user-state'

export abstract class UserSelectors {
  static selectUserState = createFeatureSelector<UserState>('users')
    static selectUserIds = createSelector(
      UserSelectors.selectUserState,
      UserAdapter.adapter.getSelectors().selectIds
    );
    static selectUserEntities = createSelector(
      UserSelectors.selectUserState,
      UserAdapter.adapter.getSelectors().selectEntities
    );
    static selectAllUsers = createSelector(
      UserSelectors.selectUserState,
      UserAdapter.adapter.getSelectors().selectAll
    );
    static selectUserTotal = createSelector(
      UserSelectors.selectUserState,
      UserAdapter.adapter.getSelectors().selectTotal
    );
}
