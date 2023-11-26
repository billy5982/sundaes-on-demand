import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import Row from 'react-bootstrap/Row';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  //optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        // 에러 처리
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner message={error} variant={error} />;
  }
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionsItems = items.map((item) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />);

  return <Row>{optionsItems}</Row>;
}
