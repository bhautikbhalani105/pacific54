import React, { useCallback, useEffect, useState } from 'react';

import { Button, Spin, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: number;
  year: number;
  assessedValue: number;
  taxAmount: number;
  source: string;
}

const HistoryTaxesList: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const fetchData = async (page: number): Promise<DataType[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const items: DataType[] = Array.from({ length: 10 }, (_, i) => {
          const key = i + (page - 1) * 10;
          const currentYear = new Date().getFullYear();
          const year = currentYear - (i % 10);
          const assessedValue = Math.floor(Math.random() * 450000) + 50000;
          const taxAmount = parseFloat(
            (((Math.random() * 2 + 1) * assessedValue) / 100).toFixed(2)
          );

          return {
            key,
            year,
            assessedValue,
            taxAmount,
            source: 'Public Records'
          };
        });

        resolve(items);
      }, 1000);
    });
  };

  const loadMoreData = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const newData = await fetchData(page);

    setData((prevData) => [...prevData, ...newData]);
    setPage((prevPage) => prevPage + 1);

    if (newData.length === 0) {
      setHasMore(false);
    }

    setLoading(false);
  }, [loading, page]);

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year'
    },
    {
      title: 'Assessed value',
      dataIndex: 'assessedValue',
      key: 'assessedValue'
    },
    {
      title: 'Tax amount',
      dataIndex: 'taxAmount',
      key: 'taxAmount'
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source'
    }
  ];

  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 45 * 5 }}
        rowKey="key"
      />
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        {loading ? (
          <Spin />
        ) : hasMore ? (
          <Button type="primary" onClick={loadMoreData}>
            Load More
          </Button>
        ) : (
          <p>No more data</p>
        )}
      </div>
    </>
  );
};

export default HistoryTaxesList;
