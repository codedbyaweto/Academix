import type { Result, ValidationErrors } from "../types/types";

export const validateResult =(data: Omit<Result, "id">): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!data.studentName.trim()) {
        errors.studentName = "Name is required";
    }

    if (!data.subject) {
        errors.subject = "Subject is required";
    }

    if (data.score < 0 || data.score > 100) {
        errors.score = "Score must be between 0 and 100";
    } else if (!data.score)  {
        errors.score = "Score is required";
    }

    if (!data.term) {
        errors.term = "Term is required";
    }

    return errors;
}