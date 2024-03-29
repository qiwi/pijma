import { styled } from '@qiwi/pijma-core'
import React from 'react'
import { TableOptions, useTable } from 'react-table'

import { activeBackground, borderColor, tableHoverColor } from './constants'

const TrWrapper = styled('tr')<{
  active?: boolean
  cursor?: CSSStyleDeclaration['cursor']
}>`
  background-color: ${(props) => (props.active ? activeBackground : 'none')};
  ${(props) => (props.cursor ? 'cursor: ' + props.cursor + ';' : '')};
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
          padding-left: 44px;
        }
        :last-child {
          padding-right: 44px;
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
            padding-left: 44px;
          }
          :last-child {
            padding-right: 44px;
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

export type TTableProps = Pick<TableOptions<any>, 'columns' | 'data'> & {
  onSelect?: (d: any) => void
  isActive?: (d: any) => boolean
  rowCursor?: CSSStyleDeclaration['cursor']
}

export const Table = ({
  columns,
  data,
  onSelect,
  rowCursor,
  isActive,
}: TTableProps) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  // Render the UI for your table
  const headers = []
  const thead = headerGroups.map((headerGroup) => (
    // headerGroup.getHeaderGroupProps() returns a key
    // eslint-disable-next-line react/jsx-key
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((column) => {
        const header = column.render('Header')
        const typeofHeader = typeof header
        if (
          typeofHeader === 'string' ||
          (typeofHeader === 'object' &&
            React.isValidElement(header) &&
            header.props.children)
        ) {
          headers.push(header)
          // eslint-disable-next-line react/jsx-key
          return <th {...column.getHeaderProps()}>{header}</th>
        }
        return null
      })}
    </tr>
  ))

  return (
    <TableWrapper>
      <table {...getTableProps()}>
        {headerGroups && headerGroups.length > 0 ? (
          <thead>{headers.length > 0 ? thead : null}</thead>
        ) : (
          <></>
        )}
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              // row.getRowProps() returns a key
              // eslint-disable-next-line react/jsx-key
              <TrWrapper
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
