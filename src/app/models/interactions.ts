export interface Interactions {
    nlmDisclaimer:        string;
    userInput:            UserInput;
    interactionTypeGroup: InteractionTypeGroup[];
}

export interface InteractionTypeGroup {
    sourceDisclaimer: string;
    sourceName:       string;
    interactionType:  InteractionType[];
}

export interface InteractionType {
    comment:         string;
    minConceptItem:  MinConceptItem;
    interactionPair: InteractionPair[];
}

export interface InteractionPair {
    interactionConcept: InteractionConcept[];
    severity:           Severity;
    description:        string;
}

export interface InteractionConcept {
    minConceptItem:    MinConceptItem;
    sourceConceptItem: SourceConceptItem;
}

export interface MinConceptItem {
    rxcui: string;
    name:  string;
    tty:   TTY;
}

export enum TTY {
    In = "IN",
    Pin = "PIN",
    Scd = "SCD",
}

export interface SourceConceptItem {
    id:   string;
    name: string;
    url:  string;
}

export enum Severity {
    NA = "N/A",
}

export interface UserInput {
    sources: string[];
    rxcui:   string;
}
