import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendancePage } from './attendance';

@NgModule({
  declarations: [
    AttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(AttendancePage),
  ],
  exports:[
    AttendancePage
  ]
})
export class AttendancePageModule {}
