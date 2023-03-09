# Publice

Blog API built using MongoDB and Express. It supports basic CRUD operations (create, read, update, delete) for blog posts.

## Requirements

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository:

```
git clone https://github.com/Folawewo/publice.git
```

2. Install dependencies:

```
cd publice
npm Install
```

3. Start the server:

```
npm start
```

## Usage

Once the server is running, you can interact with the API using the following endpoints:

- `GET /posts`: Get a list of all blog posts.
- `GET /posts/:id`: Get a single blog post by ID.
- `POST /posts`: Create a new blog post.
- `PUT /posts/:id`: Update an existing blog post by ID.
- `DELETE /posts/:id`: Delete a blog post by ID.

The API supports JSON input and output. For example, to create a new blog post, you can send a POST request with the following JSON payload:

```json
{
  "title": "My First Blog Post",
  "content": "This my First Blog Post and I am excited."
}
```

## Configuration

The API can be configured using environment variables. The following variables are supported:

- `PORT`: The port number to listen on. Default is `5000`.
- `MONGO_URL`: The MongoDB connection URI. Default is `mongodb://localhost/publice`.

You can set these variables by creating a `.env` file in the root of the project directory.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on GitHub. If you want to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
