import { BrowserModule } from '@angular/platform-browser';
import { NewTransactionPage } from '../pages/instamojo/new_transaction'
import {InAppBrowser} from '@ionic-native/in-app-browser';
import { HTTP } from '@ionic-native/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ViewController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page11Page } from '../pages/page11/page11';
import { ShoppingPage } from '../pages/shopping/shopping';
import { CabsPage } from '../pages/cabs/cabs';
import { BookuroomPage } from '../pages/bookuroom/bookuroom';
import { PayprocessPage } from '../pages/payprocess/payprocess';
import { EventPage } from '../pages/event/event';
import { FristpagePage } from '../pages/fristpage/fristpage';
import { ApiProvider } from '../providers/api/api';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { AboutmePage } from '../pages/aboutme/aboutme';
import { IonicStorageModule } from '@ionic/storage';
import { ChatPage } from '../pages/chat/chat';
import { AssistancePage } from '../pages/assistance/assistance';
import { FeedbackPage } from '../pages/feedback/feedback';
import { GalleryPage } from '../pages/gallery/gallery';
import { WebIntent } from '@ionic-native/web-intent';
import { VideoPage } from '../pages/video/video';
import { VideoPlayer } from '@ionic-native/video-player';
import { WelcomePage } from '../pages/welcome/welcome';
import { Market } from '@ionic-native/market';
import { ContactPage } from '../pages/contact/contact';
import { EventnavPage } from '../pages/eventnav/eventnav';
import { CalendarModule } from 'ionic3-calendar-en';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../pages/popover/popover';
import { WedpopPage } from '../pages/wedpop/wedpop';
import { DestpopPage } from '../pages/destpop/destpop';
import { DeppopPage } from '../pages/deppop/deppop';

@NgModule({
  declarations: [
      NewTransactionPage,
    MyApp,
    HomePage,
    ListPage,
    Page2Page,
    Page3Page,
    Page11Page,
    ShoppingPage,
    CabsPage,
    PayprocessPage,
    BookuroomPage,
    EventPage,
    FristpagePage,
    AboutmePage,
    ChatPage,
    AssistancePage,
    FeedbackPage,
    GalleryPage,
    VideoPage,
    WelcomePage,
    ContactPage,
    EventnavPage,
    PopoverPage,
    WedpopPage,
    DestpopPage,
    DeppopPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    CalendarModule,

  
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NewTransactionPage,
    MyApp,
    HomePage,
    ListPage,
    Page2Page,
    Page3Page,
    Page11Page,
    ShoppingPage,
    CabsPage,
    PayprocessPage,
    BookuroomPage,
    EventPage,
    FristpagePage,
    AboutmePage,
    ChatPage,
    AssistancePage,
    FeedbackPage,
    GalleryPage,
    VideoPage,
    WelcomePage,
    ContactPage,
    EventnavPage,
    PopoverPage,
    WedpopPage,
    DestpopPage,
    DeppopPage
  ],
  providers: [
      InAppBrowser,
      HTTP,
    StatusBar,
    WebIntent,
    Market,
    SplashScreen,
    Camera,
    FormBuilder,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    PopoverController,
  
  ]
})
export class AppModule {}
