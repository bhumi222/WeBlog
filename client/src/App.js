import { BrowserRouter , Routes ,Route} from "react-router-dom";
import Topbar from "./components/TopBar/TopBar";
import Home from "./pages/home/Home";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import About from "./pages/about";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {useContext} from "react";
import Contact from "./pages/contact";
import {Context} from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return<>
    <BrowserRouter>
      <Topbar />
      <Routes>
        {/* <Route exact path="/">
          <Homepage />
        </Route> */}
        <Route path='/' element={<Homepage />}/>
        {/* <Route path="/posts">
          <Homepage />
        </Route> */}
        <Route path='/posts' element={<Homepage />}/>
        {/* <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route> */}
        {/* <Route path='/register' element= {currentUser ? <Homepage /> : <Register />}/> */}
        <Route path="/register" element={user ? <Home/> : <Register/>}/>
        <Route path="/login" element={user ?   <Home />: <Login/>}/>
        {/* <Route path="/post/:id">
          <Single />
        </Route> */}
        <Route path='/post/:id' element={<Single />}/>
        <Route path="/write" element={user ? <Write /> : <Login />}/>
        <Route path="/about" element={user ? <About /> : <Login />}/>
        <Route path="/contact" element={user ? <Contact /> : <Login />}/>
        <Route path="/settings" element={user ? <Settings /> : <Login />}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;





// import Home from "./pages/home/Home";

// import TopBar from "./components/TopBar/TopBar";
// // import Single from "./pages/single/Single";
// // import Write from "./pages/write/Write";
// // import Setting from "./pages/settings/Settings";
// // import Login from "./pages/login/Login";
// // import Register from "./pages/register/Register";
// import {BrowserRouter ,Routes,Route} from "react-router-dom";


// function App() {
//   return (
//     <BrowserRouter>
//     <TopBar />
//     <Routes>
//     <Route path="/" alielement={</Home>} />
      

//     </Route>

//     </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;
