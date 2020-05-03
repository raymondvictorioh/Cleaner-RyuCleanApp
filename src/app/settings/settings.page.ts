import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilityService } from '../utility.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  constructor(private router: Router, public alertController: AlertController, public utilityService: UtilityService, public menuCtrl: MenuController) { }


  ngOnInit() {
  }

  async presentConfirmation() {
    console.log("alert!");
    const alert = await this.alertController.create({
      header: 'Confirmation',

      message: 'Do you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Let"s log out');
            this.utilityService.setIsLogin(false);
            this.utilityService.setCurrentCleaner(null);
            this.menuCtrl.enable(false, 'custom');
            this.router.navigate(["/login"]);
          }
        }
      ]


    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  buttonClick() {
    this.router.navigate(["/accountsettings"]);
  }



}
