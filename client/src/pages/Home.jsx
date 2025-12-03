import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {

  let posts = [
    {
      id: "1",
      "img":"Logo1.png",
      "title":"What is Lorem Ipsum?",
      "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
        {
      id: "2",
      "img":"Logo2.png",
      "title":"What is Lorem Ipsum?",
      "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
            {
      id: "3",
      "img":"Logo2.png",
      "title":"What is Lorem Ipsum?",
      "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]

return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post.id} className='flex items-center container pt-20'>
            <div>
              <img className='container h-auto' src={`./public/${post.img}`} alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className='text-center font-bold text-2xl font-mono text-glow'>{post.title}</h1>
              <p className='container p-4 font-mono text-justify'>{(post.desc)}</p>
              <Link className="mx-auto" to={`/post/${post.id}`}>
              <button className='main-button mx-auto bg-yellow-200 text-black'>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

