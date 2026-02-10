const vue_app = Vue.createApp({
  data() {
    return {
      movies: []
    }
  },

  created() {
    fetch('movies.json')
      .then(response => response.json())
      .then(data => {
        this.movies = data
      })
  },

  methods: {
    nextPoster(movie) {
      const total = movie.posters.length
      movie.posterindex = (movie.posterindex + 1) % total
    },

    previousPoster(movie) {
      const total = movie.posters.length
      movie.posterindex = (movie.posterindex - 1 + total) % total
    }
  }
})

vue_app.mount('#vue_app')