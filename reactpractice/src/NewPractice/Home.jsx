import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // const [name, setName] = useState('Mario')

    // const handleClick = (e) => {
    //     setName('Luigi')
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name)
    // }
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    
    const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog)=>blog.id !== id)
      setBlogs(newBlogs);
    }

    useEffect(()=>{
      console.log('use effect ran...')
    })

    return ( 
        <div className="homepage">
            {/* <h1>Home</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Piyush')}>Click Me Again</button> */}
          <BlogList blogData={blogs} title="All Blogs!" handleDelete={handleDelete}/>
          {/* <BlogList blogData={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs"/> */}
        </div>
     );
}
 
export default Home;