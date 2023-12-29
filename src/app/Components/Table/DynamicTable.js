import Image from "next/image";
import React from "react";

const DynamicTable = ({ columns, data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300 text-black">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="py-2 px-4 border-b text-left">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="py-2 px-4 border-b text-left">
                {column.key !== "imageLink" ? (
                  row[column.key]
                ) : (
                  <div
                    className={`relative rounded-full overflow-hidden h-16 w-16`}
                  >
                    <Image
                      src={row[column.key]}
                      alt={row[column.key]}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
