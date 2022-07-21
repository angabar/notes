import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(
                                className || "",
                            );
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(
                                        /\n$/,
                                        "",
                                    )}
                                    style={docco as any}
                                    language={match[1]}
                                    PreTag="div"
                                    wrapLines={false}
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                    remarkPlugins={[remarkGfm]}
                />
            );
    };

    return <div>{renderMarkdownFile()}</div>;
};

export default MarkdwonLoader;
