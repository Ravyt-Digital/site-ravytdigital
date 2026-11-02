export type DiagnosticAnswers = (number|string|null)[];
export interface QuizState {stage:'intro'|'questions'|'result';step:number;answers:DiagnosticAnswers}
export interface DiagnosticResult {category:string;name:string;headline:string;description:string;compatible:boolean;compatibility:string;goal:string;difficulty:string;googleNote:string}
export const questions:{key:string;title:string;type?:string;options:string[]}[];
export const initialState:QuizState;
export function isAnswered(value:number|string|null,index:number):boolean;
export function quizReducer(state:QuizState,action:{type:string;value?:number|string}):QuizState;
export function classify(answers:DiagnosticAnswers):DiagnosticResult;
export function formatPhone(value:string):string;
export function validPhone(value:string):boolean;
export function contactErrors(contact:{name:string;phone:string;consent:boolean}):Partial<Record<'name'|'phone'|'consent',string>>;
export const WHATSAPP_BASE:string;
export function whatsappMessage(answers:DiagnosticAnswers,result:DiagnosticResult,contact:{name:string;phone:string;profile:string}):string;
export function whatsappUrl(message:string):string;
