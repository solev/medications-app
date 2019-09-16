import {Injectable} from "@angular/core";
import {Drug} from "~/app/models/drug";

@Injectable()
export class AppSession {
    public selectedMedication: Drug = null;
}
