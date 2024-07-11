import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       setTimeout(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok){
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
       }, 1000)
    }, []);
    
    return ( 
        <div className="home">
            
            <BlogList blogs={ blogs } title="All Blogs!"/>
            {isPending  && <div>Loading...</div>}
            { error && <div>{ error }</div>}
        </div>
     );
}
 
export default Home;