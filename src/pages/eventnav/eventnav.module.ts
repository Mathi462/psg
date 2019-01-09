import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventnavPage } from './eventnav';

@NgModule({
  declarations: [
    EventnavPage,
  ],
  imports: [
    IonicPageModule.forChild(EventnavPage),
  ],
})
export class EventnavPageModule {}
