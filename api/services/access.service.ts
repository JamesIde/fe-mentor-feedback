import { SupabaseClient } from "@supabase/supabase-js";
import { APIGatewayProxyEvent } from "aws-lambda";
import { FeedbackData } from "../../domain/supabase/feedback";
import { supabase } from "../config/db";
import response from "../utils/response";

export class AccessService {
  supabase: SupabaseClient;
  constructor() {
    this.supabase = supabase;
  }
  public async getFeedback() {
    let { data: feedback, error } = await supabase.from("feedback").select("*");
    if (error) {
      return response(500, error.message);
    }
    return response(200, feedback);
  }

  public async addFeedback(event: APIGatewayProxyEvent) {
    const body: FeedbackData = JSON.parse(event.body!);

    if (!body.title || !body.category || !body.description) {
      return response(400, "Please provide all required fields");
    }

    let feedback = await supabase.from("feedback").insert(body);

    if (feedback.error) {
      return response(500, feedback.error.message);
    }

    return response(201, "Item created");
  }
}
