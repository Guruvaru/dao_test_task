import React, { useState } from "react";
import { Radio } from "../Radio";
import { Button } from "../Button";
import {
  CardContainer,
  CardFooter,
  CardListHead,
  CardListItem,
  CardListItemRight,
  CardFooterText,
} from "./styles";
import { IconBase, CartIcon } from "../Icons";

interface ICardPricesItem {
  value: string;
  label?: string;
  text: string;
}

interface ICardProps {
  onSubmit: (value: ICardPricesItem) => void;
  priceList: ICardPricesItem[];
}

export const Card: React.FC<ICardProps> = ({ onSubmit, priceList }) => {
  const [selected, setSelected] = useState(priceList[0]);
  return (
    <CardContainer>
      <ul>
        <CardListHead>
          <p>Тип</p>
          <p>Ціна</p>
        </CardListHead>

        {priceList.map((a, i) => (
          <CardListItem>
            <Radio
              key={i}
              value={a}
              label={a.label ? a.label : a.value}
              selected={selected}
              onChange={() => setSelected(a)}
            />
            <CardListItemRight selected={selected === a}>
              {a.text}
            </CardListItemRight>
          </CardListItem>
        ))}
      </ul>
      <CardFooter>
        <CardFooterText> {selected.text} </CardFooterText>
        <Button onClick={() => onSubmit(selected)}>
          <IconBase margin="0 8px 0 0" width="24px" height="24px">
            <CartIcon />
          </IconBase>
          До кошика
        </Button>
      </CardFooter>
    </CardContainer>
  );
};
