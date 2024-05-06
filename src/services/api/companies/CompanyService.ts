import ApiService from '../common/ApiService';
import Company from './Company';

class CompanyService extends ApiService<Company> {
  constructor() {
    super('/api/company');
  }
}

export default CompanyService;
