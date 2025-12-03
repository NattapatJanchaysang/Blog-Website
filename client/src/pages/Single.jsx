import { PencilIcon, Trash } from 'lucide-react';
import { Menu } from '../components/menu';
import moment from 'moment/moment';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Single = () => {
  

  const [post,setPost] = useState({})

  const location = useLocation()

  console.log(location)

  const postId = location.pathname.split("/")[2]

  const { currentUser } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [postId])

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }


    return (
      <div className='flex container'>
      <div className='items-center w-full'>
        <img className='max-h-100 w-full object-cover pt-6 px-6' src={post?.img} alt="picture" />
          <div className='flex gap-x-2 px-6 pt-2'>
           {post.userImg && <img src={post.userImg} alt="userimg" />}
           <span>{post?.username}</span>
           <p>Posted {moment(post?.date).fromNow()}</p>
            {currentUser?.username === post?.username && <div className='flex'>
              <button className='main-button px-2 bg-green-100'><PencilIcon className='hover:scale-110 text-green-900'/></button>
              <button className='main-button px-2 mx-2 bg-red-100' onClick={handleDelete}><Trash className='text-red-800 hover:scale-110'/></button>
            </div>}
          </div>

          <div className='px-6 py-4text-justify'>
            <h1>{post?.title}</h1>
            {post?.desc}
          </div>
        </div>
        <div>
          <Menu cat={post.cat}/>
        </div>
      </div>
    )
}
