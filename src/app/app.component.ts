import {AfterViewInit, Component} from '@angular/core';

import {environment} from '../env/environment';

import LiferayParams from '../types/LiferayParams';

import * as $ from 'jquery';

const templateUrl = `${environment.path.app}/app/app.component.html`;
const styleUrls = [`${environment.path.css}/css/app.component.css`];

@Component({
    selector: 'app-root',
    templateUrl,
    styleUrls
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        $('#p_p_id' + this.params.portletNamespace + ' .loader.loader-inline').hide();
    }

    title: string = 'Team 2 - App 2';
    labels: any;
    params: LiferayParams;
}
