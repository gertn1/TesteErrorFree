export const formatCNPJ = (value: string) => {
  const formattedValue = value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
  return formattedValue;
};

export const formatPhone = (value: string) => {
  const formattedValue = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
  return formattedValue;
};

export const formatPostalCode = (value: string) => {
  const formattedValue = value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
  return formattedValue;
};


export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR');
  return formattedDate;
}

export const formatCPF = (value: string) => {
  const formattedValue = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{2})$/, '$1-$2');
  return formattedValue;
}

export const formatCurrency = (value: number) => {
  const formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return formattedValue;
};

