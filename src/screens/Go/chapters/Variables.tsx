import React from "react";

import MarkdwonLoader from "../../../components/MarkdownLoader";

import variablesMarkdown from "../markdowns/variables.md";

const Variables = () => {
    return <MarkdwonLoader markdown={variablesMarkdown} />;
};

export default Variables;
