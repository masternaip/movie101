{
  "API_KEY": "d0a9548a34ac3ef26148ec87f5f35618",
  "BASE_URL": "https://api.themoviedb.org/3",
  "IMG_URL": "https://image.tmdb.org/t/p/w500",
  "functions": [
    {
      "name": "fetchTrending",
      "async": true,
      "params": [
        {
          "name": "type",
          "type": "string",
          "description": "The type of content to fetch trending for (e.g., 'movie', 'tv')"
        }
      ],
      "returns": "Promise<Array<Object>>",
      "description": "Fetches trending movies or TV shows for the current week from ${BASE_URL} using API key ${API_KEY}."
    },
    {
      "name": "fetchTrendingAnime",
      "async": true,
      "returns": "Promise<Array<Object>>",
      "description": "Fetches trending Japanese anime TV shows for the current week from ${BASE_URL} using API key ${API_KEY}, filtering by original language 'ja' and genre ID 16 (Animation)."
    },
    {
      "name": "displayBanner",
      "params": [
        {
          "name": "item",
          "type": "Object",
          "description": "An object containing movie or TV show details, including backdrop_path, title, and name."
        }
      ],
      "description": "Updates the banner section of the webpage with the background image from ${IMG_URL}${item.backdrop_path} and the title of the provided item."
    },
    {
      "name": "displayList",
      "params": [
        {
          "name": "items",
          "type": "Array<Object>",
          "description": "An array of movie or TV show objects, each containing poster_path, title, and name."
        },
        {
          "name": "containerId",
          "type": "string",
          "description": "The ID of the HTML element where the list of images will be displayed."
        }
      ],
      "description": "Dynamically creates and appends image elements with source ${IMG_URL}${item.poster_path} for each item in the provided array to the specified container."
    },
    {
      "name": "showDetails",
      "params": [
        {
          "name": "item",
          "type": "Object",
          "description": "An object containing detailed information about a movie or TV show, including title/name, overview, poster_path, and vote_average."
        }
      ],
      "description": "Displays a modal with detailed information about the selected movie or TV show, including title, description, image from ${IMG_URL}${item.poster_path}, and rating. It also calls changeServer to set up the video embed."
    },
    {
      "name": "changeServer",
      "description": "Updates the source URL of the embedded video player in the modal based on the selected server from a dropdown. It uses the currentItem's ID and media type, along with ${BASE_URL} and ${API_KEY} where applicable."
    },
    {
      "name": "closeModal",
      "description": "Hides the details modal and clears the source URL of the embedded video player."
    },
    {
      "name": "openSearchModal",
      "description": "Displays the search modal and focuses on the search input field."
    },
    {
      "name": "closeSearchModal",
      "description": "Hides the search modal and clears the search results."
    },
    {
      "name": "searchTMDB",
      "async": true,
      "description": "Performs a search on The Movie Database API at ${BASE_URL}/search/multi using API key ${API_KEY} based on the text entered in the search input field and displays the results as images with source ${IMG_URL}${item.poster_path} in the search modal."
    },
    {
      "name": "init",
      "async": true,
      "description": "Initializes the webpage by fetching trending movies, TV shows, and anime from ${BASE_URL} using API key ${API_KEY}, displaying a random movie banner with image from ${IMG_URL}, and populating the respective lists with images from ${IMG_URL}."
    }
  ],
  "variables": [
    {
      "name": "currentItem",
      "type": "Object",
      "description": "A variable to store the currently selected movie or TV show item for displaying details and embedding videos."
    }
  ]
}
