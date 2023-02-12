import { FeedbackData } from "../../../domain/supabase/feedback";

function FeedbackItem({ feedback }: { feedback: FeedbackData }) {
  return (
    <section>
      <div className="bg-white p-2 mt-4 rounded-xl">
        <div className="flex justify-between pl-4 pr-4">
          <p className="font-bold text-lg text-blue-900 ">{feedback.title}</p>
          <p>
            {new Date(feedback.created_at!).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div>
          <p className="pl-4 pb-2">{feedback.description}</p>
        </div>
        <div>
          <p className="p-1 pl-5 pr-5 bg-[#F2F4FF] rounded-lg w-max text-blue-900 font-bold text-sm ml-4 mt-1">
            {feedback.category}
          </p>
        </div>
      </div>
    </section>
  );
}
export default FeedbackItem;
