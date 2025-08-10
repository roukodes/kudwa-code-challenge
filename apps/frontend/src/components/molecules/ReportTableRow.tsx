import type { AccountNodeDTO, TableColumnDTO } from '@kudwa-code-challenge/types';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import { useState } from 'react';

interface RowProps {
  depth: number;
  node: AccountNodeDTO;
  currency?: string | null;
  columns: TableColumnDTO[];
  defaultExpanded?: boolean;
}

const formatVal = (n: number | null, currency?: string) =>
  n == null
    ? '-'
    : n.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        ...(currency ? { style: 'currency', currency } : {}),
      });

function ReportTableRow({ node, columns, depth, currency }: RowProps) {
  const [expanded, setExpanded] = useState(false);
  const indent = depth * 20;

  return (
    <>
      <TableRow hover>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>
          <span style={{ paddingLeft: indent, display: 'inline-flex', alignItems: 'center' }}>
            {node.hasChildren ? (
              <Tooltip title={expanded ? 'Collapse' : 'Expand'}>
                <IconButton
                  size="small"
                  onClick={() => setExpanded((e) => !e)}
                  edge="start"
                  sx={{ mr: 0.5 }}
                >
                  {expanded ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                </IconButton>
              </Tooltip>
            ) : (
              <span style={{ display: 'inline-block', width: 32 }} />
            )}
            {node.name}
          </span>
        </TableCell>

        {columns.map((c) => (
          <TableCell key={c.key} align="right" sx={{ whiteSpace: 'nowrap' }}>
            {formatVal(node.values[c.key] ?? null, currency ?? undefined)}
          </TableCell>
        ))}
      </TableRow>

      {/* Render children only when expanded */}
      {expanded &&
        node.children.map((child) => (
          <ReportTableRow
            key={child.accountId}
            node={child}
            columns={columns}
            depth={depth + 1}
            currency={currency}
            defaultExpanded={false}
          />
        ))}
    </>
  );
}

export default ReportTableRow;
