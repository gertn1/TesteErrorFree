import { IonIcon } from '@ionic/react';
import notification from 'antd/es/notification';
import { ellipsisVerticalOutline } from 'ionicons/icons';
import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import CompanyService from '~/services/api/companies/CompanyService';
import { ContentButtonOrganization, LinkNewOrganization, TitleOrganization } from './style';
import { useNavigate } from 'react-router-dom';
import { Table } from '~/components/Table';
import AccountModel from '~/services/api/accounts/Account.ts';
import { Dropdown, Menu } from 'antd';

export const Organization: FC = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setEditing] = useState(null);
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'CNPJ',
      dataIndex: 'companyRegistrationNumber',
      key: 'companyRegistrationNumber',
    },
    {
      title: 'Cidade',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Estado',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'País',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Taxa',
      dataIndex: 'taxPercentage',
      key: 'taxPercentage',
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
              <Menu.Item key="delete" onClick={() => fetchDeleteOrganization(record.id)}>
                Excluir
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <IonIcon icon={ellipsisVerticalOutline} size="medium" />
        </Dropdown>
      ),
    },
  ];

  useEffect(() => {
    fetchAllOrganizations();
  }, [limit, page]);

  const handleEdit = (company: AccountModel) => {
    setEditing(company);
    navigate('/edit-organization', { state: { organization: company } });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePageSizeChange = useCallback((_current: number, size: number) => {
    setLimit(size);
    setPage(1);
  }, []);

  const fetchAllOrganizations = async () => {
    setLoading(true);
    try {
      const service = new CompanyService();
      const response = await service.getAllPaginated(page, limit);
      if (response.isSuccess) {
        setOrganizations(response.data.items);
        setTotalItems(response.data.totalCount);
      }
    } catch (error: any) {
      console.error('Erro ao buscar organizações:', error);
      notification.error({
        message: 'Erro ao buscar organizações',
        description: error.message || 'Erro desconhecido ao buscar organizações',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteOrganization = async (id: string) => {
    try {
      setLoading(true);
      const service = new CompanyService();
      const response = await service.delete(id);
      if (response.isSuccess) {
        notification.success({
          message: 'Organização excluída com sucesso!',
        });
        return fetchAllOrganizations();
      }
    } catch (error: any) {
      console.error('Erro ao excluir organização:', error);
      notification.error({
        message: 'Erro ao excluir organização',
        description: error.message || 'Erro desconhecido ao excluir organização',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <TitleOrganization> Organizações</TitleOrganization>

      <Table
        children={
          <ContentButtonOrganization>
            <LinkNewOrganization to={'/new-organization'}>
              <Button color="primary" label="CRIAR NOVA EMPRESA" disabled={false} loading={loading} />
            </LinkNewOrganization>
          </ContentButtonOrganization>
        }
        onPageChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        data={organizations}
        columns={columns}
        pageSize={limit}
        currentPage={page}
        totalItems={totalItems}
        showPagination={true}
        loading={loading}
      />
    </Fragment>
  );
};
