export type FormData = {
    email: string;
    password: string;
}

export type FetchOptions = {
    method: string;
    headers: {
      'Content-Type': string;
    };
    body: string;
  };


export type AuthData = {
    email: string;
    password: string;
  };