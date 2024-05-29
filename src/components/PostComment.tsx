import { Typography } from "@mui/material";
import { IComments } from "../types/types";

interface PostCommentProps {
  serial: number;
  comment: IComments;
}

export default function PostComment({ serial, comment }: PostCommentProps) {
  return (
    <>
      <Typography paragraph style={{ marginBottom: 4, fontWeight: "bold" }}>
        Comment ({serial}):
      </Typography>

      <Typography paragraph>{comment?.body}</Typography>
    </>
  );
}
