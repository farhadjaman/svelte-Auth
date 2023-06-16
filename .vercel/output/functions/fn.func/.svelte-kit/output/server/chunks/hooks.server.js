import { d as db } from "./database.js";
const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("session");
  if (session) {
    const user = await db.user.findUnique({
      where: {
        userAuthToken: session
      },
      select: {
        username: true,
        role: true
      }
    });
    if (user)
      event.locals.user = {
        name: user.username,
        role: user.role.name
      };
  }
  return await resolve(event);
};
export {
  handle
};
