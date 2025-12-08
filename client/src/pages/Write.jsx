import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the default Quill styles
import { Menu } from '../components/menu';
import { ImageIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`/api/upload`, formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    upload()
    } 
  


  return (
    <div className='container flex justify-between font-mono'>
      <div className='w-full h-auto p-10'>
        <input type="text" className='border-1 my-2 py-1 w-full' placeholder='Title...' onChange={e=>setTitle(e.target.value)}/>
        <ReactQuill theme="snow" value={value} onChange={setValue}/>
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
        
        <input className='hidden' type="file" id='file' onChange={e=>setFile(e.target.files[0])}/>
        <label htmlFor="file" className='main-button text-sm bg-blue-300 px-2 py-1 text-black flex justify-center'><ImageIcon className='text-blue-800'/>Upload image</label>
        
          <button className='main-button  text-sm bg-orange-300 px-2 py-1 text-black'>Create as a draft</button>
          <button className='main-button  text-sm bg-green-400 px-2 py-1 text-black' onClick={handleClick}>Publish</button>
        
        </div>
        <div className='p-2 items-center'>
          <h1 className='text-lg font-bold'>Category</h1>
          <div>
          <input type="radio" name="cat" value='art' id="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="art">Art</label>
          </div>
          <div>
          <input type="radio" name="cat" value='science' id="science" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="science">Science</label>
          </div>
          <div>
          <input type="radio" name="cat" value='technology' id="technology" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="technology">Technology</label>
          </div>
          <div>
          <input type="radio" name="cat" value='cinema' id="cinema" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div>
          <input type="radio" name="cat" value='design' id="design" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="design">Design</label>
          </div>
          <div>
          <input type="radio" name="cat" value='food' id="food" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}
