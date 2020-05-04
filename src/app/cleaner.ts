
import { Job } from './job';
import { GenderEnum } from './gender-enum.enum';

export class Cleaner {
    cleanerId: number;
    jobs: Job[];
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    bankAccountNumber: string;
    accumulatedRating: number;
    totalNumCleaningServicesProvided: number;
    rating: number;
    gender: GenderEnum;
    fullName: string;
    directMessage: string;
    

    constructor(cleanerId?: number, jobs?: Job[], totalNumCleaningServicesProvided?: number, firstName?: string, lastName?: string, username?: string, password?: string, bankAccountNumber?: string,
        accumulatedRating?: number, gender?: GenderEnum, fullName?: string) {
        this.cleanerId = cleanerId;
        this.jobs = jobs;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.bankAccountNumber = bankAccountNumber;
        this.accumulatedRating = accumulatedRating;
        this.gender = gender;
        this.fullName = fullName;
        this.totalNumCleaningServicesProvided = totalNumCleaningServicesProvided;
    }
}
