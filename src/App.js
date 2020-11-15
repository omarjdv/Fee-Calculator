import React, { useState } from 'react';

import { ContainerCard, Card, Header, SliderContent, Footer } from './components';
import { marksTotalAmount, marksFeeds } from './utils/marks';
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
            marks={marksTotalAmount}
          />
          <SliderContent
            title="PLAZO"
            amountSelected={showFeeds}
            onChange={onChangeFeeds}
            min={3}
            max={24}
            marks={marksFeeds}
          />
          <Footer label="CUOTA FIJA POR MES" amount={formatMoney(fee)} />
        </div>
      </Card>
    </ContainerCard>
  );
}
export default App;
