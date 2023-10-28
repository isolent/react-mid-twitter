
const posts = [
  {
    id: 1,
    name: 'Post 1',
    text: "It is the first post in this website",
    image: "/images/post1.png"
    }
];

export function fetchPosts() {
  return Promise.resolve(posts);
}

export function fetchPostById(id) {
  const post = posts.find((post) => post.id === id);
  return Promise.resolve(post);
}
