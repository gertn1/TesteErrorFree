import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import notification from 'antd/es/notification';
import AccountService from '~/services/api/accounts/AccountService';
import { ContentButtonAccount, LinkNewAccount, TitleAccount } from './style';
import { Table } from '~/components/Table';
import { Button } from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';

import AccountModel from '~/services/api/accounts/Account.ts';
import { IonIcon } from '@ionic/react';
import { ellipsisVerticalOutline } from 'ionicons/icons';

export const Account: FC = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [, setEditing] = useState(null);

  const navigate = useNavigate();

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Horas Contratadas',
      dataIndex: 'workload',
      key: 'workload',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_: any, record: AccountModel) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" onClick={() => handleEdit(record)}>
                Editar
              </Menu.Item>
              <Menu.Item key="delete" onClick={() => fetchDeleteAccount(record.id)}>
                Excluir
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <IonIcon icon={ellipsisVerticalOutline} size="samll" />
        </Dropdown>
      ),
    },
  ];

  useEffect(() => {
    fetchAllAccounts();
  }, [limit, page, activeTab]);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    console.log('Aba alterada:', key);
  };

  const handleEdit = (account: AccountModel) => {
    setEditing(account);
    navigate('/edit-account', { state: { account: account } });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePageSizeChange = useCallback((_current: number, size: number) => {
    setLimit(size);
    setPage(1);
  }, []);

  const fetchAllAccounts = async () => {
    setLoading(true);
    try {
      const service = new AccountService();
      const response = await service.getAllPaginated(page, limit);
      if (response.isSuccess) {
        setAccounts(response.data.items);
        setTotalItems(response.data.totalCount);
      }
    } catch (error: any) {
      console.error('Erro ao ver contas:', error);
      notification.error({
        message: 'Erro ao ver contas',
        description: error.message || 'Erro desconhecido ao ver contas',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteAccount = async (id: string) => {
    try {
      setLoading(true);
      const service = new AccountService();
      const response = await service.delete(id);
      if (response.isSuccess) {
        notification.success({
          message: 'Conta excluída com sucesso!',
        });
        return fetchAllAccounts();
      }
    } catch (error: any) {
      console.error('Erro ao excluir conta:', error);
      notification.error({
        message: 'Erro ao excluir conta',
        description: error.message || 'Erro desconhecido ao excluir conta',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <TitleAccount> Contas</TitleAccount>

      <Table
        children={
          <ContentButtonAccount>
            <LinkNewAccount to={'/new-account'}>
              <Button color="primary" label="CRIAR NOVA CONTA" disabled={false} loading={loading} />
            </LinkNewAccount>
          </ContentButtonAccount>
        }
        onPageChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        data={accounts}
        columns={columns}
        pageSize={limit}
        currentPage={page}
        showPagination={true}
        totalItems={totalItems}
        loading={loading}
        tabsData={[
          { tab: 'CONTAS', key: '1' },
          { tab: 'TEST TAB', key: '2' },
          { tab: 'TEST TAB', key: '3' },
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </Fragment>
  );
};
