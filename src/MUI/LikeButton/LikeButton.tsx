import React, { useCallback } from 'react';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface LikeButtonProps {
  postLikes: {
    liked: boolean,
    postLikes: number
  }
  setPostLikes: React.Dispatch<React.SetStateAction<{ liked: boolean, postLikes: number }>>
}

const LikeButton: React.FC<LikeButtonProps> = ({postLikes, setPostLikes}) => {
  const handleClick = useCallback(() => {
    setPostLikes(prevState => ({
      liked: !prevState.liked,
      postLikes: postLikes.liked ? prevState.postLikes - 1 : prevState.postLikes + 1
    }));
  }, [postLikes]);

  return (
    <IconButton onClick={handleClick}>
      {postLikes.liked ? (
        <FavoriteIcon style={{ color: 'red' }} />
      ) : (
        <FavoriteBorderOutlinedIcon style={{ color: 'grey' }} />
      )}
    </IconButton>
  );
};

export default LikeButton;