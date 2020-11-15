import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ContainerCard, Card, Header, SliderContent, Footer } from './components';
import { marksTotalAmount, marksFeeds, marksFeedsMobile, marksTotalAmountMobile } from './utils/marks';
import { formatMoney } from './utils/formatMoney';
import styles from './App.module.scss';

function App() {
  const [showTotalSelected, setShowTotalSelected] = useState(5000);
  const [showFeeds, setShowFeeds] = useState(3);

  const onChangeTotalSelected = (value) => {
    setShowTotalSelected(value);
  };
  const onChangeFeeds = (value) => {
    setShowFeeds(value);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const fee = showTotalSelected / showFeeds;

  return (
    <ContainerCard>
      <Card>
        <div className={styles.content}>
          <Header label="Simulá tu crédito" />
          <SliderContent
            title="MONTO TOTAL"
            amountSelected={formatMoney(showTotalSelected)}
            onChange={onChangeTotalSelected}
            min={5000}
            max={50000}
            marks={isMobile ? marksTotalAmountMobile : marksTotalAmount}
          />
          <SliderContent
            title="PLAZO"
            amountSelected={showFeeds}
            onChange={onChangeFeeds}
            min={3}
            max={24}
            marks={isMobile ? marksFeedsMobile : marksFeeds}
          />
          <Footer label="CUOTA FIJA POR MES" amount={formatMoney(fee)} signature="Omar Díaz" />
        </div>
      </Card>
    </ContainerCard>
  );
}
export default App;
