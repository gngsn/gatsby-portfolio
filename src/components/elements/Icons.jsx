import React from 'react';

const CustomIcon = React.memo(({   name, width = 60, height = 60, fontSize, style = {} }) => {
    // const styles = { width, height, verticalAlign: 'middle' }
    const styles = { ...style, width, height, verticalAlign: 'middle' }

    if (name === 'spring') {
        return (
            <img style={styles} src="/svg/spring.svg" alt="spring" />
        );
    } else if (name === 'node') {
        return (
            <img style={styles} src="/svg/nodejs.svg" alt="node" />
        );
    } else if (name === 'php') {
        return (
            <img style={styles} src="/svg/php.svg" alt="php" />
        );
    } else if (name === 'nextjs') {
        return (
            <img style={styles} className="ch" src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png" alt="mysql" />
        );
    } else if (name === 'aws') {
        return (
            <img style={styles} src="/svg/aws.svg" alt="aws" />
        );
    } else if (name === 'docker') {
        return (
            <img style={styles} src="/svg/docker.svg" alt="docker" />
        );
    } else if (name === 'mysql') {
        return (
            <img style={styles} src="/svg/mysql.svg" alt="mysql" />
        );
    } else if (name === 'mariadb') {
        return (
            <img style={styles} src="/svg/mariadb.svg" alt="mariadb" />
        );
    }
    else if (name === 'mongodb') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/mongodb.png" alt="mongodb" />
        );
    }
    else if (name === 'nginx') {
        return (
            <img style={styles} src="/svg/nginx.svg" alt="nginx" />
        );
    }
    else if (name === 'linux') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/linux.png" alt="linux" />
        );
    }
    else if (name === 'git') {
        return (
            <img style={styles} src="/svg/git.svg" alt="git" />
        );
    }
    else if (name === 'github') {
        return (
            <img style={styles} src="/svg/github.svg" alt="github" />
        );
    } else if (name === 'express') {
        return (
            <h4 style={{...styles, fontSize: `${fontSize}rem`}} >Express</h4>
        );
    } else if (name === 'xcode') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/xcode.png" alt="xcode" />
        );
    } else if (name === 'ios') {
        return (
            <img style={styles} className="ch" src="https://img.icons8.com/ios-filled/100/000000/ios-logo.png" alt="ios" />
        );
    } else if (name === 'swift') {
        return (
            <img style={styles} src="https://img.icons8.com/fluent/96/000000/swift.png" alt="swift" />
        );
    } else if (name === 'angular') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/angularjs.png" alt="angular" />
        );
    } else if (name === 'react') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/react-native.png" alt="react" />
        );
    } 
    else if (name === 'unity') {
        return (
            <img style={styles} className="ch" src="https://img.icons8.com/ios-filled/100/000000/unity.png" alt="unity" />
        );
    }
    else if (name === 'illustrator') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/adobe-illustrator.png" alt="illustrator" />
        );
    }
    else if (name === 'photoshop') {
        return (
            <img style={styles} src="https://img.icons8.com/fluent/96/000000/adobe-photoshop.png" alt="photoshop" />
        );
    }
    else if (name === 'xd') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/adobe-xd.png" alt="xd" />
        );
    }
    else if (name === 'after-effects') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/adobe-after-effects.png" alt="after-effects" />
        );
    }
    else if (name === '3ds-max') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/autodesk-3ds-max.png" alt="3ds-max" />
        );
    }
    else if (name === 'vscode') {
        return (
            <img src="https://img.icons8.com/fluent/96/000000/visual-studio-code-2019.png" alt="vscode" />
        );
    }
}
);

export default CustomIcon;