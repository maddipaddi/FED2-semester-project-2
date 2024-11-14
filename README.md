# Auction House - Semester Project 2

## About the Project

**Auction House** is an exclusive platform for buying and selling luxury items, specializing in **watches**, **handbags**, **bags**, and **jewelry**. Our mission is to create a refined, user-friendly experience that matches the elegance of the products featured on our platform.

This project is the **frontend implementation** of Auction House, built on an existing backend API provided by Noroff. The API handles user management, auction listings, and bidding functionality, while this frontend will bring the user interface to life with a luxurious, responsive design.

---

## Table of Contents

1. [Features (Planned)](#features-planned)
2. [Target Audience](#target-audience)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation and Setup](#installation-and-setup)
4. [Development Tools and Configuration](#development-tools-and-configuration)
   - [Tools Used](#tools-used)
   - [Linting and Formatting](#linting-and-formatting)
5. [Commit Message Guidelines](#commit-message-guidelines)
   - [Format](#format)
   - [Types](#types)
6. [License](#license)
7. [Future Updates](#future-updates)

---

## Features (Planned)

- User registration and login for authenticated access.
- Browse and search listings (available to all users).
- Create listings for auction (authenticated users).
- Place and view bids on listings.
- Profile management, including avatar updates and credit balance.

---

## Target Audience

Our platform caters to both **men and women**, with a focus on individuals seeking a trusted and high-quality marketplace for luxury goods.

---

## Getting Started

### Prerequisites

To run the project locally, you’ll need:

- **Node.js** (v16 or later)
- **npm** (Node Package Manager, comes with Node.js)
- A code editor like **Visual Studio Code**

### Installation and Setup

1. **Clone the Repository**

```bash
   git clone https://github.com/your-username/fed2-semester-project-2.git
```

2. **Install Dependencies**

```bash
   npm install
```

3. **Run the Development Server**

```bash
   npm run dev
```

Open the development server in your browser at the provided local host port link.

4. **Build for Production**
   To create an optimized production build:

```bash
   npm run build
```

5. **Preview the Build**

```bash
   npm run preview
```

---

## Development Tools and Configuration

### Tools Used

- Vite: For fast and modern frontend tooling.
- ESLint: To enforce consistent code quality.
- Prettier: For automatic code formatting.
- Husky: To enforce pre-commit hooks, ensuring quality at every step.
- Lint-Staged: Runs linters and formatters on staged files.

### Linting and Formatting

To manually run linting and formatting:

- **Lint the code:**

```bash
   npm run lint
```

- **Format the code:**

```bash
   npm run format
```

---

## Commit Message Guidelines

We follow the Conventional Commits (https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard to maintain a clear and consistent commit history. This ensures commits are easy to understand and align with best practices for version control.

### Format

Commit messages should follow this format:
<type>: <short description>
Use present tense and the imperative mood (e.g., "add," not "added" or "adds").
Keep the description concise but meaningful.

### Types

- **`feat:`** Adding a new feature.  
  _Example_: `feat: implement user registration form`

- **`fix:`** Fixing a bug.  
  _Example_: `fix: resolve broken API integration`

- **`build:`** Changes related to the build system or dependencies.  
  _Example_: `build: configure ESLint and Prettier`

- **`chore:`** Maintenance tasks that don't affect functionality.  
  _Example_: `chore: update README.md`

- **`docs:`** Updates to documentation.  
  _Example_: `docs: add setup instructions to README`

- **`refactor:`** Code restructuring without changing functionality.  
  _Example_: `refactor: simplify user authentication logic`

- **`test:`** Adding or updating tests.  
  _Example_: `test: add unit tests for login functionality`

---

## License

This project is for educational purposes only as part of the Noroff Frontend Development curriculum. It is not intended for commercial use.

---

## Future updates

This README will be updated as the project evolves, including details about additional tools (e.g., Tailwind CSS), features, and design changes.
