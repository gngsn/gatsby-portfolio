import React from 'react';

const CustomIcon = React.memo(({   name, width = 60, height = 60, fontSize, style = {} }) => {
    // const styles = { width, height, verticalAlign: 'middle' }
    const styles = { ...style, width, height, verticalAlign: 'middle' }

    if (name === 'spring') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/spring-logo.png" alt="spring" />
        );
    } else if (name === 'node') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/nodejs.png" alt="node" />
        );
    } else if (name === 'php') {
        return (
            <img style={styles} src="https://img.icons8.com/officel/80/000000/php-logo.png" alt="php" />
        );
    } else if (name === 'nextjs') {
        return (
            <img style={styles} className="ch" src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png" alt="mysql" />
        );
    } else if (name === 'aws') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/amazon-web-services.png" alt="aws" />
        );
    } else if (name === 'mysql') {
        return (
            <img style={styles} className="ch" src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" alt="mysql" />
        );
    } else if (name === 'mariadb') {
        return (
            <img style={styles} src="https://mariadb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent-300x245.png.webp" alt="mariadb" />
        );
    }
    else if (name === 'mongodb') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/mongodb.png" alt="mongodb" />
        );
    }
    else if (name === 'nginx') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/nginx.png" alt="nginx" />
        );
    }
    else if (name === 'linux') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/linux.png" alt="linux" />
        );
    }
    else if (name === 'git') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/git.png" alt="git" />
        );
    }
    else if (name === 'github') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/github.png" alt="github" />
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