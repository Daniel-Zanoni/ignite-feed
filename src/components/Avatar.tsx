import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {

    return (
        <img 
            src={src} 
            alt={alt}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        />
    );
}