import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnouncementService } from '../announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})


export class AnnouncementsPage implements OnInit {
  message: string;
  announcements: Announcement[];

  constructor(private router: Router, private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.refreshAnnouncements();
  }

  refreshAnnouncements() {

    this.announcementService.getAnnouncements().subscribe(
      response => {
        this.announcements = response.announcements
        console.log(this.announcements.length);
      }
    )
  }

  parseDate(d: Date) {
    return d.toString().replace('[UTC]', '');
  }
}
