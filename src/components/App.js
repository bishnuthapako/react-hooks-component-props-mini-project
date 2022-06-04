import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header"
import About from "./About";
import ArticleList from "../components/ArticleList"



// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image={blogData.logo}
      about = {blogData.about}/>
      <ArticleList articlePost = {blogData.posts} />
     
    </div>
  );
}

export default App;
