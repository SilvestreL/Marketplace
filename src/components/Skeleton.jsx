// SkeletonProductList.js
import React from 'react';
import styles from './Skeleton.module.css';

const SkeletonProductList = () => {
  return (
    <div className={styles.skeletonList}>
      {Array(5).fill(0).map((_, index) => (
        <div key={index} className={styles.skeletonItem}>
          <div className={styles.skeletonAvatar}></div>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonText}></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonProductList;
