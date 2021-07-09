import { environment } from '../environments/environment';

export const APP_SETTINGS = {
  //aquin
  endpoints: {
    api_url: 'http://localhost:4200',
    api_local: `${document.getElementsByTagName('base')[0].href}`,
    image_url: '',
    thumbnail_extension: '',
    WhatsApp: '',
    image_service: environment.production ?
    `${document.getElementsByTagName('base')[0].href}/server.php` : 'http://localhost:30011/?XDEBUG_SESSION_START=3F24F722',
    image_upload_service: `${document.getElementsByTagName('base')[0].href}/uploader/img-uploader.php`,
    image_get_service: `${document.getElementsByTagName('base')[0].href}/img-reader.php`,
    enableLocalService: false,
    enableSSLLocal: false,
  },
  formats: {
    currencyCode: 'USD',
    digitsInfo: '1.2-2',
    dateFormat: 'yyyy-MM-dd',
  },
  features: {
    enableLandingPage: false,
    disableLogin: false,
    enableRRHHModule: true,
    enableSalesModule: true,
    enablePurchaseModule: true,
    enableCommerceModule: true,
    enablePayment: true,
  },
  defaultCredentials: {
    defaultCustomer: 'default',
    defaultPassword: '147852369'
  },
  setups: {
    inventory: {
      checkStock: true,
      customerShowStock: true,
      showProductCode: true,
      showPrice: true,
      showPrice2: false,
      allowCreate: false,
      updateImageOnly: true,
      enableModelFilter: true,
      enableCategoryFilter: true,
      enableSubcategoryFilter: true,
      enableBrandFilter: false,
      enableTopPagination: false
    },
    cart: {
      order: 1,
      showDetail: 0,
      priceName: 'Precio de Venta',
      price2Name: 'Descuento en efectivo',
      enablePaymentCheck: true,//false,
      enablePaymentCredit: true,
      enablePaymentCash: true,
      enablePaymentRetention: true,//false,
      enablePaymentCreditcard: true,//false,
    },
    landingPage: {
      components: [
        
      ]
    }
  }
}
