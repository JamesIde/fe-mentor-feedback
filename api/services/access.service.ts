import { supabase } from "../config/db";
import response from "../utils/response";

export class AccessService {
  supabase: any;
  constructor() {
    this.supabase = supabase;
  }
  async getFeedback() {
    let { data: feedback, error } = await supabase.from("feedback").select("*");
    if (error) {
      return response(500, error.message);
    }
    return response(200, feedback);
  }
}
