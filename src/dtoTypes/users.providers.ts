import { USER_REPOSITORY } from "@/core/constants";
import { User } from "@/modules/user/user.entity";

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
