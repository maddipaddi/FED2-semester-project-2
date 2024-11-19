import { register } from "../../api/auth/register.mjs";
import { login } from "../../api/auth/login.mjs";
import { router } from "../../router/router.mjs";


export async function onRegister(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const account = Object.fromEntries(formData.entries());

  try {
    // add a loading spinner or disable form button during async operation? 
    await register(account);
    alert("Registration successful! Logging you in..."); // change to more user friendly feedback like a modal?
    await login({ email: account.email, password: account.password });
    alert("Login successful!"); // change to more user friendly feedback like a modal?
    router.route("/");
  } catch (error) {
    console.error("Registration failed:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  } 

}