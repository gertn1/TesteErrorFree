import { FC, useState } from 'react';
import { CustomSelect, Option, OptionsContainer, SelectText } from '~/components/Table/Pagination/style.ts';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline } from 'ionicons/icons';

export const PageSizeSelector: FC<{ pageSize: number; onPageSizeChange: (size: number) => void }> = ({
  pageSize,
  onPageSizeChange,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handlePageSizeChange = (size: number) => {
    onPageSizeChange(size);
    setShowOptions(false);
  };

  return (
    <CustomSelect onClick={() => setShowOptions(!showOptions)}>
      <SelectText>
        <span>{pageSize}</span>
        <IonIcon icon={chevronDownOutline} />
      </SelectText>
      {showOptions && (
        <OptionsContainer>
          <Option onClick={() => handlePageSizeChange(5)}>5</Option>
          <Option onClick={() => handlePageSizeChange(10)}>10</Option>
          <Option onClick={() => handlePageSizeChange(20)}>20</Option>
          <Option onClick={() => handlePageSizeChange(50)}>50</Option>
        </OptionsContainer>
      )}
    </CustomSelect>
  );
};
