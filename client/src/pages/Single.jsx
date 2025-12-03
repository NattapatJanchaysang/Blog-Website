import React from 'react'
import { Camera, Delete, PencilIcon, Trash } from 'lucide-react';
import { Menu } from '../components/menu';

export const Single = () => {
    return (
      <div className='flex justify-between container'>
      <div>
        <img className='container' src="./public/Logo2.png" alt="picture" />
          <div className='flex gap-x-2'>
           <img src="" alt="userimg" />
           <span>Username</span>
           <p>Posted date</p>
            <div className='flex'>
              <PencilIcon className=''/>
              <Trash className='text-red-800'/>
            </div>
          </div>

          <div className='container max-w-4xl text-justify'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    )
}
