# GitHub_searcher

GitHub_searcher finds repositories whose name and description fields contain the words entered by user. It returns 10 results per page sorted by stars in descending order.

GitHub_searcher is a learning project built using vanilla JavaScript to meet the following requirements: 

- usage of UI libraries is not allowed;
- storage of the full list of repositories received from the GitHub API on the client site is not allowed.
The full list of requirements is available here: https://github.com/avito-tech/pro-fe-trainee-task. The only exclusion is that the project is built as a single page application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. **Clone this repository:**

```bash
git clone https://github.com/AlexandraRusak/github_searcher.git
```

2. **Navigate into the project directory:**
```bash
cd github_searcher
```

3. **Install dependencies:**
```bash
npm install
```

## Usage

### Starting in dev mode

After installing the dependencies, you can start the development server:
```bash
npm run dev
```
This command will start the Vite development server. You can then view the project in the browser at http://localhost:3000.

### Starting in prod mode 
To build the project for production, run:
```bash
npm run build
```
This command will generate a production-ready build of the project in the dist directory.

Then just run
```bash
npm start
```

