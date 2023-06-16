import { r as redirect } from "../../../../chunks/index.js";
const logout = async ({ cookies }) => {
  cookies.set("session", "", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0
  });
  throw redirect(302, "/login  ");
};
const actions = { default: logout };
export {
  actions
};
