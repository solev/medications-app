import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {Item} from "./item";
import {ItemService} from "./item.service";
import {AppSession} from "~/app/services/appSession";
import {Page, View} from "tns-core-modules/ui/page";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Drug} from "~/app/models/drug";
import {RouterExtensions} from "nativescript-angular";
import {ScrollEventData, ScrollView} from "tns-core-modules/ui/scroll-view";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {

    public headerHeight = 250;
    public stretchyHeight = this.headerHeight;
    medication: Drug;

    constructor(
        private appSession: AppSession,
        private page: Page,
        private router: RouterExtensions
    ) {
        this.page.actionBarHidden = true;

    }

    ngOnInit(): void {
        this.medication = Object.assign(new Drug(), this.appSession.selectedMedication);
        (<StackLayout>this.page.getViewById('bgImage')).backgroundImage = this.medication.imageUrl();
    }

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
        let parallaxSpeed = 0.33;
        const offset = scrollView.verticalOffset * parallaxSpeed * -1;
        if (scrollView.ios) {
            if (scrollView.verticalOffset < 0) {
                topView.translateY = Math.floor(0);
                this.stretchyHeight = this.headerHeight - scrollView.verticalOffset;
            } else {
                this.stretchyHeight = this.headerHeight;
                topView.translateY = Math.floor(offset);
            }
        }

        if (scrollView.android) {
            if (scrollView.verticalOffset < 0) {
                topView.translateY = Math.floor(0);
            } else {
                topView.translateY = Math.floor(offset);
            }
        }

    }

    goBack() {
        this.router.back();
    }
}
