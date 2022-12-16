import { FC, ReactNode } from "react";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <div className={styles.header}>
        <img src="/images/headerIcons/logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.textLogo}>P.Sklad</div>
        <div className={styles.headerRight}>
          <img src="/images/headerIcons/iconSearch.svg" alt="IconSearch" className={styles.headerItem} />
          <img src="/images/headerIcons/iconProfile.svg" alt="IconProfile" className={styles.headerItem} />
        </div>
      </div>
      <div className={styles.locationBar}>
        <div className={styles.locationTitle}>Главная</div>
        <div className={styles.locationSubtitle}>Главная</div>
      </div>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuUpper}>
          <img src="/images/leftMenuIcons/iconCategories.svg" alt="IconCategories" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconMainPage.svg" alt="IconMainPage" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconReview.svg" alt="IconReview" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconItems.svg" alt="IconItems" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconDocument.svg" alt="IconDocument" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconStaff.svg" alt="IconStaff" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconMessages.svg" alt="IconMessages" className={styles.leftMenuItem} />
        </div>
        <div className={styles.leftMenuLower}>
          <img src="/images/leftMenuIcons/iconSetting.svg" alt="IconSetting" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconQ'n'A.svg" alt="IconQ'n'A" className={styles.leftMenuItem} />
          <img src="/images/leftMenuIcons/iconVersion.svg" alt="IconVersion" className={styles.leftMenuItem} />
        </div>

      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </>
  );
};

export default Layout;