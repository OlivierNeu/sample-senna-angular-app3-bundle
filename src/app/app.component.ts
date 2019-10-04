import {AfterViewInit, Component} from '@angular/core';

import LiferayParams from '../types/LiferayParams';

import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: '/o/sample-senna-angular-app3-bundle/app/app.component.html',
    styleUrls: ['/o/sample-senna-angular-app3-bundle/css/app.component.css']
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        $('#p_p_id' + this.params.portletNamespace + ' .loader.loader-inline').hide();
    }

    title: string = 'Team 2 - App 2';
    labels: any;
    params: LiferayParams;
}
