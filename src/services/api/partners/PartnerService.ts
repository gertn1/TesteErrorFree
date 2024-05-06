import ApiService from '../common/ApiService';
import Partner from './Partner';

class PartnerService extends ApiService<Partner> {
  constructor() {
    super('/api/partner'); // Define a URL base para os endpoints da empresa
  }

  // Métodos específicos para manipulação de empresas, se necessário
}

export default PartnerService;
