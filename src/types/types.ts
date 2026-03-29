export type Subject = "Maths" | "English" | "Science" | "History";

export type Term = "First" | "Second" | "Third";

export type Result = {
    id: string;
    studentName: string;
    subject: Subject;
    score: number;
    term: Term;
}

export type FormData = {
    studentName: string;
    subject: string;
    score: string;
    term: string;
};

export type Errors = Partial<Record<keyof FormData, string>>;

export type ValidationErrors = Partial<Record<keyof Omit<Result, "id">, string>>;