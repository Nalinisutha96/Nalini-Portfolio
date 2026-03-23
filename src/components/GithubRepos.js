import { useEffect,useState } from "react"
import axios from "axios"

export default function GithubRepos(){

const [repos,setRepos]=useState([])

useEffect(()=>{

axios.get("https://api.github.com/users/Nalinisutha96/repos")
.then(res=>setRepos(res.data.slice(0,6)))

},[])

return(

<section className="py-24 bg-slate-900">

<h2 className="text-3xl font-bold text-center mb-12">

GitHub Projects

</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

{repos.map(repo=>(
<div className="bg-slate-800 p-6 rounded-xl">

<h3 className="text-lg font-semibold">

{repo.name}

</h3>

<a
href={repo.html_url}
target="_blank" rel="noreferrer"
className="text-cyan-400"
>

View Repository

</a>

</div>
))}

</div>

</section>


)

}