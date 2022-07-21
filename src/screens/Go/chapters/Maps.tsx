import React from "react";
import MarkdwonLoader from "../../../components/MarkdownLoader";

import mapsMarkdown from "../markdowns/maps.md";

const Maps = () => {
    return <MarkdwonLoader markdown={mapsMarkdown} />;
};

export default Maps;
