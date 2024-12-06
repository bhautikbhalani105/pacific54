import React, { useCallback, useEffect, useState } from 'react';

import { Button, Spin, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: number;
  transaction: string;
  price: number;
  date: string;
  source: string;
}

const HistorySalesList: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]); // Table data
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [hasMore, setHasMore] = useState<boolean>(true); // Whether more data can be loaded
  const [page, setPage] = useState<number>(1);

  const fetchData = async (page: number): Promise<DataType[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const items: DataType[] = Array.from({ length: 10 }, (_, i) => ({
          key: i + (page - 1) * 10,
          transaction: `Name ${i + (page - 1) * 10}`,
          price: Math.floor(Math.random() * 1000) + 100,
          date: new Date(Date.now() - i * 1000000).toLocaleDateString(),
          source: 'Public Records'
        }));
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
      setHasMore(false); // No more data available
    }

    setLoading(false);
  }, [loading, page]);

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Transaction',
      dataIndex: 'transaction',
      key: 'transaction'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
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

export default HistorySalesList;
