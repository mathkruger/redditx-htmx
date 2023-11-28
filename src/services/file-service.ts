import { supabase } from "../db/supabase";

export class FileService {
  static async upload(file: File) {
    if (file.size <= 1024 * 1024) {
      const filExtension = file.name.split(".").pop();
  
      const result = await supabase.storage
        .from("postsMedia")
        .upload(file.name.replace(`.${filExtension}`, "") + new Date().getTime() + `.${filExtension}`, file);
  
      return result.data;
    }

    return null;
  }

  static getUrl(filePath: string) {
    return supabase.storage.from("postsMedia").getPublicUrl(filePath).data.publicUrl;
  }
}
