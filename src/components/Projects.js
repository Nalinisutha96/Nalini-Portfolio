import { motion } from "framer-motion";
import { useState } from "react";

const projects = [

{
title:"Love Without Reason (LWR)",
url:"https://www.lovewithoutreason.org/",
caseStudy:"Developed an international donation platform with Stripe integration, geo-based country detection and optimized performance for global traffic."
},

{
title:"Pedistars India",
url:"https://pedistarsindia.com/",
caseStudy:"Built a healthcare simulation platform with event registration system, Razorpay payments, and spam protection using Google reCAPTCHA."
},

{
title:"Tripyt Travel",
url:"https://tripyt.com/",
caseStudy:"Developed travel booking platform with interactive UI and dynamic booking forms."
},

{
title:"TPS Granite & Roofing",
url:"https://tpsgraniteroofing.com/",
caseStudy:"Corporate product showcase website with categorized services, responsive UI and SEO optimization."
},

{
title:"Jeyaar Builders",
url:"#",
caseStudy:"Responsive construction website with gallery integration, performance optimization and cross-browser compatibility."
},

{
title:"Impact LLP",
url:"#",
caseStudy:"Designed and developed corporate website with modern UI and SEO friendly structure."
},

{
title:"Falcon Tennis Academy",
url:"#",
caseStudy:"Sports academy website with gallery, schedule sections and responsive layout."
},

{
title:"Nclusyv Learning Academy",
url:"#",
caseStudy:"Educational website platform with course information and responsive UI."
},

{
title:"F5 Store Ecommerce",
url:"https://f5store.in/",
caseStudy:"Ecommerce platform UI with product listings, responsive design and optimized performance."
}

]

export default function Projects(){

const [active,setActive] = useState(null)

return(

<section id="projects" className="py-24 px-6">

<h2 className="text-4xl font-bold text-center mb-14">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

{projects.map((project,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-slate-800 shadow-xl"
>

<h3 className="text-xl font-bold mb-4">
{project.title}
</h3>

<div className="flex gap-4">

<button
onClick={()=>setActive(project)}
className="text-cyan-400 hover:text-white"
>
Case Study
</button>

<a
href={project.url}
target="_blank"
rel="noreferrer"
className="text-cyan-400 hover:text-white"
>
View Website
</a>

</div>

</motion.div>

))}

</div>

{/* CASE STUDY MODAL */}

{active && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

<div className="bg-slate-900 p-8 rounded-xl max-w-xl">

<h3 className="text-2xl font-bold mb-4">

{active.title}

</h3>

<p className="text-gray-400 mb-6">

{active.caseStudy}

</p>

<button
onClick={()=>setActive(null)}
className="bg-cyan-500 px-5 py-2 rounded-lg"
>

Close

</button>

</div>

</div>

)}



</section>

)

}