import ModelBase from '../common/ModelBase';

export interface Company extends ModelBase {
  name: string;
  description: string;
  companyRegistrationNumber: string;
  comporateReason: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  taxPercentage: number;
}

export default Company;
