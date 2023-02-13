import { useQuery } from "react-query";
import { API_URL } from "../utils/constants";
import { FeedbackData } from "../../../domain/supabase/feedback";
import FeedbackItem from "./FeedbackItem";
import { getFeedback } from "../utils/fetch";
function Feedback() {
  const { data, isLoading, isSuccess, error } = useQuery(
    ["feedback"],
    () => getFeedback(),
    {
      onSuccess: (data) => {},
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return (
    <>
      {isLoading && <p className="text-center font-bold mt-24">Loading...</p>}
      {error && console.log(error)}
      {data &&
        data.map((data) => <FeedbackItem feedback={data} key={data.id} />)}
    </>
  );
}
export default Feedback;
