import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileWindowComponent } from './edit-profile-window/edit-profile-window.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from '../../_services/user.service';
import { ActionPostsComponent } from './action-posts/action-posts.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    UserRoutingModule,
  ],
  declarations: [
    UserProfileComponent,
    EditProfileWindowComponent,
    ActionPostsComponent,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule {}
