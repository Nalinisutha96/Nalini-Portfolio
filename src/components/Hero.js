import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Hero(){

const { ref, inView } = useInView({
triggerOnce:true,
threshold:0.3
})

return(

<section ref={ref} className="min-h-screen flex flex-col justify-center items-center text-center px-6">

{/* NAME */}

<motion.h1
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
>

Nalini S

</motion.h1>

{/* TITLE */}

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.3}}
className="mt-6 text-lg text-gray-300"
>

Frontend & WordPress Developer

</motion.p>

{/* ABOUT */}

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.6}}
className="mt-6 text-gray-400 max-w-3xl leading-7"
>

Frontend & WordPress Developer with 4+ years of experience in designing and developing scalable, high-performance websites and web applications. Experienced in building responsive user interfaces using HTML5, CSS3, JavaScript, React.js, Bootstrap, and Tailwind CSS, along with powerful CMS solutions using WordPress and WooCommerce. Skilled in integrating payment gateways such as Stripe and Razorpay, optimizing website performance, and implementing SEO best practices for global platforms.

</motion.p>

{/* STATS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">

{/* EXPERIENCE */}

<div className="bg-white/5 backdrop-blur-lg border border-slate-800 p-6 rounded-xl">

<h3 className="text-4xl font-bold text-cyan-400">

{inView && <CountUp start={0} end={4} duration={2} />}+

</h3>

<p className="text-gray-400 mt-2">

Years Experience

</p>

</div>

{/* PROJECTS */}

<div className="bg-white/5 backdrop-blur-lg border border-slate-800 p-6 rounded-xl">

<h3 className="text-4xl font-bold text-cyan-400">

{inView && <CountUp start={0} end={10} duration={2} />}+

</h3>

<p className="text-gray-400 mt-2">

Websites Developed

</p>

</div>

{/* EXPERTISE */}

<div className="bg-white/5 backdrop-blur-lg border border-slate-800 p-6 rounded-xl">

<h3 className="text-2xl font-bold text-cyan-400">

React + WordPress

</h3>

<p className="text-gray-400 mt-2">

Expertise

</p>

</div>

</div>

{/* BUTTON */}

<a
href="#projects"
className="mt-12 bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
>

View Projects

</a>

</section>

)

}