import React from "react";
import MarkdwonLoader from "../../../components/MarkdownLoader";

import constantsMarkdown from "../markdowns/constants.md";

const Constants = () => {
    return <MarkdwonLoader markdown={constantsMarkdown} />;
};

export default Constants;
