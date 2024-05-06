import ModelBase from '../common/ModelBase';

interface AccountModel extends ModelBase {
  name: string;
  workload: number;
}

export default AccountModel;
