export class UserDto {
  readonly userId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly status: UserStatusDTO;
}

export enum UserStatusDTO {
  ADMIN = "ADMIN",
  USER = "USER",
}
