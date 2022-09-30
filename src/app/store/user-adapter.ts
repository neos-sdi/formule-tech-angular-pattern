import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { User } from "../models/user";

export abstract class UserAdapter{
  static adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: UserAdapter.selectUserId,
    sortComparer: UserAdapter.sortByName
  })

  static selectUserId(user: User): string{
    return user.id
  }

  static sortByName(a:User, b: User){
    return a.name.localeCompare(b.name)
  }
}
