import React, { Component } from 'react'
import NewsItem from './NewsItem'
import LoadingGif from './LoadingGif'
import InfiniteScroll from 'react-infinite-scroll-component'
export default class News extends Component {
  articles=[]
  temp="https://sports.ndtv.com/icc-champions-trophy-2025/will-harm-jay-shah-on-rohit-sharma-bccis-pakistan-stance-for-champions-trophy-ex-stars-warning-7541567"
  constructor(props){
    super(props);
    this.state={
      articles:this.articles,
      loading:false,
      page:1,
      totalResults:0
    }
  }
  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
  }
  // prevClick=async()=>{
  //   this.setState({
  //   page:this.state.page-1}
  //   )
  //   this.updatePage(this.state.page)
  // }
  // nextClick=async ()=>{
  //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   this.setState({
  //   page:this.state.page+1
  //   })
  //   this.updatePage(this.state.page)
  // }  
  // }
  capitalize=(str)=>{
    return str[0].toUpperCase()+str.slice(1,str.length)
  }
  async updatePage(pageNo){
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url)
    this.props.setProgress(70)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    this.props.setProgress(100)
  }
  async componentDidMount(){
    this.updatePage(1)
    document.title=`${this.capitalize(this.props.category)}-NewsMonkey`
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>NEWS-MONKEY</h1>
        <h3> Top {this.capitalize(this.props.category) } Headlines</h3>
        
        
        <InfiniteScroll       
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<LoadingGif/>}
        >
           <div className="row mx-5 my-5">
        {/* {this.state.loading&&<LoadingGif/>} */}
            {this.state.articles.map((element,index)=>{
              return <div className="col-lg-4 col-md-3 col-sm-6" key={index}><NewsItem title={element.title} descriptiveText={element.description} urrl={element.url||"https://www.pixelstalk.net/wp-content/uploads/2016/09/Best-Beautiful-Images-For-Desktop-Nature.png"} imageUrl={element.urlToImage||"#"} 
              author={element.author} date={element.publishedAt} source={element.source.name}  /></div>
            })}
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-3">
              <button disabled={this.state.page-1<1} onClick={this.prevClick} className="btn btn-dark">&larr; Prev</button>
              <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextClick} className="btn btn-dark">Next &rarr;</button>
        </div> */}

      </div>
    )
  }
}
