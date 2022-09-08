const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '53fa19e96c651b18359d9cd342e66826',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;