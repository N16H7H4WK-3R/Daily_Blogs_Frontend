import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import './App.css'
import Landing from "./components/landing";
import CreateBlog from "./components/create_blog";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import ManageBlogs from "./components/ManageBlog";
import NotFoundPage from "./components/NotFoundPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<> <Header /> <Body /> <Footer />  </>} />
        <Route path="/new-blog" element={<><Header /> <CreateBlog /> <Footer /> </>} />
        <Route path="/manage-blogs" element={<><Header /> <ManageBlogs /> <Footer /> </>} />
        <Route path="*" element={<><Header /> <NotFoundPage /> <Footer /> </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
