import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from '../pages/HomePage'
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import Header from "../components/Header";

export const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/profile/:name" element={<ProfilePage/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}