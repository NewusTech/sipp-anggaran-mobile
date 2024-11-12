import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

import { ExtractState } from "@/lib/zustand";
import { userProfileResponseSuccess } from "@/api/sipp/user";

type AuthStore = {
  accessToken: string | null;
  profile: userProfileResponseSuccess["data"] | null;
  permission: string[];

  actions: {
    setAccessToken: (accessToken: string | null) => void;
    setProfile: (data: userProfileResponseSuccess["data"]) => void;
    clearAuthSession: () => void;
    setPermission: (permission: string[]) => void;
  };
};

const authStore = createStore<AuthStore>()((set, get) => ({
  accessToken: null,
  profile: null,
  permission: [],

  actions: {
    setAccessToken: (accessToken) => set({ accessToken }),
    setProfile: (profile) => set({ profile }),
    clearAuthSession: async () => {
      set({
        accessToken: null,
        profile: null,
      });
    },
    setPermission: (permission) => set({ permission }),
  },
}));

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

// Selectors
const accessTokenSelector = (state: ExtractState<typeof authStore>) =>
  state.accessToken;
const profileSelector = (state: ExtractState<typeof authStore>) =>
  state.profile;
const permissionSelector = (state: ExtractState<typeof authStore>) =>
  state.permission;
const actionsSelector = (state: ExtractState<typeof authStore>) =>
  state.actions;

// getters
export const getAccessToken = () => accessTokenSelector(authStore.getState());
export const getProfile = () => profileSelector(authStore.getState());
export const getPermission = () => permissionSelector(authStore.getState());
export const getAuthActions = () => actionsSelector(authStore.getState());

function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector);
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector);
export const useAuthProfile = () => useAuthStore(profileSelector);
export const usePermission = () => useAuthStore(permissionSelector);
export const useAuthActions = () => useAuthStore(actionsSelector);
