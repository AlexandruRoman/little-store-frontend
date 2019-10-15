import React, { SFC } from 'react';
import './styles.scss';
import { Props } from './types';

const Element: SFC<Props> = (props) => {
    return (
        <div className="main-product-slider-wrapper swipers-couple-wrapper">
            <div className="swiper-container swiper-control-top">
                <div className="swiper-button-prev hidden"></div>
                <div className="swiper-button-next hidden"></div>
                <div className="swiper-wrapper">
                    {
                        props.images.map(x =>
                            <div className="swiper-slide">
                                <div className="swiper-lazy-preloader"></div>
                                <div className="product-big-preview-entry swiper-lazy" data-background={x}></div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="empty-space col-xs-b30 col-sm-b60"></div>

            <div className="swiper-container swiper-control-bottom" data-breakpoints="1" data-xs-slides="3" data-sm-slides="3" data-md-slides="4" data-lt-slides="4" data-slides-per-view="5" data-center="1" data-click="1">
                <div className="swiper-button-prev hidden"></div>
                <div className="swiper-button-next hidden"></div>
                <div className="swiper-wrapper">
                    {
                        props.images.map(x =>
                            <div className="swiper-slide">
                                <div className="product-small-preview-entry">
                                    <img src={x} alt="" />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Element