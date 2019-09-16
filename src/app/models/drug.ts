export class Drug {
    id: string;
    enabled: string;
    created_at: Date;
    updated_at: Date;
    spp: string;
    setid: string;
    splsize: string;
    splshape: string;
    splshape_text: string;
    splscore: string;
    splimprint: string;
    splcolor: string;
    splcolor_text: string;
    spl_strength: string;
    spl_ingredients: string;
    spl_inactive_ing: string;
    source: string;
    rxtty: string;
    rxstring: string;
    rxcui: string;
    rxnorm_update_time: Date;
    product_code: string;
    part_num: string;
    ndc9: string;
    ndc_labeler_code: string;
    ndc_product_code: string;
    medicine_name: string;
    marketing_act_code: string;
    effective_time: string;
    file_name: string;
    dosage_form: string;
    document_type: string;
    author_type: string;
    author: string;
    approval_code: string;
    image_source: string;
    splimage: string;
    has_image: string;
    version_number: string;
    updated: string;
    stale: string;
    new: string;
    pillbox_value: string;

    imageUrlSmall() {
        return `https://pillbox.nlm.nih.gov/assets/pills/small/${this.splimage}.jpg`;
    }

    public imageUrl(): string {
        return `https://pillbox.nlm.nih.gov/assets/pills/large/${this.splimage}.jpg`;
    }

    get ingredients(): string[] {
        let res = [];

        if(this.spl_ingredients) {
            res.push(... this.spl_ingredients.split(';'));
        }
        if(this.spl_inactive_ing){
            res.push(... this.spl_inactive_ing.split(';'));
        }

        return res;
    }
}
