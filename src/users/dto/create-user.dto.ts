export class CreateUserDto {
  name: string;
  username: string;
  email: string;
  password: string;
  refreshToken?: string;
}
