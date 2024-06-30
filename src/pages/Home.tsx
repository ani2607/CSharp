
import { useRecoilState} from "recoil";
import MyProjects from "../components/MyProjects";
import TopTracks from "../components/TopTracks";
import Community from "./Community";
import Explore from "./Explore";
import { Tab } from "../types/tab";
import { TabInfo } from "../recoil/atom/tab";

const Home = () => {

    const [tab,setTab] = useRecoilState<Tab>(TabInfo);
    const handleExploreTab = ()=>{
        setTab(Tab.explore)
    }
    const handleCommunityTab = ()=>{
        setTab(Tab.community)
    }
   
  return (
    <main className="text-white flex justify-center gap-x-4   ">
      <div className=" ml-20 flex h-[80vh]  flex-col left w-3/12 bg-gray-800 rounded">
        <div className="h-[40vh] mt-2">
          <MyProjects />
        </div>
        <div className="h-[40vh] mt-2">
          <TopTracks />
        </div>
      </div>
      <div className="right mr-20 rounded  w-9/12 bg-cyan-600">

        <nav className="flex justify-between mt-5 ">
            <div className="right ml-5 flex gap-x-10">
            <div className="cursor-pointer" onClick={handleExploreTab}>Explore</div>
            <div className="cursor-pointer"  onClick={handleCommunityTab}>Community</div>
            </div>
            
            <div className="mr-5">
                Add
            </div>
        </nav>

        <article>

            {
                tab === Tab.community ? <Community/> : <Explore/>
            }
            
        </article>

      </div>
    </main>
  );
};

export default Home;
