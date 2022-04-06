import React, {FC} from 'react';
import Typography from "./UI/Typography";
import Checkbox from "./UI/Checkbox";

interface CatalogNavBarProps {
    check: boolean;
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CatalogNavBar:FC<CatalogNavBarProps> = ({check, handleCheckboxChange}) => {
    return (
        <div>
            <Typography mb={30} variant='title'>Explore</Typography>
            <Typography mb={22} >
                Buy and sell digital fashion NFT art
            </Typography>
            <Checkbox label='Available in stock' isChecked={check} onChange={handleCheckboxChange}/>
        </div>
    );
};

export default CatalogNavBar;