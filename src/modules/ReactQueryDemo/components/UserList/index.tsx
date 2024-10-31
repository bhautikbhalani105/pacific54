import { useState } from 'react';

import { Button } from 'antd';

import { userHooks } from '../../../../services/user';
import { IUserListReq } from '../../../../services/user/types';
import { Wrapper } from './style';

const initialArgs = {
  page: 1,
  limit: 10,
  search: '',
  column: '',
  order: ''
};

const UserList: React.FC = () => {
  const [Args, setArgs] = useState<IUserListReq>(initialArgs);

  const { data, error, isLoading } = userHooks.UserList({
    page: Args.page,
    limit: Args.limit
  });

  console.log('isLoading: ', isLoading);
  console.log('error: ', error);
  console.log('data: ', data?.adminUserList);

  const handlePagination = (page: number) => {
    setArgs((prev) => ({ ...prev, page: page }));
  };

  return (
    <Wrapper>
      <div className="list-container">
        {data?.adminUserList?.length
          ? data?.adminUserList?.map((val) => {
              return <h3 key={val?._id}>{val.userName}</h3>;
            })
          : ''}
      </div>
      <div className="pagination">
        <Button onClick={() => handlePagination(1)}>Page 1 </Button>
        <Button onClick={() => handlePagination(2)}>Page 2</Button>
      </div>
    </Wrapper>
  );
};

export default UserList;
