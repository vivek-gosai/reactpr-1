import {useState} from "react";
import MenusCom from "./menus/MenusCom";
import '../../App.css'
import Logo from "./logo/LogoCom";
import Btns from "./button/ButtonCom";

const HeaderCom = () => {

const [menuList,setmenuList]=useState(["Home","Pages","Pages","Blogs","Contact"])

  return (
    <>
    <header>
    <div className="container">
      <div className="row">
      <Logo />
      <MenusCom MenuItem = {menuList}/>
      <Btns />
      </div>
    </div>
    </header>
   
        
    </>
  );
};
export default HeaderCom;

