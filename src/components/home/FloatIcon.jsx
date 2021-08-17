import React from 'react';
import classNames from 'classnames';

import useTheme from '../../lib/hooks/useTheme';

const FloatIcon = () => {
    const { theme } = useTheme();

    const copyMail = e => {
        let email = "rudtjs4540@gmail.com";
        var emailCopy = document.createElement('textarea');
        emailCopy.value = email;
        document.body.appendChild(emailCopy);
        emailCopy.select();
        alert(email + "\n메일이 복사되었습니다.")
        document.execCommand("copy");
        document.body.removeChild(emailCopy);
    }

    return (
        <div className={classNames('icon', theme === 'dark' ? '--dark': '')}>
            <div id="icon_mail" className="__mail" onClick={copyMail}></div>
            <a target="_blank" href="https://www.instagram.com/pppppppppark">
                <div className="__insta"></div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/%EA%B2%BD%EC%84%A0-%EB%B0%95-4b95961b2/">
                <div className="__linkedin"></div>
            </a>
            <a target="_blank" href="https://github.com/gngsn">
                <div className="__github"></div>
            </a>
            <a></a>
        </div>
    )
}

export default FloatIcon;