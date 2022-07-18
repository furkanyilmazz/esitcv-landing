import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left',
  )

  const sectionHeader = {
    title: 'EşitCV nedir?',
    paragraph:
      'Engelliler için dijital insan kaynakları hizmeti sunuyor. Engellilerin iş hayatına katılmadan önce pozisyonlara göre eğitimler alıp kendilerini geliştirerek iş fırsatlarına erişmeyi, işe yerleşmeyi ve aynı zamanda işverenlere engelli bireyler ile ilgili eğitim ve işverenlere nitelikli engelli birey sağlıyor.',
  }

  return (
    <section {...props} className={outerClasses} id="nedir">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Vizyonumuz</h4>
                  <p className="m-0 text-sm">
                    Bireylerin tam bağımsız ekonomik güç kazanması için tüm
                    engelleri kaldırmak.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Misyonumuz</h4>
                  <p className="m-0 text-sm">
                    Biz eşitCV Takımı, engelli iş gücünün en doğru kariyeri
                    deneyimlemesi için tüm paydaşlar adına teknoloji ile en
                    verimli deneyimi yaratırız.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Değerlerimiz</h4>
                  <p className="m-0 text-sm">
                    Güven, İnovasyon, Sürekli Gelişim, Başarı, Kapsayıcılık
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesTiles.propTypes = propTypes
FeaturesTiles.defaultProps = defaultProps

export default FeaturesTiles
