// Check if a gallery image is portrait or landscape.

let verifyImageType = (imageHeight, imageWidth) =>
  imageHeight > imageWidth
    ? console.log(`It's a portrait image`)
    : console.log(`It's a landscape image`);

verifyImageType(1080, 1920); // It's a landscape image
