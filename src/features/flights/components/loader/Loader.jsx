import React from 'react';
import './loader.scss';

const Loader = React.memo(() => (
    <tr>
        <td colSpan="6">
            <div className="loader"></div>
        </td>
    </tr>
));

export default Loader;