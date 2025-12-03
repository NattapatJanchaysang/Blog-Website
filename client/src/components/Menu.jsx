import React from 'react'

export const Menu = () => {

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
    }
  ]

  return (
    <div className='flex flex-col gap-y-4'>
        <h1>Other posts You may like.</h1>
        {posts.map(post => (
            <div key={post.id} className='flex flex-col justify-center'>
                <img src={post.img} />
                <h2 className='font-bold text-lg font-mono'>{post.title}</h2>
                <button className='main-button mx-auto bg-yellow-400'>Readmore</button>
            </div>
        ))}
    </div>
  )
}
