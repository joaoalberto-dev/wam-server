import { Waitlist } from '@db';

export class WaitlistEntity implements Waitlist {
  id: number;

  name: string;

  active: boolean | null;

  constructor(partial: Partial<Waitlist>) {
    Object.assign(this, partial);
  }
}
