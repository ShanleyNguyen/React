export interface IResponeLogin {
  data: {
    access_token: string;
    expires_in: string;
    refresh_expires_in: string;
    refresh_token: string;
    token_type: string;
  };
}
export interface IPayloadRegister {
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
  password: string;
  user_type: string;
  school_name?: string;
  date_of_birth: string;
}
export interface ILoginData {
  access_token: string;
  refresh_token: string;
  expires_in: string;
  refresh_expires_in: string;
  token_type: string;
}

export interface IResponeRegister {
  data: {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    user_name: string;
    password: string;
    status: string;
    user_id: string;
    login_data: ILoginData;
    date_of_birth: Date;
  };
}
