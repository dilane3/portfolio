import { Paper } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import styles from './styles/carousel.module.css'

const Item = ({ data: image, folder }) => {
  return (
    <Paper className={styles.carouselItem}>
      <img
        className={styles.carouselItemImage}
        src={require(`../assets/images/projects/${folder}/${image}`)}
      />
    </Paper>
  )
}

const ImageCarousel = ({ images, folder }) => {
  return (
    <Carousel
      className={styles.carouselContainer}
      duration={400}
      animation="slide"
      interval={7000}
    >
      {
        images.map((image, index) => {
          return (
            <Item key={index} data={image} folder={folder} />
          )
        })
      }
    </Carousel>
  )
}

export default ImageCarousel