import { SupabaseClient } from "@supabase/supabase-js";
import { APIGatewayProxyEvent } from "aws-lambda";
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
    const body = JSON.parse(event.body!);

    return response(201, body as any);
  }
}
