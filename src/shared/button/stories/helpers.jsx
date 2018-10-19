import styles from './component.scss';
import Button from '../component';

const requiredProps = {
    onClick: () => {}
};

export const getButtonAsset = kind => (
    <div>
        <h4 className="story-title">{kind}</h4>
        <div className={styles.set}>
            <h4>Small</h4>
            <div className={styles.row}>
                <Button kind={kind} size="small" disabled {...requiredProps}>disabled</Button>
                <Button kind={kind} size="small" icon="calendar" disabled {...requiredProps}>disabled</Button>
                <Button kind={kind} size="small" icon="calendar" disabled {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="small" {...requiredProps}>enabled</Button>
                <Button kind={kind} size="small" icon="calendar" {...requiredProps}>enabled</Button>
                <Button kind={kind} size="small" icon="calendar" {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="small" active {...requiredProps}>hover/active</Button>
                <Button kind={kind} size="small" icon="calendar" active {...requiredProps}>hover/active</Button>
                <Button kind={kind} size="small" icon="calendar" active {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="small" loading icon="calendar" {...requiredProps}>Loading</Button>
                <Button kind={kind} size="small" loading icon="calendar" {...requiredProps} />
            </div>
        </div>
        <div className={styles.set}>
            <h4>Medium</h4>
            <div className={styles.row}>
                <Button kind={kind} size="medium" disabled {...requiredProps}>disabled</Button>
                <Button kind={kind} size="medium" icon="calendar" disabled {...requiredProps}>disabled</Button>
                <Button kind={kind} size="medium" icon="calendar" disabled {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="medium" {...requiredProps}>enabled</Button>
                <Button kind={kind} size="medium" icon="calendar" {...requiredProps}>enabled</Button>
                <Button kind={kind} size="medium" icon="calendar" {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="medium" active {...requiredProps}>hover/active</Button>
                <Button kind={kind} size="medium" icon="calendar" active {...requiredProps}>hover/active</Button>
                <Button kind={kind} size="medium" icon="calendar" active {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="medium" loading icon="calendar" {...requiredProps}>Loading</Button>
                <Button kind={kind} size="medium" loading icon="calendar" {...requiredProps} />
            </div>
        </div>
        <div className={styles.set}>
            <h4>Large</h4>
            <div className={styles.row}>
                <Button kind={kind} size="large" disabled {...requiredProps}>disabled</Button>
                <Button kind={kind} size="large" icon="calendar" disabled {...requiredProps}>disabled</Button>
                <Button kind={kind} size="large" icon="calendar" disabled {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="large" {...requiredProps}>enabled</Button>
                <Button kind={kind} size="large" icon="calendar" {...requiredProps}>enabled</Button>
                <Button kind={kind} size="large" icon="calendar" {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="large" active {...requiredProps}>hover/active</Button>
                <Button kind={kind} size="large" icon="calendar" active {...requiredProps}>hover/active</Button>
                <Button kind={kind} size="large" icon="calendar" active {...requiredProps} />
            </div>
            <div className={styles.row}>
                <Button kind={kind} size="large" loading icon="calendar" {...requiredProps}>Loading</Button>
                <Button kind={kind} size="large" loading icon="calendar" {...requiredProps} />
            </div>
        </div>
    </div>
);
