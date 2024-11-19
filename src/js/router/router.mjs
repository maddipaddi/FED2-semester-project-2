export function router() {
  const pageTitle = "Auction House";

const routes = {
  404: {
    template: "/templates/404.html",
    title: "404 | " + pageTitle,
    description: "Page not found.",
    init: async () => {
    const { initPageNotFound } = await import("../views/404.mjs");
    initPageNotFound();
  }
  },
  "/": {
    template: "/templates/index.html",
    title: "Home | " + pageTitle,
    description: "Welcome to Auction House.",
    init: async () => {
    const { initHome } = await import("../views/home.mjs");
    initHome();
  }
},
   "/about": {
    template: "/templates/about.html",
    title: "About | " + pageTitle,
    description: "Read about Auction House.",
    init: async () => {
    const { initAbout } = await import("../views/about.mjs");
    initAbout();
  }
},
  "/contact": {
    template: "/templates/contact.html",
    title: "Contact | " + pageTitle,
    description: "Contact Auction House.",
    init: async () => {
    const { initContact } = await import("../views/contact.mjs");
    initContact();
  }
},
  "/FAQ": {
    template: "/templates/faq.html",
    title: "FAQ | " + pageTitle,
    description: "Read answers to frequently asked questions.",
    init: async () => {
    const { initFAQ } = await import("../views/FAQ.mjs");
    initFAQ();
  }
  },
  "/account/register": {
    template: "/templates/account/register.html",
    title: "Register | " + pageTitle,
    description: "Register an account at Auction House.",
    init: async () => {
    const { initRegister } = await import("../views/account/register.mjs");
    initRegister();
  }
  },
  "/listing/create": {
    template: "/templates/listing/create.html",
    title: "Create listing | " + pageTitle,
    description: "Create a listing at Auction House.",
    init: async () => {
    const { initCreate } = await import("../views/listing/create.mjs");
    initCreate();
  }
  },
  "/listing/read": {
    template: "/templates/listing/read.html",
    title: "View listing | " + pageTitle,
    description: "View a listing.",
    init: async () => {
    const { initReadListing } = await import("../views/listing/read.mjs");
    initReadListing();
  }
  },
  "/listing/update": {
    template: "/templates/listing/update.html",
    title: "Edit listing | " + pageTitle,
    description: "Edit a listing at Auction House.",
    init: async () => {
    const { initUpdate } = await import("../views/listing/update.mjs");
    initUpdate();
  }
  },
  "/listings/read": {
    template: "/templates/listings/read.html",
    title: "View listings | " + pageTitle,
    description: "View listings at Auction House.",
    init: async () => {
    const { initReadListings } = await import("../views/listings/read.mjs");
    initReadListings();
  }
  },
  "/my-activity-on-listings/bid-history": {
    template: "/templates/my-activity-on-listings/bid-history.html",
    title: "Bid history | " + pageTitle,
    description: "View your bid history at Auction House.",
    init: async () => {
    const { initBidHistory } = await import("../views/my-activity-on-listings/bidHistory.mjs");
    initBidHistory();
  }
  },
  "/my-activity-on-listings/wishlist-and-active-bids": {
    template: "/templates/my-activity-on-listings/wishlist-and-active-bids.html",
    title: "Wishlist and active bids | " + pageTitle,
    description: "View your wishlist and active bids at Auction House.",
    init: async () => {
    const { initWishlistAndBids } = await import("../views/my-activity-on-listings/wishlistAndBids.mjs");
    initWishlistAndBids();
  }
  },
  "/my-listings/active": {
    template: "/templates/my-listings/active.html",
    title: "Active listings | " + pageTitle,
    description: "View your active listings at Auction House.",
    init: async () => {
    const { initActive } = await import("../views/my-listings/active.mjs");
    initActive();
  }
  },
   "/my-listings/inactive": {
    template: "/templates/my-listings/inactive.html",
    title: "Inactive listings | " + pageTitle,
    description: "View your inactive listings at Auction House.",
    init: async () => {
    const { initInactive } = await import("../views/my-listings/inactive.mjs");
    initInactive();
  }
  },
   "/my-profile/read": {
    template: "/templates/my-profile/read.html",
    title: "My profile | " + pageTitle,
    description: "View your profile at Auction House.",
    init: async () => {
    const { initReadMyProfile } = await import("../views/my-profile/read.mjs");
    initReadMyProfile();
  }
  },
  "/my-profile/update": {
    template: "/templates/my-profile/update.html",
    title: "Update profile | " + pageTitle,
    description: "Update your profile at Auction House.",
    init: async () => {
    const { initUpdateProfile } = await import("../views/my-profile/update.mjs");
    initUpdateProfile();
  }
  },
  "/profile/read": {
    template: "/templates/profile/read.html",
    title: "View profile | " + pageTitle,
    description: "View this user's profile at Auction House.",
    init: async () => {
    const { initReadProfile } = await import("../views/profile/read.mjs");
    initReadProfile();
  }
  }
}

document.addEventListener("click", (e) => {
    const { target } = e;

    if (target.tagName === "A" && target.hasAttribute("href")) {
      const href = target.getAttribute("href");
      if (href.startsWith("http")) return;
      e.preventDefault();
      route(href);
    }
  });

  const route = (href) => {
    window.history.pushState({}, "", href);
    locationHandler();
  };

  const locationHandler = async () => {
    let path = window.location.pathname;
    
    if (!path || path === "") {
      path = "/";
    }

    const route = routes[path] || routes[404];

    try {
      const html = await fetch(route.template).then((response) => {
        if (!response.ok) throw new Error("Template not found");
        return response.text();
      });

      document.getElementById("app").innerHTML = html;

      document.title = route.title;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);

       if (route.init) {
    route.init();
  }
    } catch (error) {
      console.error("Error loading page:", error);
    }
  };

window.onpopstate = locationHandler;
window.route = route;

locationHandler(); 

router.route = route;

return router;
}
