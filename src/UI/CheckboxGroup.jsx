import React from 'react';
import { CheckboxGroup, Checkbox } from 'rsuite';

const App = ({ onChange = () => { }, data, label = "", values = [], disabled = false }) => {
    return (
        <div>
            <p>{label}</p>
            <CheckboxGroup className='p-4' onChange={onChange} value={values}>
                {data.map(value => <Checkbox disabled={disabled} value={value}>{value}</Checkbox>)}
            </CheckboxGroup>
        </div>

    );
};

export default App;
