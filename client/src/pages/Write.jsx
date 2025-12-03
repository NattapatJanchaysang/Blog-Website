import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the default Quill styles
import { Menu } from '../components/menu';
import { ImageIcon } from 'lucide-react';

export const Write = () => {

  const [value, setValue] = React.useState('');

  console.log(value)

  return (
    <div className='container flex justify-between font-mono'>
      <div className='w-full h-auto p-10'>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      <div className='flex flex-col gap-y-4 pt-2 w-60'>
        <div className='container gap-y-2 p-2 flex flex-col'>
        <h1 className='text-lg font-bold'>Publish</h1>
        <span>
          <b>Status: </b> Draft
        </span>
        
        <span>
          <b>Visibility: </b> Public
        </span>
        
        <input className='hidden' type="file" id='file'/>
        <label htmlFor="file" className='main-button text-sm bg-blue-300 px-2 py-1 text-black flex justify-center'><ImageIcon className='text-blue-800'/>Upload image</label>
        
          <button className='main-button  text-sm bg-orange-300 px-2 py-1 text-black'>Create as a draft</button>
          <button className='main-button  text-sm bg-green-400 px-2 py-1 text-black'>Update</button>
        
        </div>
        <div className='p-2 items-center'>
          <h1 className='text-lg font-bold'>Category</h1>
          <div>
          <input type="radio" name="cat" value='art' id="art" />
          <label htmlFor="art">Art</label>
          </div>
          <div>
          <input type="radio" name="cat" value='science' id="science" />
          <label htmlFor="science">Science</label>
          </div>
          <div>
          <input type="radio" name="cat" value='technology' id="technology" />
          <label htmlFor="technology">Technology</label>
          </div>
          <div>
          <input type="radio" name="cat" value='cinema' id="cinema" />
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div>
          <input type="radio" name="cat" value='design' id="design" />
          <label htmlFor="design">Design</label>
          </div>
          <div>
          <input type="radio" name="cat" value='food' id="food" />
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}
