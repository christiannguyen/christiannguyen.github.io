import React from "react"
import styled from 'styled-components';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const ImageWrapper = styled.img`
margin-top: 5px;
max-width: auto;
max-height: 500px;
`;

const Image = ({ src }) => (
  <ImageWrapper src={src}/>
)

export default Image
