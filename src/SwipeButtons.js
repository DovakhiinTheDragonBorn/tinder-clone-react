import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import "./SwipeButtons.css";

function SwipeButtons() {
   return (
      <div className="swipeButtons">
         <IconButton className="swipeButtons__repeat" fontSize="large">
            <ReplayIcon />
         </IconButton>
         <IconButton className="swipeButtons__left" fontSize="large">
            <CloseIcon />
         </IconButton>
         <IconButton className="swipeButtons__star" fontSize="large">
            <StarIcon />
         </IconButton>
         <IconButton className="swipeButtons__right" fontSize="large">
            <FavoriteIcon />
         </IconButton>
         <IconButton className="swipeButtons__lightning" fontSize="large">
            <FlashOnIcon />
         </IconButton>
      </div>
   );
}

export default SwipeButtons;
