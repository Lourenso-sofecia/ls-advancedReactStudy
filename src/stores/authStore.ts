import { create } from "zustand";
import { fakeGetProfile, fakeLogin } from "../services/fakeAuthService";
import { FakeUser } from "../data/fakeUsers";

interface AuthState {
  user: FakeUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isHydrated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  isHydrated: false,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { token, userId } = await fakeLogin(email, password);
      localStorage.setItem("token", token);
      const user = (await fakeGetProfile(token)) as FakeUser;
      set({ user, token, loading: false, isHydrated: true });
      return true;
    } catch (err: any) {
      set({ error: err.message, loading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  restoreSession: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      set({ isHydrated: true });
      return;
    }
    try {
      const user = (await fakeGetProfile(token)) as FakeUser;
      set({ user, token, isHydrated: true });
    } catch {
      localStorage.removeItem("token");
      set({ user: null, token: null, isHydrated: true });
    }
  },
}));
