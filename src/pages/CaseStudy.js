import { useParams } from "react-router-dom";

export default function CaseStudy(){

const {project}=useParams()

return(

<div className="min-h-screen flex items-center justify-center">

<div className="max-w-3xl">

<h1 className="text-4xl font-bold mb-6">

{project} Case Study

</h1>

<p className="text-gray-400">

Project architecture, technologies used, performance improvements,
SEO optimization, and payment integrations implemented.

</p>

</div>

</div>

)

}