export class Navigation {
  parent?: string;
  name: string;
  uri: string;
  data?: any;
  params?: string;
  redirects?: Map<string, string>;
  fnNext?: (o?: any) => void;
  fnPrev?: () => void;
  children?: Navigation[];
}

export class UserCredential {
  UserId: number;
  Password: string;
  Role: string;
}
