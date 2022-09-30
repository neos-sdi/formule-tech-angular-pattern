import { EntityMap, EntityMapOne, Predicate, Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";

export abstract class UserActions{
  static loadUsers = createAction('[User/API] Load Users', props<{ users: User[] }>());
  static setUsers = createAction('[User/API] Set Users', props<{ users: User[] }>());
  static addUser = createAction('[User/API] Add User', props<{ user: User }>());
  static setUser = createAction('[User/API] Set User', props<{ user: User }>());
  static upsertUser = createAction('[User/API] Upsert User', props<{ user: User }>());
  static addUsers = createAction('[User/API] Add Users', props<{ users: User[] }>());
  static upsertUsers = createAction('[User/API] Upsert Users', props<{ users: User[] }>());
  static updateUser = createAction('[User/API] Update User', props<{ update: Update<User> }>());
  static updateUsers = createAction('[User/API] Update Users', props<{ updates: Update<User>[] }>());
  static mapUser = createAction('[User/API] Map User', props<{ entityMap: EntityMapOne<User> }>());
  static mapUsers = createAction('[User/API] Map Users', props<{ entityMap: EntityMap<User> }>());
  static deleteUser = createAction('[User/API] Delete User', props<{ id: string }>());
  static deleteUsers = createAction('[User/API] Delete Users', props<{ ids: string[] }>());
  static deleteUsersByPredicate = createAction('[User/API] Delete Users By Predicate', props<{ predicate: Predicate<User> }>());
  static clearUsers = createAction('[User/API] Clear Users');
}

