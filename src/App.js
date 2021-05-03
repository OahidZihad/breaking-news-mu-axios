import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import News from "./Components/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/everything?q=tesla&from=2021-05-03&sortBy=publishedAt&apiKey=5d02341651aa48b69ed59a0c8b90d961"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setArticles(data.articles));
  // }, []);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-05-03&sortBy=publishedAt&apiKey=5d02341651aa48b69ed59a0c8b90d961";
    axios(url).then((data) => setArticles(data.data.articles));
  }, []);
  return (
    <div>
      <h1>top articles: {articles.length}</h1>
      <Button color="primary">Hello World</Button>
      {/* <News></News> */}
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
}

export default App;
