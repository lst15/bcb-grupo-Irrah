import { Injectable } from '@nestjs/common/decorators';

/* eslint-disable @typescript-eslint/no-unused-vars */
interface SMSService {
  sendSMS: (phoneNumber: string, message: string) => Promise<boolean>;
}

@Injectable()
export class MockimplService implements SMSService {
  async sendSMS(phoneNumber: string, message: string): Promise<boolean> {
    //console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    return true;
  }
}
