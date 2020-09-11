// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
  try {
    //const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
    const apiKey = 'anyoG6FgTEQ3Fx2KywvgvcZGe1b9Bv1Y';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    return 'No existe';
  }
};
