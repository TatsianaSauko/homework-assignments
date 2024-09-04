import { mockUsers } from "../data/mockUsers";
import { FetchOptions } from "../types/types";

export const mockFetch = (_url: string, options: FetchOptions): Promise<{ ok: boolean }> => {
    return new Promise((resolve) => {
      const { email, password } = JSON.parse(options.body);
      const user = mockUsers.find(user => user.email === email && user.password === password);
      if (user) {
        resolve({ ok: true });
      } else {
        resolve({ ok: false });
      }
    });
  };
