import { Component } from '@angular/core';
import {ActionSheetController, AlertController, LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController:AlertController,
              private actionSheetController:ActionSheetController,
              private loadingController:LoadingController,
              private toastController: ToastController,
              ){}


  async presentAlert(){
      const alert = await  this.alertController.create({
            header: 'Alert',
            subHeader: 'Sub Alert',
            message: 'This is the alert message',
            cssClass: 'alertCancel',
            buttons: [
                      {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancelalertButton',
                        handler: () => {console.log('You Clicked Me'); }
                      },
                      {
                        text: 'Okay',
                        role: 'secondary',
                        cssClass: 'okayalertButton',

                        handler: () => {console.log('Second Handler');}
                      },
                      {
                        text: 'Open Action Sheet',
                        role: 'primary',
                        handler: async  () => {
                          const action = await this.actionSheetController.create({
                            header: 'Texting Action',
                            buttons: [
                                        {
                                          text: 'Text',
                                          role: 'cancel',
                                          icon: 'trash',

                                          handler: () => {console.log('hey Hello');}

                                        }
                                     ]

                          });
                          await action.present();
                        }
                      }
                    ]
      });
      await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'bubbles',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }


}
