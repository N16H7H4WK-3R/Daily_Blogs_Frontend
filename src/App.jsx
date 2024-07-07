import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/UserAuth/login";
import Signup from "./components/UserAuth/signup";
import Landing from "./components/utilities/landing";
import CreateBlog from "./components/BlogContent/create_blog";
import Header from "./components/views/header";
import Body from "./components/BlogContent/body";
import Footer from "./components/views/footer";
import ManageBlogs from "./components/BlogContent/ManageBlog";
import NotFoundPage from "./components/utilities/NotFoundPage";
import './assets/App.css'
import Profile from "./components/UserAuth/profile";

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
        <Route path="/user-profile" element={<><Header /> <Profile /> <Footer /> </>} />
        <Route path="*" element={<><Header /> <NotFoundPage /> <Footer /> </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
