import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type markdownLoaderPropsType = {
    markdown: string;
};

const MarkdwonLoader = ({ markdown }: markdownLoaderPropsType) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [markdownFile, setMarkdownFile] = useState<null | string>(null);

    useEffect(() => {
        setLoading(true);
        fetch(markdown)
            .then((response) => response.text())
            .then((text) => {
                setMarkdownFile(text);
                setLoading(false);
            });
    }, []);

    const renderMarkdownFile = () => {
        if (loading) return <div>Cargando...</div>;

        if (!loading && markdownFile)
            return (
                <ReactMarkdown
                    children={markdownFile}
                    remarkPlugins={[remarkGfm]}
                />
            );
    };

    return <div>{renderMarkdownFile()}</div>;
};

export default MarkdwonLoader;
