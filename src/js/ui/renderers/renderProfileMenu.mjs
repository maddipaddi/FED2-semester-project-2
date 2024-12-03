import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";

export function renderProfileMenu() {
  const profileMenu = document.getElementById("profile-menu");
  const user = loggedInUser();
  // Clear existing menu content
  profileMenu.innerHTML = "";

  if (user) {
    // Logged-in view
    const profileLink = document.createElement("a");
    profileLink.setAttribute("href", "/my-profile/read");
    profileLink.innerText = "My account";

    const logoutButton = document.createElement("button");
    logoutButton.innerText = "Logout";

    profileMenu.appendChild(profileLink);
    profileMenu.appendChild(logoutButton);
  } else {
    // Logged-out view
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
                  class="w-full px-3 py-2 border border-copy rounded bg-background text-copy dark:bg-copy dark:text-background dark:border-white"
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
