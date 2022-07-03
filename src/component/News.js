import React, { Component } from "react";

import Spinner from "./Spinner";


export class News extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: false,
      page: 0,
      totalResults: [],
    };
  }

  
  async componentDidMount() {
    
      let url = `https://newsdata.io/api/1/news?apikey=pub_3058bcd099932c95931004aa8f87093ede70&country=in&q=cricket&page=0`;
      this.setState({ loading: true });

      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        results: parsedData.results,
        totalResults: parsedData.totalResults,
        loading: false,
      });
   
    
  }
  previousclick = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_3058bcd099932c95931004aa8f87093ede70&country=in&q=cricket&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      results: parsedData.results,
      loading: false,
    });
  };
  nextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
    } else {
      let url = `https://newsdata.io/api/1/news?apikey=pub_3058bcd099932c95931004aa8f87093ede70&country=in&q=cricket&page=${this.state.page + 1}`;
      this.setState({ loading: true });
      let data = await fetch(url);

      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        results: parsedData.results,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
       

        <div className="container">
         

          <h1 className="text-center" id="head" style={{ marginTop: "20px" }}>
            <b>Cricket News</b>
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.results
                .filter((_, index) => index % 2 === 0)
                .map((element) => {
                  return (
                    <div className="col-md-4 mb-3" key={element.link}>
                     
                      <div className='my-3'>
                <div className="card" style={{ border: "1px solid black" }}>
                    
                    <img src={!element.image_url ? "https://source.unsplash.com/1920x1080/?{title}" :element.image_url} className="card-img-top" alt="..." style={{height: "190px", borderBottom: "1px solid black" }} />
                    <div className="card-body">
                <h5 className="card-title"><b>{element.title ? element.title.slice(0, 45) : ""}...</b></h5>
                        <p className="card-text">{
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }...</p>
                        <p className='card-text'><small className='text-muted'>Published On - {new Date(`${element.pubDate}`).toGMTString()}</small></p>
                        <a rel="noreferrer" href={element.link} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
                    </div>
                  );
                })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 0}
              className="btn btn-dark"
              onClick={this.previousclick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 2 > Math.ceil(this.state.totalResults / 10)
              }
              className="btn btn-dark"
              onClick={this.nextclick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
    
      </>
    );
  }
}

export default News;
