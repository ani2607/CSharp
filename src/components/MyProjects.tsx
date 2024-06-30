import Projects from "./Projects"
import { repository } from "../data"

const MyProjects = () => {
  return (
    <div className=" ">
      <h1 className="mb-2 ml-5 text-xl">My Projects</h1>
      {
        repository.map((repo)=>{
          return <Projects   data={repo} />
        })
      }
      
    </div>
  )
}

export default MyProjects
