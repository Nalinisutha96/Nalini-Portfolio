import { motion } from "framer-motion";

const experience=[
{
year:"2023-Present",
company:"Cornerstone Solution",
role:"WordPress Developer"
},
{
year:"2023",
company:"TCM",
role:"Frontend Developer"
},
{
year:"2021-2023",
company:"Sunvis Systems",
role:"Frontend Developer"
}
]

export default function Experience(){

return(

<section className="py-24">

<h2 className="text-3xl font-bold text-center mb-12">

Experience

</h2>

<div className="max-w-4xl mx-auto space-y-8">

{experience.map(item=>(
<motion.div
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:-50}}
className="bg-slate-900 p-6 rounded-xl"
>

<h3 className="text-xl text-cyan-400">
{item.role}
</h3>

<p className="text-gray-400">
{item.company} • {item.year}
</p>

</motion.div>
))}

</div>

</section>

)

}