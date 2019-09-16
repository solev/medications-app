import {ItemEventData} from "tns-core-modules/ui/list-view"
import {Component, OnInit} from "@angular/core";

import {Item} from "./item";
import {ItemService} from "./item.service";
import {Page} from "tns-core-modules/ui/page";
import {PillBoxService} from "~/app/services/pill-box.service";
import {Drug} from "~/app/models/drug";
import {RouterExtensions} from "nativescript-angular";
import {AppSession} from "~/app/services/appSession";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    medications: Array<Drug> = [];

    medicationsPage = 1;
    loading = false;
    currentQuery: string = '';

    constructor(private page: Page, private appSession: AppSession, private pillBox: PillBoxService, private router: RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.getMedications();
    }

    getMedications() {
        this.loading = true;
        this.pillBox.get(this.medicationsPage, this.currentQuery).subscribe(pills => {
            this.medications = pills;
            this.loading = false;
        })
    }

    onSearch(text: string) {
        this.currentQuery = text;
        this.getMedications();
    }

    onItemTap(args: ItemEventData): void {
        let drug = this.medications[args.index];
        this.appSession.selectedMedication = drug;
        this.router.navigate(['item-detail'], {
            animated: true,
            transition: {
                name: 'slide'
            }
        })
    }
}
