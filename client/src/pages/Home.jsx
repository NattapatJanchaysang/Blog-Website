import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  
  const [posts,setPosts] = useState([])

  const cat = useLocation().search

  console.log(location)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${cat}`)
        setPosts(res.data)
      } catch (error) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

return (
  
    <div>
      <div>
        {Array.isArray(posts) && posts.map((post) => (
          <div key={post.id} className='md:flex items-center container pt-20 md:[&:nth-child(odd)]:flex-row-reverse'>
            <div>
              <img className='w-auto max-h-200 px-24 ' src={`${post.img}`} alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className='text-center font-bold text-2xl font-mono text-glow'>{post.title}</h1>
              <p className='container p-4 font-mono text-justify'>{(post.desc)}</p>
              <Link className="mx-auto" to={`/post/${post.id}`}>
              <button className='main-button mx-auto bg-yellow-200 text-black cursor-pointer text-yellow-900'>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

