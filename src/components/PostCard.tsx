/* eslint-disable @typescript-eslint/no-unused-vars */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../app/store";
import { IPost } from "../types/types";
import { getRandomDateAndTime } from "../utils/getRandomDateAndTime";
import { getRandomImage } from "../utils/getRandomImage";
import PostComment from "./PostComment";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface PostCardProps {
  post: IPost;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({ post }: PostCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const usersAndComments = useSelector((state: RootStateType) => ({
    user: state.users?.users?.find((user) => user.id === post?.userId),
    comments: state.comments?.comments?.filter((comment) => comment.postId === post?.id),
  }));

  const randomDateAndTime = React.useMemo(getRandomDateAndTime, []);
  const randomImage = React.useMemo(getRandomImage, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="mb-4">
      {/* ******************** Post Header ******************** */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {usersAndComments?.user?.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={usersAndComments?.user?.name}
        subheader={randomDateAndTime}
      />

      {/* ******************** Post Content ******************** */}
      <CardMedia component="img" height="100" image={randomImage} alt="Paella dish" className="max-h-[300px]" />

      <CardContent>
        <Typography variant="h3" fontSize={18} color="text.secondary" style={{ marginBottom: 4 }}>
          {post?.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {post?.body}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setFavorite((prev) => !prev)}>
          <FavoriteIcon color={favorite ? "error" : "inherit"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      {/* ******************** Post Comments ******************** */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {usersAndComments?.comments?.map((comment, index) => (
            <PostComment key={comment?.id} serial={index + 1} comment={comment} />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
