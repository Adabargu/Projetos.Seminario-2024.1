var currentImage = 1;

function changeImage() {
  
  if (currentImage === 1) {
    image.src = 'saopaulo_campeaomundial_2005_get_95.avif';
    currentImage = 2;
  } else {
    image.src = 'escudo-spfc.avif';
    image.alt = "imagem1";
    currentImage = 1;
  }
}