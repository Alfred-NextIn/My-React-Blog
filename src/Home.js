import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Journey to the West', body: 'there are many things in it ...', author: 'Alvin', id: 1},
        { title: 'Journey to the East', body: 'there are many things in it ...', author: 'Andy', id: 2},
        { title: 'Journey to the North', body: 'there are many things in it ...', author: 'James', id: 3},
        { title: 'Journey to the South', body: 'there are many things in it ...', author: 'Dominic', id: 4},
    ]);

    const title = "All Blogs";
    
    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title={ title }/>
        </div>
     );
}
 
export default Home;