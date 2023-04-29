import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Menu from "./Menu";
import BlogPost from "./BlogPost";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import { AuthProvider, AuthRoute } from "./auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
