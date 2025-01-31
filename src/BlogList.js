const BlogList = ({blogs, title}) => {
    //this or simply destructure it
    //const blogs = props.blogs;

    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.body }</p>   
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;