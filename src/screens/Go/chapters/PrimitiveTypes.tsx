import React from "react";

import MarkdwonLoader from "../../../components/MarkdownLoader";

import primitivesMarkdown from "../markdowns/primitives.md";

const PrimitiveTypes = () => {
    return <MarkdwonLoader markdown={primitivesMarkdown} />;
};

export default PrimitiveTypes;
