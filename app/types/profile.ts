import { z } from "zod";

export const ProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  username: z.string(),
  avatarUrl: z.string().url(),
  jobTitle: z.string(),
  company: z.string(),
  phone: z.string(),
  city: z.string(),
  country: z.string(),
  dob: z.string(),
  gender: z.string(),
  bio: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;

export const ProfilesSchema = z.array(ProfileSchema);
