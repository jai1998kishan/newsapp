import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import { useLocation } from "react-router-dom";

export default function Home(props) {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResult] = useState(0);
  let [page, setPage] = useState(1);
  let [q, setQ] = useState("");
  let search = useLocation().search;

  async function getAPIData(q) {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        q ? q : "All"
      }&pageSize=12&sortBy=publishedAt&language=${
        props.language
      }&apiKey=960241ab91f44612bfbc6925f672ec61`
    );
    response = await response.json();
    // console.log(response);
    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[Removed]"));
      setTotalResult(response.totalResults);
    }
  }

  async function fetchData() {
    console.log("i'm running improve version functional component...");
    setPage(page + 1);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        q ? q : "All"
      }&pageSize=12&page=${page}&sortBy=publishedAt&language=${
        props.language
      }&apiKey=960241ab91f44612bfbc6925f672ec61`
    );
    response = await response.json();

    if (response.articles)
      setArticles(
        articles.concat(
          response.articles.filter((x) => x.title !== "[Removed]")
        )
      );
  }

  //api call kiya jaa rha hai
  useEffect(() => {
    let query = new URLSearchParams(search);
    getAPIData(query.get("q"));
    setQ(query.get("q"));
  }, [props, search]);

  return (
    <>
      <div className="container-fluid my-1">
        <h5 className="bg-secondary text-center p-2 my-1 text-capitalize">
          {q ? q : "All"} News Atricles{" "}
        </h5>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="my-5 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
              return (
                <NewsItem
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                  key={index}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
