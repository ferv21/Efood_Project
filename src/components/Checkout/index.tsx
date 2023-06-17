import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useEffect, useState } from 'react'
import { closeOrderOpen, open, clear, close } from '../../store/reducers/cart'
import * as S from './styles'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../MenuList'
import { Overlay } from '../Cart/styles'

const Checkout = () => {
  const { isOrderOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [continuarPagamento, setContinuarPagamento] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Nome inválido')
        .required('Nome obrigatório'),
      adress: Yup.string()
        .min(10, 'Endereço inválido')
        .required('Endereço obrigatório'),
      city: Yup.string()
        .min(5, 'Endereço inválido')
        .required('Endereço obrigatório'),
      zipCode: Yup.string()
        .min(9, 'Cep inválido')
        .max(9, 'Cep inválido')
        .required('Cep obrigatório'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('Numero obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            complement: values.complement,
            number: Number(values.number)
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const addToCart = () => {
    dispatch(open())
    dispatch(closeOrderOpen())
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToHome = () => {
    navigate('/')
  }

  const pagamento = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setContinuarPagamento(true)
      }
    })
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      dispatch(closeOrderOpen())
      dispatch(close())
    }
  }, [isSuccess, dispatch])

  return (
    <>
      {isSuccess && data ? (
        <S.MessageContainer>
          <Overlay onClick={goToHome} />
          <S.SuccessMessage>
            <h4>Pedido realizado - {data.orderId}</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.Buttons>
              <button onClick={goToHome}>Concluir</button>
            </S.Buttons>
          </S.SuccessMessage>
        </S.MessageContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.OrderContainer className={isOrderOpen ? 'is-open' : ''}>
            <Overlay />
            <S.FormBar>
              <p>Entrega</p>
              <S.InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={form.handleChange}
                  value={form.values.fullName}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="adress">Endereço</label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  onChange={form.handleChange}
                  value={form.values.adress}
                  className={checkInputHasError('adress') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={form.handleChange}
                  value={form.values.city}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputNumbers>
                <div>
                  <label htmlFor="zipCode">Cep</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    onChange={form.handleChange}
                    value={form.values.zipCode}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-999"
                  />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    onChange={form.handleChange}
                    value={form.values.number}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </div>
              </S.InputNumbers>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  onChange={form.handleChange}
                  value={form.values.complement}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.ButtonPayment>
                <p onClick={pagamento}>Continuar com o pagamento</p>
                <p onClick={addToCart}>Voltar para o carrinho</p>
              </S.ButtonPayment>
            </S.FormBar>
          </S.OrderContainer>
          {continuarPagamento ? (
            <S.OrderConfirm>
              <S.FormBar>
                <p>
                  Pagamento - Valor a pagar{' '}
                  <span>{parseToBrl(getTotalPrice())}</span>
                </p>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome do cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    onChange={form.handleChange}
                    value={form.values.cardOwner}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputNumbers style={{ gridTemplateColumns: '220px auto' }}>
                  <div>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      onChange={form.handleChange}
                      value={form.values.cardNumber}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      onChange={form.handleChange}
                      value={form.values.cardCode}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </div>
                </S.InputNumbers>
                <S.InputNumbers>
                  <div>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      onChange={form.handleChange}
                      value={form.values.expiresMonth}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </div>
                  <div>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      onChange={form.handleChange}
                      value={form.values.expiresYear}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="9999"
                    />
                  </div>
                </S.InputNumbers>
                <S.Buttons>
                  <button type="submit">Finalizar pagamento</button>
                  <button onClick={() => setContinuarPagamento(false)}>
                    Voltar para a edição de endereço
                  </button>
                </S.Buttons>
              </S.FormBar>
            </S.OrderConfirm>
          ) : (
            <></>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
