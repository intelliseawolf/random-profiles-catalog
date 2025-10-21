import type { Profile } from "~/types/profile";
import { ProfilesSchema, ProfileSchema } from "~/types/profile";

const BASE = "/api";

export function useApiClient() {
  const listProfiles = async (
    count = 12,
    seed?: string
  ): Promise<Profile[]> => {
    const query = new URLSearchParams({
      count: String(count),
      ...(seed ? { seed } : {}),
    });
    const res = await $fetch(`${BASE}/profiles?${query.toString()}`);
    const parsed = ProfilesSchema.parse(res);
    return parsed;
  };

  const getProfile = async (id: string): Promise<Profile> => {
    const res = await $fetch(`${BASE}/profile/${encodeURIComponent(id)}`);
    const parsed = ProfileSchema.parse(res);
    return parsed;
  };

  return { listProfiles, getProfile };
}
