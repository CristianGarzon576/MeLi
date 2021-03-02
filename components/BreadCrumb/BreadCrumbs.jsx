import styles from './BreadCrumbs.module.scss';

export const BreadCrumbs = ({breadCrumbs}) => {
  return (!!breadCrumbs && !!breadCrumbs.length &&
    <div className={styles.breadCrumbs}>
      <div className={styles.breadCrumbsWrapper}>
        {!!breadCrumbs && !!breadCrumbs.length && breadCrumbs.map((breadCrumb, index) => {
          const isLastItem = index !== breadCrumbs.length - 1;
          return !!isLastItem ? 
            (<div key={index}>
              <span>{breadCrumb}</span>
              <span> - </span>
            </div>) : 
            (<div key={index}>
              <b>{breadCrumb}</b>
            </div>);
        })}
      </div>
    </div>
  )
};

export default BreadCrumbs;