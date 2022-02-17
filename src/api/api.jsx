// export default class MovieAPI {
//   apiBase = 'https://api.themoviedb.org/3/search/movie?api_key=2da6721201e4c6d53fa211ee0b0b40ff';

//   apiGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=2da6721201e4c6d53fa211ee0b0b40ff';

//   async getResource(url) {
//     const response = await fetch(`${this.apiBase}${url}`);

//     if (!response.ok) {
//       throw new Error(`Could not fetch ${url}, received ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   }

//   // async getAllMovies() {
//   //   const result = await this.getResource(`&query=return`);

//   //   return result;
//   // }

//   async searchMovies(page, str) {
//     const result = await this.getResource(`&page=${page}&query=${str}`);
//     return result;
//   }

//   async getResource2() {
//     const response = await fetch(`${this.apiGenre}`);

//     if (!response.ok) {
//       throw new Error(`Could not fetch ${this.apiGenre}, received ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   }

//   async getGenres() {
//     const result = await this.getResource2();
//     return result.genres;
//   }
// }
