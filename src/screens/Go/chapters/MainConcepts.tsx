import React from "react";
import MarkdwonLoader from "../../../components/MarkdownLoader";

import mainConceptsMarkdown from "../markdowns/main_concepts.md";

const MainConcepts = () => {
    return <MarkdwonLoader markdown={mainConceptsMarkdown} />;
};

export default MainConcepts;
