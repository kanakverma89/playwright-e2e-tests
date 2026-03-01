# Playwright E2E Tests

Instructions and notes for setting up and running end-to-end tests with Playwright.

---

## 📦 Installation

### 1. ✅Install Playwright
```bash
npm init playwright@latest
```

### 2. ✅Verify Installation
```bash
npx playwright --help
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + ` | Open terminal |

---

## 🚀 Available Commands

Run the following commands from the project directory:

### Basic Test Execution
```bash
npx playwright test
```

### Runs tests in non-headless mode
```bash
 npx playwright test --headed
```
Runs all end-to-end tests.

### Interactive UI Mode
```bash
npx playwright test --ui
```
Starts the interactive UI mode for testing.

### Run Tests on Specific Browser
```bash
npx playwright test --project=chromium
```
Runs tests only on Desktop Chrome.

### Run Specific Test File
```bash
npx playwright test example
```
Runs tests in a specific file.

### Debug Mode
```bash
npx playwright test --debug
```
Runs tests in debug mode for troubleshooting.

### Auto-generate Tests
```bash
npx playwright codegen
```
Auto-generate test code using Codegen tool.

---

## 📋 Naming Conventions

Follow these naming conventions to maintain consistency and readability across the project:

### Folders & Files

| Type | Convention | Example |
|------|-----------|---------|
| Test Files | `kebab-case.spec.ts` | `login.spec.ts`, `user-profile.spec.ts` |
| Page Object Files | `kebab-case.page.ts` | `login.page.ts`, `dashboard.page.ts` |
| Helper/Utility Files | `kebab-case.helper.ts` | `common.helper.ts`, `api-client.helper.ts` |
| Folder Names | `kebab-case` | `pages/`, `helpers/`, `fixtures/` |

### Page Object Classes

```typescript
// Use PascalCase for class names
export class LoginPage {
  // Page object implementation
}

export class DashboardPage {
  // Page object implementation
}
```

### Spec Files

```typescript
// Use descriptive test names
describe('Login Feature', () => {
  test('should login successfully with valid credentials', async () => {
    // Test implementation
  });

  test('should display error message with invalid credentials', async () => {
    // Test implementation
  });
});
```

### Variables & Parameters

```typescript
// Use camelCase for variables and parameters
let userName = 'John Doe';
const userEmail = 'john@example.com';
let isLoggedIn = true;

// In functions
async function navigateToLoginPage(pageObject: LoginPage) {
  // Function implementation
}
```

### Constants

```typescript
// Use UPPER_SNAKE_CASE for constants
const BASE_URL = 'https://example.com';
const LOGIN_PAGE_TIMEOUT = 30000;
const MAX_RETRY_ATTEMPTS = 3;
const DEFAULT_WAIT_TIME = 5000;
```

### Selectors & Locators

```typescript
// Use descriptive names, camelCase
const loginButton = page.locator('[data-test="login-btn"]');
const emailInput = page.locator('#email');
const usernameField = page.locator('input[name="username"]');
```

---

## 📁 Framework Folder Structure

```
PLAYWRIGHT-E2E-TESTS/
│
├── .github/                          # CI/CD configuration folder
│
├── .vscode/                          # Editor-specific settings
│   └── mcp.json                      # MCP server config for VS Code
│
├── config/                           # Environment-specific config files
│
├── data/                             # Static data and constants
│   └── constants.json                # Common constants used in tests
│
├── debug/                            # Optional: Debug-related outputs/logs
│
├── logs/                             # Application/test logs
│
├── node_modules/                     # Auto-generated dependencies
│
├── playwright-report/                # Playwright HTML test report output
│
├── test-results/                     # Test execution artifacts
│
├── resources/                        # Misc test resources (images, files, etc.)
│
├── tests/                            # All organized test files
│   ├── api/                          # API test specs
│   ├── demo/                         # Demo-related test specs
│   ├── devices/                      # Device related scenarios
│   ├── e2e/                          # End-to-end test specs
│   ├── functional/                   # Functional test cases
│   ├── helpers/                      # Utility functions for tests
│   └── page-objects/                 # Page Object Model files
│
├── tests-examples/                   # Auto-generated sample test scenarios
│
├── .env.example                      # Template for environment variables
│
├── .gitignore                        # Git ignored files and folders
│
├── package-lock.json                 # Dependency lock file
│
├── package.json                      # Project metadata and scripts
│
├── playwright.config.ts              # Playwright configuration
│
└── README.md                         # Project documentation
```

### Folder Descriptions

| Folder | Purpose |
|--------|---------|
| `.github/` | Contains CI/CD workflow configurations and GitHub Actions |
| `.vscode/` | VS Code workspace settings and extensions configuration |
| `config/` | Environment-specific configuration files (dev, staging, prod) |
| `data/` | Static test data, constants, and fixtures |
| `debug/` | Debug logs and temporary debugging outputs |
| `logs/` | Application and test execution logs |
| `playwright-report/` | Generated HTML test report after test execution |
| `test-results/` | Test artifacts including screenshots and videos |
| `resources/` | Test resources like images, files, and mock data |
| `tests/api/` | API testing specifications |
| `tests/demo/` | Demo and proof-of-concept test scenarios |
| `tests/devices/` | Device-specific and responsive testing scenarios |
| `tests/e2e/` | End-to-end user workflow tests |
| `tests/functional/` | Functional component and feature tests |
| `tests/helpers/` | Reusable utility functions and helper methods |
| `tests/page-objects/` | Page Object Model classes for UI elements |
| `tests-examples/` | Auto-generated example tests from Playwright init |

---

## 🔧 Recommended VS Code Extensions

The following extensions are recommended to enhance your development experience:

| Extension | Purpose | Publisher |
|-----------|---------|-----------|
| **VS Code Icons** | File and folder icons for better visual organization | VSCode Icons Team |
| **Prettier - Code Formatter** | Automatic code formatting to maintain consistent style | Prettier |
| **Path Intellisense** | Auto-complete for file paths and imports | Christian Kohler |
| **npm Intellisense** | Auto-complete for npm modules and packages | Christian Kohler |
| **JavaScript (ES6) Code Snippets** | Useful code snippets for JavaScript/TypeScript | charalampos karypidis |
| **gitignore Generator** | Generate .gitignore files for your project | Michealmikeyy |

### Installation Instructions

You can install these extensions directly in VS Code:

1. Open the Extensions view (`Ctrl + Shift + X` on Windows/Linux or `Cmd + Shift + X` on Mac)
2. Search for each extension by name
3. Click **Install** on the extension card

**Or install via command line:**
```bash
code --install-extension vscode-icons-team.vscode-icons
code --install-extension esbenp.prettier-vscode
code --install-extension christian-kohler.path-intellisense
code --install-extension christian-kohler.npm-intellisense
code --install-extension xabikos.JavaScriptSnippets
code --install-extension michealmikeyy.gitignore-generator
```

### Extension Details

#### 🎨 VS Code Icons
- Adds colorful icons for files and folders
- Makes file navigation easier and faster
- Supports Playwright and TypeScript files

#### ✨ Prettier - Code Formatter
- Automatically formats code on save
- Maintains consistent code style across the project
- Configure in `.prettierrc` or `package.json`

#### 📁 Path Intellisense
- Auto-completes file paths as you type
- Useful for imports and file references
- Supports all file types

#### 📦 npm Intellisense
- Auto-completes npm package names
- Shows package versions
- Great for managing dependencies

#### 💻 JavaScript (ES6) Code Snippets
- Provides quick code snippets for common patterns
- Speeds up development with templates
- Includes arrow functions, async/await, and more

#### 🙈 gitignore Generator
- Easily generate `.gitignore` files for your project
- Supports multiple languages and frameworks
- Command: `gitignore: Generate`

---

## � Git Commands & Workflows

Essential Git commands for managing your Playwright E2E test project:

### Initial Setup

```bash
# Initialize a new Git repository
git init

# Clone an existing repository
git clone <repository-url>

# Configure your Git identity (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify your configuration
git config --list
```

### Viewing Status & History

```bash
# Check status of working directory
git status

# View commit history
git log

# View commit history with graph (one-line format)
git log --oneline --graph --all

# View changes in working directory
git diff

# View changes staged for commit
git diff --staged

# View specific file history
git log -- <file-path>
```

### Working with Branches

```bash
# Create a new branch
git branch <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# Switch to an existing branch
git checkout <branch-name>

# List all branches (local)
git branch

# List all branches (local and remote)
git branch -a

# Delete a branch
git branch -d <branch-name>

# Delete a branch forcefully
git branch -D <branch-name>

# Rename current branch
git branch -m <new-branch-name>
```

### Staging & Committing

```bash
# Stage all changes
git add .

# Stage specific file
git add <file-path>

# Commit with message
git commit -m "Your commit message"

# Commit with detailed message
git commit -m "Title" -m "Detailed description"

# Amend last commit (add changes without new commit)
git commit --amend

# View staged changes
git diff --cached
```

### Pushing & Pulling

```bash
# Push to remote repository
git push

# Push specific branch to remote
git push origin <branch-name>

# Push all branches
git push --all

# Pull latest changes from remote
git pull

# Pull from specific remote branch
git pull origin <branch-name>

# Fetch latest changes without merging
git fetch

# Fetch from all remotes
git fetch --all
```

### Merging & Rebasing

```bash
# Merge branch into current branch
git merge <branch-name>

# Merge without fast-forward (creates merge commit)
git merge --no-ff <branch-name>

# Rebase current branch onto another branch
git rebase <branch-name>

# Continue after resolving rebase conflicts
git rebase --continue

# Abort rebase
git rebase --abort
```

### Undoing Changes

```bash
# Discard changes in working directory
git checkout -- <file-path>

# Unstage changes
git reset <file-path>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert <commit-hash>
```

### Stashing Changes

```bash
# Save changes temporarily
git stash

# List all stashes
git stash list

# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{<index>}

# Apply and remove stash
git stash pop

# Delete specific stash
git stash drop stash@{<index>}

# Delete all stashes
git stash clear
```

### Remote Repository

```bash
# List all remote repositories
git remote -v

# Add a remote repository
git remote add <name> <url>

# Remove a remote repository
git remote remove <name>

# Rename a remote
git remote rename <old-name> <new-name>

# Change remote URL
git remote set-url <name> <new-url>
```

### Common Workflow Example

```bash
# 1. Create and switch to a new feature branch
git checkout -b feature/login-tests

# 2. Make changes to your test files
# (edit files...)

# 3. Check status
git status

# 4. Stage changes
git add tests/e2e/login.spec.ts

# 5. Commit changes
git commit -m "feat: add login functionality tests"

# 6. Push to remote
git push origin feature/login-tests

# 7. Create a pull request on GitHub/GitLab/Bitbucket

# 8. After merge, switch back to main branch
git checkout main

# 9. Pull latest changes
git pull origin main

# 10. Delete feature branch
git branch -d feature/login-tests
```

### Useful Aliases (Optional)

Add these to your `.gitconfig` for faster commands:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --oneline --graph --all'
```

Then use:
```bash
git st          # instead of git status
git co -b test  # instead of git checkout -b test
git ci -m "msg" # instead of git commit -m "msg"
```

---

## �🏁 Getting Started

To begin testing, run:
```bash
npx playwright test
```