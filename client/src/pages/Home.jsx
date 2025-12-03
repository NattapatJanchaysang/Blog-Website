import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {

   const posts = [
     {
       id: 1,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 2,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 3,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 4,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
   ];
return (
    <div>
      <div>
        {posts.map((post) => (
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

