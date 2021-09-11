import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxSectionProps } from 'types/api'

type PricingBoxProps = {
  pricingBox?: PricingBoxSectionProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ pricingBox }: PricingBoxProps) => {
  console.log(pricingBox)
  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>R${pricingBox.totalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>
          <span>{pricingBox.installments}x de</span> R$
          {pricingBox.installmentPrice}
        </S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList dangerouslySetInnerHTML={{ __html: pricingBox.benefits }}>
        {/* <S.BenefitsItem>
        Acesso aos <strong>6 módulos</strong>
      </S.BenefitsItem>

      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Contato <strong>direto</strong> com os instrutores via Slack
      </S.BenefitsItem>

      <S.BenefitsItem>
        <strong>Lives exclusivas</strong> durante o curso
      </S.BenefitsItem> */}
      </S.BenefitsList>

      <Button href={pricingBox.button.url} onClick={onClick} withPrice>
        <p>{pricingBox.button.label}</p>
        <div>
          <S.ButtonFullPrice>R${pricingBox.totalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>
            R${pricingBox.installments * pricingBox.installmentPrice}
          </S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  )
}

export default PricingBox
