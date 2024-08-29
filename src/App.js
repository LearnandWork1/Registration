
import RouterPage from './components/routes/RouterPage';


function App() {
  return (

    <div className='row'>
      
      <RouterPage/>

    </div>
  );
}

export default App;


// import React from 'react';
// import MainHeader from "./MainHeader";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// //import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;    
// }




// const Test = () => {
//     return (
//         <Router>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router>
//     );
    
// };

// export default Test;