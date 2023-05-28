// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderNameText,
  CardholderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeCardNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{number}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{name.toUpperCase()}</CardholderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}
export default CreditCard
