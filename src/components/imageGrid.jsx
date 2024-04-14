
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from "../services/unsplash";
import { Grid, ImageListItem } from "@mui/material";
const ImageGrid = ({searchTerm}) => {

  const { data: images, isLoading } = useQuery({queryKey:['images'], queryFn: (searchTerm) => fetchImages(searchTerm)});

  if (isLoading) return <div>Loading...</div>;
  console.log(images?.results)
  return (
    <Grid container spacing={1}>
      {images?.results.map((image) => (
        <Grid item xs={4} key={image.id} >
          <ImageListItem variant='masonry'>
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

export default ImageGrid