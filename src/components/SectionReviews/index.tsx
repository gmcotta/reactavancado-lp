import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'
import { ReviewsSectionProps } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

type SectionReviewsProps = {
  reviewsSection: ReviewsSectionProps
}

const SectionReviews = ({ reviewsSection }: SectionReviewsProps) => (
  <Container>
    <Heading reverseColor>{reviewsSection.title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviewsSection.reviews.map(({ name, avatar, review }, index) => (
          <ReviewCard
            key={index}
            name={name}
            image={avatar.url}
            description={review}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
