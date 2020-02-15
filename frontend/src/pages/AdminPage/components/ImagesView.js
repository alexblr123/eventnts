import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const ImagesView = ({ url: urls }) => {
  return (
    <GridList cellHeight={160} cols={40}>
      {urls.slice(0, 200).map(url => (
        <GridListTile key={url.url} cols={5}>
          <img src={url.url} alt={url.url} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default ImagesView;
