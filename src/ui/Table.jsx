import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="w-full">{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`bg-white border-b border-zinc-200 font-bold px-4 py-2 grid grid-cols-[${columns}] gap-4 rounded-t`}
    >
      {children}
    </div>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`w-full h-24 px-4 py-2 grid grid-cols-[${columns}] gap-4 border-b border-zinc-200 hover:bg-zinc-100`}
    >
      {children}
    </div>
  );
}
function Body({ data, render }) {
  if (!data.length) return "No data";

  return (
    <div className="bg-white overflow-auto flex-1 max-h-[calc(100vh-280px)] min-h-0 w-full rounded-b">
      {data.map(render)}
    </div>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
