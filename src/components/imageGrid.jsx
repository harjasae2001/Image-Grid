// Step 4: Create a new file for the ImageGrid component (src/components/ImageGrid.js)
import { useQuery } from 'react-query';
import { fetchImages } from "../services/unsplash";
import { Grid, ImageListItem } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   gridItem: {
//     width: "100%",
//     height: "100%",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
// }));
const imageGrid = () => {
//   const classes = useStyles();
  const { data: images, isLoading } = useQuery('images', fetchImages);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Grid container spacing={1}>
      {images.map((image) => (
        <Grid item xs={4} key={image.id} >
          <ImageListItem>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              
            />
          </ImageListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default imageGrid;
