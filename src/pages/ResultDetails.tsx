import type {Result} from "../types/types.ts";
import {useParams} from "react-router-dom";

type Props = {
    results: Result[];
}

const ResultDetails = ({ results }: Props) => {
    const { id } = useParams();
    const result = results.find(res => res.id === id);

    if (!result) return <p className="not-found">Result not found</p>

    return (
        <div className="details-page">
            <div className="details-card">
                <h2 className="details-title">{result.studentName}</h2>

                <div className="details-item">
                    <span>Subject</span>
                    <strong>{result.subject}</strong>
                </div>

                <div className="details-item">
                    <span>Score</span>
                    <strong>{result.score}</strong>
                </div>

                <div className="details-item">
                    <span>Term</span>
                    <strong>{result.term}</strong>
                </div>
            </div>
        </div>
    )
}

export default ResultDetails;