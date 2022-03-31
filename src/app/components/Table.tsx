import React,{ FC,MouseEvent } from "react";
import styled from "styled-components";
import { UserInfo } from "../store/models/user";

const InnerTable =  styled.table`
    width:100%;
    margin: 10px 0;
    max-width: 900px;
    border-collapse: collapse; 
`;

const TableHeader = styled.th`
    text-align:center;
    border: 1px solid black;
`;

const TableRow = styled.tr<{ selected?:boolean}>`
    border:1px solid black;
    background-color : ${({selected})=> (selected? '#008bff':'#c3cbd7')}
`;

const TableRowData = styled.td`
    text-align:center;
    border: 1px solid black;
`;

interface TableProps {
    tableData:UserInfo[];
    headers:string[];
    onSelect? : (row: UserInfo)=>void;
    selectedItem?:UserInfo;
}

const Table : FC<TableProps> = ({tableData,headers,onSelect,selectedItem}) => {

   const handleSelectItem = (row:UserInfo) : ((e : MouseEvent<HTMLTableRowElement>)=>void) =>(e:MouseEvent<HTMLTableRowElement>) : void => {
       if(onSelect) onSelect(row);
   }
    return (
        <InnerTable id="table">
            <TableRow>
                {headers.map((header)=> {
                    return (
                        <TableHeader>
                            {header}
                        </TableHeader>
                    )
                })}
            </TableRow>
            {tableData.map((data)=> {
                return (
                    <TableRow selected={selectedItem?.userId===data.userId} onClick={handleSelectItem(data)}>
                         <TableRowData>
                            {data.userId}
                        </TableRowData>
                        <TableRowData>
                            {data.name}
                        </TableRowData>
                        <TableRowData>
                            {new Date(data.birthDate||'').toLocaleDateString()}
                        </TableRowData>
                        <TableRowData>
                            {new Date(data.registerDate ||'').toLocaleDateString()}
                        </TableRowData>
                        <TableRowData>
                            {new Date(data.lastLogin ||'').toLocaleDateString()}
                        </TableRowData>
                    </TableRow>
                )
            })}
        </InnerTable>
    )
}

export default Table; 