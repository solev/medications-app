import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drug} from "~/app/models/drug";
import {Constants} from "~/app/shared/constants";
import {off} from "tns-core-modules/application";
import {Interactions} from "~/app/models/interactions";

@Injectable()
export class PillBoxService {

    limit: number = 100;


    constructor(private http: HttpClient) {
    }

    get(page: number = 1, name: string = ''): Observable<Drug[]> {

        let skip = (page - 1) * this.limit;
        name = name.toUpperCase();
        let query = `(UPPER(medicine_name) LIKE '%${name}%' OR UPPER(spl_ingredients) LIKE '%${name}%') AND epc_match IS NULL order by has_image desc`;
        query = encodeURI(query);

        let endpoint = `https://datadiscovery.nlm.nih.gov/resource/crzr-uvwg.json?$limit=${this.limit}&$offset=${skip}&$where=${query}`;
        console.log(endpoint);
        return this.http.get<Drug[]>(endpoint, {
            headers: Constants.commonHeaders,
        })
    }

    interactions(rxcui) : Observable<Interactions> {
        let endpoint = `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=DrugBank`;

        return this.http.get<Interactions>(endpoint, {
            headers: Constants.commonHeaders,
        })
    }
}
