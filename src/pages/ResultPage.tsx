import getGrade from "../utils/grade.ts";
import type { Result } from "../types/types.ts";
import { type ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    results: Result[];
};

const ResultPage = ({ results }: Props) => {
    const [subjectFilter, setSubjectFilter] = useState<string>("");
    const [termFilter, setTermFilter] = useState<string>("");

    const filtered = results.filter((result) => {
        return (
            (subjectFilter ? result.subject === subjectFilter : true) &&
            (termFilter ? result.term === termFilter : true)
        );
    });

    const scores = filtered.map((result) => result.score);
    const average =
        scores.length > 0
            ? scores.reduce((a, b) => a + b, 0) / scores.length
            : 0;

    return (
        <div className="results-page">
            <h2 className="page-title">Results</h2>

            <div className="filters">
                <select
                    className="filter-select"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setSubjectFilter(e.target.value)
                    }
                >
                    <option value="">All Subjects</option>
                    <option>Maths</option>
                    <option>English</option>
                    <option>Science</option>
                    <option>History</option>
                </select>

                <select
                    className="filter-select"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setTermFilter(e.target.value)
                    }
                >
                    <option value="">All Terms</option>
                    <option>First</option>
                    <option>Second</option>
                    <option>Third</option>
                </select>
            </div>

            {/* TABLE */}
            <div className="table-container">
                <table className="results-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Score</th>
                        <th>Term</th>
                        <th>Grade</th>
                    </tr>
                    </thead>

                    <tbody>
                    {filtered.map((result) => (
                        <tr key={result.id}>
                            <td>
                                <Link className="student-link" to={`/results/${result.id}`}>
                                    {result.studentName}
                                </Link>
                            </td>
                            <td>{result.subject}</td>
                            <td>{result.score}</td>
                            <td>{result.term}</td>
                            <td className="grade">{getGrade(result.score)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="summary">
                <div className="card">Total: {filtered.length}</div>
                <div className="card">Average: {average.toFixed(2)}</div>
                <div className="card">
                    Highest: {scores.length ? Math.max(...scores) : 0}
                </div>
                <div className="card">
                    Lowest: {scores.length ? Math.min(...scores) : 0}
                </div>
            </div>
        </div>
    );
};

export default ResultPage;