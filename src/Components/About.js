import {Link,Route,Routes} from 'react-router-dom';
import Josh from './Josh'

const About = ()=>{
    return (
      <>
        <div>HEllo i am the about page</div>
        <Link to ="*/josh"> JOSH</Link>

        <Routes>
            <Route path = "*/josh" element={<Josh/>}></Route>  
        </Routes>
      </>
    )
}

export default About
