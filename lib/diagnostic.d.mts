export interface QuizState {stage:'intro'|'questions'|'result';step:number;answers:(number|null)[]}
export interface DiagnosticResult {category:string;name:string;headline:string;description:string;compatible:boolean;compatibility:string;goal:string;difficulty:string;googleNote:string;locationNote:string}
export const questions:{key:string;title:string;options:string[]}[];
export const initialState:QuizState;
export function quizReducer(state:QuizState,action:{type:string;value?:number}):QuizState;
export function classify(answers:number[]):DiagnosticResult;
export function formatPhone(value:string):string;
export function validPhone(value:string):boolean;
export function contactErrors(contact:{name:string;phone:string;consent:boolean}):Partial<Record<'name'|'phone'|'consent',string>>;
export function leadFields(answers:number[],result:DiagnosticResult,contact:{name:string;phone:string;profile:string},campaign?:Record<string,string>,now?:Date):Record<string,string>;
export function submitLead(fields:Record<string,string>,fetcher?:typeof fetch):Promise<true>;

export function emailSubject(name:unknown,location:number):string;
export function emailPayload(fields:Record<string,string>):Record<string,string>;
