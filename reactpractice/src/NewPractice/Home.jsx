import { useState,useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './UseFetch';


const Home = () => {

    // const [name, setName] = useState('Mario')

    // const handleClick = (e) => {
    //     setName('Luigi')
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name)
    // }
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ])
    
    // const [blogs, setBlogs] = useState(null); 
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)
      
    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter((blog)=>blog.id !== id)
    //   setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //   fetch('http://localhost:8000/blogs')
    //   .then(res => {
    //     if(!res.ok){
    //       throw Error('Could not Fetch Data')
    //     }
    //     return res.json()
    //   })
    //   .then(data => {
    //     console.log(data);
    //     setBlogs(data);
    //     setIsPending(false);
    //     setError(null)
    //   })
    //   .catch(err => {
    //     setIsPending(false)
    //    setError(err.message)
    //   })
    // },[])

    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="homepage">
            {/* <h1>Home</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Piyush')}>Click Me Again</button> */}
         {/* {blogs && <BlogList blogData={blogs} title="All Blogs!" handleDelete={handleDelete}/> } */}
         {error && <div> { error } </div>}
         {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogData={blogs} title="All Blogs!" /> }

          {/* <BlogList blogData={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs"/> */}
        </div>
     );
}
 
export default Home;