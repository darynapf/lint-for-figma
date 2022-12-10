import React from 'react';
import styles from './ui.module.scss';

import Footer from './components/Footer/Footer';
import Switcher from './components/Switcher/Switcher';

const UI = ({}) => {
  // const textbox = React.useRef(undefined);

  // const countRef = React.useCallback((element) => {
  //   if (element) element.value = '5';
  //   textbox.current = element;
  // }, []);

  // const onCreate = () => {
  //   const count = parseInt(textbox.current.value, 10);
  //   parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  // };

  // const onCancel = () => {
  //   parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  // };

  const onClick = () => {
    console.log('hello');
  };

  const onScan = () => {
    console.log('scan');
  };

  // React.useEffect(() => {
  //   // This is how we read messages sent from the plugin controller
  //   window.onmessage = (event) => {
  //     const { type, message } = event.data.pluginMessage;
  //     if (type === 'create-rectangles') {
  //       console.log(`Figma Says: ${message}`);
  //     }
  //   };
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Switcher name="test" />
      </div>
      <div className={styles.footer}>
        <Footer
          tertiaryClick={onClick}
          tertiaryName="Settings"
          secondaryClick={onScan}
          secondaryName="Scan"
          primaryClick={onClick}
          primaryName="Fix it"
        />
      </div>
    </div>
  );
};

export default UI;
