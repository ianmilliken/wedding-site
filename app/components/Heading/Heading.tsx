import styles from './Heading.module.css'

interface HeadingProps {
    value: string
    level: 1 | 2 | 3 | 4 | 5 | 6;
    align?: 'left' | 'center'
}

export function Heading({ value, level, align = 'left' }: HeadingProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`${styles.h} ${align === 'center' ? styles.center : ''}`} data-text={value}>{value}</Tag>
    )
}