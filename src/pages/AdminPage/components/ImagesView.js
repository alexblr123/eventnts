import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const ImagesView = props => {
  return (
    <GridList cellHeight={160} cols={3}>
      <GridListTile key={tile.img} cols={tile.cols || 1}>
        <img src={tile.img} alt={tile.title} />
      </GridListTile>
    </GridList>
  );
};

export default ImagesView;
