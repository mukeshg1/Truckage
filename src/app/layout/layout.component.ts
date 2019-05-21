import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserserviceService } from '../shared/services/userservice.service';
import { UpdateprofileComponent } from './profile/updateprofile/updateprofile.component';

@Component({
    providers: [ UpdateprofileComponent ],
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;
    _loading = true;

    constructor(
        public router: Router,
        private _userService: UserserviceService,
        private _updateProfile: UpdateprofileComponent
    ) {}

    ngOnInit() {
        if (!localStorage.getItem('currentUser')) {
            this.selectDashboard();
        } else {
            this._loading = false;
        }
        // this.fillUserInformation();
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    selectDashboard() {
        this._userService.fetchUserInformation().subscribe((data: any) => {
            if (data.Information.UserType_xt === 'Vehicle Owner/Client') {
                this.router.navigate(['/dashboard']);
            } else {
                this.router.navigate(['/customerdashboard']);
            }
        });
        this._loading = false;
    }

    public fillUserInformation(): void {
        this._updateProfile.userInformation();
    }
}
