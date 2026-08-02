import Link from 'next/link';
import styles from './FeatureCard.module.css';

export type FeatureCardVariant = 'default' | 'accent-border';

export interface FeatureCardProps {
  /** The icon node to display at the top of the card */
  icon: React.ReactNode;
  /** Card heading */
  title: string;
  /** Body description */
  description: string;
  /**
   * Optional bullet-point list of items.
   * Only rendered for the "default" variant (homepage Services).
   */
  items?: string[];
  /**
   * Optional call-to-action link rendered at the bottom.
   * Only rendered for the "default" variant (homepage Services).
   */
  cta?: { label: string; href: string };
  /**
   * Visual variant:
   * - "default"        → rounded, teal-tinted icon badge, strong hover (homepage Services)
   * - "accent-border"  → left blue accent bar, blue-tinted icon badge, subtle hover (CAET pillars)
   * @default "default"
   */
  variant?: FeatureCardVariant;
  /** Extra class names applied to the outer card element */
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  items,
  cta,
  variant = 'default',
  className = '',
}: FeatureCardProps) {
  const isDefault = variant === 'default';

  const cardClass = [
    styles.card,
    isDefault ? styles.cardDefault : styles.cardAccentBorder,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconWrapperClass = [
    styles.iconWrapper,
    isDefault ? styles.iconWrapperDefault : styles.iconWrapperAccentBorder,
  ].join(' ');

  const titleClass = [
    styles.title,
    isDefault ? styles.titleDefault : styles.titleAccentBorder,
  ].join(' ');

  const descClass = [
    styles.description,
    isDefault ? styles.descriptionDefault : styles.descriptionAccentBorder,
  ].join(' ');

  return (
    <div className={cardClass}>
      <span className={iconWrapperClass}>{icon}</span>

      <strong className={titleClass}>{title}</strong>

      <p className={descClass}>{description}</p>

      {isDefault && items && items.length > 0 && (
        <ul className={styles.bulletList}>
          {items.map((item) => (
            <li key={item} className={styles.bulletItem}>
              <span className={styles.dot} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {isDefault && cta && (
        <Link href={cta.href} className={styles.cta}>
          {cta.label}
        </Link>
      )}
    </div>
  );
}
