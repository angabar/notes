import React from "react";
import MarkdwonLoader from "../../../components/MarkdownLoader";

import controlFlowMarkdown from "../markdowns/control_flow.md";

const ControlFlow = () => {
    return <MarkdwonLoader markdown={controlFlowMarkdown} />;
};

export default ControlFlow;
