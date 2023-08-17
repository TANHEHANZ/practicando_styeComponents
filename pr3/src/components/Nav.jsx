import { Link,Outlet } from "react-router-dom"
import { Content, Navbar } from "../styles/styleComponents"
const Nav = () => {
  return (
    <>
 <Content>
 <Navbar>
      <Link to="/inicio">home</Link>
      <Link to="/sensores">Sensores</Link>
      <Link to="/reportes">Reportes</Link>
      <Link to="/datos">Datos</Link>
    
    </Navbar>
    <Outlet/> 
 </Content>
    
    </>
  )
}

export default Nav
