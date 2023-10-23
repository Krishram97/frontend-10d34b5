
import  Login  from './Login'
import Home from './Home'
import Contact from './Contact'
import Graphics from './Courses/Graphics'
import Skills from "./Courses/Skills"
import ArtWorks from "./Courses/Arts&tools"
import { Route, Routes } from 'react-router-dom'
export function Router() {
  
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses/graphics" element={<Graphics></Graphics>}></Route>
        <Route path="/courses/skills" element={<Skills></Skills>}></Route>
        <Route path="/courses/artworks" element={<ArtWorks></ArtWorks>}></Route>
        <Route path="/Contact" element= {<Contact></Contact>}></Route>
      </Routes>
    </div>
  )
}
