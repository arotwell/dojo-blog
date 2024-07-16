import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!"/>
            {isPending  && <div>Loading...</div>}
            { error && <div>{ error }</div>}
        </div>
     );
}
 
export default Home;