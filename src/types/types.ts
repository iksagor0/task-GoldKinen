export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
}

export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

