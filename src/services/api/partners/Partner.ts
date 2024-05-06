import Entity from '../common/ModelBase';

interface Partner extends Entity {
  name: string;
  description: string;
  registrationNumber: string;
  email: string;
  phone: string;
  companyId?: number;
}

export default Partner;
