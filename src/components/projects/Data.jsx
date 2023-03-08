import getThatHome from "../../assets/get-that-home.png"
import trendingMovies from "../../assets/trendingmovie.png"
import reactTask from "../../assets/reactTask.png"
import todoList from "../../assets/todolist.png"
import rickAndMorty from "../../assets/rickandmorty.png"

const projects = [
  {
  id:1,
  name: "Get that home",
  description: "Application created in group using ruby and react and css, aims to help people find a home.",
  image: getThatHome,
  link: "https://get-that-home.vercel.app/"
  },
  {
  id:2,
  name: "Get that home",
  description: "Project created with javascript that helps you search for movies, see which ones are trending and add them to a favorites section.",
  image: trendingMovies,
  link: "https://enriquevizarra.github.io/curso-api-rest-js-practice/"
  },
  {
  id:3,
  name: "React Task",
  description: "Project created with React and tailwind css where you can write down your pending tasks.",
  image: reactTask,
  link: "https://enriquevizarra.github.io/react-tasks/"
  },
  {
  id:4,
  name: "Todo List",
  description: "Project created with javascript and css where you can write down your pending tasks and search your tasks.",
  image: todoList,
  link: "https://enriquevizarra.github.io/todolist/"
  },
  {
  id:5,
  name: "RICK AND MORTY APP",
  description: "Project created with React and vite, rick and morty api consumption, to display the images and descriptions of each one.",
  image: rickAndMorty,
  link: "https://sunny-douhua-c96279.netlify.app/"
  },
]

export { projects }