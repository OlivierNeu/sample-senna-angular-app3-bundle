import {AfterViewInit, Component} from '@angular/core';

import LiferayParams from '../types/LiferayParams';

import {LanguageService} from '../services/languageService';

import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: '/o/sample-senna-angular-app3-bundle/app/app.component.html',
    styleUrls: ['/o/sample-senna-angular-app3-bundle/css/app.component.css']
})
export class AppComponent implements AfterViewInit {

    constructor(private languageService: LanguageService) {
    }

    ngOnInit(): void {
        this.labels = {

            configuration: this.languageService.get('configuration'),
            portletNamespace: this.languageService.get('portlet-namespace'),
            contextPath: this.languageService.get('context-path'),
            portletElementId: this.languageService.get('portlet-element-id'),
            publicParams: this.languageService.get('public-params')
        };
    }

    ngAfterViewInit(): void {
        $('#p_p_id' + this.params.portletNamespace + ' .loader.loader-inline').hide();
    }

    Suivant() {
        console.log("clique btn next");
    }

    title: string = 'Team 2 - App 2';
    labels: any;
    params: LiferayParams;
}
