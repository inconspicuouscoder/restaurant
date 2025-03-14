# Restaurant API Server

This is a GraphQL API server for a restaurant menu built using Node.js, Express, Apollo Server, and GraphQL. It provides various endpoints to fetch menu items such as appetizers, entrees, sandwiches, salads, and more. The project uses Jest for testing and Babel for transpiling ES6+ code.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Example Queries](#example-queries)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/inconspicuouscoder/restaurant.git
    cd restaurant-api-server
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. To start the server run this command from the /restaurant/server directory:
    ```bash
    npm start
    ```

2. The server will be running at `http://localhost:4000/graphql`. You can access the GraphQL Playground at this URL to interact with the API.

## Testing

To run the tests, use the following command from the /restaurant/server directory:

```bash
npm test
```

The tests are written using Jest and can be found in the `tests` directory.

## Example Queries

Here are some example queries you can use in the GraphQL Playground:

### Fetch Appetizers

```graphql
query {
  appetizers {
    name
    description
    price
  }
}
```

### Fetch Entrees

```graphql
query {
  entrees {
    name
    description
    price
  }
}
```

### Fetch Sandwiches

```graphql
query {
  sandwiches {
    cold {
      name
      description
      half_price
      full_price
    }
    hot {
      name
      description
      price
    }
  }
}
```

### Fetch Salads

```graphql
query {
  salads {
    name
    description
    price
  }
}
```

This README provides basic instructions on how to run the project locally, how to run the tests, and example queries that can be used in the GraphQL Playground. Adjust the content as needed to fit your specific project requirements.
