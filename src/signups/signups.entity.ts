import { Signup } from '@db';

export class SignupEntity implements Signup {
  name: string | null;
  id: number;
  email: string;
  waitlistId: number;

  constructor(partial: Partial<Signup>) {
    Object.assign(this, partial);
  }
}
