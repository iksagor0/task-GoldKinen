export async function getData(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch posts: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to get posts!";
    throw new Error(errorMessage);
  }
}

// // get all posts
// export async function getPosts(): Promise<IPost[]> {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) {
//       throw new Error("Failed to fetch posts: " + response.status);
//     }

//     return await response.json();
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Failed to get posts!";
//     throw new Error(errorMessage);
//   }
// }

// // get all users
// export async function getUsers(): Promise<IUser[]> {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error("Failed to fetch posts: " + response.status);
//     }

//     return await response.json();
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Failed to get posts!";
//     throw new Error(errorMessage);
//   }
// }

// // get all comments
// export async function getComments(): Promise<IComments[]> {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");

//     if (!response.ok) {
//       throw new Error("Failed to fetch posts: " + response.status);
//     }

//     return await response.json();
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : "Failed to get posts!";
//     throw new Error(errorMessage);
//   }
// }
