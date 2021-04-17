const BlogList = ({blogData, title}) => {

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
                </div>
           ))
           }
        </div>
     );
}
 
export default BlogList;