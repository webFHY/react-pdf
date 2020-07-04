import React, {useState} from "react";
import styled from "styled-components";
import {Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App = styled(({className}) => {
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(null);

    const onDocumentLoadSuccess = ({numPages}) => {
        setPageSize(numPages);
    };


    const prevPage = () => {
        if (pageNo > 1) setPageNo(pageNo - 1);
    };
    const nextPage = () => {
        if (pageNo < pageSize) setPageNo(pageNo + 1);
    };

    return (
        <div className={className}>
            <Document
                file="/pdf/github-git-cheat-sheet.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page width={600} pageNumber={pageNo}/>
                <p className="pagination">
                    <span className={pageNo === 1 && "disable"} onClick={prevPage}>&lt;</span>
                    {pageNo} / {pageSize}
                    <span className={pageNo === pageSize && "disable"} onClick={nextPage}>&gt;</span>
                </p>
            </Document>
        </div>
    );
})`
position: relative;
width: 600px;
height: 800px;
margin: 0 auto;
background: #fff;
overflow: auto;

.pagination{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    background: #fff;
    margin: 0;
    
    span{
        margin: 0 10px;
        cursor: pointer;
        
        &.disable{
            color: #999;
            cursor: no-drop;
        }
    }
}
`;

export default App;
