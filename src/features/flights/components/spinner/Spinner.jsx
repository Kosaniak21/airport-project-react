import React from 'react';
import './spinner.scss';

const Spinner = React.memo(() => (
    <tr>
        <td colSpan="6">
            <div className="spinner"></div>
        </td>
    </tr>
));

export default Spinner;