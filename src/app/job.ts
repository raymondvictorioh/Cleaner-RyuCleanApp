import { Cleaner } from './cleaner';
import { OrderEntity } from './order-entity';
import { JobStatusEnum } from './job-status-enum.enum';

export class Job {
    jobId: number;
    cleaner: Cleaner;
    order: OrderEntity;
    jobDate: Date;
    jobTime: Date;
    jobStatusEnum: JobStatusEnum;
    jobFeedback: string;
    jobRating: number;


    constructor( jobId?: number, cleaner?: Cleaner, order?: OrderEntity, jobDate?: Date, jobTime?: Date, jobStatusEnum?: JobStatusEnum, jobFeedback?: string, jobRating?: number ){
        this.jobId = jobId;
        this.cleaner = cleaner;
        this.order = order;
        this.jobDate = jobDate;
        this.jobTime = jobTime;
        this.jobStatusEnum = jobStatusEnum;
        this.jobFeedback = jobFeedback;
        this.jobRating = jobRating;
        
    }
}
