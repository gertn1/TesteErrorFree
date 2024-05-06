import { IonIcon } from '@ionic/react';
import { Dropdown, Menu, notification } from 'antd';
import { ellipsisVerticalOutline } from 'ionicons/icons';
import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import PartnerService from '~/services/api/partners/PartnerService';
import { ContentButtonPartner, LinkNewPartner, TitlePartner } from './style';
import { useNavigate } from 'react-router-dom';
import { Table } from '~/components/Table';
import AccountModel from '~/services/api/accounts/Account.ts';

export const Partner: FC = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [, setEditing] = useState(null);
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'CPF',
      dataIndex: 'registrationNumber',
      key: 'registrationNumber',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
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
              <Menu.Item key="delete" onClick={() => fetchDeletePartner(record.id)}>
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
    fetchAllPartners();
  }, [limit, page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleEdit = (partner: AccountModel) => {
    setEditing(partner);
    navigate('/edit-partner', { state: { partner: partner } });
  };

  const handlePageSizeChange = useCallback((_current: number, size: number) => {
    setLimit(size);
    setPage(1);
  }, []);

  const fetchAllPartners = async () => {
    setLoading(true);
    try {
      const service = new PartnerService();
      const response = await service.getAllPaginated(page, limit);
      if (response.isSuccess) {
        setPartners(response.data.items);
        setTotalItems(response.data.totalCount);
      }
    } catch (error: any) {
      notification.error({
        message: error.message,
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDeletePartner = async (id: string) => {
    try {
      setLoading(true);
      const service = new PartnerService();
      const response = await service.delete(id);
      if (response.isSuccess) {
        notification.success({
          message: 'Parceiro excluído com sucesso!',
        });
        return fetchAllPartners();
      }
    } catch (error: any) {
      console.error('Erro ao excluir parceiro:', error);
      notification.error({
        message: 'Erro ao excluir parceiro',
        description: error.message || 'Erro desconhecido ao excluir parceiro',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <TitlePartner>Parceiros</TitlePartner>

      <Table
        children={
          <ContentButtonPartner>
            <LinkNewPartner to={'/new-partner'}>
              <Button color="primary" label="CRIAR NOVO PARCEIRO" disabled={false} loading={loading} />
            </LinkNewPartner>
          </ContentButtonPartner>
        }
        onPageChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        data={partners}
        columns={columns}
        pageSize={limit}
        currentPage={page}
        showPagination={true}
        totalItems={totalItems}
        loading={loading}
      />
    </Fragment>
  );
};
