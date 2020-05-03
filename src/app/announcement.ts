export class Announcement {



    title: string;
    bodyMessage: string;
    messageDate: Date
    announcementId: number;

    constructor(announcementId?: number, title?: string, bodyMessage?: string, messageDate?: Date) {
        this.announcementId = announcementId;
        this.title = title;
        this.bodyMessage = bodyMessage;
        this.messageDate = messageDate;
    }
}