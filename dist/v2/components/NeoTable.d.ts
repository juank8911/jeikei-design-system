import React from 'react';
export type ColumnInfo = {
    header: string;
    accessor: string;
};
export interface NeoTableProps {
    columns: ColumnInfo[];
    data: any[];
    className?: string;
}
export declare const NeoTable: React.FC<NeoTableProps>;
