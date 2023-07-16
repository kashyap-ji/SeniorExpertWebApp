import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCaretUp, faCaretDown);

interface TableProps {
    headings: {[key: string]: string;};
  rows: {
    [key: string]: string | number;
    amount: number;
    milestone: string | number;
  }[];
  heightcol: string;
    heightrow: string;
    width?: string;
    fontSizecol: string;
    fontSizerow: string;
    gap:string;
}
const TABLE=styled.table`
border: 1px solid #000000;
    font-family: 'Roboto Flex';
    color: #0E1D25;`;
const TD=styled.td<TableProps>`
--height1: ${(props) => props.heightrow};
  --width: ${(props) => props.width};
  --font-size1: ${(props) => props.fontSizerow};
  --gap: ${(props) => props.gap};
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 32px 24px;
        gap: var(--gap);
        width: var(--width);
        height: var(--height1);
        border-top: 1px solid black;
        font-weight: 500;
        font-size: var(--font-size1)
    --height1: ${(props) => props.heightrow || "85px" };
    --width:  ${(props) => props.width || "186px" };
    --font-size1:  ${(props) => props.fontSizerow || "16px" };
    --gap:  ${(props) => props.gap || "10px" };`;
const TH=styled.th<TableProps>
      `--height2: ${(props) => props.heightcol};
      --width: ${(props) => props.width};
      --font-size2: ${(props) => props.fontSizecol};
      --gap: ${(props) => props.gap};
      box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px;
        gap: var(--gap);
        width: var(--width);
        height:var(--height2);
        background: #C1D1F9;
        font-weight: 900;
        font-size: var(--font-size2);
        --height2: ${(props) => props.heightcol || "74px" };
      --width:  ${(props) => props.width ||"186px"};
      --font-size2:  ${(props) => props.fontSizecol || "20px" };
      --gap:  ${(props) => props.gap || "10px" };
      `;      
const TR=styled.tr`
display:flex;
flex-direction:row;`;
const UpVector: React.FC = ({ onClick }) => (
    <FontAwesomeIcon icon={faCaretUp} onClick={onClick} />
);

const DownVector: React.FC = ({ onClick }) => (
    <FontAwesomeIcon icon={faCaretDown} onClick={onClick} />
);
  const SortWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Table: React.FC<TableProps> = ({ headings,rows:initialRows }) => {
  const [rows,setRows]=useState(initialRows);

  const sortRows = (column: keyof TableRow, ascending: boolean) => {
    const sortedRows = [...rows].sort((a, b) => {
      if (column === 'milestone') {
        if (a.milestone === 'All') return ascending ? 1 : -1;
        if (b.milestone === 'All') return ascending ? -1 : 1;
        return ascending ? a.milestone - b.milestone : b.milestone - a.milestone;
      }
      if (column === 'amount') {
        return ascending ? a.amount - b.amount : b.amount - a.amount;
      }
      if (column === 'date') {
        return ascending
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
    setRows(sortedRows);
  };


  return (
    <TABLE>
      <thead>
      <TR>
        {Object.values(headings).map((heading, index) => {
          const column = Object.keys(headings)[index] as keyof TableProps['rows'][0];
          return (
            <TH key={index}>
              {heading}
              {["milestone", "amount", "date"].includes(column) && (
                <SortWrapper>
                      <UpVector onClick={() => sortRows(column, true)} />
                      <DownVector onClick={() => sortRows(column, false)} />
                </SortWrapper>
              )}
            </TH>
          );
        })}
      </TR>
      </thead>
      <tbody>
        {rows.map((row) => (
          <TR key={row.index}>
          {Object.values(row).map((value) => (
            <TD >
            {value === row.invoice||value===row.pdf ? (
            <a href={value}>View PDF</a>
              ) : (
                value
              )}
            </TD>
          ))}
        </TR>
        ))}
      </tbody>
    </TABLE>
  );
};
export default Table;
