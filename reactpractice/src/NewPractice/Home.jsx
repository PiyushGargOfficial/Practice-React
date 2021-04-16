import { useState } from 'react';

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
    
    

    return ( 
        <div className="homepage">
            {/* <h1>Home</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Piyush')}>Click Me Again</button> */}
           { blogs.map((blog) =>(
                <div className='blog-preview' key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                </div>
           ))
           }
        </div>
     );
}
 
export default Home;