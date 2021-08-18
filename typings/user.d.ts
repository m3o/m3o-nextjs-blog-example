type m3oUserMethods =
  | 'Create'
  | 'Delete'
  | 'Login'
  | 'Logout'
  | 'Read'
  | 'ReadSession'
  | 'SendVerificationEmail'
  | 'Update'
  | 'UpdatePassword'
  | 'VerifyEmail';

type m3oCreateUserData = {
  email: string;
  password: string;
  id?: string;
  profile?: Record<string, string>;
  username?: string;
};

type m3oUserAccount = {
  created: number;
  email: string;
  id: string;
  profile?: Record<string, string>;
  updated: number;
  username: string;
  verificationDate?: string;
  verified?: boolean;
};

type m3oUserResponse = {
  account: UserAccount;
};

type m3oSendVerificationEmailData = {
  email: string;
  failureRedirectUrl: string;
  fromName: string;
  redirectUrl: string;
  subject: string;
  textContent: string;
};

type m3oLoginUserData = {
  email?: string;
  username?: string;
  password: string;
};

type m3oLoginUserResponse = {
  session: {
    id: string;
    created: string;
    expires: string;
    userId: string;
  };
};

type m3oUserSession = UserResponse['account'] | null;
