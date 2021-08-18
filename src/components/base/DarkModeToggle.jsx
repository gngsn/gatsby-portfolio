import React from 'react';
import useTheme from '../../lib/hooks/useTheme';
import classNames from 'classnames';
import '../scss/Toggle.scss';

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = e => {
        if(theme === 'dark') {
            e.target.checked = false;
            setTheme('light');
        } else {
            e.target.checked = true;
            setTheme('dark');
        }
        
    }

    return (
        <div className='toggle'>
            <div>
                <label className={classNames('sw',theme === 'dark' ? 'dark':'')}>
                    <input onClick={changeTheme} type='checkbox'/>
                        <span className='slider round'></span>
                </label>
            </div>
        </div>
    );
}

export default DarkModeToggle;