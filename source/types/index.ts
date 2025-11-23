//  TYPEDEFS  //

/** Question Output Typing. */
export interface Question {
    readonly title: string;
    readonly answer: string;
}

/** Notes Output Typing. */
export interface Notes {
    readonly above: string;
    readonly below: string;
}

/** Quiz Output Typing. */
export interface Quiz {
    readonly id: number;
    readonly type: number;
    readonly title: string;

    readonly notes: Notes;
    readonly creation: Date;
    readonly deployment: Date;
    readonly questions: ReadonlyArray<Question>;
}
