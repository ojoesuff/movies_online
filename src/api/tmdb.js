export const getMovies = () => {
  return fetch(
    // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    `/api/movies/`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getTopRatedMovies = () => {
  return fetch(
    // `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    `/api/movies/top-rated`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getUpcomingMovies = () => {
  return fetch(
    // `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    `/api/movies/upcoming`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getMovieImages = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.posters)
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const getUserWishlists = (username) => {
  return fetch(
    `/api/users/${username}/wishlists`
  )
    .then((res) => res.json())
    .then((json) => {
      return json
    });
};

export const addUserWishlist = async (username, wishlist) => {
  const res = await fetch(`/api/users/${username}/wishlists`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ wishlist })
  })
  return res.json();
};

export const deleteUserWishlist = async (username, wishlist) => {
  const res = await fetch(`/api/users/${username}/wishlists`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({ wishlist })
  })
  return res.json();
};

export const login = async (username, password) => {
  const res = await fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  })
  return res.json();
};

export const signup = async (username, password) => {
  const res = await fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  })
  return res.json();
};
