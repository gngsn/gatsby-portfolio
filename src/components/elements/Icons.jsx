import React from 'react';

const CustomIcon = React.memo(({   name, width = 60, height = 60, fontSize, style = {} }) => {
    // const styles = { width, height, verticalAlign: 'middle' }
    const styles = { ...style, width, height, verticalAlign: 'middle' }

    if (name === 'spring') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/spring-logo.png" />
        );
    } else if (name === 'node') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/nodejs.png" />
        );
    } else if (name === 'php') {
        return (
            <img style={styles} src="https://img.icons8.com/officel/80/000000/php-logo.png" />
        );
    } else if (name === 'nextjs') {
        return (
            <img style={styles} className="ch" src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png" />
        );
    } else if (name === 'aws') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
        );
    } else if (name === 'mysql') {
        return (
            <img style={styles} className="ch" src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" />
        );
    } else if (name === 'mariadb') {
        return (
            <img style={styles} src="https://mariadb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent-300x245.png.webp" />
        );
    }
    else if (name === 'mongodb') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/mongodb.png" />
        );
    }
    else if (name === 'nginx') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/nginx.png" />
        );
    }
    else if (name === 'linux') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/linux.png" />
        );
    }
    else if (name === 'git') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/git.png" />
        );
    }
    else if (name === 'github') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/github.png" />
        );
    } else if (name === 'express') {
        return (
            <h4 style={{...styles, fontSize: `${fontSize}rem`}} >Express</h4>
        );
    } else if (name === 'xcode') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/xcode.png" />
        );
    } else if (name === 'ios') {
        return (
            <img style={styles} className="ch" src="https://img.icons8.com/ios-filled/100/000000/ios-logo.png" />
        );
    } else if (name === 'swift') {
        return (
            <img style={styles} src="https://img.icons8.com/fluent/96/000000/swift.png" />
        );
    } else if (name === 'angular') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/angularjs.png" />
        );
    } else if (name === 'react') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/react-native.png" />
        );
    } 
    else if (name === 'unity') {
        return (
            <img style={styles} className="ch" src="https://img.icons8.com/ios-filled/100/000000/unity.png" />
        );
    }
    else if (name === 'illustrator') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/adobe-illustrator.png" />
        );
    }
    else if (name === 'photoshop') {
        return (
            <img style={styles} src="https://img.icons8.com/fluent/96/000000/adobe-photoshop.png" />
        );
    }
    else if (name === 'xd') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/adobe-xd.png" />
        );
    }
    else if (name === 'after-effects') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/adobe-after-effects.png" />
        );
    }
    else if (name === '3ds-max') {
        return (
            <img style={styles} src="https://img.icons8.com/color/96/000000/autodesk-3ds-max.png" />
        );
    }
    else if (name === 'vscode') {
        return (
            <img src="https://img.icons8.com/fluent/96/000000/visual-studio-code-2019.png" />
        );
    }
}
);

export default CustomIcon;