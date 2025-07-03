import { fakeUsers } from "../data/fakeUsers";

export interface AuthResponse {
  token: string;
  userId: number;
}

export function fakeLogin(email: string, password: string): Promise<AuthResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fakeUsers.find((u) => u.email === email);

      if (!user) {
        return reject(new Error("Email não cadastrado."));
      }

      if (user.password !== password) {
        return reject(new Error("Senha incorreta."));
      }

      const token = btoa(`${user.id}:${user.email}`); // base64
      resolve({ token, userId: user.id });
    }, 800);
  });
}

export function fakeGetProfile(token: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const [id] = atob(token).split(":");
        const user = fakeUsers.find((u) => u.id === Number(id));
        if (user) {
          const { password, ...safeUser } = user;
          resolve(safeUser);
        } else {
          reject(new Error("Usuário não encontrado"));
        }
      } catch (error) {
        reject(new Error("Token inválido"));
      }
    }, 600);
  });
}
