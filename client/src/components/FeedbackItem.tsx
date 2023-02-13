import { FeedbackData } from "../../../domain/supabase/feedback";
import { TbTrash } from "react-icons/tb";
import { useMutation, useQueryClient } from "react-query";
import { deleteFeedback } from "../utils/fetch";
import { toastNotify } from "../utils/notification";
function FeedbackItem({ feedback }: { feedback: FeedbackData }) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: "deleteFeedback",
    mutationFn: deleteFeedback,
    onSuccess: () => {
      toastNotify("success", "Feedback deleted successfully");
      queryClient.invalidateQueries("feedback");
    },
    onError: (err) => {
      toastNotify("error", "Something went wrong");
    },
  });

  return (
    <section>
      <div className="bg-white p-2 mt-4 rounded-xl">
        <div className="flex justify-between pl-4 pr-4">
          <p className="font-bold text-lg text-blue-900 ">{feedback.title}</p>
          <div className="flex flex-row">
            <p className="mr-2">
              {new Date(feedback.created_at!).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="cursor-pointer" onClick={() => mutate(feedback.id!)}>
              <TbTrash className="mt-1" color="red" />
            </p>
          </div>
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
