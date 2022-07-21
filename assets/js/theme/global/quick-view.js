import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import ProductDetails from '../common/product-details';
import { defaultModal } from './dropdown';
import 'slick-carousel';

export default function (context) {
    const modal = defaultModal();
    
    $('body').on('click', '.quickview', (event) => {
        event.preventDefault();

        const productId = $(event.currentTarget).data('product-id');
        const parentPos = $(`#${productId}`)[0]
        const modal1 = $('.modal-background')
        const bodyRect = document.body.getBoundingClientRect()
        const offset = parentPos.getBoundingClientRect().bottom - bodyRect.top
        const offset1 = parentPos.getBoundingClientRect().left - bodyRect.left

        modal.open({ size: 'small', pos: offset, pos1: offset1 });
        
        utils.api.product.getById(productId, { template: 'products/quick-view' }, (err, response) => {
            modal.updateContent(response);

            modal.$content.find('.productView').addClass('productView--quickView');

            modal.$content.find('[data-slick]').slick();

            return new ProductDetails(modal.$content.find('.quickView'), context);
        });
    });

}
