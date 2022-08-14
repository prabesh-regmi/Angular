import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './content/home/home.component';
import { MerchantComponent } from './content/merchant/merchant.component';
import { ProductComponent } from './content/product/product.component';
import { CustomerComponent } from './content/customer/customer.component';
import { SettingComponent } from './content/setting/setting.component';
import { ReportsComponent } from './content/reports/reports.component';
import { ReportComponent } from './content/subscription/report/report.component';
import {RouterModule, Routes} from '@angular/router';
import { ConfigurationComponent } from './content/subscription/configuration/configuration.component';
import { LoyaltyPushNotifyComponent } from './content/subscription/loyalty-push-notify/loyalty-push-notify.component';
import { LoyaltyTerminalComponent } from './content/subscription/loyalty-terminal/loyalty-terminal.component';
import { LoyaltyNotifyHistoryComponent } from './content/subscription/loyalty-notify-history/loyalty-notify-history.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { MessageSettingComponent } from './content/subscription/configuration/message-setting/message-setting.component';
import { LoyaltyComponent } from './content/subscription/configuration/loyalty/loyalty.component';
import { LoyaltyTypeComponent } from './content/subscription/configuration/loyalty/loyalty-type/loyalty-type.component';
import { LoyaltyCardComponent } from './content/subscription/configuration/loyalty/loyalty-card/loyalty-card.component';
import { StampComponent } from './content/subscription/configuration/loyalty/stamp/stamp.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzImageModule } from 'ng-zorro-antd/image';














registerLocaleData(en);





const appRoutes: Routes =[
{path:'',component:HomeComponent},
{path:'product',component:ProductComponent},
{path:'merchant',component:MerchantComponent},
{path:'customer',component:CustomerComponent},
{path:'setting',component:SettingComponent},
{path:'reports',component:ReportComponent},
{path:'subscription/loyalty-terminal',component:LoyaltyTerminalComponent},
{path:'subscription/loyalty-push-notify',component:LoyaltyPushNotifyComponent},
{path:'subscription/loyalty-notify-history',component:LoyaltyNotifyHistoryComponent},
{path:'subscription/report',component:ReportComponent},
{path:'subscription/configuration',component:ConfigurationComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    MerchantComponent,
    ProductComponent,
    CustomerComponent,
    SettingComponent,
    ReportsComponent,
    ReportComponent,
    ConfigurationComponent,
    LoyaltyPushNotifyComponent,
    LoyaltyTerminalComponent,
    LoyaltyNotifyHistoryComponent,
    MessageSettingComponent,
    LoyaltyComponent,
    LoyaltyTypeComponent,
    LoyaltyCardComponent,
    StampComponent
  ],
  imports: [
    BrowserModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBadgeModule,
    NzAvatarModule,
    NzTableModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzModalModule,
    NzUploadModule,
    NzSelectModule,
    NzImageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
