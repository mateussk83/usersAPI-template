import { v4 as uuidV4 } from "uuid";

class User {
user_id?: string;
 name: string;
 admin: boolean;
 email: string;
 created_at: Date;
 updated_at?: Date;
 
 constructor() {
  if(!this.user_id) {
   this.user_id = uuidV4();
  }
 }
}

export { User };
