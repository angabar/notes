import React from "react";
import MarkdwonLoader from "../../../components/MarkdownLoader";

import structsMarkdown from "../markdowns/structs.md";

const Structs = () => {
    return <MarkdwonLoader markdown={structsMarkdown} />;
};

export default Structs;
