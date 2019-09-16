import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AndroidData, Elevation, ShapeEnum} from "nativescript-ngx-shadow";
import {PillBoxService} from "~/app/services/pill-box.service";

@Component({
    selector: 'SearchBox',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.css'],
    moduleId: module.id,
})
export class SearchBoxComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    fabShadow: AndroidData = {
        elevation: 6,
        bgcolor: "#ffffff",
        shape: ShapeEnum.RECTANGLE,
        cornerRadius: 50,

    };

    constructor() {
    }

    ngOnInit() {

    }

    onReturn(text) {
        this.search.emit(text);
    }
}
