let users = [
  {
    id: "1",
    name: "Andrew",
    email: "andrew@example.com",
    age: 27
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com"
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@example.com"
  }
];

let posts = [
  {
    id: "10",
    title: "GraphQL 101",
    body: "This is how to use GraphQL...",
    published: true,
    author: "1"
  },
  {
    id: "11",
    title: "GraphQL 201",
    body: "This is an advanced GraphQL post...",
    published: false,
    author: "1"
  },
  {
    id: "12",
    title: "Programming Music",
    body: "",
    published: false,
    author: "2"
  }
];

let comments = [
  {
    id: "102",
    text: "Comment 1",
    author: "3",
    post: "11"
  },
  {
    id: "103",
    text: "Comment 2",
    author: "1",
    post: "12"
  },
  {
    id: "104",
    text: "Comment 3",
    author: "2",
    post: "11"
  },
  {
    id: "105",
    text: "Comment 4",
    author: "1",
    post: "10"
  }
];

export default { users, posts, comments };
