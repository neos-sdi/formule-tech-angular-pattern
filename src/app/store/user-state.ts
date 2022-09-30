import { EntityState } from "@ngrx/entity";
import { User } from "../models/user";
import { UserAdapter } from "./user-adapter";

export interface UserState extends EntityState<User>{

}

export abstract class UserInitialState{
  static state: UserState = UserAdapter.adapter.getInitialState({

  })
}
