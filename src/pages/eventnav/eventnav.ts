import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, MenuToggle } from 'ionic-angular';
import { HomePage } from '../home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the EventnavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventnav',
  templateUrl: 'eventnav.html',
})
export class EventnavPage {

  response:any = {
    day1 : [],
    day2 : [],
    day3 : []
  }
  rootPage:any = HomePage;
  public counter=0;
  params:any
thirddatas:any
  constructor(platform: Platform, statusBar: StatusBar, public toastCtrl: ToastController,splashScreen: SplashScreen,public navCtrl: NavController,public navParams: NavParams,public apiProvider:ApiProvider ) {
    // this.thirddatas = navParams.get("sdatas");
    // console.log(this.thirddatas)
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    
      platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
          this.presentToastt();
          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          // console.log("exitapp");
          platform.exitApp();
        }
      }, 0)
    });

    // storage.get("event").then(data => {
    //   if(data != null) {
    //     this.thirddatas = data
    //     console.log(this.thirddatas)
    //   }
    //   else  {
    //     this.thirddatas=navParams.get('sdatas')
    //     console.log(this.thirddatas)
    //   }
    // })
    

// viewevent

apiProvider.getData('view_event.php').then(data=> {
  console.log(data)
  this.response = data
  console.log(this.response)

})

  }

  back(){
    this.navCtrl.push(MenuToggle)
  }

  presentToastt() {
    let toast = this.toastCtrl.create({
      message: "Press again to exit",
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }


  // button(){

  //   this.storage.set("event" , this.thirddatas)
  //   console.log(this.thirddatas);
  //   this.navCtrl.push(BookuroomPage,{fdatas: this.thirddatas})
  // }

  presentToast(data) {
    let toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
