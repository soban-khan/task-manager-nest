import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

/*
idea for this is before it goes into the session storage
we need to serialize the user object
and as it comes out deserialize it
*/
@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user); //this is what is saved in the session store
  }
  deserializeUser(payload: any, done: (err: Error, payload: string) => void) {
    done(null, payload);
  }
}
