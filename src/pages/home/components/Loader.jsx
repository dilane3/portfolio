import { useEffect, useState } from 'react';
import styles from '../styles/loader.module.css';

const logoWithoutBorder = require("../../../assets/images/logo-without-border.png")
const logoBorder = require("../../../assets/images/logo-border.png")

export const LoaderPage = ({ show }) => {
  const [maskLoader, setMaskLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMaskLoader(true);
    }, [800])

    return () => {
      clearTimeout(timer);
    }
  }, [show])

  return (
    <div
      className={`
        ${styles.loaderContainer} 
        ${!show ? styles.loaderHidden : ""}
      `}
      style={maskLoader ? { zIndex: -10, display: "none"} : {}}
    >
      <div
        className={styles.logo}
      >
        <img alt="logo" src={logoBorder} width={100} height={100} className={styles.logoBorder} />
        <img alt="logo" src={logoWithoutBorder} width={100} height={100} />
      </div>
    </div>
  )
}