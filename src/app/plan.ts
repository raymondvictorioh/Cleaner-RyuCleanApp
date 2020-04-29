import { OrderEntity } from './order-entity';

export class Plan {

    planName: string;
    planDescription: string;
    dailyPrice: number;
    regularPrice: number;
    memberPrice: number;
    orderList: OrderEntity[];

    constructor(planName?: string, planDescription?: string, dailyPrice?: number, regularPrice?: number, memberPrice?: number) {
        this.planName = planName;
        this.planDescription = planDescription;
        this.dailyPrice = dailyPrice;
        this.regularPrice = regularPrice;
        this.memberPrice = memberPrice;
        this.orderList = new Array();
    }
}
