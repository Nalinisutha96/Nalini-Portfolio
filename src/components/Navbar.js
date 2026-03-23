import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";

export default function Navbar() {

const [open,setOpen]=useState(false)

return (

<nav className="fixed w-full top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

{/* Logo */}

<h1 className="text-xl font-bold text-cyan-400">

Nalini S

</h1>

{/* Desktop Menu */}

<div className="hidden md:flex items-center space-x-8">

<a href="#about" className="hover:text-cyan-400 transition">

About

</a>

<a href="#skills" className="hover:text-cyan-400 transition">

Skills

</a>

<a href="#projects" className="hover:text-cyan-400 transition">

Projects

</a>

<a href="#contact" className="hover:text-cyan-400 transition">

Contact

</a>

<a
href="https://github.com/Nalinisutha96"
target="_blank"
className="text-xl hover:text-cyan-400"
>

<FaGithub/>

</a>

<a
href="https://linkedin.com"
target="_blank"
className="text-xl hover:text-cyan-400"
>

<FaLinkedin/>

</a>

</div>

{/* Mobile Menu Icon */}

<div
className="md:hidden text-xl cursor-pointer"
onClick={()=>setOpen(!open)}
>

<FaBars/>

</div>

</div>

{/* Mobile Menu */}

{open && (

<div className="md:hidden flex flex-col items-center bg-slate-900 py-6 space-y-6">

<a href="#about" onClick={()=>setOpen(false)}>

About

</a>

<a href="#skills" onClick={()=>setOpen(false)}>

Skills

</a>

<a href="#projects" onClick={()=>setOpen(false)}>

Projects

</a>

<a href="#contact" onClick={()=>setOpen(false)}>

Contact

</a>

</div>

)}

</nav>

)

}