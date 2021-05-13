import { useParams } from "react-router-dom";
import Cases from "data/case";

const StudyCase = () => {
  const { caseSlug } = useParams();
  return (
    <div>
      {Cases.map((x) => {
        if (x.slug === caseSlug)
          return (
            <>
              <h1>{x.title}</h1>
              <p>{x.content}</p>
            </>
          );
      })}
    </div>
  );
};

export default StudyCase;
