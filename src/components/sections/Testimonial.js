import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'Ekibimiz içinden',
    paragraph: 'EşitCV projesi hakkında düşüncelerimiz',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Web platformumuz ile engelli bireylerin pozisyon bazlı ve
                    erişilebilir eğitimler vererek iş hayatına hazır hale
                    getirmek. İşverenlere de engelli bireyleri hangi pozisyona
                    yerleştireceğini aktaran ve engelliler ile ilgili
                    farkındalık eğitimleri sunmayı amaçlayan bir platformdur..
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Emre CIRIK
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Proje Yöneticisi </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Web platformumuz ile engelli bireylerin pozisyon bazlı ve
                    erişilebilir eğitimler vererek iş hayatına hazır hale
                    getirmek. İşverenlere de engelli bireyleri hangi pozisyona
                    yerleştireceğini aktaran ve engelliler ile ilgili
                    farkındalık eğitimleri sunmayı amaçlayan bir platformdur.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Yiğithan GÖKDAĞ
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Platin Oto</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Web platformumuz ile engelli bireylerin pozisyon bazlı ve
                    erişilebilir eğitimler vererek iş hayatına hazır hale
                    getirmek. İşverenlere de engelli bireyleri hangi pozisyona
                    yerleştireceğini aktaran ve engelliler ile ilgili
                    farkındalık eğitimleri sunmayı amaçlayan bir platformdur.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Proje Yöneticisi
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Eren ÖZ</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonial.propTypes = propTypes
Testimonial.defaultProps = defaultProps

export default Testimonial
