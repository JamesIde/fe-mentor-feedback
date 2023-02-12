import Layout from "../components/Layout";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CATEGORIES } from "../utils/constants";
import { useMutation } from "react-query";
import { addFeedback } from "../utils/fetch";
function AddFeedback() {
  const [selectedOption, setSelectedOption] = useState(CATEGORIES[0]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: selectedOption,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: addFeedback,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <Layout>
      <div className="xl:w-6/12 md:w-10/12 w-full mx-auto p-2">
        <section>
          <Link to="/">
            <div className="flex flex-row">
              <div className="mt-[1.5px] mr-4">
                <MdOutlineKeyboardArrowLeft color="blue" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-900">Go Back</p>
              </div>
            </div>
          </Link>
        </section>
        <form>
          <section>
            <div className="p-8 bg-white mt-10 rounded-xl">
              <h1 className="font-bold text-blue-900 text-2xl">
                Create New Feedback
              </h1>
              <div>
                <label htmlFor="title">
                  <p className="mt-8 text-blue-900 font-bold text-lg">
                    Feedback Title
                  </p>
                  <p className="text-sm mt-2 text-gray-400">
                    Add a short, descriptive headline
                  </p>
                </label>
                <input
                  type="text"
                  className="w-full bg-[#F7F8FD] mt-4 mb-2 h-10 rounded-md p-2"
                  onChange={handleChange}
                  name="title"
                  required
                />
              </div>
              <div>
                <label htmlFor="title">
                  <p className="mt-4 text-blue-900 font-bold text-lg">
                    Category
                  </p>
                  <p className="text-sm mt-2 text-gray-400">
                    Choose a category for your feedback
                  </p>
                </label>
                {/*  */}
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full bg-[#F7F8FD] mt-4 mb-2 h-10 rounded-md p-2"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="title">
                  <p className="mt-8 text-blue-900 font-bold text-lg">
                    Feedback Detail
                  </p>
                  <p className="text-sm mt-2 text-gray-400">
                    Include any specific comments on what should be improved,
                    added, etc.
                  </p>
                </label>
                <textarea
                  className="w-full bg-[#F7F8FD] mt-4 mb-2 h-20 rounded-md p-2"
                  onChange={handleChange}
                  name="description"
                  required
                />
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-row justify-between mt-8">
              <Link to="/">
                <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
                  Cancel
                </button>
              </Link>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={handleSubmit}
              >
                Add Feedback
              </button>
            </div>
          </section>
        </form>
      </div>
    </Layout>
  );
}
export default AddFeedback;
