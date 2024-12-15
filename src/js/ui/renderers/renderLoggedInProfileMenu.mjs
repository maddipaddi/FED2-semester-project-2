import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";

export function renderLoggedInProfileMenu() {
  const profileMenu = document.getElementById("profile-menu");
  const user = loggedInUser();
  profileMenu.innerHTML = "";

  if (user) {
    const profileText = document.createElement("p");
    profileText.classList.add(
      "text-sm",
      "text-copy",
      "mb-1",
      "mt-9",
      "font-serif",
      "dark:text-background"
    );
    profileText.innerText = "Navigate to your profile here:";

    const profileLink = document.createElement("a");
    profileLink.setAttribute("href", "/my-profile/read");
    profileLink.classList.add(
      "mb-6",
      "bg-accent",
      "text-background",
      "w-full",
      "px-3",
      "py-2",
      "border",
      "border-copy",
      "dark:border-background",
      "hover:font-bold",
      "appearance-none",
      "text-center",
      "block"
    );
    profileLink.innerText = "My account";

    const logoutText = document.createElement("p");
    logoutText.classList.add(
      "text-sm",
      "text-copy",
      "mb-1",
      "font-serif",
      "dark:text-background"
    );
    logoutText.innerText =
      "You can log out of your account here, but we hope we'll see you back soon!";

    const logoutButton = document.createElement("button");
    logoutButton.innerText = "Logout";
    logoutButton.classList.add(
      "bg-secondary",
      "text-background",
      "w-full",
      "px-3",
      "py-2",
      "border",
      "border-copy",
      "dark:border-background",
      "hover:font-bold",
      "appearance-none",
      "text-center",
      "block"
    );
    logoutButton.setAttribute("id", "logout-btn");

    profileMenu.appendChild(profileText);
    profileMenu.appendChild(profileLink);
    profileMenu.appendChild(logoutText);
    profileMenu.appendChild(logoutButton);
  } else {
    profileMenu.innerHTML = `
    <div class="mb-6 mt-12">
            <h2 class="mb-2 text-md font-semibold font-serif">
              I already have an account
            </h2>
            <form name="login" class="space-y-4">
              <div>
                <label for="email" class="block mb-1 text-sm">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  class="w-full px-3 py-2 border border-copy rounded bg-background text-copy dark:bg-copy dark:text-background dark:border-background"
                />
              </div>
              <div>
                <label for="password" class="block mb-1 text-sm"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  class="w-full px-3 py-2 border border-copy rounded bg-background text-copy dark:bg-copy dark:text-background dark:border-white"
                />
              </div>
              <button
                type="submit"
                class="w-full bg-accent text-background py-2 px-4 rounded hover:bg-primary-dark dark:text-background border border-transparent dark:border-white hover:font-bold"
              >
                Sign in
              </button>
            </form>
          </div>
          <div>
            <h2 class="mb-2 mt-12 text-md font-semibold font-serif">
              I don't have an account
            </h2>
            <p class="mb-4">
              Enjoy added benefits and a richer experience by creating a
              personal account.
            </p>
            <a
              href="/account/register"
              class="block text-center bg-accent text-background dark:bg-accent dark:text-background py-2 px-4 rounded border border-transparent dark:border-white hover:font-bold"
            >
              Create my account
            </a>
          </div>
    `;
  }
}
