import { defineEventHandler } from "h3";
import { faker } from "@faker-js/faker";
import { ProfileSchema } from "~/types/profile";

function seedFromString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default defineEventHandler((event) => {
  const id = event.context.params?.id || "";
  faker.seed(seedFromString(id));

  const gender = faker.person.sexType();
  const first = faker.person.firstName(gender);
  const last = faker.person.lastName(gender);
  const name = `${first} ${last}`;
  const email = faker.internet
    .email({ firstName: first, lastName: last })
    .toLowerCase();
  const username = faker.internet
    .username({ firstName: first, lastName: last })
    .toLowerCase();
  const country = faker.location.country();
  const city = faker.location.city();
  const avatarUrl = `https://testingbot.com/free-online-tools/random-avatar/512?u=${encodeURIComponent(
    id
  )}`;

  const data = {
    id,
    name,
    email,
    username,
    avatarUrl,
    jobTitle: faker.person.jobTitle(),
    company: faker.company.name(),
    phone: faker.phone.number(),
    city,
    country,
    dob: faker.date.birthdate({ min: 18, max: 75, mode: "age" }).toISOString(),
    gender,
    bio: faker.lorem.paragraphs(2),
  };

  const parsed = ProfileSchema.safeParse(data);
  if (!parsed.success) {
    event.node.res.statusCode = 500;
    return { error: "Validation failed", issues: parsed.error.issues };
  }
  return parsed.data;
});
