import {useState} from 'react';

export const AppBar = () => {

    const [visible, setVisible] = useState(true);

    return (
        <div id='app-bar'>
            { visible && 
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <div className='navbar-nav mx-3'>
                        <a className='nav-item nav-link'>Home</a>
                    </div>
                </nav>
            }
        </div>
    )
}

export default AppBar;

