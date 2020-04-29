import { Plan } from './plan';
import { Job } from './job';
import { FrequencyEnum } from './frequency-enum.enum';
import { GenderEnum } from './gender-enum.enum';

export class OrderEntity {

    orderId: number;
    plan: Plan;
    orderDate: Date;
    jobs: Job[];
    freqencyEnum: FrequencyEnum;
    zipcode: string;
    genderPreference: GenderEnum;
    notes: string;

    constructor(orderId?: number, plan?: Plan, orderDate?: Date, jobs?: Job[], freqencyEnum?: FrequencyEnum, zipcode?: string,
        genderPreference?: GenderEnum, notes?: string) {
        this.orderId = orderId;
        this.plan = plan;
        this.orderDate = orderDate;
        this.jobs = jobs;
        this.freqencyEnum = freqencyEnum;
        this.zipcode = zipcode;
        this.genderPreference = genderPreference;
        this.notes = notes;

    }

}
