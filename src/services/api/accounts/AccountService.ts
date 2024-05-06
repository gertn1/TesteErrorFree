import Account from './Account';
import ApiService from '../common/ApiService';

class AccountService extends ApiService<Account> {
    constructor() {
      super('/api/account');
    }
  }
  
export default AccountService;