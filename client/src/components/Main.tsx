import { HiLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import Feedback from "./Feedback";
function Main() {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const roadMap = new Map([
    ["Planned", ["2", "red"]],
    ["In Progress", ["1", "purple"]],
    ["Live", ["3", "green"]],
  ]);
  return (
    <section>
      <main>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col w-[40%] gap-5">
            <div className=" p-6 rounded-2xl bg-gradient-to-r from-pink-500  to-yellow-500">
              <h1 className="mt-16 font-bold text-white text-xl">
                Frontend Mentor
              </h1>
              <p className="text-white text-sm mt-2">Feedback Board</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="flex flex-row flex-wrap">
                {tags.map((tag) => (
                  <p className="p-3 bg-[#F2F4FF] rounded-xl text-blue-700 font-bold m-2">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <div className="flex flex-row justify-between">
                <div>
                  <p className="font-bold text-xl text-gray-700">Roadmap</p>
                </div>
                <div>
                  <button className="text-sm text-blue-500 underline mt-1 font-bold">
                    View
                  </button>
                </div>
              </div>
              {Array.from(roadMap).map(([key, value]) => {
                return (
                  <div className="flex flex-row justify-between mt-4 pl-4">
                    <ul
                      style={{
                        listStyleType: "disc",
                        color: value[1],
                      }}
                    >
                      <li className="font-bold">{key}</li>
                    </ul>
                    <p className="text-md text-gray-700 font-bold">
                      {value[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <nav>
              <div className="bg-[#312e81] h-20 rounded-2xl">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row pt-5 mt-1">
                    <div>
                      <HiLightBulb
                        size={30}
                        color="white"
                        className="ml-4 mr-4"
                      />
                    </div>
                    <div className="flex flex-row">
                      <p className="text-white font-bold text-md mr-8 text-lg">
                        6 Suggestions
                      </p>
                      <p className="text-white mt-[2px]">
                        Sort By:{" "}
                        <span className="font-bold"> Most Upvotes</span>
                      </p>
                    </div>
                  </div>
                  <button className=" bg-purple-500 rounded-xl flex justify-center items-center m-4 hover:bg-purple-900">
                    <Link to="/add-feedback">
                      <div className="pl-4 pr-4 pt-3 pb-3">
                        <p className="text-sm text-white">+ Add Feedback</p>
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </nav>
            <div>
              <Feedback />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
export default Main;
