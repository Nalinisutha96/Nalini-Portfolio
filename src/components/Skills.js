import { motion } from "framer-motion";

const skills=[
"HTML","CSS","JavaScript","React","Bootstrap",
"Tailwind","WordPress","WooCommerce","MySQL","Stripe"
]

export default function Skills(){

return(

<section className="py-24 bg-slate-900">

<h2 className="text-3xl font-bold text-center mb-12">

Skills

</h2>

<div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

{skills.map(skill=>(
<motion.div
whileHover={{scale:1.1}}
key={skill}
className="bg-white/5 backdrop-blur-md p-6 rounded-xl text-center"
>
{skill}
</motion.div>
))}

</div>

</section>

)

}