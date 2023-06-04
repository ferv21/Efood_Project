import { useDispatch, useSelector } from 'react-redux'
import { Overlay } from '../Cart/styles'
import { closeOrderOpen, open, orderOpen } from '../../store/reducers/cart'
import {
  Buttons,
  FormBar,
  InputGroup,
  InputNumbers,
  OrderConfirm,
  OrderContainer
} from './styles'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const { isOrderOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [continuarPagamento, setContinuarPagamento] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',

      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: {
      fullName: Yup.string()
        .min(5, 'Nome inválido')
        .required('Nome obrigatório'),
      adress: Yup.string()
        .min(10, 'Endereço inválido')
        .required('Endereço obrigatório')
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const addToCart = () => {
    dispatch(open())
    dispatch(closeOrderOpen())
  }

  const pagamento = () => {
    setContinuarPagamento(true)
  }

  console.log(form)

  return (
    <form onSubmit={form.handleSubmit}>
      <OrderContainer className={isOrderOpen ? 'is-open' : ''}>
        <FormBar>
          <p>Entrega</p>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={form.handleChange}
              value={form.values.fullName}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input
              type="text"
              id="adress"
              name="adress"
              onChange={form.handleChange}
              value={form.values.adress}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={form.handleChange}
              value={form.values.city}
            />
          </InputGroup>
          <InputNumbers>
            <div>
              <label htmlFor="zipCode">Cep</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                onChange={form.handleChange}
                value={form.values.zipCode}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                name="number"
                onChange={form.handleChange}
                value={form.values.number}
              />
            </div>
          </InputNumbers>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              onChange={form.handleChange}
              value={form.values.complement}
            />
          </InputGroup>
          <Buttons>
            <button onClick={pagamento}>Continuar com o pagamento</button>
            <button onClick={addToCart}>Voltar para o carrinho</button>
          </Buttons>
        </FormBar>
      </OrderContainer>
      {continuarPagamento ? (
        <OrderConfirm>
          <FormBar>
            <p>
              Pagamento - Valor a pagar <span>R$ 190,90</span>
            </p>
            <InputGroup>
              <label htmlFor="cardOwner">Nome do cartão</label>
              <input
                type="text"
                id="cardOwner"
                name="cardOwner"
                onChange={form.handleChange}
                value={form.values.cardOwner}
              />
            </InputGroup>
            <InputNumbers style={{ gridTemplateColumns: '220px auto' }}>
              <div>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  onChange={form.handleChange}
                  value={form.values.cardNumber}
                />
              </div>
              <div>
                <label htmlFor="cardCode">CVV</label>
                <input
                  type="number"
                  id="cardCode"
                  name="cardCode"
                  onChange={form.handleChange}
                  value={form.values.cardCode}
                />
              </div>
            </InputNumbers>
            <InputNumbers>
              <div>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  type="number"
                  id="expiresMonth"
                  name="expiresMonth"
                  onChange={form.handleChange}
                  value={form.values.expiresMonth}
                />
              </div>
              <div>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  type="number"
                  id="expiresYear"
                  name="expiresYear"
                  onChange={form.handleChange}
                  value={form.values.expiresYear}
                />
              </div>
            </InputNumbers>
            <Buttons>
              <button type="submit">Finalizar pagamento</button>
              <button onClick={() => setContinuarPagamento(false)}>
                Voltar para a edição de endereço
              </button>
            </Buttons>
          </FormBar>
        </OrderConfirm>
      ) : (
        <></>
      )}
    </form>
  )
}

export default Checkout
