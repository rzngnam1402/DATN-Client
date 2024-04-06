import React, { useState, useEffect } from 'react';

const PDFViewer = ({ file }) => {
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const buffer = new Uint8Array(file.buffer.data);
        const blob = new Blob([buffer], { type: file.mimetype });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [file]);

    return (
        <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            style={{ border: 'none' }}
        >
            Loading PDF...
        </iframe>
    );
};

export default PDFViewer;
