import axios from "axios";
import React, { useEffect, useState } from "react";

export const Menu = ({cat}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

  }, [cat]);
  return (
    <div className='flex flex-col gap-y-4 py-6'>
        <h1 className='text-xl'>Other posts You may like.</h1>
        {posts.map(post => (
            <div key={post.id} className='flex flex-col justify-center'>
                <img className='max-h-40 w-auto object-cover' src={post.img} />
                <h2 className='font-bold text-lg font-mono'>{post.title}</h2>
                <button className='main-button mx-auto bg-yellow-400'>Readmore</button>
            </div>
        ))}
    </div>
  )
}
