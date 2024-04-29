import React from 'react'
import './css/Categories.css'
import { useNavigate } from 'react-router-dom'
export default function Categories(props) {

    const navi = useNavigate();
    const submiter = async(path)=>{
        navi(path, {state: {id: props.usr}});
    }

  return (



    <>
    <div className="container py-3">
        <h2>Categories</h2>
        <div className="mainer">
            <div onClick={()=>submiter("/tag/Web")}  className="box">
                <img src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-web-development-line-icon-vector-png-image_6630883.png" height="220px" width="220px" alt="web" />
                <h5>Web Development</h5>
            </div>
            <div onClick={()=>submiter("/tag/Art")}  className="box">
            <img src="https://cdn2.iconfinder.com/data/icons/minimal-craft/256/minimal_craft_14-512.png" height="220px" width="220px" alt="web" />
                <h5>Art</h5>
            </div>
            <div onClick={()=>submiter("/tag/Databases")} className="box">
                <img src="https://i.imgur.com/gmlJLWm.png" height="220px" width="220px" alt="web" />
                <h5>Databases</h5>
            </div>
            <div onClick={()=>submiter("/tag/Networks")} className="box">
                <img src="https://i.imgur.com/95g311x.png" height="220px" width="220px" alt="web" />
                <h5>Networks</h5>
            </div>

            <div onClick={()=>submiter("/tag/Music")}  className="box">
                <img src="https://icons.veryicon.com/png/o/miscellaneous/resume-breakpoint-simple-line-mark/music-435.png" height="220px" width="220px" alt="web" />
                <h5>Music</h5>
            </div>


            <div onClick={()=>submiter("/tag/Linux")}  className="box">
            <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/arch_linux_icon_132588.png" height="220px" width="220px" alt="web" />
                <h5>Linux </h5>
            </div>
          
            
        </div>
    </div>
    </>
    
  )
}
