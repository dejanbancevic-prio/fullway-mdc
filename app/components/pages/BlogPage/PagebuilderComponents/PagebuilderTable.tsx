/* eslint-disable react/no-array-index-key */
import React from "react";

type PagebuilderTableProps = {
  headers: string[];
  rows: React.ReactNode[][];
};

const PagebuilderTable = ({ headers, rows }: PagebuilderTableProps) => (
  <div className="overflow-x-auto my-[1.5rem]">
    <table className="min-w-[300px] border-collapse w-full">
      {headers.length > 0 && (
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="font-semibold border-b border-gray-300 text-left p-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td
                key={cellIdx}
                className="border-b border-gray-200 text-left p-[0.5rem] align-top"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PagebuilderTable;
