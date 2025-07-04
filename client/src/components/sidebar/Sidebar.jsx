import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setcats] = useState([]);

  useEffect(()=>{
    const getcats =async()=>{
      const res =await axios.get("/categories");
      setcats(res.data);
    }
    getcats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://cdn.pixabay.com/photo/2020/03/27/18/57/nature-4974602__340.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quasi accusamus corrupti culpa, veritatis possimus porro officia, repudiandae modi nesciunt ducimus voluptatem quae.</p>
        </div>
        <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map(c=>(
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{c.name}</li>
          </Link>
           
        ))}       
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>

      </div>
    </div>
  )
}
