import React from "react";
import { AnimatePresence ,motion, useCycle } from "framer-motion"
import './styles/Sidebar.css'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import twitter from './images/Twitter-logo.svg.png'
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapse } from "react-icons/tb"


const links = [
  { img: linkedin, to: "https://www.linkedin.com/in/santiago-caballero-82aa241a1/", id: 1 },
  { img: github, to: "https://github.com/SaanCaba", id: 2 },
  { img: twitter, to: "https://twitter.com/CabaSaanti", id: 3 },
];
export default function SideBar() {
    const [open, cycleOpen] = useCycle(false, true);
    const itemVariants = {
        closed: {
          opacity: 0
        },
        open: { opacity: 1 }
      };
      const sideVariants = {
        closed: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
          }
        },
        open: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
          }
        }
      };
  return (
    <main className={open ? 'sidebarOpen sidebar-pos' : 'SideBarclosed sidebar-pos'} >
    <AnimatePresence >
        { open ? (
            <div>
    <motion.aside initial={{ width: 0 }} animate={{ width: 'min-content', margintop: '8px' }}>
  <motion.div 
    className="container"
    initial="closed"
    animate="open"
    variants={sideVariants}
  >
    {links.map(({ img, to, id }) => (
        <div key={id}>
       <motion.a  href={to} variants={itemVariants} className='d-flex flex-column anchor ' target='_blank'>
       <img className="img-sidebar" src={img}  />
     </motion.a>
     </div>
    ))}
  </motion.div>
  
</motion.aside>
<div className="d-flex justify-content-center m-2">
      <button className="btn-sidebar" onClick={cycleOpen}>{open ? <TbLayoutSidebarLeftCollapse  size={30}/> : "Redes >>"}</button>
      </div>
</div>
      

        )
        : 
        <div className="d-flex justify-content-center">
        <div style={{ width: '20px', height: '80px' }} className='d-flex'>
          
      <button className="btn-sidebar-closed" onClick={cycleOpen}> <div>
      <TbLayoutSidebarLeftExpand size={30} />
        </div>  </button>
      </div>
      </div>

        }
        
    </AnimatePresence>
    
    </main>
  );
}