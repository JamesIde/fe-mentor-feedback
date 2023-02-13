import { FeedbackData } from "../../../domain/supabase/feedback";
import { API_URL } from "./constants";

export async function getFeedback() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data as FeedbackData[];
}

export async function addFeedback(data: FeedbackData) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
}

export async function deleteFeedback(id: string) {
  const response = await fetch(`${API_URL}${id}`, {
    method: "DELETE",
  });
  return response;
}
