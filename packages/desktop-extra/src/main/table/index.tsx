import { styled } from '@qiwi/pijma-core'
import React from 'react'
import { useTable } from 'react-table'

import { activeBackground, borderColor, tableHoverColor } from './constants'

const TrWrapper = styled('tr')`
  background-color: ${(props: { active?: boolean }) =>
    props.active ? activeBackground : 'none'};
  ${(props: any) => (props.cursor ? 'cursor: ' + props.cursor + ';' : '')};
`

const TableWrapper = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-spacing: 0;
    font-family: 'Museo Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 10pt;
    text-overflow: ellipsis;

    overflow: hidden;
    overflow-wrap: break-word;
    thead {
      tr th {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        font-size: 10pt;
        font-weight: 150;
        color: rgb(102, 102, 102);
        text-align: start;
        user-select: none;
        :first-child {
          padding-left: 32px;
        }
        :last-child {
          padding-right: 20px;
        }
      }
      font-weight: 300;
      border-bottom: 1px solid ${borderColor};
    }

    tbody {
      tr {
        :hover {
          background-color: ${tableHoverColor};
          cursor: pointer;
        }
        :last-child {
          td {
            border-bottom: 0;
          }
        }
        td {
          :first-child {
            padding-left: 32px;
          }
          :last-child {
            padding-right: 20px;
          }
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.25rem 12px;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export const Table = ({
  columns,
  data,
  onSelect,
  rowCursor,
  isActive,
}: any) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  // Render the UI for your table
  return (
    <TableWrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any, i: number) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any, i: number) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, i: number) => {
            prepareRow(row)
            return (
              <TrWrapper
                key={i}
                data-cy={'table-row'}
                {...row.getRowProps()}
                active={isActive ? isActive(row.original) : false}
                cursor={rowCursor}
              >
                {row.cells.map((cell: any, i: number) => {
                  return (
                    <td
                      key={i}
                      onClick={() =>
                        typeof onSelect === 'function' && onSelect(row.original)
                      }
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </TrWrapper>
            )
          })}
        </tbody>
      </table>
    </TableWrapper>
  )
}

export { columnFactory } from './column'
