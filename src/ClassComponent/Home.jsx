import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }

  async getAPIData() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&pageSize=12&sortBy=publishedAt&language=${
        this.props.language
      }&apiKey=960241ab91f44612bfbc6925f672ec61`
    );
    response = await response.json();
    // console.log(response);
    if (response.articles)
      this.setState({
        articles: response.articles.filter((x) => x.title !== "[Removed]"),
        totalResults: response.totalResults,
      });
  }

  fetchData = async () => {
    console.log("i'm running...");
    this.setState({ page: this.state.page + 1 });
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&pageSize=12&page=${this.state.page}&sortBy=publishedAt&language=${
        this.props.language
      }&apiKey=960241ab91f44612bfbc6925f672ec61`
    );
    //converting in js object
    response = await response.json();

    if (response.articles)
      this.setState({
        articles: this.state.articles.concat(
          response.articles.filter((x) => x.title !== "[Removed]")
        ),
      });
  };

  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(preProps) {
    // console.log("called...");
    //condition is important
    if (preProps !== this.props) {
      this.getAPIData();
    }
  }

  render() {
    console.log("rendering class Component home page...");
    return (
      <>
        <div className="container-fluid my-1">
          <h5 className="bg-secondary text-center p-2 my-1 text-capitalize">
            {this.props.search ? this.props.search : this.props.q} News Atricles{" "}
          </h5>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className="my-5 text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <div className="row">
              {this.state.articles.map((item, index) => {
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
}
