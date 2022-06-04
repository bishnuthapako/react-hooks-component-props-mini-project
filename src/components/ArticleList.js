import react from "react";
import Article from "./Article";
import blogData from "../data/blog";
import { v4 as uuidv4 } from 'uuid';


// console.log(blogData)

const res = blogData.posts[0].date;
console.log(res)

function ArticleList(){

    return (
        <main>
            <Article 
            key={uuidv4()}
            title = {blogData.posts[0].title}
            date = {blogData.posts[0].date}
            preview ={blogData.posts[0].preview}/>
            
        </main>
    )
}

export default ArticleList