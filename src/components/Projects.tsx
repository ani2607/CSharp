import { Repo } from "../types/repo"
interface RepoProps {
  data: Repo;
}

const Projects: React.FC<RepoProps>  = ({data}) => {
  
  return (
    <div key={data.index} className="flex hover:underline  rounded cursor-pointer  bg-gray-600 mb-2 w-64  ml-5"  >
      
      <h1 className="ml-3" >&#127928;</h1>
      <h1>{data.repo_name}</h1>
    </div>
  )
}

export default Projects
