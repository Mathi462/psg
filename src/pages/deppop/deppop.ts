import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Storage} from '@ionic/storage';
/**
 * Generated class for the DeppopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deppop',
  templateUrl: 'deppop.html',
})
export class DeppopPage {
  date:any
  mon:any
    currentEvents = [
      {
        year: 2017,
        month:11, 
        date: 25
      },
      {
        year: 2017,
        month:11,
        date: 26
      }
    ];
  
    constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad PopoverPage');
    }
  
    onDaySelect(event){
     this. mon=event.month+1
     console.log(this.mon)
     this. date=event.date+"/"+this.mon+"/"+event.year
      console.log(this. date)
  this.storage.set('dep',this. date)
    }
  
    // close() {
    //   this.viewCtrl.dismiss();
    // }
  
  }
