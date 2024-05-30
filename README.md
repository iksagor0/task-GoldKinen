# Post Timeline Application

This project showcases a simple and clean way to build a timeline of posts using React, Redux, Typescript and integrating data from multiple APIs. The application provides a user-friendly interface with expandable posts to view comments, and the posts are sorted in descending order of post ID.

#### Live URL: [ https://task-gold-kinen.vercel.app](https://task-gold-kinen.vercel.app/)

## Installation

1. Clone or download this repository.

2. Navigate to the project folder and open a terminal.

3. Run npm install to install the dependencies.

4. After installing all dependencies, run `npm run dev` to start the development server.

5. The project will be running on http://localhost:5173/.

## Technologies Used

- TypeScript
- React
- Redux
- Material UI
- Tailwind CSS

## Features

- Display Posts: Fetch and display posts with post title, and post body.
- View Comments: Expand each post to view relevant comments.
- Show Users Info: Display users name based on post's User ID.

## API Endpoints

- Fetch Posts: `https://jsonplaceholder.typicode.com/posts`
- Fetch Users: `https://jsonplaceholder.typicode.com/users`
- Fetch Comments: `https://jsonplaceholder.typicode.com/comments`
