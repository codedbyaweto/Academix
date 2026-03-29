import { useState, type SubmitEvent, type ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import { validateResult } from "../utils/validate";
import type { Result, FormData, Errors } from "../types/types";
import toast from "react-hot-toast";

type Props = {
    onAdd: (result: Result) => void;
};

const ResultForm = ({ onAdd }: Props) => {
    const [formData, setFormData] = useState<FormData>({
        studentName: "",
        subject: "",
        score: "",
        term: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const parsedData: Omit<Result, "id"> = {
            studentName: formData.studentName,
            subject: formData.subject as Result["subject"],
            term: formData.term as Result["term"],
            score: Number(formData.score),
        };

        const validationErrors = validateResult(parsedData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        onAdd({
            id: uuid(),
            studentName: parsedData.studentName,
            subject: parsedData.subject as Result["subject"],
            score: parsedData.score,
            term: parsedData.term as Result["term"],
        });

        toast.success("Result added successfully 🎉");

        setFormData({
            studentName: "",
            subject: "",
            score: "",
            term: "",
        });

        setErrors({});
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Add Student Result</h2>

            <div className="form-group">
                <input
                    className="input"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="Student Name"
                />
                {errors.studentName && <p className="error">{errors.studentName}</p>}
            </div>

            <div className="form-group">
                <select
                    className="input"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                >
                    <option value="">Select subject</option>
                    <option value="Maths">Maths</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                </select>
                {errors.subject && <p className="error">{errors.subject}</p>}
            </div>

            <div className="form-group">
                <input
                    className="input"
                    name="score"
                    value={formData.score}
                    onChange={handleChange}
                    placeholder="Score"
                />
                {errors.score && <p className="error">{errors.score}</p>}
            </div>

            <div className="form-group">
                <select
                    className="input"
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                >
                    <option value="">Select term</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                </select>
                {errors.term && <p className="error">{errors.term}</p>}
            </div>

            <button className="submit-btn" type="submit">
                Add Result
            </button>
        </form>
    );
};

export default ResultForm;