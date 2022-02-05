import React from 'react';

const ContactBar = () => {

    const copyMail = () => {
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
        <div>
            <div id="icon_mail" className="__mail" onClick={copyMail}></div>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pppppppppark">
                <div className="__insta"></div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/%EA%B2%BD%EC%84%A0-%EB%B0%95-4b95961b2/">
                <div className="__linkedin"></div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/gngsn">
                <div className="__github"></div>
            </a>
            <a></a>
        </div>
    )
}

export default ContactBar;