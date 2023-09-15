import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import Row from 'react-bootstrap/Row';
import ToppingOption from './ToppingOption';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  //optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        // 에러 처리
      });
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionsItems = items.map((item) => <ItemComponent key={item.name} name={item.name} i magePath={item.imagePath} />);

  return <Row>{optionsItems}</Row>;
}
