export default function Footer(){

return(

<footer className="bg-slate-950 border-t border-slate-800 mt-20">

<div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-400">

<p>
© {new Date().getFullYear()} Nalini S — Frontend & WordPress Developer
</p>

<p className="text-sm mt-2">
Built with React, Tailwind CSS & Framer Motion
</p>

</div>

</footer>

)

}