import React, {FC} from 'react';
import Flex from "./UI/Flex";
import Spinner from "./UI/Spinner";

const Loader:FC = () => {
    return (
        <Flex height='100%' justify='center' align='center'>
            <Spinner/>
        </Flex>
    );
};

export default Loader;