export const getMovies = () => {
  return fetch(
    `/api/movies/`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getTopRatedMovies = () => {
  return fetch(
    `/api/movies/top-rated`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getUpcomingMovies = () => {
  return fetch(
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
    "/api/genres/"
  )
    .then(res => res.json())
    .then(json => json);
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

export const addMovieWishlist = async (username, wishlistId, movieId) => {
  const res = await fetch(`/api/users/${username}/wishlists/${wishlistId}`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movieId : movieId })
  })
  return res.json();
};

export const addFavourite = async (username, movieId) => {
  const res = await fetch(`/api/users/${username}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movieId : movieId })
  })
  return res.json();
};

export const removeFavourite = async (username, movieId) => {
  const res = await fetch(`/api/users/${username}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({ movieId : movieId })
  })
  return res.json();
};

export const getUserFavourites = (username) => {
  return fetch(
    `/api/users/${username}/favourites`
  )
    .then((res) => res.json())
    .then((json) => {
      return json
    });
};

export const addMovieReview = async (movieId, review) => {
  const res = await fetch(`/api/movies/${movieId}/reviews`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(review)
  })
  return res.json();
};

export const removeMovieWishlist = async (username, wishlistId, movieId) => {
  const res = await fetch(`/api/users/${username}/wishlists/${wishlistId}`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({ movieId : movieId })
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

export const getUserFromToken = async (token) => {
  return await fetch(
    `/api/users/${token}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json
    });
};
