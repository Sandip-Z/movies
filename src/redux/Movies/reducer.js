import {
  UPDATE_SEARCH_DATA,
  CLEAR_SEARCH_DATA,
  ADD_IN_TO_WATCH,
} from "./action";

const initialState = {
  searchData: [],
  toWatch: [
    {
      id: 20415,
      url: "https://yts.mx/movies/hello-gangster-2016",
      imdb_code: "tt3429784",
      title: "Hello Gangster",
      title_english: "Hello Gangster",
      title_long: "Hello Gangster (2016)",
      slug: "hello-gangster-2016",
      year: 2016,
      rating: 6.6,
      runtime: 82,
      genres: ["Action", "Comedy", "Crime", "Drama"],
      summary:
        "When Simon's' dog is taken from him, he stops at nothing to get her back.",
      description_full:
        "When Simon's' dog is taken from him, he stops at nothing to get her back.",
      synopsis:
        "When Simon's' dog is taken from him, he stops at nothing to get her back.",
      yt_trailer_code: "",
      language: "en",
      mpa_rating: "",
      background_image:
        "https://yts.mx/assets/images/movies/hello_gangster_2016/background.jpg",
      background_image_original:
        "https://yts.mx/assets/images/movies/hello_gangster_2016/background.jpg",
      small_cover_image:
        "https://yts.mx/assets/images/movies/hello_gangster_2016/small-cover.jpg",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/hello_gangster_2016/medium-cover.jpg",
      large_cover_image:
        "https://yts.mx/assets/images/movies/hello_gangster_2016/large-cover.jpg",
      state: "ok",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/9F47245807AFADF089A9DFBB54B4D4A5EA6F01C5",
          hash: "9F47245807AFADF089A9DFBB54B4D4A5EA6F01C5",
          quality: "720p",
          type: "web",
          seeds: 14,
          peers: 0,
          size: "719.28 MB",
          size_bytes: 754219745,
          date_uploaded: "2020-08-21 22:10:45",
          date_uploaded_unix: 1598040645,
        },
        {
          url:
            "https://yts.mx/torrent/download/F5C9EDBCEEA0CA22FB785A305E03052E9AB9D9F3",
          hash: "F5C9EDBCEEA0CA22FB785A305E03052E9AB9D9F3",
          quality: "1080p",
          type: "web",
          seeds: 10,
          peers: 1,
          size: "1.3 GB",
          size_bytes: 1395864371,
          date_uploaded: "2020-08-21 23:57:33",
          date_uploaded_unix: 1598047053,
        },
      ],
      date_uploaded: "2020-08-21 22:10:45",
      date_uploaded_unix: 1598040645,
    },
  ],
  watching: [],
  watched: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      };
    case CLEAR_SEARCH_DATA:
      // console.log("clearing search data");
      return {
        ...state,
        searchData: [],
      };
    case ADD_IN_TO_WATCH:
      return {
        ...state,
        toWatch: [...state.toWatch, payload],
      };
    default:
      return state;
  }
};
