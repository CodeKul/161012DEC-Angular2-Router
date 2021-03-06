import { ProtectionGuardService } from './protection-guard.service';
import { USER_ROUTES } from './user.router';
import { GuestComponent } from './guest/guest.component';
import { WallComponent } from './wall/wall.component';
import { UserComponent } from './user/user.component';

import {Routes,  RouterModule} from '@angular/router'

const APP_ROUTES : Routes = [
    {path:'', component : WallComponent},
    {path:'sample', component : WallComponent, canActivate : [ProtectionGuardService]},
    {path :'user/:id/:id1', component : UserComponent, outlet:'my' },
    {path :'user/:id/:id1', component : UserComponent, children : USER_ROUTES},
    {path :'guest', component : GuestComponent, outlet: 'my'},
    {path :'google', redirectTo:'https://angular-2-training-book.rangle.io/handout/routing/config.html'},
    {path :'user', redirectTo :'user(my:user/100/0)',pathMatch:'full'}
];

export const MyRoutes = RouterModule.forRoot(APP_ROUTES)