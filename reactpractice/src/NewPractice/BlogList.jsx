const BlogList = ({blogData, title, handleDelete}) => {

    // const blogs = props.blogData;
    // const title = props.title;
    // console.log(props)

    return ( 
        <div className='blog-list'>
        <h2>{title}</h2>
         { blogData.map((blog) =>(
                <div className='blog-preview' key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
           ))
           }
        </div>
     );
}
 
export default BlogList;