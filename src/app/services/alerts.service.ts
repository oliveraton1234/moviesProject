import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private toastCtrl: ToastController,
  ) { }

  async principal(header: string, message: string, color: string){
    const toast = await this.toastCtrl.create({
      header,
      // message,
      color: color,
      duration: 2000,
      position: 'top',
      
    });
    toast.present();
  }
}
