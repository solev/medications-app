import {HttpHeaders} from "@angular/common/http";

export class Constants {
    public static commonHeaders: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept":"application/json",
        "X-App-Token": "rqjRauSW0Io1KpDDrrBSSrS5u"
    });
}
