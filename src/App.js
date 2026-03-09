import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GithubRepos from "./components/GithubRepos";
import CaseStudy from "./pages/CaseStudy";
import Footer from "./components/Footer";

export default function App(){

return(

<Router>

<div className="bg-slate-950 text-white">

<Navbar/>

<Routes>

<Route path="/" element={
<>
<Hero/>
<Skills/>
<Experience/>
<Projects/>
<GithubRepos/>
<Footer/>
</>
}/>

<Route path="/case-study/:project" element={<CaseStudy/>}/>

</Routes>

</div>

</Router>

)

}