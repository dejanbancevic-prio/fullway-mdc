// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace M2Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  /** List all vehicle makes, grouped by their first letter. */
  allVehicleMakes: Array<Maybe<MakeGroup>>;
  amOrderList?: Maybe<Array<Maybe<SortingOrder>>>;
  /** List of linked accounts */
  amSocialLoginAccountData?: Maybe<Array<Maybe<AmLinkedSocialAccounts>>>;
  /** Button configuration */
  amSocialLoginButtonConfig?: Maybe<Array<Maybe<AmSocialLoginButton>>>;
  amfeaturedWidget?: Maybe<Array<Maybe<ProductData>>>;
  /** Retrieve EAV attributes associated to a frontend form. Use countries query provided by DirectoryGraphQl module to retrieve region_id and country_id attribute options. */
  attributesForm: AttributesFormOutput;
  /** Returns a list of attributes metadata for a given entity type. */
  attributesList?: Maybe<AttributesMetadataOutput>;
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  /** The query returns information about Blog Authors */
  awBlogAuthors?: Maybe<AwBlogAuthors>;
  /** The query returns information about Blog Categories */
  awBlogCategories?: Maybe<AwBlogCategories>;
  /** The query returns information about Blog Config */
  awBlogConfig?: Maybe<AwBlogConfig>;
  /** The query returns information about Blog Comments */
  awBlogPostComments?: Maybe<Array<Maybe<AwBlogPostComment>>>;
  /** The query returns information about Blog Reply Comments */
  awBlogPostReplyComments?: Maybe<Array<Maybe<AwBlogPostComment>>>;
  /** The query returns information about Blog Post with list of related posts */
  awBlogPostWithRelatedPosts?: Maybe<AwBlogPost>;
  /** The query returns information about Blog Posts */
  awBlogPosts?: Maybe<AwBlogPosts>;
  /** The query returns information about Blog Tags */
  awBlogTags?: Maybe<AwBlogTags>;
  /** The query returns information about Blog Tags Cloud */
  awBlogTagsCloud?: Maybe<AwBlogTagsCloud>;
  /** Return information about the specified shopping cart. */
  cart?: Maybe<Cart>;
  /** Return a list of categories that match the specified filter. */
  categories?: Maybe<CategoryResult>;
  /**
   * Search for categories that match the criteria specified in the `search` and `filter` attributes.
   * @deprecated Use `categories` instead.
   */
  category?: Maybe<CategoryTree>;
  /**
   * Return an array of categories based on the specified filters.
   * @deprecated Use `categories` instead.
   */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** Return Terms and Conditions configuration information. */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  checkoutSessionConfig?: Maybe<CheckoutSessionConfigOutput>;
  /** @deprecated Use checkoutSessionDetailsV2 for a more conventional GraphQL response format */
  checkoutSessionDetails?: Maybe<CheckoutSessionDetailsOutput>;
  checkoutSessionDetailsV2?: Maybe<CheckoutSessionDetailsOutputV2>;
  checkoutSessionSignIn?: Maybe<CheckoutSessionSignInOutput>;
  /** Return information about CMS blocks. */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** Return details about a CMS page. */
  cmsPage?: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list. */
  compareList?: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** Return information about the store's currency. */
  currency?: Maybe<Currency>;
  /**
   * Return the attribute type, given an attribute code and entity type.
   * @deprecated Use `customAttributeMetadataV2` query instead.
   */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** Retrieve EAV attributes metadata. */
  customAttributeMetadataV2: AttributesMetadataOutput;
  /** Return detailed information about a customer account. */
  customer?: Maybe<Customer>;
  /** Return information about the customer's shopping cart. */
  customerCart: Cart;
  /** Return a list of downloadable products the customer has purchased. */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use the `customer` query instead. */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens stored in the vault. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  defaultSorting?: Maybe<Array<Maybe<SortingOrder>>>;
  /** Get FAQ Module Settings. */
  getAmFaqSettings?: Maybe<AmFaqSettings>;
  getComplementaryTireSizes?: Maybe<ComplementaryTireSizes>;
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  /** Retrieves the payment configuration for a given location */
  getPaymentConfig?: Maybe<PaymentConfigOutput>;
  /** Retrieves the payment details for the order */
  getPaymentOrder?: Maybe<PaymentOrderOutput>;
  /** Gets the payment SDK urls and values */
  getPaymentSDK?: Maybe<GetPaymentSDKOutput>;
  getTireSize?: Maybe<TireSize>;
  /** Retrieves the vault configuration */
  getVaultConfig?: Maybe<VaultConfigOutput>;
  /** Retrieve guest order details based on number, email and postcode. */
  guestOrder: CustomerOrder;
  /** Retrieve guest order details based on token. */
  guestOrderByToken: CustomerOrder;
  /** Search for installers by ZIP code and type */
  installers?: Maybe<InstallersSearchResult>;
  /** Check whether the specified email has already been used to create a customer account. */
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Return the active ratings attributes and the values each rating can have. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products?: Maybe<Products>;
  /** Returns details about Google reCAPTCHA V3-Invisible configuration. */
  recaptchaV3Config?: Maybe<ReCaptchaConfigurationV3>;
  /** Return the full details for a specified product, category, or CMS page. */
  route?: Maybe<RoutableInterface>;
  /** Search all FAQ categories by keyword with filter and sortOrder. */
  searchAmFaqCategories?: Maybe<AmFaqCategoriesSearch>;
  /** Search all FAQ questions with filter and sortOrder. */
  searchAmFaqQuestions?: Maybe<AmFaqQuestionsSearch>;
  sizeCompatible?: Maybe<SizeCompatibility>;
  specials?: Maybe<Specials>;
  /** Return details about the store's configuration. */
  storeConfig?: Maybe<StoreConfig>;
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver?: Maybe<EntityUrl>;
  /** List all makes available for a given year. */
  vehicleMakes: Array<Maybe<MakeGroup>>;
  /** List all models for a specific year and make. */
  vehicleModels: Array<Maybe<Model>>;
  /** List all options for a specific year, make, and model. */
  vehicleOptions: Array<Maybe<Option>>;
  vehiclePages?: Maybe<VehiclePages>;
  /** List all available vehicle years, grouped by decade. */
  vehicleYears: Array<Maybe<VehicleYearGroup>>;
  /**
   * Return the contents of a customer's wish list.
   * @deprecated Moved under `Customer.wishlist`.
   */
  wishlist?: Maybe<WishlistOutput>;
};


export type QueryamfeaturedWidgetArgs = {
  sortBy: Scalars['String']['input'];
  amsortingSortOrder: Scalars['String']['input'];
  productsCount: Scalars['Int']['input'];
  conditions: Scalars['String']['input'];
  showPager?: InputMaybe<Scalars['Boolean']['input']>;
  productsPerPage?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryattributesFormArgs = {
  formCode: Scalars['String']['input'];
};


export type QueryattributesListArgs = {
  entityType: AttributeEntityTypeEnum;
  filters?: InputMaybe<AttributeFilterInput>;
};


export type QueryavailableStoresArgs = {
  useCurrentGroup?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryawBlogAuthorsArgs = {
  filter?: InputMaybe<AwBlogAuthorFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AwBlogAuthorSortInput>;
};


export type QueryawBlogCategoriesArgs = {
  filter?: InputMaybe<AwBlogCategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AwBlogCategorySortInput>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryawBlogConfigArgs = {
  storeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryawBlogPostCommentsArgs = {
  postId: Scalars['Int']['input'];
  storeId: Scalars['Int']['input'];
  rootCommentPageSize?: InputMaybe<Scalars['Int']['input']>;
  replyCommentPageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AwBlogPostCommentSortInput>;
};


export type QueryawBlogPostReplyCommentsArgs = {
  rootCommentId: Scalars['Int']['input'];
  postId: Scalars['Int']['input'];
  storeId?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AwBlogPostCommentSortInput>;
};


export type QueryawBlogPostWithRelatedPostsArgs = {
  postId?: InputMaybe<Scalars['Int']['input']>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryawBlogPostsArgs = {
  filter?: InputMaybe<AwBlogPostFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AwBlogPostSortInput>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryawBlogTagsArgs = {
  filter?: InputMaybe<AwBlogTagFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AwBlogTagSortInput>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryawBlogTagsCloudArgs = {
  filter?: InputMaybe<AwBlogTagCloudFilterInput>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AwBlogTagCloudSortInput>;
};


export type QuerycartArgs = {
  cart_id: Scalars['String']['input'];
};


export type QuerycategoriesArgs = {
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycategoryListArgs = {
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycheckoutSessionConfigArgs = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  omitPayloads?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerycheckoutSessionDetailsArgs = {
  amazonSessionId: Scalars['String']['input'];
  queryTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QuerycheckoutSessionDetailsV2Args = {
  amazonSessionId: Scalars['String']['input'];
};


export type QuerycheckoutSessionSignInArgs = {
  buyerToken: Scalars['String']['input'];
};


export type QuerycmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerycmsPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type QuerycountryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QuerycustomAttributeMetadataV2Args = {
  attributes?: InputMaybe<Array<AttributeInput>>;
};


export type QuerydefaultSortingArgs = {
  pageType: PageTypeEnum;
};


export type QuerygetComplementaryTireSizesArgs = {
  input?: InputMaybe<ComplementaryTireSizeAttributes>;
};


export type QuerygetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QuerygetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QuerygetPaymentConfigArgs = {
  location: PaymentLocation;
};


export type QuerygetPaymentOrderArgs = {
  cartId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QuerygetPaymentSDKArgs = {
  location: PaymentLocation;
};


export type QuerygetTireSizeArgs = {
  input?: InputMaybe<TireSizeAttributes>;
};


export type QueryguestOrderArgs = {
  input: OrderInformationInput;
};


export type QueryguestOrderByTokenArgs = {
  input: OrderTokenInput;
};


export type QueryinstallersArgs = {
  input: InstallersInput;
};


export type QueryisEmailAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QuerypickupLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  sort?: InputMaybe<PickupLocationSortInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  productsInfo?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
};


export type QueryproductsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryrouteArgs = {
  url: Scalars['String']['input'];
};


export type QuerysearchAmFaqCategoriesArgs = {
  filter?: InputMaybe<AmFaqCategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AmFaqCategorySortInput>;
};


export type QuerysearchAmFaqQuestionsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AmFaqQuestionFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AmFaqQuestionSortInput>;
};


export type QuerysizeCompatibleArgs = {
  chassis_id: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};


export type QueryurlResolverArgs = {
  url: Scalars['String']['input'];
};


export type QueryvehicleMakesArgs = {
  year: Scalars['String']['input'];
};


export type QueryvehicleModelsArgs = {
  year: Scalars['String']['input'];
  make: Scalars['String']['input'];
};


export type QueryvehicleOptionsArgs = {
  year: Scalars['String']['input'];
  make: Scalars['String']['input'];
  model: Scalars['String']['input'];
};


export type QueryvehiclePagesArgs = {
  url_key?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. */
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add any type of product to the cart. */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list. */
  addProductsToCompareList?: Maybe<CompareList>;
  /** Add one or more products to the specified wish list. This mutation supports all product types. */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. */
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. */
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart. */
  addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>;
  /** Link account */
  amSocialLoginLinkAccount?: Maybe<AmUnlinkData>;
  /** Unlink account */
  amSocialLoginUnlinkAccount?: Maybe<AmUnlinkData>;
  /** Apply a pre-defined coupon code to the specified cart. */
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Assign the specified compare list to the logged in customer. */
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
  /** Assign a logged-in customer to the specified guest shopping cart. */
  assignCustomerToGuestCart: Cart;
  awBlogAddCommentToPost?: Maybe<AwBlogPostComment>;
  /** Cancel the specified customer order. */
  cancelOrder?: Maybe<CancelOrderOutput>;
  /** Change the password for the logged-in customer. */
  changeCustomerPassword?: Maybe<Customer>;
  /** Complete Checkout Session */
  completeCheckoutSession?: Maybe<CompleteCheckoutSessionOutput>;
  /** Confirms the email address for a customer. */
  confirmEmail?: Maybe<CustomerOutput>;
  /** Send a 'Contact Us' email to the merchant. */
  contactUs?: Maybe<ContactUsOutput>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String']['output'];
  /** Creates Client Token for Braintree PayPal Javascript SDK initialization. */
  createBraintreePayPalClientToken: Scalars['String']['output'];
  /** Creates Client Token for Braintree PayPal Vault Javascript SDK initialization. */
  createBraintreePayPalVaultClientToken: Scalars['String']['output'];
  /** Create a new compare list. The compare list is saved for logged in customers. */
  createCompareList?: Maybe<CompareList>;
  /** Use `createCustomerV2` instead. */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create a billing or shipping address for a customer or guest. */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create a customer account. */
  createCustomerV2?: Maybe<CustomerOutput>;
  /**
   * Create an empty shopping cart for a guest or logged in user
   * @deprecated Use `Mutation.createGuestCart` or `Query.customerCart` for logged in customer
   */
  createEmptyCart?: Maybe<Scalars['String']['output']>;
  /** Create a new shopping cart */
  createGuestCart?: Maybe<CreateGuestCartOutput>;
  /** Creates a Klarna Payments Session. */
  createKlarnaPaymentsSession?: Maybe<CreateKlarnaPaymentsSessionOutput>;
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /** Creates a payment order for further payment processing */
  createPaymentOrder?: Maybe<CreatePaymentOrderOutput>;
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Create a product review for the specified product. */
  createProductReview: CreateProductReviewOutput;
  /** Creates a vault payment token */
  createVaultCardPaymentToken?: Maybe<CreateVaultCardPaymentTokenOutput>;
  /** Creates a vault card setup token */
  createVaultCardSetupToken?: Maybe<CreateVaultCardSetupTokenOutput>;
  /** Delete the specified compare list. */
  deleteCompareList?: Maybe<DeleteCompareListOutput>;
  /** Delete customer account */
  deleteCustomer?: Maybe<Scalars['Boolean']['output']>;
  /** Delete the billing or shipping address of a customer. */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a customer's payment token. */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Estimate shipping method(s) for cart based on address */
  estimateShippingMethods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** Estimate totals for cart based on the address */
  estimateTotals: EstimateTotalsOutput;
  /** Generate a token for specified customer. */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. */
  mergeCarts: Cart;
  /** Place new FAQ Question. */
  placeAmFaqQuestion?: Maybe<AmFaqCommonOutput>;
  /** Convert the quote into an order. */
  placeOrder?: Maybe<PlaceOrderOutput>;
  /** Rate FAQ Question. */
  rateAmFaqQuestion?: Maybe<AmFaqCommonOutput>;
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. */
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. */
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list. */
  removeProductsFromCompareList?: Maybe<CompareList>;
  /** Remove one or more products from the specified wish list. */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Add all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']['output']>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. */
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  /** Revoke the customer token. */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Send a message on behalf of a customer to the specified email addresses. */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  /** Set the billing address on a specific cart. */
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  /** Set Customer Link */
  setCustomerLink?: Maybe<SetCustomerLinkOutput>;
  setDeliveryMethodOnCart?: Maybe<SetDeliveryMethodOnCartOutput>;
  /** Assign the email address of a guest to the cart. */
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  /** Assign an installer and appointment to a cart */
  setInstallerOnCart?: Maybe<SetInstallerOnCartOutput>;
  /**
   * Set the cart payment method and convert the cart into an order.
   * @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request.
   */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  /** Apply a payment method to the cart. */
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  /** Set one or more shipping addresses on a specific cart. */
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  /** Set one or more delivery methods on a cart. */
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Subscribe the specified email to the store's newsletter. */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  /** Synchronizes the payment order details for further payment processing */
  syncPaymentOrder?: Maybe<Scalars['Boolean']['output']>;
  /** Modify items in the cart. */
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Update Checkout Session */
  updateCheckoutSession?: Maybe<UpdateCheckoutSessionOutput>;
  /** Use `updateCustomerV2` instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update the billing or shipping address of a customer or guest. */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  /** Change the email address for the logged-in customer. */
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information. */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Update one or more products in the specified wish list. */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
};


export type MutationaddBundleProductsToCartArgs = {
  input?: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationaddConfigurableProductsToCartArgs = {
  input?: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationaddDownloadableProductsToCartArgs = {
  input?: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationaddProductsToCartArgs = {
  cartId: Scalars['String']['input'];
  cartItems: Array<CartItemInput>;
};


export type MutationaddProductsToCompareListArgs = {
  input?: InputMaybe<AddProductsToCompareListInput>;
};


export type MutationaddProductsToWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationaddSimpleProductsToCartArgs = {
  input?: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationaddVirtualProductsToCartArgs = {
  input?: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationaddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationamSocialLoginLinkAccountArgs = {
  type: Scalars['String']['input'];
};


export type MutationamSocialLoginUnlinkAccountArgs = {
  type: Scalars['String']['input'];
};


export type MutationapplyCouponToCartArgs = {
  input?: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationassignCompareListToCustomerArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationassignCustomerToGuestCartArgs = {
  cart_id: Scalars['String']['input'];
};


export type MutationawBlogAddCommentToPostArgs = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  post_id: Scalars['Int']['input'];
  author_name: Scalars['String']['input'];
  author_email: Scalars['String']['input'];
  content: Scalars['String']['input'];
};


export type MutationcancelOrderArgs = {
  input: CancelOrderInput;
};


export type MutationchangeCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationcompleteCheckoutSessionArgs = {
  cartId: Scalars['String']['input'];
  amazonSessionId: Scalars['String']['input'];
};


export type MutationconfirmEmailArgs = {
  input: ConfirmEmailInput;
};


export type MutationcontactUsArgs = {
  input: ContactUsInput;
};


export type MutationcreateBraintreePayPalVaultClientTokenArgs = {
  input?: InputMaybe<BraintreeVaultInput>;
};


export type MutationcreateCompareListArgs = {
  input?: InputMaybe<CreateCompareListInput>;
};


export type MutationcreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationcreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationcreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationcreateEmptyCartArgs = {
  input?: InputMaybe<createEmptyCartInput>;
};


export type MutationcreateGuestCartArgs = {
  input?: InputMaybe<CreateGuestCartInput>;
};


export type MutationcreateKlarnaPaymentsSessionArgs = {
  input?: InputMaybe<createKlarnaPaymentsSessionInput>;
};


export type MutationcreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationcreatePaymentOrderArgs = {
  input: CreatePaymentOrderInput;
};


export type MutationcreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationcreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationcreateVaultCardPaymentTokenArgs = {
  input: CreateVaultCardPaymentTokenInput;
};


export type MutationcreateVaultCardSetupTokenArgs = {
  input: CreateVaultCardSetupTokenInput;
};


export type MutationdeleteCompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationdeleteCustomerAddressArgs = {
  id: Scalars['Int']['input'];
};


export type MutationdeletePaymentTokenArgs = {
  public_hash: Scalars['String']['input'];
};


export type MutationestimateShippingMethodsArgs = {
  input: EstimateTotalsInput;
};


export type MutationestimateTotalsArgs = {
  input: EstimateTotalsInput;
};


export type MutationgenerateCustomerTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationgenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationhandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationmergeCartsArgs = {
  source_cart_id: Scalars['String']['input'];
  destination_cart_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationplaceAmFaqQuestionArgs = {
  input?: InputMaybe<PlaceAmFaqQuestionInput>;
};


export type MutationplaceOrderArgs = {
  input?: InputMaybe<PlaceOrderInput>;
};


export type MutationrateAmFaqQuestionArgs = {
  input?: InputMaybe<RateAmFaqQuestionInput>;
};


export type MutationremoveCouponFromCartArgs = {
  input?: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationremoveItemFromCartArgs = {
  input?: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationremoveProductsFromCompareListArgs = {
  input?: InputMaybe<RemoveProductsFromCompareListInput>;
};


export type MutationremoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemsIds: Array<Scalars['ID']['input']>;
};


export type MutationreorderItemsArgs = {
  orderNumber: Scalars['String']['input'];
};


export type MutationrequestPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationresetPasswordArgs = {
  email: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationsendEmailToFriendArgs = {
  input?: InputMaybe<SendEmailToFriendInput>;
};


export type MutationsetBillingAddressOnCartArgs = {
  input?: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationsetCustomerLinkArgs = {
  buyerToken: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationsetDeliveryMethodOnCartArgs = {
  input: SetDeliveryMethodOnCartInput;
};


export type MutationsetGuestEmailOnCartArgs = {
  input?: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationsetInstallerOnCartArgs = {
  input: SetInstallerOnCartInput;
};


export type MutationsetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationsetPaymentMethodOnCartArgs = {
  input?: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationsetShippingAddressesOnCartArgs = {
  input?: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationsetShippingMethodsOnCartArgs = {
  input?: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationsubscribeEmailToNewsletterArgs = {
  email: Scalars['String']['input'];
};


export type MutationsyncPaymentOrderArgs = {
  input?: InputMaybe<SyncPaymentOrderInput>;
};


export type MutationupdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationupdateCheckoutSessionArgs = {
  cartId: Scalars['String']['input'];
  amazonSessionId: Scalars['String']['input'];
};


export type MutationupdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationupdateCustomerAddressArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<CustomerAddressInput>;
};


export type MutationupdateCustomerEmailArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationupdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationupdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars['String']['input']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars['String']['input']>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars['String']['input']>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars['String']['input']>;
  /** Is null. */
  null?: InputMaybe<Scalars['String']['input']>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to fuzzy match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** Filter match type for fine-tuned results. Possible values FULL or PARTIAL. If match_type is not provided, returned results will default to FULL match. */
  match_type?: InputMaybe<FilterMatchTypeEnum>;
};

export type FilterMatchTypeEnum =
  | 'FULL'
  | 'PARTIAL';

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Provides navigation for the query response. */
export type SearchResultPageInfo = {
  /** The specific page to return. */
  current_page?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of items to return per page of results. */
  page_size?: Maybe<Scalars['Int']['output']>;
  /** The total number of pages in the response. */
  total_pages?: Maybe<Scalars['Int']['output']>;
};

/** Indicates whether to return results in ascending or descending order. */
export type SortEnum =
  | 'ASC'
  | 'DESC';

export type ComplexTextValue = {
  /** Text that can contain HTML tags. */
  html: Scalars['String']['output'];
};

/** Defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  /** A three-letter currency code, such as USD or EUR. */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value. */
  value?: Maybe<Scalars['Float']['output']>;
};

/** The list of available currency codes. */
export type CurrencyEnum =
  | 'AFN'
  | 'ALL'
  | 'AZN'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'BSD'
  | 'BHD'
  | 'BDT'
  | 'BBD'
  | 'BYN'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BOB'
  | 'BAM'
  | 'BWP'
  | 'BRL'
  | 'GBP'
  | 'BND'
  | 'BGN'
  | 'BUK'
  | 'BIF'
  | 'KHR'
  | 'CAD'
  | 'CVE'
  | 'CZK'
  | 'KYD'
  | 'GQE'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CUP'
  | 'DKK'
  | 'DJF'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'SVC'
  | 'ERN'
  | 'EEK'
  | 'ETB'
  | 'EUR'
  | 'FKP'
  | 'FJD'
  | 'GMD'
  | 'GEK'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GTQ'
  | 'GNF'
  | 'GYD'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'IRR'
  | 'IQD'
  | 'ILS'
  | 'JMD'
  | 'JPY'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LVL'
  | 'LBP'
  | 'LSL'
  | 'LRD'
  | 'LYD'
  | 'LTL'
  | 'MOP'
  | 'MKD'
  | 'MGA'
  | 'MWK'
  | 'MYR'
  | 'MVR'
  | 'LSM'
  | 'MRO'
  | 'MUR'
  | 'MXN'
  | 'MDL'
  | 'MNT'
  | 'MAD'
  | 'MZN'
  | 'MMK'
  | 'NAD'
  | 'NPR'
  | 'ANG'
  | 'YTL'
  | 'NZD'
  | 'NIC'
  | 'NGN'
  | 'KPW'
  | 'NOK'
  | 'OMR'
  | 'PKR'
  | 'PAB'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RHD'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'SHP'
  | 'STD'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SLL'
  | 'SGD'
  | 'SKK'
  | 'SBD'
  | 'SOS'
  | 'ZAR'
  | 'KRW'
  | 'LKR'
  | 'SDG'
  | 'SRD'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'SYP'
  | 'TWD'
  | 'TJS'
  | 'TZS'
  | 'THB'
  | 'TOP'
  | 'TTD'
  | 'TND'
  | 'TMM'
  | 'USD'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'UYU'
  | 'UZS'
  | 'VUV'
  | 'VEB'
  | 'VEF'
  | 'VND'
  | 'CHE'
  | 'CHW'
  | 'XOF'
  | 'WST'
  | 'YER'
  | 'ZMK'
  | 'ZWD'
  | 'TRY'
  | 'AZM'
  | 'ROL'
  | 'TRL'
  | 'XPF';

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID']['input'];
  /** Text the customer entered. */
  value: Scalars['String']['input'];
};

export type BatchMutationStatus =
  | 'SUCCESS'
  | 'FAILURE'
  | 'MIXED_RESULTS';

export type ErrorInterface = {
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Contains an error message when an invalid UID was specified. */
export type NoSuchEntityUidError = ErrorInterface & {
  /** The returned error message. */
  message: Scalars['String']['output'];
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID']['output'];
};

/** Contains an error message when an internal error occurred. */
export type InternalError = ErrorInterface & {
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Defines an array of custom attributes. */
export type CustomAttributeMetadata = {
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

/** Contains details about the attribute, including the code and type. */
export type Attribute = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute. */
  attribute_type?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  input_type?: Maybe<Scalars['String']['output']>;
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties?: Maybe<StorefrontProperties>;
};

/** Indicates where an attribute can be displayed. */
export type StorefrontProperties = {
  /** The relative position of the attribute in the layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']['output']>;
};

/** Defines whether the attribute is filterable in layered navigation. */
export type UseInLayeredNavigationOptions =
  | 'NO'
  | 'FILTERABLE_WITH_RESULTS'
  | 'FILTERABLE_NO_RESULT';

/** Defines an attribute option. */
export type AttributeOption = {
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute option value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']['input']>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars['String']['input']>;
};

/** Metadata of EAV attributes. */
export type AttributesMetadataOutput = {
  /** Errors of retrieving certain attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>;
  /** Requested attributes metadata. */
  items: Array<Maybe<CustomAttributeMetadataInterface>>;
};

/** Attribute metadata retrieval error. */
export type AttributeMetadataError = {
  /** Attribute metadata retrieval error message. */
  message: Scalars['String']['output'];
  /** Attribute metadata retrieval error type. */
  type: AttributeMetadataErrorType;
};

/** Attribute metadata retrieval error types. */
export type AttributeMetadataErrorType =
  /** The requested entity was not found. */
  | 'ENTITY_NOT_FOUND'
  /** The requested attribute was not found. */
  | 'ATTRIBUTE_NOT_FOUND'
  /** The filter cannot be applied as it does not belong to the entity */
  | 'FILTER_NOT_FOUND'
  /** Not categorized error, see the error message. */
  | 'UNDEFINED';

/** An interface containing fields that define the EAV attribute. */
export type CustomAttributeMetadataInterface = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output'];
  /** Default attribute value. */
  default_value?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum;
  /** The frontend class of the attribute. */
  frontend_class?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  frontend_input?: Maybe<AttributeFrontendInputEnum>;
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output'];
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output'];
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>;
};

export type CustomAttributeOptionInterface = {
  /** Is the option value default. */
  is_default: Scalars['Boolean']['output'];
  /** The label assigned to the attribute option. */
  label: Scalars['String']['output'];
  /** The attribute option value. */
  value: Scalars['String']['output'];
};

/** Base EAV implementation of CustomAttributeOptionInterface. */
export type AttributeOptionMetadata = CustomAttributeOptionInterface & {
  /** Is the option value default. */
  is_default: Scalars['Boolean']['output'];
  /** The label assigned to the attribute option. */
  label: Scalars['String']['output'];
  /** The attribute option value. */
  value: Scalars['String']['output'];
};

/** Base EAV implementation of CustomAttributeMetadataInterface. */
export type AttributeMetadata = CustomAttributeMetadataInterface & {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output'];
  /** Default attribute value. */
  default_value?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum;
  /** The frontend class of the attribute. */
  frontend_class?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  frontend_input?: Maybe<AttributeFrontendInputEnum>;
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output'];
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output'];
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>;
};

/** List of all entity types. Populated by the modules introducing EAV entities. */
export type AttributeEntityTypeEnum =
  | 'CATALOG_PRODUCT'
  | 'CATALOG_CATEGORY'
  | 'CUSTOMER'
  | 'CUSTOMER_ADDRESS';

/** EAV attribute frontend input types. */
export type AttributeFrontendInputEnum =
  | 'BOOLEAN'
  | 'DATE'
  | 'DATETIME'
  | 'FILE'
  | 'GALLERY'
  | 'HIDDEN'
  | 'IMAGE'
  | 'MEDIA_IMAGE'
  | 'MULTILINE'
  | 'MULTISELECT'
  | 'PRICE'
  | 'SELECT'
  | 'TEXT'
  | 'TEXTAREA'
  | 'WEIGHT'
  | 'UNDEFINED';

/** Metadata of EAV attributes associated to form */
export type AttributesFormOutput = {
  /** Errors of retrieving certain attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>;
  /** Requested attributes metadata. */
  items: Array<Maybe<CustomAttributeMetadataInterface>>;
};

export type AttributeValueInterface = {
  /** The attribute code. */
  code: Scalars['ID']['output'];
};

export type AttributeValue = AttributeValueInterface & {
  /** The attribute code. */
  code: Scalars['ID']['output'];
  /** The attribute value. */
  value: Scalars['String']['output'];
};

export type AttributeSelectedOptions = AttributeValueInterface & {
  /** The attribute code. */
  code: Scalars['ID']['output'];
  selected_options: Array<Maybe<AttributeSelectedOptionInterface>>;
};

export type AttributeSelectedOptionInterface = {
  /** The attribute selected option label. */
  label: Scalars['String']['output'];
  /** The attribute selected option value. */
  value: Scalars['String']['output'];
};

export type AttributeSelectedOption = AttributeSelectedOptionInterface & {
  /** The attribute selected option label. */
  label: Scalars['String']['output'];
  /** The attribute selected option value. */
  value: Scalars['String']['output'];
};

/** Specifies the value for attribute. */
export type AttributeValueInput = {
  /** The code of the attribute. */
  attribute_code: Scalars['String']['input'];
  /** An array containing selected options for a select or multiselect attribute. */
  selected_options?: InputMaybe<Array<InputMaybe<AttributeInputSelectedOption>>>;
  /** The value assigned to the attribute. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies selected option for a select or multiselect attribute value. */
export type AttributeInputSelectedOption = {
  /** The attribute option value. */
  value: Scalars['String']['input'];
};

/** An input object that specifies the filters used for attributes. */
export type AttributeFilterInput = {
  /** Whether a product or category attribute can be compared against another or not. */
  is_comparable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be filtered or not. */
  is_filterable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be filtered in search or not. */
  is_filterable_in_search?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can use HTML on front or not. */
  is_html_allowed_on_front?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be searched or not. */
  is_searchable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be used for price rules or not. */
  is_used_for_price_rules?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is used for promo rules or not. */
  is_used_for_promo_rules?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is visible in advanced search or not. */
  is_visible_in_advanced_search?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is visible on front or not. */
  is_visible_on_front?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute has WYSIWYG enabled or not. */
  is_wysiwyg_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is used in product listing or not. */
  used_in_product_listing?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type Website = {
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']['output']>;
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

/** The type contains information about a store config. */
export type StoreConfig = {
  /** Contains scripts that must be included in the HTML before the closing `<body>` tag. */
  absolute_footer?: Maybe<Scalars['String']['output']>;
  /** Affirm country code. */
  affirm_gateway_country_code?: Maybe<Scalars['String']['output']>;
  /** Affirm locale. */
  affirm_gateway_locale?: Maybe<Scalars['String']['output']>;
  /** Affirm mode (sandbox or production). */
  affirm_gateway_mode?: Maybe<Scalars['String']['output']>;
  /** Affirm public API key. */
  affirm_gateway_public_api_key?: Maybe<Scalars['String']['output']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']['output']>;
  /** Payment Region for js import */
  amazon_payment_region?: Maybe<Scalars['String']['output']>;
  /** Login Buttons Position. */
  amsociallogin_general_button_position?: Maybe<Scalars['String']['output']>;
  /** Login Buttons Shape. */
  amsociallogin_general_button_shape?: Maybe<Scalars['Int']['output']>;
  /** Redirect Url after Login. */
  amsociallogin_general_custom_url?: Maybe<Scalars['String']['output']>;
  /** Enable Social Login. */
  amsociallogin_general_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Add Social Login to. */
  amsociallogin_general_login_position?: Maybe<Scalars['String']['output']>;
  /** Enable Ajax Popup. */
  amsociallogin_general_popup_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Redirect after Login. */
  amsociallogin_general_redirect_type?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether to enable autocomplete on login and forgot password forms. */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']['output']>;
  /** The base currency code. */
  base_currency_code?: Maybe<Scalars['String']['output']>;
  /** A fully-qualified URL that is used to create relative links to the `base_url`. */
  base_link_url?: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of media files. */
  base_media_url?: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of static view files. */
  base_static_url?: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified base URL. */
  base_url?: Maybe<Scalars['String']['output']>;
  /** Braintree 3D Secure, should 3D Secure be used for specific countries. */
  braintree_3dsecure_allowspecific?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree 3D Secure, always request 3D Secure flag. */
  braintree_3dsecure_always_request_3ds?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree 3D Secure, the specific countries to use 3D Secure in, to be used if allow specific is status is enabled. */
  braintree_3dsecure_specificcountry?: Maybe<Scalars['String']['output']>;
  /** Braintree 3D Secure, threshold above which 3D Secure should be requested. */
  braintree_3dsecure_threshold_amount?: Maybe<Scalars['String']['output']>;
  /** Braintree 3D Secure enabled/active status. */
  braintree_3dsecure_verify_3dsecure?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree ACH vault status. */
  braintree_ach_direct_debit_vault_active?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree Apple Pay merchant name. */
  braintree_applepay_merchant_name?: Maybe<Scalars['String']['output']>;
  /** Braintree Apple Pay vault status. */
  braintree_applepay_vault_active?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']['output']>;
  /** Braintree cc vault CVV re-verification enabled status. */
  braintree_cc_vault_cvv?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree environment. */
  braintree_environment?: Maybe<Scalars['String']['output']>;
  /** Braintree Google Pay button color. */
  braintree_googlepay_btn_color?: Maybe<Scalars['String']['output']>;
  /** Braintree Google Pay Card types supported. */
  braintree_googlepay_cctypes?: Maybe<Scalars['String']['output']>;
  /** Braintree Google Pay merchant ID. */
  braintree_googlepay_merchant_id?: Maybe<Scalars['String']['output']>;
  /** Braintree Google Pay vault status. */
  braintree_googlepay_vault_active?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree Local Payment Methods allowed payment methods. */
  braintree_local_payment_allowed_methods?: Maybe<Scalars['String']['output']>;
  /** Braintree Local Payment Methods fallback button text. */
  braintree_local_payment_fallback_button_text?: Maybe<Scalars['String']['output']>;
  /** Braintree Local Payment Methods redirect URL on failed payment. */
  braintree_local_payment_redirect_on_fail?: Maybe<Scalars['String']['output']>;
  /** Braintree Merchant Account ID. */
  braintree_merchant_account_id?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit mini-cart & cart button style color. */
  braintree_paypal_button_location_cart_type_credit_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit mini-cart & cart button style label. */
  braintree_paypal_button_location_cart_type_credit_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit mini-cart & cart button style shape. */
  braintree_paypal_button_location_cart_type_credit_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit mini-cart & cart button show status. */
  braintree_paypal_button_location_cart_type_credit_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Pay Later messaging mini-cart & cart style layout. */
  braintree_paypal_button_location_cart_type_messaging_layout?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging mini-cart & cart style logo. */
  braintree_paypal_button_location_cart_type_messaging_logo?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging mini-cart & cart style logo position. */
  braintree_paypal_button_location_cart_type_messaging_logo_position?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging mini-cart & cart show status. */
  braintree_paypal_button_location_cart_type_messaging_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Pay Later messaging checkout style text color. */
  braintree_paypal_button_location_cart_type_messaging_text_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later mini-cart & cart button style color. */
  braintree_paypal_button_location_cart_type_paylater_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later mini-cart & cart button style label. */
  braintree_paypal_button_location_cart_type_paylater_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later mini-cart & cart button style shape. */
  braintree_paypal_button_location_cart_type_paylater_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later mini-cart & cart button show status. */
  braintree_paypal_button_location_cart_type_paylater_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal mini-cart & cart button style color. */
  braintree_paypal_button_location_cart_type_paypal_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal mini-cart & cart button style label. */
  braintree_paypal_button_location_cart_type_paypal_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal mini-cart & cart button style shape. */
  braintree_paypal_button_location_cart_type_paypal_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal mini-cart & cart button show. */
  braintree_paypal_button_location_cart_type_paypal_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Credit checkout button style color. */
  braintree_paypal_button_location_checkout_type_credit_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit checkout button style label. */
  braintree_paypal_button_location_checkout_type_credit_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit checkout button style shape. */
  braintree_paypal_button_location_checkout_type_credit_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit checkout button show status. */
  braintree_paypal_button_location_checkout_type_credit_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Pay Later messaging checkout style layout. */
  braintree_paypal_button_location_checkout_type_messaging_layout?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging checkout style logo. */
  braintree_paypal_button_location_checkout_type_messaging_logo?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging checkout style logo position. */
  braintree_paypal_button_location_checkout_type_messaging_logo_position?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging checkout show status. */
  braintree_paypal_button_location_checkout_type_messaging_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Pay Later messaging checkout style text color. */
  braintree_paypal_button_location_checkout_type_messaging_text_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later checkout button style color. */
  braintree_paypal_button_location_checkout_type_paylater_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later checkout button style label. */
  braintree_paypal_button_location_checkout_type_paylater_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later checkout button style shape. */
  braintree_paypal_button_location_checkout_type_paylater_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later checkout button show status. */
  braintree_paypal_button_location_checkout_type_paylater_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal checkout button style color. */
  braintree_paypal_button_location_checkout_type_paypal_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal checkout button style label. */
  braintree_paypal_button_location_checkout_type_paypal_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal checkout button style shape. */
  braintree_paypal_button_location_checkout_type_paypal_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal checkout button show. */
  braintree_paypal_button_location_checkout_type_paypal_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Credit PDP button style color. */
  braintree_paypal_button_location_productpage_type_credit_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit PDP button style label. */
  braintree_paypal_button_location_productpage_type_credit_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit PDP button style shape. */
  braintree_paypal_button_location_productpage_type_credit_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Credit PDP button show status. */
  braintree_paypal_button_location_productpage_type_credit_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Pay Later messaging PDP style layout. */
  braintree_paypal_button_location_productpage_type_messaging_layout?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging PDP style logo. */
  braintree_paypal_button_location_productpage_type_messaging_logo?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging PDP style logo position. */
  braintree_paypal_button_location_productpage_type_messaging_logo_position?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later messaging PDP show status. */
  braintree_paypal_button_location_productpage_type_messaging_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Pay Later messaging PDP style text color. */
  braintree_paypal_button_location_productpage_type_messaging_text_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later PDP button style color. */
  braintree_paypal_button_location_productpage_type_paylater_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later PDP button style label. */
  braintree_paypal_button_location_productpage_type_paylater_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later PDP button style shape. */
  braintree_paypal_button_location_productpage_type_paylater_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal Pay Later PDP button show status. */
  braintree_paypal_button_location_productpage_type_paylater_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal PDP button style color. */
  braintree_paypal_button_location_productpage_type_paypal_color?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal PDP button style label. */
  braintree_paypal_button_location_productpage_type_paypal_label?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal PDP button style shape. */
  braintree_paypal_button_location_productpage_type_paypal_shape?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal PDP button show. */
  braintree_paypal_button_location_productpage_type_paypal_show?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal Credit Merchant Name on the FCA Register. */
  braintree_paypal_credit_uk_merchant_name?: Maybe<Scalars['String']['output']>;
  /** Should display Braintree PayPal in mini-cart & cart? */
  braintree_paypal_display_on_shopping_cart?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal merchant's country. */
  braintree_paypal_merchant_country?: Maybe<Scalars['String']['output']>;
  /** Braintree PayPal override for Merchant Name. */
  braintree_paypal_merchant_name_override?: Maybe<Scalars['String']['output']>;
  /** Does Braintree PayPal require the customer's billing address? */
  braintree_paypal_require_billing_address?: Maybe<Scalars['Boolean']['output']>;
  /** Does Braintree PayPal require the order line items? */
  braintree_paypal_send_cart_line_items?: Maybe<Scalars['Boolean']['output']>;
  /** Braintree PayPal vault status. */
  braintree_paypal_vault_active?: Maybe<Scalars['Boolean']['output']>;
  /** Extended Config Data - checkout/cart/delete_quote_after */
  cart_expires_in_days?: Maybe<Scalars['Int']['output']>;
  /** Extended Config Data - checkout/cart_link/use_qty */
  cart_summary_display_quantity?: Maybe<Scalars['Int']['output']>;
  /** The default sort order of the search results list. */
  catalog_default_sort_by?: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** The suffix applied to category pages, such as `.htm` or `.html`. */
  category_url_suffix?: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  check_money_order_enable_for_specific_countries?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Check/Money Order payment method is enabled. */
  check_money_order_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the party to whom the check must be payable. */
  check_money_order_make_check_payable_to?: Maybe<Scalars['String']['output']>;
  /** The maximum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_max_order_total?: Maybe<Scalars['String']['output']>;
  /** The minimum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_min_order_total?: Maybe<Scalars['String']['output']>;
  /** The status of new orders placed using the Check/Money Order payment method. */
  check_money_order_new_order_status?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Check/Money Order payment method. */
  check_money_order_payment_from_specific_countries?: Maybe<Scalars['String']['output']>;
  /** The full street address or PO Box where the checks are mailed. */
  check_money_order_send_check_to?: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. */
  check_money_order_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The title of the Check/Money Order payment method displayed on the storefront. */
  check_money_order_title?: Maybe<Scalars['String']['output']>;
  /** The name of the CMS page that identifies the home page for the store. */
  cms_home_page?: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when cookies are not enabled for the browser. */
  cms_no_cookies?: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when a 404 'Page Not Found' error occurs. */
  cms_no_route?: Maybe<Scalars['String']['output']>;
  /**
   * A code assigned to the store to identify it.
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the Contact Us form in enabled. */
  contact_enabled: Scalars['Boolean']['output'];
  /** The copyright statement that appears at the bottom of each page. */
  copyright?: Maybe<Scalars['String']['output']>;
  /** Extended Config Data - general/region/state_required */
  countries_with_required_region?: Maybe<Scalars['String']['output']>;
  /** Indicates if the new accounts need confirmation. */
  create_account_confirmation?: Maybe<Scalars['Boolean']['output']>;
  /** Customer access token lifetime. */
  customer_access_token_lifetime?: Maybe<Scalars['Float']['output']>;
  /** Extended Config Data - general/country/default */
  default_country?: Maybe<Scalars['String']['output']>;
  /** The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. */
  default_description?: Maybe<Scalars['String']['output']>;
  /** The default display currency code. */
  default_display_currency_code?: Maybe<Scalars['String']['output']>;
  /** A series of keywords that describe your store, each separated by a comma. */
  default_keywords?: Maybe<Scalars['String']['output']>;
  /** The title that appears at the title bar of each page when viewed in a browser. */
  default_title?: Maybe<Scalars['String']['output']>;
  /** Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). */
  demonotice?: Maybe<Scalars['Int']['output']>;
  /** Extended Config Data - general/region/display_all */
  display_state_if_optional?: Maybe<Scalars['Boolean']['output']>;
  /** The landing page that is associated with the base URL. */
  front?: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in Grid View. */
  grid_per_page?: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in Grid View. */
  grid_per_page_values?: Maybe<Scalars['String']['output']>;
  /** Scripts that must be included in the HTML before the closing `<head>` tag. */
  head_includes?: Maybe<Scalars['String']['output']>;
  /** The small graphic image (favicon) that appears in the address bar and tab of the browser. */
  head_shortcut_icon?: Maybe<Scalars['String']['output']>;
  /** The path to the logo that appears in the header. */
  header_logo_src?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the store.
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the store view has been designated as the default within the store group. */
  is_default_store?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the store group has been designated as the default within the website. */
  is_default_store_group?: Maybe<Scalars['Boolean']['output']>;
  /** Extended Config Data - checkout/options/guest_checkout */
  is_guest_checkout_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Extended Config Data - checkout/options/onepage_checkout_enabled */
  is_one_page_checkout_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The format of the search results list. */
  list_mode?: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in List View. */
  list_per_page?: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in List View. */
  list_per_page_values?: Maybe<Scalars['String']['output']>;
  /** The store locale. */
  locale?: Maybe<Scalars['String']['output']>;
  /** The Alt text that is associated with the logo. */
  logo_alt?: Maybe<Scalars['String']['output']>;
  /** The height of the logo image, in pixels. */
  logo_height?: Maybe<Scalars['Int']['output']>;
  /** The width of the logo image, in pixels. */
  logo_width?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0). */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']['output']>;
  /** Extended Config Data - checkout/options/max_items_display_count */
  max_items_in_order_summary?: Maybe<Scalars['Int']['output']>;
  /** Extended Config Data - checkout/sidebar/display */
  minicart_display?: Maybe<Scalars['Boolean']['output']>;
  /** Extended Config Data - checkout/sidebar/count */
  minicart_max_items?: Maybe<Scalars['Int']['output']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']['output']>;
  /** Indicates whether newsletters are enabled. */
  newsletter_enabled: Scalars['Boolean']['output'];
  /** The default page that displays when a 404 'Page not Found' error occurs. */
  no_route?: Maybe<Scalars['String']['output']>;
  /** Extended Config Data - general/country/optional_zip_countries */
  optional_zip_countries?: Maybe<Scalars['String']['output']>;
  /** Indicates whether orders can be cancelled by customers or not. */
  order_cancellation_enabled: Scalars['Boolean']['output'];
  /** An array containing available cancellation reasons. */
  order_cancellation_reasons: Array<Maybe<CancellationReason>>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). */
  product_reviews_enabled?: Maybe<Scalars['String']['output']>;
  /** The suffix applied to product pages, such as `.htm` or `.html`. */
  product_url_suffix?: Maybe<Scalars['String']['output']>;
  /** The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. */
  required_character_classes_number?: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the root category.
   * @deprecated Use `root_category_uid` instead.
   */
  root_category_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']['output']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** A secure fully-qualified URL that is used to create relative links to the `base_url`. */
  secure_base_link_url?: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of media files. */
  secure_base_media_url?: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of static view files. */
  secure_base_static_url?: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified secure base URL. */
  secure_base_url?: Maybe<Scalars['String']['output']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Extended Config Data - tax/cart_display/full_summary */
  shopping_cart_display_full_summary?: Maybe<Scalars['Boolean']['output']>;
  /** Extended Config Data - tax/cart_display/grandtotal */
  shopping_cart_display_grand_total?: Maybe<Scalars['Boolean']['output']>;
  /** Extended Config Data - tax/cart_display/price */
  shopping_cart_display_price?: Maybe<Scalars['Int']['output']>;
  /** Extended Config Data - tax/cart_display/shipping */
  shopping_cart_display_shipping?: Maybe<Scalars['Int']['output']>;
  /** Extended Config Data - tax/cart_display/subtotal */
  shopping_cart_display_subtotal?: Maybe<Scalars['Int']['output']>;
  /** Extended Config Data - tax/cart_display/gift_wrapping */
  shopping_cart_display_tax_gift_wrapping?: Maybe<TaxWrappingEnum>;
  /** Extended Config Data - tax/cart_display/zero_tax */
  shopping_cart_display_zero_tax?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']['output']>;
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. */
  store_code?: Maybe<Scalars['ID']['output']>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name. */
  store_group_code?: Maybe<Scalars['ID']['output']>;
  /** The label assigned to the store group. */
  store_group_name?: Maybe<Scalars['String']['output']>;
  /** The label assigned to the store view. */
  store_name?: Maybe<Scalars['String']['output']>;
  /** The store view sort order. */
  store_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The time zone of the store. */
  timezone?: Maybe<Scalars['String']['output']>;
  /** A prefix that appears before the title to create a two- or three-part title. */
  title_prefix?: Maybe<Scalars['String']['output']>;
  /** The character that separates the category name and subcategory in the browser title bar. */
  title_separator?: Maybe<Scalars['String']['output']>;
  /** A suffix that appears after the title to create a two- or three-part title. */
  title_suffix?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the store code should be used in the URL. */
  use_store_in_url?: Maybe<Scalars['Boolean']['output']>;
  /** The unique ID for the website. */
  website_code?: Maybe<Scalars['ID']['output']>;
  /**
   * The ID number assigned to the website store.
   * @deprecated The field should not be used on the storefront.
   */
  website_id?: Maybe<Scalars['Int']['output']>;
  /** The label assigned to the website. */
  website_name?: Maybe<Scalars['String']['output']>;
  /** The unit of weight. */
  weight_unit?: Maybe<Scalars['String']['output']>;
  /** Text that appears in the header of the page and includes the name of the logged in customer. */
  welcome?: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  zero_subtotal_enable_for_specific_countries?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Zero Subtotal payment method is enabled. */
  zero_subtotal_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The status of new orders placed using the Zero Subtotal payment method. */
  zero_subtotal_new_order_status?: Maybe<Scalars['String']['output']>;
  /** When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. */
  zero_subtotal_payment_action?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. */
  zero_subtotal_payment_from_specific_countries?: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. */
  zero_subtotal_sort_order?: Maybe<Scalars['Int']['output']>;
  /** The title of the Zero Subtotal payment method displayed on the storefront. */
  zero_subtotal_title?: Maybe<Scalars['String']['output']>;
};

/** Defines details about an individual checkout agreement. */
export type CheckoutAgreement = {
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int']['output'];
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String']['output'];
  /** Required. The text of the agreement. */
  content: Scalars['String']['output'];
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean']['output'];
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: CheckoutAgreementMode;
  /** The name given to the condition. */
  name: Scalars['String']['output'];
};

/** Indicates how agreements are accepted. */
export type CheckoutAgreementMode =
  /** Conditions are automatically accepted upon checkout. */
  | 'AUTO'
  /** Shoppers must manually accept the conditions to place an order. */
  | 'MANUAL';

/** Contains details about a CMS page. */
export type CmsPage = RoutableInterface & {
  /** The content of the CMS page in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The heading that displays at the top of the CMS page. */
  content_heading?: Maybe<Scalars['String']['output']>;
  /** The ID of a CMS page. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_keywords?: Maybe<Scalars['String']['output']>;
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout?: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Contains an array CMS block items. */
export type CmsBlocks = {
  /** An array of CMS blocks. */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** Contains details about a specific CMS block. */
export type CmsBlock = {
  /** The content of the CMS block in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The CMS block identifier. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The title assigned to the CMS block. */
  title?: Maybe<Scalars['String']['output']>;
};

/** This enumeration defines the entity type. */
export type UrlRewriteEntityTypeEnum =
  | 'CMS_PAGE'
  | 'PRODUCT'
  | 'CATEGORY'
  | 'AW_BLOG_CATEGORY'
  | 'AW_BLOG_POST';

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount?: Maybe<Money>;
};

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** `PriceAdjustment.code` is deprecated. */
export type PriceAdjustmentCodesEnum =
  | 'TAX'
  | 'WEEE'
  | 'WEEE_TAX';

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export type PriceAdjustmentDescriptionEnum =
  | 'INCLUDED'
  | 'EXCLUDED';

/** Defines the price type. */
export type PriceTypeEnum =
  | 'FIXED'
  | 'PERCENT'
  | 'DYNAMIC';

/** Defines the customizable date type. */
export type CustomizableDateTypeEnum =
  | 'DATE'
  | 'DATE_TIME'
  | 'TIME';

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice?: Maybe<Price>;
};

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** Represents a product price. */
export type ProductPrice = {
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after applying discounts. */
  final_price: Money;
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/** Contains the discount applied to a product price. */
export type ProductDiscount = {
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']['output']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']['output']>;
};

/** An implementation of `ProductLinksInterface`. */
export type ProductLinks = ProductLinksInterface & {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains fields that are common to all types of products. */
export type ProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  allow_credit_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition?: Maybe<Scalars['Int']['output']>;
  /** List of FAQ Questions Assigned to a Product. */
  amfaq_questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  approved_rim_width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  attr_3pmsf?: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  backspacing_in?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_product_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_2?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_3?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern_alternative?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['Int']['output']>;
  /** Brand logo for a product, looks for brand attribute value, then searches for a file under that name in media/brands dir. Needs refactoring to include integration with UI components win admin. */
  brand_logo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_text?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type_text?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_ranking?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  center_bore_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  commercial_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construction_type?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_amount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_rate?: Maybe<Scalars['Float']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  custom_stock_status?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  deals_discounts?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Returns broken down description for the new design. */
  description_overview?: Maybe<DescriptionOverview>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dlvr_block?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  google_brand?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hub_size?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_capacity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_and_speed_rating?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_configurable_variation?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_air_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_credit?: Maybe<Scalars['Float']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  min_credit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mpn1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  msrp_price?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  oe_tire_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_mm_inner?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_outer?: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  overall_diameter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  parent_url_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_text?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Aggregated rating information for the product, including average rating and review count. */
  productRating?: Maybe<ProductRating>;
  /** Returns all related productUrl entities for the product. */
  productUrl?: Maybe<ProductUrl>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rebate_available?: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_structure?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width_text?: Maybe<Scalars['String']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  simple_preselect?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_text?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  speed_rating?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spoke_count?: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_tube_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_accessories?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_applicable_regions?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery_life?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_connectivity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_g_sensor_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_low_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modification_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modified_item?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_non_domestic_product?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_obd_interface?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_humidity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_monitoring_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_sensor_compatible?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_storage_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_supported_system?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_display?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_radio_reception?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_transmission_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_vehicle_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_compatible_sizes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_sizes?: Maybe<Scalars['String']['output']>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  utqg?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_location?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_max_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_retention?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_specification?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  website_product_ranking?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_construction_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_direction?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_finish?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_lip_size_mm?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_shine?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  winter_tire_type?: Maybe<Scalars['Int']['output']>;
};


/** Contains fields that are common to all types of products. */
export type ProductInterfacecustom_attributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Contains fields that are common to all types of products. */
export type ProductInterfacereviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** Defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the hierarchy of categories. */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  affirm_category_mfp?: Maybe<Scalars['String']['output']>;
  affirm_category_mfp_end_date?: Maybe<Scalars['String']['output']>;
  affirm_category_mfp_priority?: Maybe<Scalars['Int']['output']>;
  affirm_category_mfp_start_date?: Maybe<Scalars['String']['output']>;
  affirm_category_mfp_type?: Maybe<Scalars['Int']['output']>;
  affirm_category_promo_id?: Maybe<Scalars['String']['output']>;
  am_exclude_from_filter?: Maybe<Scalars['Int']['output']>;
  amtoolkit_robots?: Maybe<Scalars['String']['output']>;
  available_rebate_from?: Maybe<Scalars['String']['output']>;
  available_rebate_to?: Maybe<Scalars['String']['output']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  category_seo_title?: Maybe<Scalars['String']['output']>;
  /** A tree of child categories. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  custom_layout_update_file?: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']['output']>;
  display_mode?: Maybe<Scalars['String']['output']>;
  expired_rebate_from?: Maybe<Scalars['String']['output']>;
  expired_rebate_to?: Maybe<Scalars['String']['output']>;
  filter_price_range?: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  include_in_menu?: Maybe<Scalars['Int']['output']>;
  is_anchor?: Maybe<Scalars['Int']['output']>;
  landing_page?: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  most_popular?: Maybe<MostPopularData>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  synced_to_yotpo_collection?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
};


/** Contains the hierarchy of categories. */
export type CategoryTreeproductsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type CategoryResult = {
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** Defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']['output']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']['output']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Contains product image information, including the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  affirm_category_mfp?: Maybe<Scalars['String']['output']>;
  affirm_category_mfp_end_date?: Maybe<Scalars['String']['output']>;
  affirm_category_mfp_priority?: Maybe<Scalars['Int']['output']>;
  affirm_category_mfp_start_date?: Maybe<Scalars['String']['output']>;
  affirm_category_mfp_type?: Maybe<Scalars['Int']['output']>;
  affirm_category_promo_id?: Maybe<Scalars['String']['output']>;
  am_exclude_from_filter?: Maybe<Scalars['Int']['output']>;
  amtoolkit_robots?: Maybe<Scalars['String']['output']>;
  available_rebate_from?: Maybe<Scalars['String']['output']>;
  available_rebate_to?: Maybe<Scalars['String']['output']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  category_seo_title?: Maybe<Scalars['String']['output']>;
  children_count?: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  custom_layout_update_file?: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']['output']>;
  display_mode?: Maybe<Scalars['String']['output']>;
  expired_rebate_from?: Maybe<Scalars['String']['output']>;
  expired_rebate_to?: Maybe<Scalars['String']['output']>;
  filter_price_range?: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  include_in_menu?: Maybe<Scalars['Int']['output']>;
  is_anchor?: Maybe<Scalars['Int']['output']>;
  landing_page?: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store?: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  synced_to_yotpo_collection?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path?: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
};


/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceproductsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Contains details about an individual category that comprises a breadcrumb. */
export type Breadcrumb = {
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** The category level. */
  category_level?: Maybe<Scalars['Int']['output']>;
  /** The display name of the category. */
  category_name?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID']['output'];
  /** The URL key of the category. */
  category_url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path of the category. */
  category_url_path?: Maybe<Scalars['String']['output']>;
};

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = ProductInterface & RoutableInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  allow_credit_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition?: Maybe<Scalars['Int']['output']>;
  /** List of FAQ Questions Assigned to a Product. */
  amfaq_questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  approved_rim_width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  attr_3pmsf?: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  backspacing_in?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_product_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_2?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_3?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern_alternative?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['Int']['output']>;
  /** Brand logo for a product, looks for brand attribute value, then searches for a file under that name in media/brands dir. Needs refactoring to include integration with UI components win admin. */
  brand_logo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_text?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type_text?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_ranking?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  center_bore_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  commercial_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construction_type?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_amount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_rate?: Maybe<Scalars['Float']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  custom_stock_status?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  deals_discounts?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Returns broken down description for the new design. */
  description_overview?: Maybe<DescriptionOverview>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dlvr_block?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  google_brand?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hub_size?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_capacity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_and_speed_rating?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_configurable_variation?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_air_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_credit?: Maybe<Scalars['Float']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  min_credit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mpn1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  msrp_price?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  oe_tire_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_mm_inner?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_outer?: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  overall_diameter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  parent_url_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_text?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Aggregated rating information for the product, including average rating and review count. */
  productRating?: Maybe<ProductRating>;
  /** Returns all related productUrl entities for the product. */
  productUrl?: Maybe<ProductUrl>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rebate_available?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_structure?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width_text?: Maybe<Scalars['String']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  simple_preselect?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_text?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  speed_rating?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spoke_count?: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_tube_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_accessories?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_applicable_regions?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery_life?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_connectivity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_g_sensor_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_low_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modification_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modified_item?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_non_domestic_product?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_obd_interface?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_humidity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_monitoring_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_sensor_compatible?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_storage_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_supported_system?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_display?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_radio_reception?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_transmission_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_vehicle_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_compatible_sizes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_sizes?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  utqg?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_location?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_max_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_retention?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_specification?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  website_product_ranking?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_construction_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_direction?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_finish?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_lip_size_mm?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_shine?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  winter_tire_type?: Maybe<Scalars['Int']['output']>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductcustom_attributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  allow_credit_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition?: Maybe<Scalars['Int']['output']>;
  /** List of FAQ Questions Assigned to a Product. */
  amfaq_questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  approved_rim_width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  attr_3pmsf?: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  backspacing_in?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_product_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_2?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_3?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern_alternative?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['Int']['output']>;
  /** Brand logo for a product, looks for brand attribute value, then searches for a file under that name in media/brands dir. Needs refactoring to include integration with UI components win admin. */
  brand_logo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_text?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type_text?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_ranking?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  center_bore_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  commercial_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construction_type?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_amount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_rate?: Maybe<Scalars['Float']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  custom_stock_status?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  deals_discounts?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Returns broken down description for the new design. */
  description_overview?: Maybe<DescriptionOverview>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dlvr_block?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  google_brand?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hub_size?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_capacity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_and_speed_rating?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_configurable_variation?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_air_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_credit?: Maybe<Scalars['Float']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  min_credit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mpn1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  msrp_price?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  oe_tire_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_mm_inner?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_outer?: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  overall_diameter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  parent_url_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_text?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Aggregated rating information for the product, including average rating and review count. */
  productRating?: Maybe<ProductRating>;
  /** Returns all related productUrl entities for the product. */
  productUrl?: Maybe<ProductUrl>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rebate_available?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_structure?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width_text?: Maybe<Scalars['String']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  simple_preselect?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_text?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  speed_rating?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spoke_count?: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_tube_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_accessories?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_applicable_regions?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery_life?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_connectivity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_g_sensor_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_low_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modification_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modified_item?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_non_domestic_product?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_obd_interface?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_humidity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_monitoring_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_sensor_compatible?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_storage_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_supported_system?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_display?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_radio_reception?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_transmission_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_vehicle_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_compatible_sizes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_sizes?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  utqg?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_location?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_max_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_retention?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_specification?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  website_product_ranking?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_construction_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_direction?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_finish?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_lip_size_mm?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_shine?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  winter_tire_type?: Maybe<Scalars['Int']['output']>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductcustom_attributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains the results of a `products` query. */
export type Products = {
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** An array of search suggestions for case when search query have no results. */
  suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};


/** Contains the results of a `products` query. */
export type ProductsaggregationsArgs = {
  filter?: InputMaybe<AggregationsFilterInput>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains details about the products assigned to a category. */
export type CategoryProducts = {
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: 3PMSF */
  attr_3pmsf?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Brand */
  brand?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Type */
  car_type?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by category URL path. */
  category_url_path?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Commercial Type */
  commercial_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Deals & Discounts */
  deals_discounts?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: dlvr_block */
  dlvr_block?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Load Index */
  load_index?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Load Range */
  load_range?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Model */
  model?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: New */
  new?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Performance */
  performance?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Guest Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Road Hazard Warranty */
  road_hazard?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Run Flat */
  run_flat?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sale */
  sale?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Season */
  season?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Sidewall */
  sidewall_specifics?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Speed Rating */
  speed_rating?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Treadlife/Mileage */
  treadlife_warranty?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Website Product Ranking */
  website_product_ranking?: InputMaybe<FilterRangeTypeInput>;
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']['output']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']['output']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']['output']>;
};

/** Contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']['output']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']['output']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']['output']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']['output']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']['output']>;
};

/** ProductSortInput specifies the attribute to use for sorting. */
export type ProductSortInput = {
  /** Is product bestsellers. */
  bestsellers?: InputMaybe<SortEnum>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product most_viewed. */
  most_viewed?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** Is product new. */
  new?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** The product price_asc. */
  price_asc?: InputMaybe<SortEnum>;
  /** The product price_desc. */
  price_desc?: InputMaybe<SortEnum>;
  /** The product rating_summary. */
  rating_summary?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** Revenue. */
  revenue?: InputMaybe<SortEnum>;
  /** The product reviews_count. */
  reviews_count?: InputMaybe<SortEnum>;
  /** The product saving. */
  saving?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
  /** Is product wished. */
  wished?: InputMaybe<SortEnum>;
};

/** ProductAttributeSortInput specifies the attribute to use for sorting. */
export type ProductAttributeSortInput = {
  /** Is product bestsellers. */
  bestsellers?: InputMaybe<SortEnum>;
  category_ranking?: InputMaybe<SortEnum>;
  /** The product most_viewed. */
  most_viewed?: InputMaybe<SortEnum>;
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Is product new. */
  new?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Guest Price */
  price?: InputMaybe<SortEnum>;
  /** The product price_asc. */
  price_asc?: InputMaybe<SortEnum>;
  /** The product price_desc. */
  price_desc?: InputMaybe<SortEnum>;
  /** The product rating_summary. */
  rating_summary?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
  /** Revenue. */
  revenue?: InputMaybe<SortEnum>;
  /** The product reviews_count. */
  reviews_count?: InputMaybe<SortEnum>;
  /** The product saving. */
  saving?: InputMaybe<SortEnum>;
  website_product_ranking?: InputMaybe<SortEnum>;
  /** Is product wished. */
  wished?: InputMaybe<SortEnum>;
};

/** Defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  /** Details about the content of the media gallery item. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']['output']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The alt text displayed on the storefront when the user points to the image. */
  label?: Maybe<Scalars['String']['output']>;
  /** Either `image` or `video`. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID']['output'];
  /** Details about the content of a video item. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains information for rendering layered navigation. */
export type LayerFilter = {
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String']['output'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']['output']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
};

/** A string that contains search suggestion */
export type SearchSuggestion = {
  /** The search suggestion of existing product. */
  search: Scalars['String']['output'];
};

/** Defines aggregation option fields. */
export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** An implementation of `AggregationOptionInterface`. */
export type AggregationOption = AggregationOptionInterface & {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Defines a possible sort field. */
export type SortField = {
  /** The label of the sort field. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute code of the sort field. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  /** The default sort field value. */
  default?: Maybe<Scalars['String']['output']>;
  /** An array of possible sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

/** Contains a simple product wish list item. */
export type SimpleWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains a virtual product wish list item. */
export type VirtualWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Swatch attribute metadata. */
export type CatalogAttributeMetadata = CustomAttributeMetadataInterface & {
  /** To which catalog types an attribute can be applied. */
  apply_to?: Maybe<Array<Maybe<CatalogAttributeApplyToEnum>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output'];
  /** Default attribute value. */
  default_value?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum;
  /** The frontend class of the attribute. */
  frontend_class?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  frontend_input?: Maybe<AttributeFrontendInputEnum>;
  /** Whether a product or category attribute can be compared against another or not. */
  is_comparable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute can be filtered or not. */
  is_filterable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute can be filtered in search or not. */
  is_filterable_in_search?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute can use HTML on front or not. */
  is_html_allowed_on_front?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output'];
  /** Whether a product or category attribute can be searched or not. */
  is_searchable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output'];
  /** Whether a product or category attribute can be used for price rules or not. */
  is_used_for_price_rules?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute is used for promo rules or not. */
  is_used_for_promo_rules?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute is visible in advanced search or not. */
  is_visible_in_advanced_search?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute is visible on front or not. */
  is_visible_on_front?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute has WYSIWYG enabled or not. */
  is_wysiwyg_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>;
  /** Input type of the swatch attribute option. */
  swatch_input_type?: Maybe<SwatchInputTypeEnum>;
  /** Whether update product preview image or not. */
  update_product_preview_image?: Maybe<Scalars['Boolean']['output']>;
  /** Whether use product image for swatch or not. */
  use_product_image_for_swatch?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute is used in product listing or not. */
  used_in_product_listing?: Maybe<Scalars['Boolean']['output']>;
};

export type CatalogAttributeApplyToEnum =
  | 'SIMPLE'
  | 'VIRTUAL'
  | 'BUNDLE'
  | 'DOWNLOADABLE'
  | 'CONFIGURABLE'
  | 'GROUPED'
  | 'CATEGORY';

/** Product custom attributes */
export type ProductCustomAttributes = {
  /** Errors when retrieving custom attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>;
  /** Requested custom attributes */
  items: Array<Maybe<AttributeValueInterface>>;
};

export type CreateGuestCartInput = {
  /** Optional client-generated ID */
  cart_uid?: InputMaybe<Scalars['ID']['input']>;
};

/** Assigns a specific `cart_id` to the empty cart. */
export type createEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For a child product, the SKU of its parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of an item to add. */
  quantity: Scalars['Float']['input'];
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product. */
  sku: Scalars['String']['input'];
};

/** Specifies the field to use for sorting quote items */
export type SortQuoteItemsEnum =
  | 'ITEM_ID'
  | 'CREATED_AT'
  | 'UPDATED_AT'
  | 'PRODUCT_ID'
  | 'SKU'
  | 'NAME'
  | 'DESCRIPTION'
  | 'WEIGHT'
  | 'QTY'
  | 'PRICE'
  | 'BASE_PRICE'
  | 'CUSTOM_PRICE'
  | 'DISCOUNT_PERCENT'
  | 'DISCOUNT_AMOUNT'
  | 'BASE_DISCOUNT_AMOUNT'
  | 'TAX_PERCENT'
  | 'TAX_AMOUNT'
  | 'BASE_TAX_AMOUNT'
  | 'ROW_TOTAL'
  | 'BASE_ROW_TOTAL'
  | 'ROW_TOTAL_WITH_DISCOUNT'
  | 'ROW_WEIGHT'
  | 'PRODUCT_TYPE'
  | 'BASE_TAX_BEFORE_DISCOUNT'
  | 'TAX_BEFORE_DISCOUNT'
  | 'ORIGINAL_CUSTOM_PRICE'
  | 'PRICE_INC_TAX'
  | 'BASE_PRICE_INC_TAX'
  | 'ROW_TOTAL_INC_TAX'
  | 'BASE_ROW_TOTAL_INC_TAX'
  | 'DISCOUNT_TAX_COMPENSATION_AMOUNT'
  | 'BASE_DISCOUNT_TAX_COMPENSATION_AMOUNT'
  | 'FREE_SHIPPING';

/** Specifies the field to use for sorting quote items */
export type QuoteItemsSortInput = {
  /** Specifies the quote items field to sort by */
  field: SortQuoteItemsEnum;
  /** Specifies the order of quote items' sorting */
  order: SortEnum;
};

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid?: InputMaybe<Scalars['ID']['input']>;
  /** The string value of the option. */
  value_string: Scalars['String']['input'];
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** A valid coupon code. */
  coupon_code: Scalars['String']['input'];
};

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Text provided by the shopper. */
  customer_notes?: InputMaybe<Scalars['String']['input']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']['input']>;
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['input'];
  /** The company specified for the billing or shipping address. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String']['input'];
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['input'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['input'];
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A string that defines the state or province of the billing or shipping address. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars['String']['input']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The telephone number for the billing or shipping address. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The VAT company number for billing or shipping address. */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String']['input'];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String']['input'];
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Defines the payment method. */
export type PaymentMethodInput = {
  affirm?: InputMaybe<AffirmInput>;
  braintree?: InputMaybe<BraintreeInput>;
  braintree_ach_direct_debit?: InputMaybe<BraintreeInput>;
  braintree_ach_direct_debit_vault?: InputMaybe<BraintreeVaultInput>;
  braintree_applepay_vault?: InputMaybe<BraintreeVaultInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  braintree_googlepay_vault?: InputMaybe<BraintreeVaultInput>;
  braintree_paypal?: InputMaybe<BraintreeInput>;
  braintree_paypal_vault?: InputMaybe<BraintreeVaultInput>;
  /** The internal name for the payment method. */
  code: Scalars['String']['input'];
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: InputMaybe<HostedProInput>;
  klarna?: InputMaybe<KlarnaInput>;
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Apple Pay button */
  payment_services_paypal_apple_pay?: InputMaybe<ApplePayMethodInput>;
  /** Required input for Google Pay button */
  payment_services_paypal_google_pay?: InputMaybe<GooglePayMethodInput>;
  /** Required input for Hosted Fields */
  payment_services_paypal_hosted_fields?: InputMaybe<HostedFieldsInput>;
  /** Required input for Smart buttons */
  payment_services_paypal_smart_buttons?: InputMaybe<SmartButtonMethodInput>;
  /** Required input for vault */
  payment_services_paypal_vault?: InputMaybe<VaultMethodInput>;
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The email address of the guest. */
  email: Scalars['String']['input'];
};

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type CartPrices = {
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead. */
  discount?: Maybe<CartDiscount>;
  /** An array containing cart rule discounts, store credit and gift cards applied to the cart. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total?: Maybe<Money>;
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax?: Maybe<Money>;
  /** The subtotal including any applied taxes. */
  subtotal_including_tax?: Maybe<Money>;
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

/** Contains tax information about an item in the cart. */
export type CartTaxItem = {
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The description of the tax. */
  label: Scalars['String']['output'];
};

/** Contains information about discounts applied to the cart. */
export type CartDiscount = {
  /** The amount of the discount applied to the item. */
  amount: Money;
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']['output']>>;
};

export type CreateGuestCartOutput = {
  /** The newly created cart. */
  cart?: Maybe<Cart>;
};

/** Contains details about the cart after setting the payment method. */
export type SetPaymentMethodOnCartOutput = {
  /** The cart after setting the payment method. */
  cart: Cart;
};

/** Contains details about the cart after setting the billing address. */
export type SetBillingAddressOnCartOutput = {
  /** The cart after setting the billing address. */
  cart: Cart;
};

/** Contains details about the cart after setting the shipping addresses. */
export type SetShippingAddressesOnCartOutput = {
  /** The cart after setting the shipping addresses. */
  cart: Cart;
};

/** Contains details about the cart after setting the shipping methods. */
export type SetShippingMethodsOnCartOutput = {
  /** The cart after setting the shipping methods. */
  cart: Cart;
};

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponToCartOutput = {
  /** The cart after applying a coupon. */
  cart: Cart;
};

/** Contains the results of the request to place an order. */
export type PlaceOrderOutput = {
  /** An array of place order errors. */
  errors: Array<Maybe<PlaceOrderError>>;
  /**
   * The ID of the order.
   * @deprecated Use `orderV2` instead.
   */
  order?: Maybe<Order>;
  /** Full order information. */
  orderV2?: Maybe<CustomerOrder>;
};

/** An error encountered while placing an order. */
export type PlaceOrderError = {
  /** An error code that is specific to place order. */
  code: PlaceOrderErrorCodes;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** Contains the contents and other details about a guest or customer cart. */
export type Cart = {
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** An array of available payment methods. */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  /** The billing address assigned to the cart. */
  billing_address?: Maybe<BillingCartAddress>;
  delivery: CartDelivery;
  /** The email address of the guest or customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID']['output'];
  /** Installer and appointment information attached to the cart */
  installer: CartInstaller;
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean']['output'];
  /**
   * An array of products that have been added to the cart.
   * @deprecated Use `itemsV2` instead.
   */
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  itemsV2?: Maybe<CartItems>;
  /** Pricing details for the quote. */
  prices?: Maybe<CartPrices>;
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float']['output'];
};


/** Contains the contents and other details about a guest or customer cart. */
export type CartitemsV2Args = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<QuoteItemsSortInput>;
};

export type CartItems = {
  /** An array of products that have been added to the cart. */
  items: Array<Maybe<CartItemInterface>>;
  /** Metadata for pagination rendering. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of returned cart items. */
  total_count: Scalars['Int']['output'];
};

export type CartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Contains shipping addresses and methods. */
export type ShippingCartAddress = CartAddressInterface & {
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  /** An array that lists the items in the cart. */
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** Text provided by the shopper. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight?: Maybe<Scalars['Float']['output']>;
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: Maybe<Scalars['String']['output']>;
  pickup_location_code?: Maybe<Scalars['String']['output']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An object that describes the selected shipping method. */
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the billing address. */
export type BillingCartAddress = CartAddressInterface & {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type CartItemQuantity = {
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']['output'];
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']['output'];
};

/** Contains details about the region in a billing or shipping address. */
export type CartAddressRegion = {
  /** The state or province code. */
  code?: Maybe<Scalars['String']['output']>;
  /** The display label for the region. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Contains details the country in a billing or shipping address. */
export type CartAddressCountry = {
  /** The country code. */
  code: Scalars['String']['output'];
  /** The display label for the country. */
  label: Scalars['String']['output'];
};

/** Contains details about the selected shipping method and carrier. */
export type SelectedShippingMethod = {
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String']['output'];
  /** The label for the method code. */
  method_title: Scalars['String']['output'];
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

/** Contains details about the possible shipping methods and carriers. */
export type AvailableShippingMethod = {
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean']['output'];
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** Describes an error condition. */
  error_message?: Maybe<Scalars['String']['output']>;
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code?: Maybe<Scalars['String']['output']>;
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title?: Maybe<Scalars['String']['output']>;
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

/** Describes a payment method that the shopper can use to pay for the order. */
export type AvailablePaymentMethod = {
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** If the payment method is an online integration */
  is_deferred: Scalars['Boolean']['output'];
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Describes the payment method the shopper selected. */
export type SelectedPaymentMethod = {
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Contains the applied coupon code. */
export type AppliedCoupon = {
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String']['output'];
};

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after removing a coupon. */
export type RemoveCouponFromCartOutput = {
  /** The cart after removing a coupon. */
  cart?: Maybe<Cart>;
};

/** Contains details about the cart after adding simple or group products. */
export type AddSimpleProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about the cart after adding virtual products. */
export type AddVirtualProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about the cart after updating items. */
export type UpdateCartItemsOutput = {
  /** The cart after updating products. */
  cart: Cart;
};

/** Contains details about the cart after removing an item. */
export type RemoveItemFromCartOutput = {
  /** The cart after removing an item. */
  cart: Cart;
};

/** Contains details about the cart after setting the email of a guest. */
export type SetGuestEmailOnCartOutput = {
  /** The cart after setting the guest email. */
  cart: Cart;
};

/** An implementation for simple product cart items. */
export type SimpleCartItem = CartItemInterface & {
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** An implementation for virtual product cart items. */
export type VirtualCartItem = CartItemInterface & {
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** An interface for products in a cart. */
export type CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

export type CartItemError = {
  /** An error code that describes the error encountered */
  code: CartItemErrorType;
  /** A localized error message */
  message: Scalars['String']['output'];
};

export type CartItemErrorType =
  | 'UNDEFINED'
  | 'ITEM_QTY'
  | 'ITEM_INCREMENTS';

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item, shipping. */
export type Discount = {
  /** The amount of the discount. */
  amount: Money;
  /** The type of the entity the discount is applied to. */
  applied_to: CartDiscountType;
  /** The coupon related to the discount. */
  coupon?: Maybe<AppliedCoupon>;
  /** A description of the discount. */
  label: Scalars['String']['output'];
};

export type CartDiscountType =
  | 'ITEM'
  | 'SHIPPING';

/** Contains details about the price of the item, including taxes and discounts. */
export type CartItemPrices = {
  /** An array of discounts to be applied to the cart item. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money;
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money;
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item. */
  total_item_discount?: Maybe<Money>;
};

/** Identifies a customized product that has been placed in a cart. */
export type SelectedCustomizableOption = {
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean']['output'];
  /** The display name of the selected customizable option. */
  label: Scalars['String']['output'];
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int']['output'];
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String']['output'];
  /** An array of selectable values. */
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

/** Identifies the value of the selected customized option. */
export type SelectedCustomizableOptionValue = {
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display name of the selected value. */
  label: Scalars['String']['output'];
  /** The price of the selected customizable value. */
  price: CartItemSelectedOptionValuePrice;
  /** The text identifying the selected value. */
  value: Scalars['String']['output'];
};

/** Contains details about the price of a selected customizable value. */
export type CartItemSelectedOptionValuePrice = {
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: PriceTypeEnum;
  /** A string that describes the unit of the value. */
  units: Scalars['String']['output'];
  /** A price value. */
  value: Scalars['Float']['output'];
};

/** Contains the order ID. */
export type Order = {
  /** @deprecated Use `order_number` instead. */
  order_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String']['output'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  /** A cart-specific error code. */
  code: CartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** Contains details about the cart after adding products to it. */
export type AddProductsToCartOutput = {
  /** The cart after products have been added. */
  cart: Cart;
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

export type CartUserInputErrorType =
  | 'PRODUCT_NOT_FOUND'
  | 'NOT_SALABLE'
  | 'INSUFFICIENT_STOCK'
  | 'UNDEFINED';

export type PlaceOrderErrorCodes =
  | 'CART_NOT_FOUND'
  | 'CART_NOT_ACTIVE'
  | 'GUEST_EMAIL_MISSING'
  | 'UNABLE_TO_PLACE_ORDER'
  | 'UNDEFINED';

export type EstimateTotalsInput = {
  /** Customer's address to estimate totals. */
  address: EstimateAddressInput;
  /** The unique ID of the cart to query. */
  cart_id: Scalars['String']['input'];
  /** Selected shipping method to estimate totals. */
  shipping_method?: InputMaybe<ShippingMethodInput>;
};

/** Estimate totals output. */
export type EstimateTotalsOutput = {
  /** Cart after totals estimation */
  cart?: Maybe<Cart>;
};

/** Contains details about an address. */
export type EstimateAddressInput = {
  /** The two-letter code representing the customer's country. */
  country_code: CountryCodeEnum;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
};

export type ContactUsInput = {
  /** The shopper's comment to the merchant. */
  comment: Scalars['String']['input'];
  /** The email address of the shopper. */
  email: Scalars['String']['input'];
  /** The full name of the shopper. */
  name: Scalars['String']['input'];
  /** The shopper's telephone number. */
  telephone?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the status of the request. */
export type ContactUsOutput = {
  /** Indicates whether the request was successful. */
  status: Scalars['Boolean']['output'];
};

export type Currency = {
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The base currency set for the store, such as USD. */
  base_currency_code?: Maybe<Scalars['String']['output']>;
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']['output']>;
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code?: Maybe<Scalars['String']['output']>;
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** Lists the exchange rate. */
export type ExchangeRate = {
  /** Specifies the store’s default currency to exchange to. */
  currency_to?: Maybe<Scalars['String']['output']>;
  /** The exchange rate for the store’s default currency. */
  rate?: Maybe<Scalars['Float']['output']>;
};

export type Country = {
  /** An array of regions within a particular country. */
  available_regions?: Maybe<Array<Maybe<Region>>>;
  /** The name of the country in English. */
  full_name_english?: Maybe<Scalars['String']['output']>;
  /** The name of the country in the current locale. */
  full_name_locale?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']['output']>;
  /** The three-letter abbreviation of the country, such as USA. */
  three_letter_abbreviation?: Maybe<Scalars['String']['output']>;
  /** The two-letter abbreviation of the country, such as US. */
  two_letter_abbreviation?: Maybe<Scalars['String']['output']>;
};

export type Region = {
  /** The two-letter code for the region, such as TX for Texas. */
  code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The name of the region, such as Texas. */
  name?: Maybe<Scalars['String']['output']>;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int']['input'];
};

/** Contains details about the cart after adding downloadable products. */
export type AddDownloadableProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

/** An implementation for downloadable product cart items. */
export type DownloadableCartItem = CartItemInterface & {
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output'];
  /** An array containing information about the links for the downloadable product added to the cart. */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about samples of the selected downloadable product. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a product that the shopper downloads. */
export type DownloadableProduct = ProductInterface & RoutableInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  allow_credit_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition?: Maybe<Scalars['Int']['output']>;
  /** List of FAQ Questions Assigned to a Product. */
  amfaq_questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  approved_rim_width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  attr_3pmsf?: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  backspacing_in?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_product_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_2?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_3?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern_alternative?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['Int']['output']>;
  /** Brand logo for a product, looks for brand attribute value, then searches for a file under that name in media/brands dir. Needs refactoring to include integration with UI components win admin. */
  brand_logo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_text?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type_text?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_ranking?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  center_bore_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  commercial_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construction_type?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_amount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_rate?: Maybe<Scalars['Float']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  custom_stock_status?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  deals_discounts?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Returns broken down description for the new design. */
  description_overview?: Maybe<DescriptionOverview>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dlvr_block?: Maybe<Scalars['String']['output']>;
  /** An array containing information about the links for this downloadable product. */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  google_brand?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hub_size?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A value of 1 indicates that each link in the array must be purchased separately. */
  links_purchased_separately?: Maybe<Scalars['Int']['output']>;
  /** The heading above the list of downloadable products. */
  links_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_capacity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_and_speed_rating?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_configurable_variation?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_air_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_credit?: Maybe<Scalars['Float']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  min_credit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mpn1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  msrp_price?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  oe_tire_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_mm_inner?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_outer?: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  overall_diameter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  parent_url_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_text?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Aggregated rating information for the product, including average rating and review count. */
  productRating?: Maybe<ProductRating>;
  /** Returns all related productUrl entities for the product. */
  productUrl?: Maybe<ProductUrl>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rebate_available?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_structure?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width_text?: Maybe<Scalars['String']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  simple_preselect?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_text?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  speed_rating?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spoke_count?: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_tube_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_accessories?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_applicable_regions?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery_life?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_connectivity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_g_sensor_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_low_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modification_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modified_item?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_non_domestic_product?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_obd_interface?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_humidity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_monitoring_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_sensor_compatible?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_storage_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_supported_system?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_display?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_radio_reception?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_transmission_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_vehicle_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_compatible_sizes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_sizes?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  utqg?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_location?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_max_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_retention?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_specification?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  website_product_ranking?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_construction_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_direction?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_finish?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_lip_size_mm?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_shine?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  winter_tire_type?: Maybe<Scalars['Int']['output']>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductcustom_attributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

export type DownloadableFileTypeEnum =
  | 'FILE'
  | 'URL';

/** Defines characteristics of a downloadable product. */
export type DownloadableProductLinks = {
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads?: Maybe<Scalars['Int']['output']>;
  /** The price of the downloadable product. */
  price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductSamples = {
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the sample. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Defines downloadable product options for `OrderItemInterface`. */
export type DownloadableOrderItem = OrderItemInterface & {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The ProductInterface object, which contains details about the base product */
  product?: Maybe<ProductInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type DownloadableInvoiceItem = InvoiceItemInterface & {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Defines characteristics of the links for downloadable product. */
export type DownloadableItemsLinks = {
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID']['output'];
};

/** A downloadable product wish list item. */
export type DownloadableWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** An array containing information about the selected links. */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about the selected samples. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

/** Contains a list of downloadable products. */
export type CustomerDownloadableProducts = {
  /** An array of purchased downloadable items. */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

/** Contains details about a single downloadable product. */
export type CustomerDownloadableProduct = {
  /** The date and time the purchase was made. */
  date?: Maybe<Scalars['String']['output']>;
  /** The fully qualified URL to the download file. */
  download_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID assigned to the item. */
  order_increment_id?: Maybe<Scalars['String']['output']>;
  /** The remaining number of times the customer can download the product. */
  remaining_downloads?: Maybe<Scalars['String']['output']>;
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value?: Maybe<Scalars['Float']['output']>;
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id?: Maybe<Scalars['Float']['output']>;
};

/** Defines a price based on the quantity purchased. */
export type TierPrice = {
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  /** The price of the product at this tier. */
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** An implementation for configurable product cart items. */
export type ConfigurableCartItem = CartItemInterface & {
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item. */
  configured_variant: ProductInterface;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** An implementation for bundle product cart items. */
export type BundleCartItem = CartItemInterface & {
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  /** Sender name */
  from: Scalars['String']['output'];
  /** Gift message text */
  message: Scalars['String']['output'];
  /** Recipient name */
  to: Scalars['String']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String']['input'];
  /** Gift message text */
  message: Scalars['String']['input'];
  /** Recipient name */
  to: Scalars['String']['input'];
};

export type SalesItemInterface = {
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** Contains details about each of the customer's orders. */
export type CustomerOrder = {
  /** Coupons applied to the order. */
  applied_coupons: Array<Maybe<AppliedCoupon>>;
  /** The billing address for the order. */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery. */
  carrier?: Maybe<Scalars['String']['output']>;
  /** Comments about the order. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the `order_date` field instead. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** A list of credit memos. */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** Order customer email. */
  email?: Maybe<Scalars['String']['output']>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID']['output'];
  /** @deprecated Use the `id` field instead. */
  increment_id?: Maybe<Scalars['String']['output']>;
  /** A list of invoices for the order. */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order. */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number. */
  number: Scalars['String']['output'];
  /** The date the order was placed. */
  order_date: Scalars['String']['output'];
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']['output'];
  /** Payment details for the order. */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** A list of shipments for the order. */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order. */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order. */
  shipping_method?: Maybe<Scalars['String']['output']>;
  /** The current status of the order. */
  status: Scalars['String']['output'];
  /** The token that can be used to retrieve the order using order query. */
  token: Scalars['String']['output'];
  /** Details about the calculated totals for this order. */
  total?: Maybe<OrderTotal>;
};

/** Order item details. */
export type OrderItemInterface = {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The ProductInterface object, which contains details about the base product */
  product?: Maybe<ProductInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int']['input'];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float']['input'];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Contains details about the cart after adding bundle products. */
export type AddBundleProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about a selected bundle option. */
export type SelectedBundleOption = {
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The type of selected bundle product option. */
  type: Scalars['String']['output'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID']['output'];
  /** An array of selected bundle option values. */
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

/** Contains details about a value for a selected bundle option. */
export type SelectedBundleOptionValue = {
  /** Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The price of the value for the selected bundle product option. */
  price: Scalars['Float']['output'];
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID']['output'];
};

/** Can be used to retrieve the main price details in case of bundle product */
export type PriceDetails = {
  /** The percentage of discount applied to the main product price */
  discount_percentage?: Maybe<Scalars['Float']['output']>;
  /** The final price after applying the discount to the main product */
  main_final_price?: Maybe<Scalars['Float']['output']>;
  /** The regular price of the main product */
  main_price?: Maybe<Scalars['Float']['output']>;
};

/** Defines an individual item within a bundle product. */
export type BundleItem = {
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']['output']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']['output']>;
};

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type BundleItemOption = {
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']['output']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /** The quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID']['output'];
};

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  allow_credit_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition?: Maybe<Scalars['Int']['output']>;
  /** List of FAQ Questions Assigned to a Product. */
  amfaq_questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  approved_rim_width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  attr_3pmsf?: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  backspacing_in?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_product_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_2?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_3?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern_alternative?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['Int']['output']>;
  /** Brand logo for a product, looks for brand attribute value, then searches for a file under that name in media/brands dir. Needs refactoring to include integration with UI components win admin. */
  brand_logo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_text?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type_text?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_ranking?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  center_bore_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  commercial_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construction_type?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_amount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_rate?: Maybe<Scalars['Float']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  custom_stock_status?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  deals_discounts?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Returns broken down description for the new design. */
  description_overview?: Maybe<DescriptionOverview>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dlvr_block?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamic SKU. */
  dynamic_sku?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  google_brand?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hub_size?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_capacity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_and_speed_rating?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_configurable_variation?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_air_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_credit?: Maybe<Scalars['Float']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  min_credit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mpn1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  msrp_price?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  oe_tire_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_mm_inner?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_outer?: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  overall_diameter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  parent_url_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_text?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The price details of the main product */
  price_details?: Maybe<PriceDetails>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** Aggregated rating information for the product, including average rating and review count. */
  productRating?: Maybe<ProductRating>;
  /** Returns all related productUrl entities for the product. */
  productUrl?: Maybe<ProductUrl>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rebate_available?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_structure?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width_text?: Maybe<Scalars['String']['output']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  simple_preselect?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_text?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  speed_rating?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spoke_count?: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_tube_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_accessories?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_applicable_regions?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery_life?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_connectivity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_g_sensor_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_low_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modification_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modified_item?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_non_domestic_product?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_obd_interface?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_humidity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_monitoring_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_sensor_compatible?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_storage_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_supported_system?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_display?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_radio_reception?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_transmission_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_vehicle_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_compatible_sizes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_sizes?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  utqg?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_location?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_max_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_retention?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_specification?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  website_product_ranking?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_construction_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_direction?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_finish?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_lip_size_mm?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_shine?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  winter_tire_type?: Maybe<Scalars['Int']['output']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductcustom_attributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export type PriceViewEnum =
  | 'PRICE_RANGE'
  | 'AS_LOW_AS';

/** Defines whether bundle items must be shipped together. */
export type ShipBundleItemsEnum =
  | 'TOGETHER'
  | 'SEPARATELY';

/** Defines bundle product options for `OrderItemInterface`. */
export type BundleOrderItem = OrderItemInterface & {
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The ProductInterface object, which contains details about the base product */
  product?: Maybe<ProductInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines bundle product options for `InvoiceItemInterface`. */
export type BundleInvoiceItem = InvoiceItemInterface & {
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines bundle product options for `ShipmentItemInterface`. */
export type BundleShipmentItem = ShipmentItemInterface & {
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type BundleCreditMemoItem = CreditMemoItemInterface & {
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** A list of options of the selected bundle product. */
export type ItemSelectedBundleOption = {
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The label of the option. */
  label: Scalars['String']['output'];
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID']['output'];
  /** A list of products that represent the values of the parent option. */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product. */
export type ItemSelectedBundleOptionValue = {
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The price of the child bundle product. */
  price: Money;
  /** The name of the child bundle product. */
  product_name: Scalars['String']['output'];
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String']['output'];
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID']['output'];
};

/** Defines bundle product options for `WishlistItemInterface`. */
export type BundleWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** An array containing information about the selected bundle items. */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  allow_credit_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition?: Maybe<Scalars['Int']['output']>;
  /** List of FAQ Questions Assigned to a Product. */
  amfaq_questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  approved_rim_width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  attr_3pmsf?: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  backspacing_in?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_product_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_2?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_3?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern_alternative?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['Int']['output']>;
  /** Brand logo for a product, looks for brand attribute value, then searches for a file under that name in media/brands dir. Needs refactoring to include integration with UI components win admin. */
  brand_logo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_text?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type_text?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_ranking?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  center_bore_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  commercial_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construction_type?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_amount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_rate?: Maybe<Scalars['Float']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  custom_stock_status?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  deals_discounts?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Returns broken down description for the new design. */
  description_overview?: Maybe<DescriptionOverview>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dlvr_block?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  google_brand?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hub_size?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing grouped product items. */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_capacity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_and_speed_rating?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_configurable_variation?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_air_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_credit?: Maybe<Scalars['Float']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  min_credit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mpn1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  msrp_price?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  oe_tire_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_mm_inner?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_outer?: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  overall_diameter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  parent_url_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_text?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Aggregated rating information for the product, including average rating and review count. */
  productRating?: Maybe<ProductRating>;
  /** Returns all related productUrl entities for the product. */
  productUrl?: Maybe<ProductUrl>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rebate_available?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_structure?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width_text?: Maybe<Scalars['String']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  simple_preselect?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_text?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  speed_rating?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spoke_count?: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_tube_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_accessories?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_applicable_regions?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery_life?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_connectivity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_g_sensor_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_low_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modification_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modified_item?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_non_domestic_product?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_obd_interface?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_humidity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_monitoring_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_sensor_compatible?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_storage_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_supported_system?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_display?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_radio_reception?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_transmission_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_vehicle_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_compatible_sizes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_sizes?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  utqg?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_location?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_max_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_retention?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_specification?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  website_product_ranking?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_construction_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_direction?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_finish?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_lip_size_mm?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_shine?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  winter_tire_type?: Maybe<Scalars['Int']['output']>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductcustom_attributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains information about an individual grouped product item. */
export type GroupedProductItem = {
  /** The relative position of this item compared to the other group items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Details about this product option. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item. */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** A grouped product wish list item. */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProduct = ProductInterface & RoutableInterface & PhysicalProductInterface & CustomizableProductInterface & {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  allow_credit_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition?: Maybe<Scalars['Int']['output']>;
  /** List of FAQ Questions Assigned to a Product. */
  amfaq_questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  approved_rim_width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aspect_ratio_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  attr_3pmsf?: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  backspacing_in?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_product_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_2?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bc_searchspring_3?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bolt_pattern_alternative?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand?: Maybe<Scalars['Int']['output']>;
  /** Brand logo for a product, looks for brand attribute value, then searches for a file under that name in media/brands dir. Needs refactoring to include integration with UI components win admin. */
  brand_logo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_text?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  car_type_text?: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_ranking?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  center_bore_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  commercial_type?: Maybe<Scalars['Int']['output']>;
  /** An array of options for the configurable product. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construction_type?: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_amount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  credit_rate?: Maybe<Scalars['Float']['output']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  custom_stock_status?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  deals_discounts?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Returns broken down description for the new design. */
  description_overview?: Maybe<DescriptionOverview>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dlvr_block?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  google_brand?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hub_size?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_capacity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_and_speed_rating?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_index_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  load_range_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lug_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_configurable_variation?: Maybe<Scalars['String']['output']>;
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_air_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_credit?: Maybe<Scalars['Float']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  min_credit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  model_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mpn1?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  msrp_price?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  oe_tire_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_mm_inner?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  offset_outer?: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  overall_diameter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  parent_url_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_text?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Aggregated rating information for the product, including average rating and review count. */
  productRating?: Maybe<ProductRating>;
  /** Returns all related productUrl entities for the product. */
  productUrl?: Maybe<ProductUrl>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rebate_available?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of products to be displayed in a Related Products block. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_diameter_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rim_structure?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  road_hazard_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  run_flat_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  season_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  section_width_text?: Maybe<Scalars['String']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sidewall_specifics_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  simple_preselect?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_text?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  speed_rating?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spoke_count?: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tire_tube_material?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_accessories?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_applicable_regions?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_battery_life?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_connectivity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_g_sensor_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_low_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modification_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_modified_item?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_non_domestic_product?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_obd_interface?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_humidity?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_monitoring_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_pressure_reading_accuracy?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_sensor_compatible?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_storage_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_supported_system?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_display?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_operating_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_tool_radio_reception?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_transmission_power?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tpms_vehicle_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tread_depth_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treadlife_warranty_text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_compatible_sizes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tube_sizes?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  utqg?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_location?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_max_pressure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_retention?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_specification?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valve_stem_type?: Maybe<Scalars['String']['output']>;
  /** An array of simple product variants. */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  website_product_ranking?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_color?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_construction_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_direction?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_finish?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_lip_size_mm?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_position?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_shine?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_size?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  wheel_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  winter_tire_type?: Maybe<Scalars['Int']['output']>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductconfigurable_product_options_selectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductcustom_attributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains all the simple product variants of a configurable product. */
export type ConfigurableVariant = {
  /** An array of configurable attribute options. */
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  /** An array of linked simple products. */
  product?: Maybe<SimpleProduct>;
};

/** Contains details about a configurable product attribute option. */
export type ConfigurableAttributeOption = {
  /** The ID assigned to the attribute. */
  code?: Maybe<Scalars['String']['output']>;
  /** A string that describes the configurable attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID']['output'];
  /** A unique index number assigned to the configurable product option. */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** Defines configurable attributes for the specified product. */
export type ConfigurableProductOptions = {
  /** A string that identifies the attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID']['output'];
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** A displayed string that describes the configurable product option. */
  label?: Maybe<Scalars['String']['output']>;
  /** A number that indicates the order in which the attribute is displayed. */
  position?: Maybe<Scalars['Int']['output']>;
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID']['output'];
  /** Indicates whether the option is the default. */
  use_default?: Maybe<Scalars['Boolean']['output']>;
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Contains the index number assigned to a configurable product option. */
export type ConfigurableProductOptionsValues = {
  /** The label of the product on the default store. */
  default_label?: Maybe<Scalars['String']['output']>;
  /** The label of the product. */
  label?: Maybe<Scalars['String']['output']>;
  /** The label of the product on the current store. */
  store_label?: Maybe<Scalars['String']['output']>;
  /** Swatch data for a configurable product option. */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid?: Maybe<Scalars['ID']['output']>;
  /** Indicates whether to use the default_label. */
  use_default_value?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

/** Contains details about the cart after adding configurable products. */
export type AddConfigurableProductsToCartOutput = {
  /** The cart after adding products. */
  cart: Cart;
};

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a selected configurable option. */
export type SelectedConfigurableOption = {
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID']['output'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display text for the option. */
  option_label: Scalars['String']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']['output'];
  /** The display name of the selected configurable option. */
  value_label: Scalars['String']['output'];
};

/** A configurable product wish list item. */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String']['output'];
  /** An array of selected configurable options. */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant?: Maybe<ProductInterface>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains metadata corresponding to the selected configurable options. */
export type ConfigurableProductOptionsSelection = {
  /** An array of all possible configurable options. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant?: Maybe<SimpleProduct>;
};

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type ConfigurableOptionAvailableForSelection = {
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']['output']>>;
};

/** Contains details about configurable product options. */
export type ConfigurableProductOption = {
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** The display name of the option. */
  label: Scalars['String']['output'];
  /** The unique ID of the configurable option. */
  uid: Scalars['ID']['output'];
  /** An array of values that are applicable for this option. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

/** Defines a value for a configurable product option. */
export type ConfigurableProductOptionValue = {
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean']['output'];
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean']['output'];
  /** The display name of the value. */
  label: Scalars['String']['output'];
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch?: Maybe<SwatchDataInterface>;
  /** The unique ID of the value. */
  uid: Scalars['ID']['output'];
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int']['input'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String']['input'];
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  city?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pickup_location_code?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['Int']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String']['input'];
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export type ProductStockStatus =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK';

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String']['input'];
};

/** Contains the generated customer token. */
export type GenerateCustomerTokenAsAdminOutput = {
  /** The generated customer token. */
  customer_token: Scalars['String']['output'];
};

/** Defines the customer name, addresses, and other details. */
export type Customer = {
  /** An array containing the customer's shipping and billing addresses. */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean']['output'];
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** The customer's confirmation status. */
  confirmation_status: ConfirmationStatusEnum;
  /** Timestamp indicating when the account was created. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Customer's custom attributes. */
  custom_attributes?: Maybe<Array<Maybe<AttributeValueInterface>>>;
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the billing address. */
  default_billing?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the shipping address. */
  default_shipping?: Maybe<Scalars['String']['output']>;
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob?: Maybe<Scalars['String']['output']>;
  /** The customer's email address. Required. */
  email?: Maybe<Scalars['String']['output']>;
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID assigned to the customer.
   * @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Contains the customer's product reviews. */
  reviews: ProductReviews;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']['output']>;
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: Wishlist;
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2?: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Defines the customer name, addresses, and other details. */
export type Customercustom_attributesArgs = {
  attributeCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerordersArgs = {
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CustomerOrderSortInput>;
  scope?: InputMaybe<ScopeTypeEnum>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerreviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Defines the customer name, addresses, and other details. */
export type Customerwishlist_v2Args = {
  id: Scalars['ID']['input'];
};


/** Defines the customer name, addresses, and other details. */
export type CustomerwishlistsArgs = {
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's custom attributes. */
  custom_attributes?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. */
  email: Scalars['String']['input'];
  /** The customer's first name. */
  firstname: Scalars['String']['input'];
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname: Scalars['String']['input'];
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's custom attributes. */
  custom_attributes?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a customer email address to confirm. */
export type ConfirmEmailInput = {
  /** The key to confirm the email address. */
  confirmation_key: Scalars['String']['input'];
  /** The email address to be confirmed. */
  email: Scalars['String']['input'];
};

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The customer's company. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated. Use custom_attributesV2 instead. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Custom attributes assigned to the customer address. */
  custom_attributesV2?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String']['input'];
  /** The value assigned to the attribute. */
  value: Scalars['String']['input'];
};

/** Contains a customer authorization token. */
export type CustomerToken = {
  /** The customer authorization token. */
  token?: Maybe<Scalars['String']['output']>;
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. Required when creating a customer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a newly-created or updated customer. */
export type CustomerOutput = {
  /** Customer details after creating or updating a customer. */
  customer: Customer;
};

/** Contains the result of a request to revoke a customer token. */
export type RevokeCustomerTokenOutput = {
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean']['output'];
};

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddress = {
  /** The customer's city or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use custom_attributesV2 instead. */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** Custom attributes assigned to the customer address. */
  custom_attributesV2: Array<Maybe<AttributeValueInterface>>;
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the address is the customer's default billing address. */
  default_billing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping?: Maybe<Scalars['Boolean']['output']>;
  /** Contains any extension attributes for the address. */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of a `CustomerAddress` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The family name of the person associated with the shipping/billing address. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
  /** An array of strings that define the street number and name. */
  street?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};


/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddresscustom_attributesV2Args = {
  attributeCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegion = {
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The address region code. */
  region_code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Specifies the attribute code and value of a customer address attribute. */
export type CustomerAddressAttribute = {
  /** The name assigned to the customer address attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** The value assigned to the customer address attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains the result of the `isEmailAvailable` query. */
export type IsEmailAvailableOutput = {
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available?: Maybe<Scalars['Boolean']['output']>;
};

/** The list of country codes. */
export type CountryCodeEnum =
  /** Afghanistan */
  | 'AF'
  /** Åland Islands */
  | 'AX'
  /** Albania */
  | 'AL'
  /** Algeria */
  | 'DZ'
  /** American Samoa */
  | 'AS'
  /** Andorra */
  | 'AD'
  /** Angola */
  | 'AO'
  /** Anguilla */
  | 'AI'
  /** Antarctica */
  | 'AQ'
  /** Antigua & Barbuda */
  | 'AG'
  /** Argentina */
  | 'AR'
  /** Armenia */
  | 'AM'
  /** Aruba */
  | 'AW'
  /** Australia */
  | 'AU'
  /** Austria */
  | 'AT'
  /** Azerbaijan */
  | 'AZ'
  /** Bahamas */
  | 'BS'
  /** Bahrain */
  | 'BH'
  /** Bangladesh */
  | 'BD'
  /** Barbados */
  | 'BB'
  /** Belarus */
  | 'BY'
  /** Belgium */
  | 'BE'
  /** Belize */
  | 'BZ'
  /** Benin */
  | 'BJ'
  /** Bermuda */
  | 'BM'
  /** Bhutan */
  | 'BT'
  /** Bolivia */
  | 'BO'
  /** Bosnia & Herzegovina */
  | 'BA'
  /** Botswana */
  | 'BW'
  /** Bouvet Island */
  | 'BV'
  /** Brazil */
  | 'BR'
  /** British Indian Ocean Territory */
  | 'IO'
  /** British Virgin Islands */
  | 'VG'
  /** Brunei */
  | 'BN'
  /** Bulgaria */
  | 'BG'
  /** Burkina Faso */
  | 'BF'
  /** Burundi */
  | 'BI'
  /** Cambodia */
  | 'KH'
  /** Cameroon */
  | 'CM'
  /** Canada */
  | 'CA'
  /** Cape Verde */
  | 'CV'
  /** Cayman Islands */
  | 'KY'
  /** Central African Republic */
  | 'CF'
  /** Chad */
  | 'TD'
  /** Chile */
  | 'CL'
  /** China */
  | 'CN'
  /** Christmas Island */
  | 'CX'
  /** Cocos (Keeling) Islands */
  | 'CC'
  /** Colombia */
  | 'CO'
  /** Comoros */
  | 'KM'
  /** Congo-Brazzaville */
  | 'CG'
  /** Congo-Kinshasa */
  | 'CD'
  /** Cook Islands */
  | 'CK'
  /** Costa Rica */
  | 'CR'
  /** Côte d’Ivoire */
  | 'CI'
  /** Croatia */
  | 'HR'
  /** Cuba */
  | 'CU'
  /** Cyprus */
  | 'CY'
  /** Czech Republic */
  | 'CZ'
  /** Denmark */
  | 'DK'
  /** Djibouti */
  | 'DJ'
  /** Dominica */
  | 'DM'
  /** Dominican Republic */
  | 'DO'
  /** Ecuador */
  | 'EC'
  /** Egypt */
  | 'EG'
  /** El Salvador */
  | 'SV'
  /** Equatorial Guinea */
  | 'GQ'
  /** Eritrea */
  | 'ER'
  /** Estonia */
  | 'EE'
  /** Eswatini */
  | 'SZ'
  /** Ethiopia */
  | 'ET'
  /** Falkland Islands */
  | 'FK'
  /** Faroe Islands */
  | 'FO'
  /** Fiji */
  | 'FJ'
  /** Finland */
  | 'FI'
  /** France */
  | 'FR'
  /** French Guiana */
  | 'GF'
  /** French Polynesia */
  | 'PF'
  /** French Southern Territories */
  | 'TF'
  /** Gabon */
  | 'GA'
  /** Gambia */
  | 'GM'
  /** Georgia */
  | 'GE'
  /** Germany */
  | 'DE'
  /** Ghana */
  | 'GH'
  /** Gibraltar */
  | 'GI'
  /** Greece */
  | 'GR'
  /** Greenland */
  | 'GL'
  /** Grenada */
  | 'GD'
  /** Guadeloupe */
  | 'GP'
  /** Guam */
  | 'GU'
  /** Guatemala */
  | 'GT'
  /** Guernsey */
  | 'GG'
  /** Guinea */
  | 'GN'
  /** Guinea-Bissau */
  | 'GW'
  /** Guyana */
  | 'GY'
  /** Haiti */
  | 'HT'
  /** Heard &amp; McDonald Islands */
  | 'HM'
  /** Honduras */
  | 'HN'
  /** Hong Kong SAR China */
  | 'HK'
  /** Hungary */
  | 'HU'
  /** Iceland */
  | 'IS'
  /** India */
  | 'IN'
  /** Indonesia */
  | 'ID'
  /** Iran */
  | 'IR'
  /** Iraq */
  | 'IQ'
  /** Ireland */
  | 'IE'
  /** Isle of Man */
  | 'IM'
  /** Israel */
  | 'IL'
  /** Italy */
  | 'IT'
  /** Jamaica */
  | 'JM'
  /** Japan */
  | 'JP'
  /** Jersey */
  | 'JE'
  /** Jordan */
  | 'JO'
  /** Kazakhstan */
  | 'KZ'
  /** Kenya */
  | 'KE'
  /** Kiribati */
  | 'KI'
  /** Kuwait */
  | 'KW'
  /** Kyrgyzstan */
  | 'KG'
  /** Laos */
  | 'LA'
  /** Latvia */
  | 'LV'
  /** Lebanon */
  | 'LB'
  /** Lesotho */
  | 'LS'
  /** Liberia */
  | 'LR'
  /** Libya */
  | 'LY'
  /** Liechtenstein */
  | 'LI'
  /** Lithuania */
  | 'LT'
  /** Luxembourg */
  | 'LU'
  /** Macau SAR China */
  | 'MO'
  /** Macedonia */
  | 'MK'
  /** Madagascar */
  | 'MG'
  /** Malawi */
  | 'MW'
  /** Malaysia */
  | 'MY'
  /** Maldives */
  | 'MV'
  /** Mali */
  | 'ML'
  /** Malta */
  | 'MT'
  /** Marshall Islands */
  | 'MH'
  /** Martinique */
  | 'MQ'
  /** Mauritania */
  | 'MR'
  /** Mauritius */
  | 'MU'
  /** Mayotte */
  | 'YT'
  /** Mexico */
  | 'MX'
  /** Micronesia */
  | 'FM'
  /** Moldova */
  | 'MD'
  /** Monaco */
  | 'MC'
  /** Mongolia */
  | 'MN'
  /** Montenegro */
  | 'ME'
  /** Montserrat */
  | 'MS'
  /** Morocco */
  | 'MA'
  /** Mozambique */
  | 'MZ'
  /** Myanmar (Burma) */
  | 'MM'
  /** Namibia */
  | 'NA'
  /** Nauru */
  | 'NR'
  /** Nepal */
  | 'NP'
  /** Netherlands */
  | 'NL'
  /** Netherlands Antilles */
  | 'AN'
  /** New Caledonia */
  | 'NC'
  /** New Zealand */
  | 'NZ'
  /** Nicaragua */
  | 'NI'
  /** Niger */
  | 'NE'
  /** Nigeria */
  | 'NG'
  /** Niue */
  | 'NU'
  /** Norfolk Island */
  | 'NF'
  /** Northern Mariana Islands */
  | 'MP'
  /** North Korea */
  | 'KP'
  /** Norway */
  | 'NO'
  /** Oman */
  | 'OM'
  /** Pakistan */
  | 'PK'
  /** Palau */
  | 'PW'
  /** Palestinian Territories */
  | 'PS'
  /** Panama */
  | 'PA'
  /** Papua New Guinea */
  | 'PG'
  /** Paraguay */
  | 'PY'
  /** Peru */
  | 'PE'
  /** Philippines */
  | 'PH'
  /** Pitcairn Islands */
  | 'PN'
  /** Poland */
  | 'PL'
  /** Portugal */
  | 'PT'
  /** Qatar */
  | 'QA'
  /** Réunion */
  | 'RE'
  /** Romania */
  | 'RO'
  /** Russia */
  | 'RU'
  /** Rwanda */
  | 'RW'
  /** Samoa */
  | 'WS'
  /** San Marino */
  | 'SM'
  /** São Tomé & Príncipe */
  | 'ST'
  /** Saudi Arabia */
  | 'SA'
  /** Senegal */
  | 'SN'
  /** Serbia */
  | 'RS'
  /** Seychelles */
  | 'SC'
  /** Sierra Leone */
  | 'SL'
  /** Singapore */
  | 'SG'
  /** Slovakia */
  | 'SK'
  /** Slovenia */
  | 'SI'
  /** Solomon Islands */
  | 'SB'
  /** Somalia */
  | 'SO'
  /** South Africa */
  | 'ZA'
  /** South Georgia & South Sandwich Islands */
  | 'GS'
  /** South Korea */
  | 'KR'
  /** Spain */
  | 'ES'
  /** Sri Lanka */
  | 'LK'
  /** St. Barthélemy */
  | 'BL'
  /** St. Helena */
  | 'SH'
  /** St. Kitts & Nevis */
  | 'KN'
  /** St. Lucia */
  | 'LC'
  /** St. Martin */
  | 'MF'
  /** St. Pierre & Miquelon */
  | 'PM'
  /** St. Vincent & Grenadines */
  | 'VC'
  /** Sudan */
  | 'SD'
  /** Suriname */
  | 'SR'
  /** Svalbard & Jan Mayen */
  | 'SJ'
  /** Sweden */
  | 'SE'
  /** Switzerland */
  | 'CH'
  /** Syria */
  | 'SY'
  /** Taiwan */
  | 'TW'
  /** Tajikistan */
  | 'TJ'
  /** Tanzania */
  | 'TZ'
  /** Thailand */
  | 'TH'
  /** Timor-Leste */
  | 'TL'
  /** Togo */
  | 'TG'
  /** Tokelau */
  | 'TK'
  /** Tonga */
  | 'TO'
  /** Trinidad & Tobago */
  | 'TT'
  /** Tunisia */
  | 'TN'
  /** Turkey */
  | 'TR'
  /** Turkmenistan */
  | 'TM'
  /** Turks & Caicos Islands */
  | 'TC'
  /** Tuvalu */
  | 'TV'
  /** Uganda */
  | 'UG'
  /** Ukraine */
  | 'UA'
  /** United Arab Emirates */
  | 'AE'
  /** United Kingdom */
  | 'GB'
  /** United States */
  | 'US'
  /** Uruguay */
  | 'UY'
  /** U.S. Outlying Islands */
  | 'UM'
  /** U.S. Virgin Islands */
  | 'VI'
  /** Uzbekistan */
  | 'UZ'
  /** Vanuatu */
  | 'VU'
  /** Vatican City */
  | 'VA'
  /** Venezuela */
  | 'VE'
  /** Vietnam */
  | 'VN'
  /** Wallis & Futuna */
  | 'WF'
  /** Western Sahara */
  | 'EH'
  /** Yemen */
  | 'YE'
  /** Zambia */
  | 'ZM'
  /** Zimbabwe */
  | 'ZW';

/** Customer attribute metadata. */
export type CustomerAttributeMetadata = CustomAttributeMetadataInterface & {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output'];
  /** Default attribute value. */
  default_value?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum;
  /** The frontend class of the attribute. */
  frontend_class?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  frontend_input?: Maybe<AttributeFrontendInputEnum>;
  /** The template used for the input of the attribute (e.g., 'date'). */
  input_filter?: Maybe<InputFilterEnum>;
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output'];
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output'];
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** The number of lines of the attribute value. */
  multiline_count?: Maybe<Scalars['Int']['output']>;
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>;
  /** The position of the attribute in the form. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The validation rules of the attribute value. */
  validate_rules?: Maybe<Array<Maybe<ValidationRule>>>;
};

/** List of templates/filters applied to customer attribute input. */
export type InputFilterEnum =
  /** There are no templates or filters to be applied. */
  | 'NONE'
  /** Forces attribute input to follow the date format. */
  | 'DATE'
  /** Strip whitespace (or other characters) from the beginning and end of the input. */
  | 'TRIM'
  /** Strip HTML Tags. */
  | 'STRIPTAGS'
  /** Escape HTML Entities. */
  | 'ESCAPEHTML';

/** Defines a customer attribute validation rule. */
export type ValidationRule = {
  /** Validation rule name applied to a customer attribute. */
  name?: Maybe<ValidationRuleEnum>;
  /** Validation rule value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** List of validation rule names applied to a customer attribute. */
export type ValidationRuleEnum =
  | 'DATE_RANGE_MAX'
  | 'DATE_RANGE_MIN'
  | 'FILE_EXTENSIONS'
  | 'INPUT_VALIDATION'
  | 'MAX_TEXT_LENGTH'
  | 'MIN_TEXT_LENGTH'
  | 'MAX_FILE_SIZE'
  | 'MAX_IMAGE_HEIGHT'
  | 'MAX_IMAGE_WIDTH';

/** List of account confirmation statuses. */
export type ConfirmationStatusEnum =
  /** Account confirmed */
  | 'ACCOUNT_CONFIRMED'
  /** Account confirmation not required */
  | 'ACCOUNT_CONFIRMATION_NOT_REQUIRED';

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type SubscribeEmailToNewsletterOutput = {
  /** The status of the subscription request. */
  status?: Maybe<SubscriptionStatusesEnum>;
};

/** Indicates the status of the request. */
export type SubscriptionStatusesEnum =
  | 'NOT_ACTIVE'
  | 'SUBSCRIBED'
  | 'UNSUBSCRIBED'
  | 'UNCONFIRMED';

export type CancellationReason = {
  description: Scalars['String']['output'];
};

/** Defines the order to cancel. */
export type CancelOrderInput = {
  /** Order ID. */
  order_id: Scalars['ID']['input'];
  /** Cancellation reason. */
  reason: Scalars['String']['input'];
};

/** Contains the updated customer order and error message if any. */
export type CancelOrderOutput = {
  /** Error encountered while cancelling the order. */
  error?: Maybe<Scalars['String']['output']>;
  /** Updated customer order. */
  order?: Maybe<CustomerOrder>;
};

/** Gets the payment SDK URLs and values */
export type GetPaymentSDKOutput = {
  /** The payment SDK parameters */
  sdkParams?: Maybe<Array<Maybe<PaymentSDKParamsItem>>>;
};

export type PaymentSDKParamsItem = {
  /** The payment method code used in the order */
  code?: Maybe<Scalars['String']['output']>;
  /** The payment SDK parameters */
  params?: Maybe<Array<Maybe<SDKParams>>>;
};

/** Contains the payment order details */
export type PaymentOrderOutput = {
  /** PayPal order ID */
  id?: Maybe<Scalars['String']['output']>;
  /** The order ID generated by Payment Services */
  mp_order_id?: Maybe<Scalars['String']['output']>;
  /** Details about the card used on the order */
  payment_source_details?: Maybe<PaymentSourceDetails>;
  /** The status of the payment order */
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentSourceDetails = {
  /** Details about the card used on the order */
  card?: Maybe<Card>;
};

export type Card = {
  /** Card bin details */
  bin_details?: Maybe<CardBin>;
  /** Expiration month of the card */
  card_expiry_month?: Maybe<Scalars['String']['output']>;
  /** Expiration year of the card */
  card_expiry_year?: Maybe<Scalars['String']['output']>;
  /** Last four digits of the card */
  last_digits?: Maybe<Scalars['String']['output']>;
  /** Name on the card */
  name?: Maybe<Scalars['String']['output']>;
};

export type CardBin = {
  /** Card bin number */
  bin?: Maybe<Scalars['String']['output']>;
};

/** Contains payment order details that are used while processing the payment order */
export type CreatePaymentOrderInput = {
  /** The customer cart ID */
  cartId: Scalars['String']['input'];
  /** Defines the origin location for that payment request */
  location: PaymentLocation;
  /** The code for the payment method used in the order */
  methodCode: Scalars['String']['input'];
  /** The identifiable payment source for the payment method */
  paymentSource: Scalars['String']['input'];
  /** Indicates whether the payment information should be vaulted */
  vaultIntent?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Synchronizes the payment order details */
export type SyncPaymentOrderInput = {
  /** The customer cart ID */
  cartId: Scalars['String']['input'];
  /** PayPal order ID */
  id: Scalars['String']['input'];
};

/** Contains payment order details that are used while processing the payment order */
export type CreatePaymentOrderOutput = {
  /** The amount of the payment order */
  amount?: Maybe<Scalars['Float']['output']>;
  /** The currency of the payment order */
  currency_code?: Maybe<Scalars['String']['output']>;
  /** PayPal order ID */
  id?: Maybe<Scalars['String']['output']>;
  /** The order ID generated by Payment Services */
  mp_order_id?: Maybe<Scalars['String']['output']>;
  /** The status of the payment order */
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines the origin location for that payment request */
export type PaymentLocation =
  | 'PRODUCT_DETAIL'
  | 'MINICART'
  | 'CART'
  | 'CHECKOUT'
  | 'ADMIN';

/** Retrieves the payment configuration for a given location */
export type PaymentConfigOutput = {
  /** ApplePay payment method configuration */
  apple_pay?: Maybe<ApplePayConfig>;
  /** GooglePay payment method configuration */
  google_pay?: Maybe<GooglePayConfig>;
  /** Hosted fields payment method configuration */
  hosted_fields?: Maybe<HostedFieldsConfig>;
  /** Smart Buttons payment method configuration */
  smart_buttons?: Maybe<SmartButtonsConfig>;
};

/** Contains payment fields that are common to all types of payment methods. */
export type PaymentConfigItem = {
  /** The payment method code as defined in the payment gateway */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the payment method is displayed */
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  /** Defines the payment intent (Authorize or Capture */
  payment_intent?: Maybe<Scalars['String']['output']>;
  /** The PayPal parameters required to load the JS SDK */
  sdk_params?: Maybe<Array<Maybe<SDKParams>>>;
  /** The relative order the payment method is displayed on the checkout page */
  sort_order?: Maybe<Scalars['String']['output']>;
  /** The name displayed for the payment method */
  title?: Maybe<Scalars['String']['output']>;
};

export type PaymentCommonConfig = PaymentConfigItem & {
  /** The payment method code as defined in the payment gateway */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the payment method is displayed */
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  /** Defines the payment intent (Authorize or Capture */
  payment_intent?: Maybe<Scalars['String']['output']>;
  /** The PayPal parameters required to load the JS SDK */
  sdk_params?: Maybe<Array<Maybe<SDKParams>>>;
  /** The relative order the payment method is displayed on the checkout page */
  sort_order?: Maybe<Scalars['String']['output']>;
  /** The name displayed for the payment method */
  title?: Maybe<Scalars['String']['output']>;
};

export type HostedFieldsConfig = PaymentConfigItem & {
  /** Vault payment method code */
  cc_vault_code?: Maybe<Scalars['String']['output']>;
  /** The payment method code as defined in the payment gateway */
  code?: Maybe<Scalars['String']['output']>;
  /** Card vault enabled */
  is_vault_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the payment method is displayed */
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  /** Defines the payment intent (Authorize or Capture */
  payment_intent?: Maybe<Scalars['String']['output']>;
  /** The payment source for the payment method */
  payment_source?: Maybe<Scalars['String']['output']>;
  /** Card and bin details required */
  requires_card_details?: Maybe<Scalars['Boolean']['output']>;
  /** The PayPal parameters required to load the JS SDK */
  sdk_params?: Maybe<Array<Maybe<SDKParams>>>;
  /** The relative order the payment method is displayed on the checkout page */
  sort_order?: Maybe<Scalars['String']['output']>;
  /**
   * Whether 3DS is activated; true if 3DS mode is not OFF.
   * @deprecated Use 'three_ds_mode' instead.
   */
  three_ds?: Maybe<Scalars['Boolean']['output']>;
  /** 3DS mode */
  three_ds_mode?: Maybe<ThreeDSMode>;
  /** The name displayed for the payment method */
  title?: Maybe<Scalars['String']['output']>;
};

/** 3D Secure mode. */
export type ThreeDSMode =
  | 'OFF'
  | 'SCA_WHEN_REQUIRED'
  | 'SCA_ALWAYS';

export type SmartButtonsConfig = PaymentConfigItem & {
  /** The styles for the PayPal Smart Button configuration */
  button_styles?: Maybe<ButtonStyles>;
  /** The payment method code as defined in the payment gateway */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether to display the PayPal Pay Later message */
  display_message?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether to display Venmo */
  display_venmo?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the payment method is displayed */
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  /** Contains details about the styles for the PayPal Pay Later message */
  message_styles?: Maybe<MessageStyles>;
  /** Defines the payment intent (Authorize or Capture */
  payment_intent?: Maybe<Scalars['String']['output']>;
  /** The PayPal parameters required to load the JS SDK */
  sdk_params?: Maybe<Array<Maybe<SDKParams>>>;
  /** The relative order the payment method is displayed on the checkout page */
  sort_order?: Maybe<Scalars['String']['output']>;
  /** The name displayed for the payment method */
  title?: Maybe<Scalars['String']['output']>;
};

export type ApplePayConfig = PaymentConfigItem & {
  /** The styles for the ApplePay Smart Button configuration */
  button_styles?: Maybe<ButtonStyles>;
  /** The payment method code as defined in the payment gateway */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the payment method is displayed */
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  /** Defines the payment intent (Authorize or Capture */
  payment_intent?: Maybe<Scalars['String']['output']>;
  /** The payment source for the payment method */
  payment_source?: Maybe<Scalars['String']['output']>;
  /** The PayPal parameters required to load the JS SDK */
  sdk_params?: Maybe<Array<Maybe<SDKParams>>>;
  /** The relative order the payment method is displayed on the checkout page */
  sort_order?: Maybe<Scalars['String']['output']>;
  /** The name displayed for the payment method */
  title?: Maybe<Scalars['String']['output']>;
};

export type GooglePayConfig = PaymentConfigItem & {
  /** The styles for the GooglePay Button configuration */
  button_styles?: Maybe<GooglePayButtonStyles>;
  /** The payment method code as defined in the payment gateway */
  code?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the payment method is displayed */
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  /** Defines the payment intent (Authorize or Capture */
  payment_intent?: Maybe<Scalars['String']['output']>;
  /** The payment source for the payment method */
  payment_source?: Maybe<Scalars['String']['output']>;
  /** The PayPal parameters required to load the JS SDK */
  sdk_params?: Maybe<Array<Maybe<SDKParams>>>;
  /** The relative order the payment method is displayed on the checkout page */
  sort_order?: Maybe<Scalars['String']['output']>;
  /** 3DS mode */
  three_ds_mode?: Maybe<ThreeDSMode>;
  /** The name displayed for the payment method */
  title?: Maybe<Scalars['String']['output']>;
};

export type ButtonStyles = {
  /** The button color */
  color?: Maybe<Scalars['String']['output']>;
  /** The button height in pixels */
  height?: Maybe<Scalars['Int']['output']>;
  /** The button label */
  label?: Maybe<Scalars['String']['output']>;
  /** The button layout */
  layout?: Maybe<Scalars['String']['output']>;
  /** The button shape */
  shape?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the tagline is displayed */
  tagline?: Maybe<Scalars['Boolean']['output']>;
  /** Defines if the button uses default height. If the value is false, the value of height is used */
  use_default_height?: Maybe<Scalars['Boolean']['output']>;
};

export type GooglePayButtonStyles = {
  /** The button color */
  color?: Maybe<Scalars['String']['output']>;
  /** The button height in pixels */
  height?: Maybe<Scalars['Int']['output']>;
  /** The button type */
  type?: Maybe<Scalars['String']['output']>;
};

export type MessageStyles = {
  /** The message layout */
  layout?: Maybe<Scalars['String']['output']>;
  /** The message logo */
  logo?: Maybe<MessageStyleLogo>;
};

export type MessageStyleLogo = {
  /** The type of logo for the PayPal Pay Later messaging */
  type?: Maybe<Scalars['String']['output']>;
};

/** Defines the name and value of a SDK parameter */
export type SDKParams = {
  /** The name of the SDK parameter */
  name?: Maybe<Scalars['String']['output']>;
  /** The value of the SDK parameter */
  value?: Maybe<Scalars['String']['output']>;
};

/** Vault payment inputs */
export type VaultMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars['String']['input']>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars['String']['input']>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars['String']['input']>;
  /** The public hash of the token. */
  public_hash?: InputMaybe<Scalars['String']['input']>;
};

/** Smart button payment inputs */
export type SmartButtonMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars['String']['input']>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars['String']['input']>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars['String']['input']>;
};

/** Apple Pay inputs */
export type ApplePayMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars['String']['input']>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars['String']['input']>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars['String']['input']>;
};

/** Google Pay inputs */
export type GooglePayMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars['String']['input']>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars['String']['input']>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars['String']['input']>;
};

/** Hosted Fields payment inputs */
export type HostedFieldsInput = {
  /** Card bin number */
  cardBin?: InputMaybe<Scalars['String']['input']>;
  /** Expiration month of the card */
  cardExpiryMonth?: InputMaybe<Scalars['String']['input']>;
  /** Expiration year of the card */
  cardExpiryYear?: InputMaybe<Scalars['String']['input']>;
  /** Last four digits of the card */
  cardLast4?: InputMaybe<Scalars['String']['input']>;
  /** Name on the card */
  holderName?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the Payment Services payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']['input']>;
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars['String']['input']>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars['String']['input']>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars['String']['input']>;
};

/** Describe the variables needed to create a vault card setup token */
export type CreateVaultCardSetupTokenInput = {
  /** The setup token information */
  setup_token: VaultSetupTokenInput;
  /** The 3DS mode */
  three_ds_mode?: InputMaybe<ThreeDSMode>;
};

/** The payment source information */
export type VaultSetupTokenInput = {
  /** The payment source information */
  payment_source: PaymentSourceInput;
};

/** The payment source information */
export type PaymentSourceInput = {
  /** The card payment source information */
  card: CardPaymentSourceInput;
};

/** The card payment source information */
export type CardPaymentSourceInput = {
  /** The billing address of the card */
  billing_address: BillingAddressPaymentSourceInput;
  /** The name on the cardholder */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The billing address information */
export type BillingAddressPaymentSourceInput = {
  /** The first line of the address */
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  /** The second line of the address */
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  /** The city of the address */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country of the address */
  country_code: Scalars['String']['input'];
  /** The postal code of the address */
  postal_code?: InputMaybe<Scalars['String']['input']>;
  /** The region of the address */
  region?: InputMaybe<Scalars['String']['input']>;
};

/** The setup token id information */
export type CreateVaultCardSetupTokenOutput = {
  /** The setup token id */
  setup_token: Scalars['String']['output'];
};

/** Describe the variables needed to create a vault payment token */
export type CreateVaultCardPaymentTokenInput = {
  /** Description of the vaulted card */
  card_description?: InputMaybe<Scalars['String']['input']>;
  /** The setup token obtained by the createVaultCardSetupToken endpoint */
  setup_token_id: Scalars['String']['input'];
};

/** The vault token id and information about the payment source */
export type CreateVaultCardPaymentTokenOutput = {
  /** The payment source information */
  payment_source: PaymentSourceOutput;
  /** The vault payment token information */
  vault_token_id: Scalars['String']['output'];
};

/** The payment source information */
export type PaymentSourceOutput = {
  /** The card payment source information */
  card: CardPaymentSourceOutput;
};

/** The card payment source information */
export type CardPaymentSourceOutput = {
  /** The brand of the card */
  brand?: Maybe<Scalars['String']['output']>;
  /** The expiry of the card */
  expiry?: Maybe<Scalars['String']['output']>;
  /** The last digits of the card */
  last_digits?: Maybe<Scalars['String']['output']>;
};

/** Retrieves the vault configuration */
export type VaultConfigOutput = {
  /** Credit card vault method configuration */
  credit_card?: Maybe<VaultCreditCardConfig>;
};

export type VaultCreditCardConfig = {
  /** Is vault enabled */
  is_vault_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The parameters required to load the Paypal JS SDK */
  sdk_params?: Maybe<Array<Maybe<SDKParams>>>;
  /** 3DS mode */
  three_ds_mode?: Maybe<ThreeDSMode>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
  /** The payment method code. */
  code: Scalars['String']['input'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars['Boolean']['input']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type PaypalExpressToken = {
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token?: Maybe<Scalars['String']['output']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal. */
  token?: Maybe<Scalars['String']['output']>;
};

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  /** The mode for the Payflow transaction. */
  mode?: Maybe<PayflowLinkMode>;
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url?: Maybe<Scalars['String']['output']>;
  /** The secure token generated by PayPal. */
  secure_token?: Maybe<Scalars['String']['output']>;
  /** The secure token ID generated by PayPal. */
  secure_token_id?: Maybe<Scalars['String']['output']>;
};

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  /** The secure URL generated by PayPal. */
  secure_form_url?: Maybe<Scalars['String']['output']>;
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String']['input'];
};

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars['String']['input'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars['String']['input']>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']['input']>;
};

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit?: Maybe<Scalars['String']['output']>;
  /** The URL to the PayPal login page. */
  start?: Maybe<Scalars['String']['output']>;
};

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkMode =
  | 'TEST'
  | 'LIVE';

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars['Int']['input'];
  /** The credit card expiration year. */
  cc_exp_year: Scalars['Int']['input'];
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars['Int']['input'];
  /** The credit card type. */
  cc_type: Scalars['String']['input'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String']['input'];
};

export type PayflowProResponseOutput = {
  /** The cart with the updated selected payment method. */
  cart: Cart;
};

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String']['input'];
};

export type ReCaptchaFormEnum =
  | 'PLACE_ORDER'
  | 'CONTACT'
  | 'CUSTOMER_LOGIN'
  | 'CUSTOMER_FORGOT_PASSWORD'
  | 'CUSTOMER_CREATE'
  | 'CUSTOMER_EDIT'
  | 'NEWSLETTER'
  | 'PRODUCT_REVIEW'
  | 'SENDFRIEND'
  | 'BRAINTREE';

/** Contains reCAPTCHA V3-Invisible configuration details. */
export type ReCaptchaConfigurationV3 = {
  /** The position of the invisible reCAPTCHA badge on each page. */
  badge_position: Scalars['String']['output'];
  /** The message that appears to the user if validation fails. */
  failure_message: Scalars['String']['output'];
  /** A list of forms on the storefront that have been configured to use reCAPTCHA V3. */
  forms: Array<Maybe<ReCaptchaFormEnum>>;
  /** Return whether recaptcha is enabled or not */
  is_enabled: Scalars['Boolean']['output'];
  /** A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. */
  language_code?: Maybe<Scalars['String']['output']>;
  /** The minimum score that identifies a user interaction as a potential risk. */
  minimum_score: Scalars['Float']['output'];
  /** The website key generated when the Google reCAPTCHA account was registered. */
  website_key: Scalars['String']['output'];
};

/** Contains an array of product reviews. */
export type ProductReviews = {
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** Contains details of a product review. */
export type ProductReview = {
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float']['output'];
  /** The date the review was created. */
  created_at: Scalars['String']['output'];
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['output'];
  /** The reviewed product. */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review. */
  summary: Scalars['String']['output'];
  /** The review text. */
  text: Scalars['String']['output'];
};

/** Contains data about a single aspect of a product review. */
export type ProductReviewRating = {
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String']['output'];
};

/** Contains an array of metadata about each aspect of a product review. */
export type ProductReviewRatingsMetadata = {
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

/** Contains details about a single aspect of a product review. */
export type ProductReviewRatingMetadata = {
  /** An encoded rating ID. */
  id: Scalars['String']['output'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

/** Contains details about a single value in a product review. */
export type ProductReviewRatingValueMetadata = {
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String']['output'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['output'];
};

/** Contains the completed product review. */
export type CreateProductReviewOutput = {
  /** Product review details. */
  review: ProductReview;
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['input'];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars['String']['input'];
  /** The summary (title) of the review. */
  summary: Scalars['String']['input'];
  /** The review text. */
  text: Scalars['String']['input'];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String']['input'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['input'];
};

/** Contains the cart and any errors after adding products. */
export type ReorderItemsOutput = {
  /** Detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

/** An error encountered while adding an item to the cart. */
export type CheckoutUserInputError = {
  /** An error code that is specific to Checkout. */
  code: CheckoutUserInputErrorCodes;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']['output']>>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum;
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField;
};

/** Specifies the field to use for sorting */
export type CustomerOrderSortableField =
  /** Sorts customer orders by number */
  | 'NUMBER'
  /** Sorts customer orders by created_at field */
  | 'CREATED_AT';

/** The collection of orders that match the conditions defined in the filter. */
export type CustomerOrders = {
  /** An array of customer orders. */
  items: Array<Maybe<CustomerOrder>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains detailed information about an order's billing and shipping addresses. */
export type OrderAddress = {
  /** The city or town. */
  city: Scalars['String']['output'];
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String']['output'];
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id?: Maybe<Scalars['ID']['output']>;
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};

export type OrderItem = OrderItemInterface & {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The ProductInterface object, which contains details about the base product */
  product?: Maybe<ProductInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Represents order item options like selected or entered. */
export type OrderItemOption = {
  /** The name of the option. */
  label: Scalars['String']['output'];
  /** The value of the option. */
  value: Scalars['String']['output'];
};

/** Contains tax item details. */
export type TaxItem = {
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The rate used to calculate the tax. */
  rate: Scalars['Float']['output'];
  /** A title that describes the tax. */
  title: Scalars['String']['output'];
};

/** Contains details about the sales total amounts used to calculate the final price. */
export type OrderTotal = {
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the order. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the order. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The order tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the order. */
  total_shipping: Money;
  /** The amount of tax applied to the order. */
  total_tax: Money;
};

/** Contains invoice details. */
export type Invoice = {
  /** Comments on the invoice. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID']['output'];
  /** Invoiced product details. */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number. */
  number: Scalars['String']['output'];
  /** Invoice total amount details. */
  total?: Maybe<InvoiceTotal>;
};

/** Contains detailes about invoiced items. */
export type InvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

export type InvoiceItem = InvoiceItemInterface & {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Contains price details from an invoice. */
export type InvoiceTotal = {
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the invoice. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The invoice tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice. */
  total_shipping: Money;
  /** The amount of tax applied to the invoice. */
  total_tax: Money;
};

/** Contains details about shipping and handling costs. */
export type ShippingHandling = {
  /** The shipping amount, excluding tax. */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax. */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping. */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Details about taxes applied for shipping. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping. */
  total_amount: Money;
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  /** The amount of the discount. */
  amount: Money;
};

/** Contains order shipment details. */
export type OrderShipment = {
  /** Comments added to the shipment. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID']['output'];
  /** An array of items included in the shipment. */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number. */
  number: Scalars['String']['output'];
  /** An array of shipment tracking details. */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about a comment. */
export type SalesCommentItem = {
  /** The text of the message. */
  message: Scalars['String']['output'];
  /** The timestamp of the comment. */
  timestamp: Scalars['String']['output'];
};

/** Order shipment item details. */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

export type ShipmentItem = ShipmentItemInterface & {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Contains order shipment tracking details. */
export type ShipmentTracking = {
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String']['output'];
  /** The tracking number of the order shipment. */
  number?: Maybe<Scalars['String']['output']>;
  /** The shipment tracking title. */
  title: Scalars['String']['output'];
};

/** Contains details about the payment method used to pay for the order. */
export type OrderPaymentMethod = {
  /** Additional data per payment method type. */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method. */
  name: Scalars['String']['output'];
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String']['output'];
};

/** Contains credit memo details. */
export type CreditMemo = {
  /** Comments on the credit memo. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID']['output'];
  /** An array containing details about refunded items. */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number. */
  number: Scalars['String']['output'];
  /** Details about the total refunded amount. */
  total?: Maybe<CreditMemoTotal>;
};

/** Credit memo item details. */
export type CreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Contains credit memo price details. */
export type CreditMemoTotal = {
  /** An adjustment manually applied to the order. */
  adjustment: Money;
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the credit memo. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The credit memo tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo. */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo. */
  total_tax: Money;
};

/** Contains a key-value pair. */
export type KeyValue = {
  /** The name part of the key/value pair. */
  name?: Maybe<Scalars['String']['output']>;
  /** The value part of the key/value pair. */
  value?: Maybe<Scalars['String']['output']>;
};

export type CheckoutUserInputErrorCodes =
  | 'REORDER_NOT_AVAILABLE'
  | 'PRODUCT_NOT_FOUND'
  | 'NOT_SALABLE'
  | 'INSUFFICIENT_STOCK'
  | 'UNDEFINED';

/** This enumeration defines the scope type for customer orders. */
export type ScopeTypeEnum =
  | 'GLOBAL'
  | 'WEBSITE'
  | 'STORE';

/** Input to retrieve an order based on token. */
export type OrderTokenInput = {
  /** Order token. */
  token: Scalars['String']['input'];
};

/** Input to retrieve an order based on details. */
export type OrderInformationInput = {
  /** Order billing address email. */
  email: Scalars['String']['input'];
  /** Order number. */
  number: Scalars['String']['input'];
  /** Order billing address postcode. */
  postcode: Scalars['String']['input'];
};

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int']['input'];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String']['input'];
  /** The text of the message to be sent. */
  message: Scalars['String']['input'];
  /** The name of the sender. */
  name: Scalars['String']['input'];
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String']['input'];
  /** The name of the recipient. */
  name: Scalars['String']['input'];
};

/** Contains information about the sender and recipients. */
export type SendEmailToFriendOutput = {
  /** An array containing information about each recipient. */
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  /** Information about the customer and the content of the message. */
  sender?: Maybe<SendEmailToFriendSender>;
};

/** An output object that contains information about the sender. */
export type SendEmailToFriendSender = {
  /** The email address of the sender. */
  email: Scalars['String']['output'];
  /** The text of the message to be sent. */
  message: Scalars['String']['output'];
  /** The name of the sender. */
  name: Scalars['String']['output'];
};

/** An output object that contains information about the recipient. */
export type SendEmailToFriendRecipient = {
  /** The email address of the recipient. */
  email: Scalars['String']['output'];
  /** The name of the recipient. */
  name: Scalars['String']['output'];
};

/** Contains details about the configuration of the Email to a Friend feature. */
export type SendFriendConfiguration = {
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean']['output'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean']['output'];
};

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type EntityUrl = {
  /** @deprecated Use `relative_url` instead. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid?: Maybe<Scalars['ID']['output']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode?: Maybe<Scalars['Int']['output']>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Contains URL rewrite details. */
export type UrlRewrite = {
  /** An array of request parameters. */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** The request URL. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Contains target path parameters. */
export type HttpQueryParameter = {
  /** A parameter name. */
  name?: Maybe<Scalars['String']['output']>;
  /** A parameter value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Default implementation of RoutableInterface. This type is returned when the URL is not linked to an entity. */
export type RoutableUrl = RoutableInterface & {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Routable entities serve as the model for a rendered page. */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Defines an object used to iterate through items for product comparisons. */
export type ComparableItem = {
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Details about a product in a compare list. */
  product: ProductInterface;
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID']['output'];
};

/** Contains a product attribute code and value. */
export type ProductAttribute = {
  /** The unique identifier for a product attribute code. */
  code: Scalars['String']['output'];
  /** The display value of the attribute. */
  value: Scalars['String']['output'];
};

/** Contains an attribute code that is used for product comparisons. */
export type ComparableAttribute = {
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String']['output'];
  /** The label of the attribute code. */
  label: Scalars['String']['output'];
};

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type CompareList = {
  /** An array of attributes that can be used for comparing products. */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list. */
  item_count: Scalars['Int']['output'];
  /** An array of products to compare. */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID']['output'];
};

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the results of the request to delete a compare list. */
export type DeleteCompareListOutput = {
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean']['output'];
};

/** Contains the results of the request to assign a compare list. */
export type AssignCompareListToCustomerOutput = {
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean']['output'];
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

/** Describes the swatch type and a value. */
export type SwatchData = {
  /** The type of swatch filter item: 1 - text; 2 - image. */
  type?: Maybe<Scalars['String']['output']>;
  /** The value for the swatch item. It could be text or an image link. */
  value?: Maybe<Scalars['String']['output']>;
};

export type SwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type TextSwatchData = SwatchDataInterface & {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Swatch attribute metadata input types. */
export type SwatchInputTypeEnum =
  | 'BOOLEAN'
  | 'DATE'
  | 'DATETIME'
  | 'DROPDOWN'
  | 'FILE'
  | 'GALLERY'
  | 'HIDDEN'
  | 'IMAGE'
  | 'MEDIA_IMAGE'
  | 'MULTILINE'
  | 'MULTISELECT'
  | 'PRICE'
  | 'SELECT'
  | 'TEXT'
  | 'TEXTAREA'
  | 'UNDEFINED'
  | 'VISUAL'
  | 'WEIGHT';

export type TaxWrappingEnum =
  | 'DISPLAY_EXCLUDING_TAX'
  | 'DISPLAY_INCLUDING_TAX'
  | 'DISPLAY_TYPE_BOTH';

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type DeletePaymentTokenOutput = {
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean']['output'];
};

/** Contains payment tokens stored in the customer's vault. */
export type CustomerPaymentTokens = {
  /** An array of payment tokens. */
  items: Array<Maybe<PaymentToken>>;
};

/** The stored payment method available to the customer. */
export type PaymentToken = {
  /** A description of the stored account details. */
  details?: Maybe<Scalars['String']['output']>;
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String']['output'];
  /** The public hash of the token. */
  public_hash: Scalars['String']['output'];
  /** Specifies the payment token type. */
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types. */
export type PaymentTokenTypeEnum =
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  | 'card'
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  | 'account';

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  /** The amount of the Fixed Product Tax. */
  amount?: Maybe<Money>;
  /** The display label assigned to the Fixed Product Tax. */
  label?: Maybe<Scalars['String']['output']>;
};

/** Lists display settings for the Fixed Product Tax. */
export type FixedProductTaxDisplaySettings =
  /** The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'. */
  | 'INCLUDE_FPT_WITHOUT_DETAILS'
  /** The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'. */
  | 'INCLUDE_FPT_WITH_DETAILS'
  /** The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.' */
  | 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS'
  /** The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'. */
  | 'EXCLUDE_FPT_WITHOUT_DETAILS'
  /** The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query. */
  | 'FPT_DISABLED';

/** Deprecated: Use the `Wishlist` type instead. */
export type WishlistOutput = {
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
};

/** Contains a customer wish list. */
export type Wishlist = {
  /** The unique ID for a `Wishlist` object. */
  id?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use the `items_v2` field instead. */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list. */
  items_count?: Maybe<Scalars['Int']['output']>;
  /** An array of items in the customer's wish list. */
  items_v2?: Maybe<WishlistItems>;
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /** The time of the last modification to the wish list. */
  updated_at?: Maybe<Scalars['String']['output']>;
};


/** Contains a customer wish list. */
export type Wishlistitems_v2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** The interface for wish list items. */
export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains an array of items in a wish list. */
export type WishlistItems = {
  /** A list of items in the wish list. */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
};

/** Contains details about a wish list item. */
export type WishlistItem = {
  /** The time when the customer added the item to the wish list. */
  added_at?: Maybe<Scalars['String']['output']>;
  /** The customer's comment about this item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItem` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Details about the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** Contains the resultant wish list and any error information. */
export type AddWishlistItemsToCartOutput = {
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean']['output'];
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type WishlistCartUserInputError = {
  /** An error code that describes the error encountered. */
  code: WishlistCartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID']['output'];
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID']['output'];
};

/** A list of possible error types. */
export type WishlistCartUserInputErrorType =
  | 'PRODUCT_NOT_FOUND'
  | 'NOT_SALABLE'
  | 'INSUFFICIENT_STOCK'
  | 'UNDEFINED';

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of items to add. */
  quantity: Scalars['Float']['input'];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type AddProductsToWishlistOutput = {
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Contains the customer's wish list and any errors encountered. */
export type RemoveProductsFromWishlistOutput = {
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: Wishlist;
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type UpdateProductsInWishlistOutput = {
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: Wishlist;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  /** A wish list-specific error code. */
  code: WishListUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** A list of possible error types. */
export type WishListUserInputErrorType =
  | 'PRODUCT_NOT_FOUND'
  | 'UNDEFINED';

/** Blog config information */
export type AwBlogConfig = {
  /** Metatags is enabled */
  areMetaTagsEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Authors is displayed */
  are_authors_displayed?: Maybe<Scalars['Boolean']['output']>;
  /** Author url suffix */
  author_url_suffix?: Maybe<Scalars['String']['output']>;
  /** Display related products block layout */
  block_layout?: Maybe<Scalars['String']['output']>;
  /** Display related products block on post page */
  block_position?: Maybe<Scalars['String']['output']>;
  /** Blog title */
  blog_title?: Maybe<Scalars['String']['output']>;
  /** Check if category listing visible in sidebar */
  category_listing_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Sidebar category listing limit */
  category_listing_limit?: Maybe<Scalars['Int']['output']>;
  /** Sidebar CMS block ID */
  cms_block?: Maybe<Scalars['Int']['output']>;
  /** Comments is enabled */
  comments_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Comments type service */
  comments_service?: Maybe<Scalars['String']['output']>;
  /** Display Add to Cart button */
  display_add_to_cart?: Maybe<Scalars['Boolean']['output']>;
  /** Check if display blog posts tab on product page */
  display_posts_on_product_page?: Maybe<Scalars['Boolean']['output']>;
  /** Positions of sharing buttons to display */
  display_sharing_buttons_at?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Blog is enabled */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Featured posts position */
  featured_posts_position?: Maybe<Scalars['String']['output']>;
  /** Featured posts qty */
  featured_posts_qty?: Maybe<Scalars['Int']['output']>;
  /** Grid view column count */
  grid_view_column_count?: Maybe<Scalars['Int']['output']>;
  /** Check if popular tags should be highlighted */
  highlight_popular_tags?: Maybe<Scalars['Boolean']['output']>;
  /** Is allow quest built-in comments */
  is_allow_guest_comments?: Maybe<Scalars['Boolean']['output']>;
  /** Grid view is enabled */
  is_grid_view_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Blog meta description */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Navigation menu link is enabled */
  navigation_menu_link_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Number of most popular tags to display */
  popular_tags?: Maybe<Scalars['Int']['output']>;
  /** Post url suffix */
  post_url_suffix?: Maybe<Scalars['String']['output']>;
  /** Default posts view */
  post_view_default?: Maybe<Scalars['String']['output']>;
  /** Blog post per page */
  posts_per_page?: Maybe<Scalars['Int']['output']>;
  /** Max products to display */
  products_limit?: Maybe<Scalars['Int']['output']>;
  /** Number of recent posts to display */
  recent_posts?: Maybe<Scalars['Int']['output']>;
  /** Related posts qty */
  related_posts_qty?: Maybe<Scalars['Int']['output']>;
  /** Authors page route */
  route_to_authors?: Maybe<Scalars['String']['output']>;
  /** Blog route */
  route_to_blog?: Maybe<Scalars['String']['output']>;
  /** Blog title prefix */
  title_prefix?: Maybe<Scalars['String']['output']>;
  /** Blog title suffix */
  title_suffix?: Maybe<Scalars['String']['output']>;
  /** Url suffix for other pages */
  url_suffix_for_other_pages?: Maybe<Scalars['String']['output']>;
  /** Seo url type */
  url_type?: Maybe<Scalars['String']['output']>;
};

/** Blog category defines all category information */
export type AwBlogCategory = RoutableInterface & {
  /** Blog category child categories */
  children?: Maybe<AwBlogCategories>;
  /** Blog category id */
  id?: Maybe<Scalars['Int']['output']>;
  /** Blog category image alt */
  image_alt?: Maybe<Scalars['String']['output']>;
  /** Blog category image file name */
  image_file_name?: Maybe<Scalars['String']['output']>;
  /** Blog category image title */
  image_title?: Maybe<Scalars['String']['output']>;
  /** Blog category meta description */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Blog category meta keywords */
  meta_keywords?: Maybe<Scalars['String']['output']>;
  /** Blog category meta prefix */
  meta_prefix?: Maybe<Scalars['String']['output']>;
  /** Blog category meta suffix */
  meta_suffix?: Maybe<Scalars['String']['output']>;
  /** Blog category meta title */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** Blog category name */
  name?: Maybe<Scalars['String']['output']>;
  /** Blog category parent category */
  parent?: Maybe<AwBlogCategory>;
  /** Blog category parent id */
  parent_id?: Maybe<Scalars['Int']['output']>;
  /** Blog category path */
  path?: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The category sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The category status. */
  status?: Maybe<Scalars['Int']['output']>;
  /** The category store ids. */
  store_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** URL key of Blog category */
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Blog categories information */
export type AwBlogCategories = {
  /** An array of Blog categories */
  items?: Maybe<Array<Maybe<AwBlogCategory>>>;
};

/** CategoryFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type AwBlogCategoryFilterInput = {
  /** The category id. */
  id?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the category for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** The category name. */
  name?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison */
  or?: InputMaybe<AwBlogCategoryFilterInput>;
  /** The category parent id. */
  parent_id?: InputMaybe<FilterTypeInput>;
  /** The category sort order. */
  sort_order?: InputMaybe<FilterTypeInput>;
  /** The category url key. */
  url_key?: InputMaybe<FilterTypeInput>;
};

/** CategorySortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order */
export type AwBlogCategorySortInput = {
  /** A brief overview of the category for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** The category name. */
  name?: InputMaybe<SortEnum>;
  /** The category parent id. */
  parent_id?: InputMaybe<SortEnum>;
  /** The category sort order. */
  sort_order?: InputMaybe<SortEnum>;
  /** The category status. */
  status?: InputMaybe<FilterTypeInput>;
  /** The category url key. */
  url_key?: InputMaybe<SortEnum>;
};

/** Blog post defines all post information */
export type AwBlogPost = RoutableInterface & {
  /** Blog post author ids */
  author_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Blog post authors */
  authors?: Maybe<Array<Maybe<AwBlogAuthor>>>;
  /** Blog post built-in count comments */
  builtin_count_comments?: Maybe<Scalars['Int']['output']>;
  /** Blog post canonical category id */
  canonical_category_id?: Maybe<Scalars['Int']['output']>;
  /** Blog post categories */
  categories?: Maybe<AwBlogCategories>;
  /** Blog post category ids */
  category_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Blog post content */
  content?: Maybe<Scalars['String']['output']>;
  /** Blog post created at */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Blog post customer groups */
  customer_groups?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Blog post featured image alt */
  featured_image_alt?: Maybe<Scalars['String']['output']>;
  /** Blog post featured image */
  featured_image_file?: Maybe<Scalars['String']['output']>;
  /** Blog post featured image for mobile */
  featured_image_mobile_file?: Maybe<Scalars['String']['output']>;
  /** Blog post featured image title */
  featured_image_title?: Maybe<Scalars['String']['output']>;
  /** Blog post id */
  id?: Maybe<Scalars['Int']['output']>;
  /** Blog post is allow comments */
  is_allow_comments?: Maybe<Scalars['Boolean']['output']>;
  /** Blog post is feature post */
  is_featured?: Maybe<Scalars['Int']['output']>;
  /** Blog post meta description */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Blog post meta keywords */
  meta_keywords?: Maybe<Scalars['String']['output']>;
  /** Blog post meta prefix */
  meta_prefix?: Maybe<Scalars['String']['output']>;
  /** Blog post meta suffix */
  meta_suffix?: Maybe<Scalars['String']['output']>;
  /** Blog post meta title */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** Blog post meta twitter site */
  meta_twitter_site?: Maybe<Scalars['String']['output']>;
  /** Blog post next post */
  next_post?: Maybe<AwBlogPost>;
  /** Blog post previous post */
  previous_post?: Maybe<AwBlogPost>;
  /** Blog post publish date */
  publish_date?: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** Blog post related post ids */
  related_post_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Blog posts related */
  related_posts?: Maybe<AwBlogPosts>;
  /** Blog post products sku */
  related_products_sku?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** Blog post short content */
  short_content?: Maybe<Scalars['String']['output']>;
  /** Blog post status */
  status?: Maybe<Scalars['String']['output']>;
  /** Blog post store ids */
  store_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Blog post tags */
  tag_names?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Blog post tags */
  tags?: Maybe<AwBlogTags>;
  /** Blog post title */
  title?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** Blog post updated at */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** URL key of Blog post */
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Blog posts information */
export type AwBlogPosts = {
  /** An array of Blog posts */
  items?: Maybe<Array<Maybe<AwBlogPost>>>;
  /** Blog posts total count */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** PostFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type AwBlogPostFilterInput = {
  /** Blog post author id */
  author_id?: InputMaybe<FilterTypeInput>;
  /** Blog post author url key */
  author_url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Blog post canonical category id */
  canonical_category_id?: InputMaybe<FilterTypeInput>;
  /** Blog post category ids */
  category_ids?: InputMaybe<FilterEqualTypeInput>;
  /** Blog post category name */
  category_name?: InputMaybe<FilterEqualTypeInput>;
  /** Blog post category url key */
  category_url_key?: InputMaybe<FilterTypeInput>;
  /** Blog post content */
  content?: InputMaybe<FilterTypeInput>;
  /** Blog post created at */
  created_at?: InputMaybe<FilterTypeInput>;
  /** Blog post featured image alt */
  featured_image_alt?: InputMaybe<FilterTypeInput>;
  /** Blog post featured image */
  featured_image_file?: InputMaybe<FilterTypeInput>;
  /** Blog post featured image title */
  featured_image_title?: InputMaybe<FilterTypeInput>;
  /** Blog post id */
  id?: InputMaybe<FilterTypeInput>;
  /** Blog post is allow comments */
  is_allow_comments?: InputMaybe<FilterTypeInput>;
  /** Blog post is feature post */
  is_featured?: InputMaybe<FilterTypeInput>;
  /** Blog post meta description */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** Blog post meta twitter site */
  meta_twitter_site?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison */
  or?: InputMaybe<AwBlogPostFilterInput>;
  /** Blog post product ids */
  product_id?: InputMaybe<FilterEqualTypeInput>;
  /** Blog post publish date */
  publish_date?: InputMaybe<FilterTypeInput>;
  /** Blog post short content */
  short_content?: InputMaybe<FilterTypeInput>;
  /** Blog post tags */
  tag_id?: InputMaybe<FilterEqualTypeInput>;
  /** Blog post tag name */
  tag_name?: InputMaybe<FilterEqualTypeInput>;
  /** Blog post title */
  title?: InputMaybe<FilterTypeInput>;
  /** Blog post updated at */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** URL key of Blog post */
  url_key?: InputMaybe<FilterTypeInput>;
};

/** CategorySortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order */
export type AwBlogPostSortInput = {
  /** Blog post author id */
  author_id?: InputMaybe<SortEnum>;
  /** Blog post created at */
  created_at?: InputMaybe<SortEnum>;
  /** Blog post publish date */
  publish_date?: InputMaybe<SortEnum>;
  /** Blog post title */
  title?: InputMaybe<SortEnum>;
  /** Blog post updated at */
  updated_at?: InputMaybe<SortEnum>;
  /** URL key of Blog post */
  url_key?: InputMaybe<SortEnum>;
};

/** Blog tag defines all tag information */
export type AwBlogTag = {
  /** Blog tag count posts */
  count_posts?: Maybe<Scalars['Int']['output']>;
  /** The tag created at. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Blog tag id */
  id?: Maybe<Scalars['Int']['output']>;
  /** Blog tag name */
  name?: Maybe<Scalars['String']['output']>;
  /** The tag updated at. */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Blog tag url key */
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Blog tags information */
export type AwBlogTags = {
  /** An array of Blog tags */
  items?: Maybe<Array<Maybe<AwBlogTag>>>;
};

/** TagFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type AwBlogTagFilterInput = {
  /** The tag created at. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The tag id. */
  id?: InputMaybe<FilterTypeInput>;
  /** The tag name. */
  name?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison */
  or?: InputMaybe<AwBlogTagFilterInput>;
  /** The tag updated at. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The tag url key. */
  url_key?: InputMaybe<FilterTypeEqualInput>;
};

/** TagSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order */
export type AwBlogTagSortInput = {
  /** The tag count posts. */
  count_posts?: InputMaybe<SortEnum>;
  /** The tag created at. */
  created_at?: InputMaybe<SortEnum>;
  /** The tag name. */
  name?: InputMaybe<SortEnum>;
  /** The tag updated at. */
  updated_at?: InputMaybe<SortEnum>;
};

/** Blog tag cloud defines all tag information */
export type AwBlogTagCloud = {
  /** The tag cloud post count. */
  post_count?: Maybe<Scalars['Int']['output']>;
  /** Blog tag cloud tag */
  tag?: Maybe<AwBlogTag>;
};

/** Blog tags cloud information */
export type AwBlogTagsCloud = {
  /** An array of Blog tags cloud */
  items?: Maybe<Array<Maybe<AwBlogTagCloud>>>;
};

/** TagCloudFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type AwBlogTagCloudFilterInput = {
  /** The tag cloud category id. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison */
  or?: InputMaybe<AwBlogTagCloudFilterInput>;
  /** The tag cloud post count. */
  post_count?: InputMaybe<FilterTypeInput>;
  /** The tag cloud category tag id. */
  tag_id?: InputMaybe<FilterTypeInput>;
};

/** TagCloudSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order */
export type AwBlogTagCloudSortInput = {
  /** The tag cloud post count. */
  post_count?: InputMaybe<SortEnum>;
};

/** Blog Comment defines all comment information */
export type AwBlogPostComment = {
  /** Blog comment author email */
  author_email?: Maybe<Scalars['String']['output']>;
  /** Blog comment author name */
  author_name?: Maybe<Scalars['String']['output']>;
  /** Blog comment */
  children?: Maybe<Array<Maybe<AwBlogPostComment>>>;
  /** Blog comment content */
  content?: Maybe<Scalars['String']['output']>;
  /** Blog comment created at */
  created_at?: Maybe<Scalars['String']['output']>;
  /** Blog comment id */
  id?: Maybe<Scalars['Int']['output']>;
  /** Blog comment parent author name */
  parent_author_name?: Maybe<Scalars['String']['output']>;
  /** Blog comment path */
  path?: Maybe<Scalars['String']['output']>;
  /** Blog comment post id */
  post_id?: Maybe<Scalars['Int']['output']>;
  /** Blog comment reply to comment id */
  reply_to_comment_id?: Maybe<Scalars['Int']['output']>;
  /** Blog comment status */
  status?: Maybe<Scalars['String']['output']>;
  /** Blog comment store id */
  store_id?: Maybe<Scalars['Int']['output']>;
  /** Blog comment updated at */
  updated_at?: Maybe<Scalars['String']['output']>;
};

/** CommentSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order */
export type AwBlogPostCommentSortInput = {
  /** Blog Comment created at. */
  created_at?: InputMaybe<SortEnum>;
};

/** Blog Author defines all author information */
export type AwBlogAuthor = {
  /** The author facebook id */
  facebook_id?: Maybe<Scalars['String']['output']>;
  /** Blog author first name */
  firstname?: Maybe<Scalars['String']['output']>;
  /** Blog author id */
  id?: Maybe<Scalars['Int']['output']>;
  /** The author image file name */
  image_file?: Maybe<Scalars['String']['output']>;
  /** The author job position */
  job_position?: Maybe<Scalars['String']['output']>;
  /** Blog author last name */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The author LinkedIn id */
  linkedin_id?: Maybe<Scalars['String']['output']>;
  /** The author meta description */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** The author meta keywords */
  meta_keywords?: Maybe<Scalars['String']['output']>;
  /** The author meta prefix */
  meta_prefix?: Maybe<Scalars['String']['output']>;
  /** The author meta suffix */
  meta_suffix?: Maybe<Scalars['String']['output']>;
  /** The author meta title */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The author short bio */
  short_bio?: Maybe<Scalars['String']['output']>;
  /** The author twitter id */
  twitter_id?: Maybe<Scalars['String']['output']>;
  /** URL key of Blog author */
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Blog authors information */
export type AwBlogAuthors = {
  /** An array of Blog Authors */
  items?: Maybe<Array<Maybe<AwBlogAuthor>>>;
};

/** AuthorFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type AwBlogAuthorFilterInput = {
  /** The Author facebook id. */
  facebook_id?: InputMaybe<FilterTypeInput>;
  /** The Author first name. */
  firstname?: InputMaybe<FilterTypeInput>;
  /** The Author id. */
  id?: InputMaybe<FilterTypeInput>;
  /** The Author job position. */
  job_position?: InputMaybe<FilterTypeInput>;
  /** The Author last name. */
  lastname?: InputMaybe<FilterTypeInput>;
  /** The Author LinkedIn id. */
  linkedin_id?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison */
  or?: InputMaybe<AwBlogAuthorFilterInput>;
  /** The Author twitter id. */
  twitter_id?: InputMaybe<FilterTypeInput>;
  /** The Author url key. */
  url_key?: InputMaybe<FilterTypeInput>;
};

/** AuthorSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order */
export type AwBlogAuthorSortInput = {
  /** The Author facebook id. */
  facebook_id?: InputMaybe<SortEnum>;
  /** The Author first name. */
  firstname?: InputMaybe<SortEnum>;
  /** The Author id. */
  id?: InputMaybe<SortEnum>;
  /** The Author job position. */
  job_position?: InputMaybe<SortEnum>;
  /** The Author last name. */
  lastname?: InputMaybe<SortEnum>;
  /** The Author LinkedIn id. */
  linkedin_id?: InputMaybe<SortEnum>;
  /** The Author twitter id. */
  twitter_id?: InputMaybe<SortEnum>;
  /** The Author url key. */
  url_key?: InputMaybe<SortEnum>;
};

/** FilterTypeEqualInput specifies equal action in a query  */
export type FilterTypeEqualInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type AmFaqCategoryFilterInput = {
  /** ID of a Category. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** ID of a Customer Group that Category is assigned to. */
  customer_group_id?: InputMaybe<FilterTypeInput>;
  /** ID of a Question that is assigned to Category. */
  question_id?: InputMaybe<FilterTypeInput>;
  /** ID of a Store that Category is assigned to. */
  store_id?: InputMaybe<FilterTypeInput>;
  /** Title of a Category. */
  title?: InputMaybe<FilterTypeInput>;
};

export type AmFaqQuestionFilterInput = {
  /** ID of a Category that Question is assigned to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** ID of a Customer Group that Question is assigned to. */
  customer_group_id?: InputMaybe<FilterTypeInput>;
  /** ID of a Product that Question is assigned to. */
  product_id?: InputMaybe<FilterTypeInput>;
  /** ID of a Question. */
  question_id?: InputMaybe<FilterTypeInput>;
  /** Status of a Question. */
  status?: InputMaybe<FilterTypeInput>;
  /** ID of a Store that Question is assigned to. */
  store_id?: InputMaybe<FilterTypeInput>;
  /** Title of a Tag that is assigned to a Question. */
  tag?: InputMaybe<FilterTypeInput>;
  /** Visibility of a Question. */
  visibility?: InputMaybe<FilterTypeInput>;
};

export type AmFaqCategorySortInput = {
  /** ID of a Category */
  category_id?: InputMaybe<SortEnum>;
  /** SortOrder of a Category. */
  position?: InputMaybe<SortEnum>;
  /** Title of a Category. */
  title?: InputMaybe<SortEnum>;
  /** Visit count of a Category. */
  visit_count?: InputMaybe<SortEnum>;
};

export type AmFaqQuestionSortInput = {
  /** SortOrder of a Question. */
  position?: InputMaybe<SortEnum>;
  /** ID of a Question. */
  question_id?: InputMaybe<SortEnum>;
  /** Title of a Question. */
  title?: InputMaybe<SortEnum>;
  /** Visit Count of a Question. */
  visit_count?: InputMaybe<SortEnum>;
};

export type PlaceAmFaqQuestionInput = {
  /** ID of a Category From Wich Question Was Asked. */
  category_id?: InputMaybe<Scalars['Int']['input']>;
  /** Email of Customer Who Asked the Question. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Name of Customer Who Asked the Question. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of a Product From Wich Question Was Asked. */
  product_id?: InputMaybe<Scalars['Int']['input']>;
  /** Asked Question Text. */
  title: Scalars['String']['input'];
};

export type RateAmFaqQuestionInput = {
  /** Flag that identifyes is voting is revote. */
  is_revote?: InputMaybe<Scalars['Boolean']['input']>;
  /** Old voted value. */
  old_value?: InputMaybe<Scalars['String']['input']>;
  /** ID of a Rated Question. */
  question_id: Scalars['Int']['input'];
  /** Voted value. */
  value: Scalars['String']['input'];
  /** Type of a Voting. */
  vote_type: AmFaqVoteTypeEnum;
};

export type AmFaqCategoriesSearch = {
  /** A list of FAQ Categories. */
  items?: Maybe<Array<Maybe<AmFaqCategory>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of return requests. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type AmFaqQuestionsSearch = {
  /** A list of FAQ Questions. */
  items?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of return requests. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type AmFaqSettings = {
  /** Sorting Type for Categories. */
  categoriesSort?: Maybe<Scalars['String']['output']>;
  /** Limit for Showed Questions on Category Page. */
  categoryPageSize?: Maybe<Scalars['Int']['output']>;
  /** Limit for Displayed Short Answer. */
  displayedAnswerLengthLimit?: Maybe<Scalars['Int']['output']>;
  faqPageLayout?: Maybe<Scalars['String']['output']>;
  /** GDPR Consent Text to Display. */
  gdprConsentText?: Maybe<Scalars['String']['output']>;
  /** Is Add Rich Data Breadcrumbs Flag. */
  isAddRichDataBreadcrumbs?: Maybe<Scalars['Boolean']['output']>;
  /** Is Add Rich Data Contact Information Flag. */
  isAddRichDataContact?: Maybe<Scalars['Boolean']['output']>;
  /** Is Add Rich Data Organization Flag. */
  isAddRichDataOrganization?: Maybe<Scalars['Boolean']['output']>;
  /** Is Mark Up FAQ with Structured Data Flag. */
  isAddStructuredData?: Maybe<Scalars['Boolean']['output']>;
  /** Is GDPR Consent Enabled Flag. */
  isEnableGdprConsent?: Maybe<Scalars['Boolean']['output']>;
  /** Is Question and Category Url Suffix Enabled Flag. */
  isEnableUrlSuffix?: Maybe<Scalars['Boolean']['output']>;
  /** Is FAQ Module Enabled Flag. */
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Is Not Logged In Customers Allowed to Ask Questions Flag. */
  isGuestQuestionsAllowed?: Maybe<Scalars['Boolean']['output']>;
  /** Is Not Logged In Customers Allowed to Rate Questions Flag. */
  isGuestRatingAllowed?: Maybe<Scalars['Boolean']['output']>;
  /** Is Hide Zero Total Rating for Average Rating Type. */
  isHideZeroTotalRating?: Maybe<Scalars['Boolean']['output']>;
  /** Is Rating Enabled Flag. */
  isRatingEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Is Trailing Slash Must Be Removed Flag. */
  isRemoveTrailingSlash?: Maybe<Scalars['Boolean']['output']>;
  /** Is Ask Question Buttons Must Be Shown Flag. */
  isShowAskQuestionButton?: Maybe<Scalars['Boolean']['output']>;
  /** Is Ask Question Buttons on the Product Page Must Be Shown Flag. */
  isShowAskQuestionButtonProduct?: Maybe<Scalars['Boolean']['output']>;
  /** Are Breadcrumbs Must Be Shown At FAQ Pages Flag. */
  isShowBreadcrumbs?: Maybe<Scalars['Boolean']['output']>;
  /** Is FAQ Link Must Be Shown In Categories Menu Flag. */
  isShowLinkCategories?: Maybe<Scalars['Boolean']['output']>;
  /** Is FAQ Link Must Be Shown In Footer Flag. */
  isShowLinkFooter?: Maybe<Scalars['Boolean']['output']>;
  /** Is FAQ Link Must Be Shown In Toolbar Flag. */
  isShowLinkToolbar?: Maybe<Scalars['Boolean']['output']>;
  /** Is Product Questions Tab Must Be Shown at the Product Page Flag. */
  isShowProductQuestionsTab?: Maybe<Scalars['Boolean']['output']>;
  /** Is Search Box Must Be Shown Flag. */
  isShowSearch?: Maybe<Scalars['Boolean']['output']>;
  /** Is Social Buttons Enabled Flag. */
  isSocialButtonsEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Is Use Canonical Url on Pages Flag. */
  isUseCanonicalUrl?: Maybe<Scalars['Boolean']['output']>;
  /** Text To Be Shown When No Search Result Found. */
  noResultText?: Maybe<Scalars['String']['output']>;
  /** Limit for Showed Questions on Product Page. */
  productPageSize?: Maybe<Scalars['Int']['output']>;
  /** Displayed Name of Product Questions Tab. */
  productQuestionsTabName?: Maybe<Scalars['String']['output']>;
  /** Position of Product Question Tab. */
  productQuestionsTabPosition?: Maybe<Scalars['Int']['output']>;
  /** Sorting Type for Questions. */
  questionsSort?: Maybe<Scalars['String']['output']>;
  /** Rating Type. */
  ratingType?: Maybe<Scalars['String']['output']>;
  /** Type of Organization Contact. */
  richDataContactType?: Maybe<Scalars['String']['output']>;
  /** The URL of a Logo That Is Representative of the Organization. */
  richDataLogoUrl?: Maybe<Scalars['String']['output']>;
  /** The Name of a Organization. */
  richDataName?: Maybe<Scalars['String']['output']>;
  /** Telephone of Organization. */
  richDataTelephone?: Maybe<Scalars['String']['output']>;
  /** The URL of the Website Associated With the Logo. */
  richDataWebsiteUrl?: Maybe<Scalars['String']['output']>;
  /** Limit for Showed Questions on Search Result Page. */
  searchPageSize?: Maybe<Scalars['Int']['output']>;
  /** Behavior of Short Answer. */
  shortAnswerBehavior?: Maybe<Scalars['Int']['output']>;
  /** Behavior of Short Answer on the Product Page. */
  shortAnswerBehaviorProduct?: Maybe<Scalars['Int']['output']>;
  socialButtons?: Maybe<Array<Maybe<AmFaqSocialButton>>>;
  /** Limit for Tags in Menu. */
  tagsLimit?: Maybe<Scalars['Int']['output']>;
  /** The Name of FAQ Page. */
  title?: Maybe<Scalars['String']['output']>;
  /** Base Url FAQ Prefix. */
  urlPrefix?: Maybe<Scalars['String']['output']>;
  /** Url Suffx. */
  urlSuffix?: Maybe<Scalars['String']['output']>;
};

export type AmFaqSocialButton = {
  /** Link Template of Social Button. */
  hrefTemplate?: Maybe<Scalars['String']['output']>;
  /** Image Path of Social Button. */
  imagePath?: Maybe<Scalars['String']['output']>;
  /** Image File Name of Social Button. */
  imgName?: Maybe<Scalars['String']['output']>;
  /** Label of Social Button. */
  name?: Maybe<Scalars['String']['output']>;
};

export type AmFaqQuestion = {
  /** Displayed Full Answer of a Question. */
  answer?: Maybe<Scalars['String']['output']>;
  /** ID of a Store from Wich Question Was Asked. */
  asked_from_store?: Maybe<Scalars['String']['output']>;
  /** Average Rating Value. */
  avg_rating?: Maybe<Scalars['Float']['output']>;
  /** Average Total Value. */
  avg_total?: Maybe<Scalars['Int']['output']>;
  /** Canonical Url of a Question. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** FAQ Categories IDs Questions is Assigned To. */
  category_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Customer Groud IDs Question is Assigned To. */
  customer_groups?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Email of a Customer Who Asked a Question. */
  email?: Maybe<Scalars['String']['output']>;
  /** Is Show Full Answer Flag. */
  is_show_full_answer?: Maybe<Scalars['Boolean']['output']>;
  /** Meta Description of a Question. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Meta Robots of a Question. */
  meta_robots?: Maybe<Scalars['String']['output']>;
  /** Meta Title of a Question. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** Name of a Customer Who Asked a Question. */
  name?: Maybe<Scalars['String']['output']>;
  /** Negative Rating Value of a Question. */
  negative_rating?: Maybe<Scalars['Float']['output']>;
  /** Nofollow Flag of a Question. */
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  /** Noindex Flag of a Question. */
  noindex?: Maybe<Scalars['Boolean']['output']>;
  /** Sort Order of a Question. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Positive Rating Value of a Question. */
  positive_rating?: Maybe<Scalars['Float']['output']>;
  /** Product Category IDs Question is Assigned To. */
  product_category_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Product IDs Question is Assigned To. */
  product_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** ID of a Question. */
  question_id?: Maybe<Scalars['Int']['output']>;
  /** Displayed Short Answer of a Question. */
  short_answer?: Maybe<Scalars['String']['output']>;
  /** Questions Status. */
  status?: Maybe<Scalars['Int']['output']>;
  /** Store IDs Question is Assigned To. */
  store_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Tag Titles Assigned To a Question. */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Displayed Title of a Question. */
  title?: Maybe<Scalars['String']['output']>;
  /** Total Rating Vaue of a Question. */
  total_rating?: Maybe<Scalars['Float']['output']>;
  /** Url Key of a Question. */
  url_key?: Maybe<Scalars['String']['output']>;
  /** Visibility Type of a Question. */
  visibility?: Maybe<Scalars['Int']['output']>;
};

export type AmFaqCategory = {
  /** Canonical Url of a Category. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** ID of a Category. */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** Customer Groud IDs Category is Assigned To. */
  customer_groups?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Description of a Category. */
  description?: Maybe<Scalars['String']['output']>;
  /** Icon Path of a Category. */
  icon?: Maybe<Scalars['String']['output']>;
  /** Meta Description of a Category. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Meta Title of a Category. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** Nofollow Flag of a Category. */
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  /** Noindex Flag of a Category. */
  noindex?: Maybe<Scalars['Boolean']['output']>;
  /** Title of a Category on a Category Page. */
  page_title?: Maybe<Scalars['String']['output']>;
  /** Sort Order of a Category. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Questions Assigned to the Category. */
  questions?: Maybe<Array<Maybe<AmFaqQuestion>>>;
  /** Status of a Category. */
  status?: Maybe<Scalars['Int']['output']>;
  /** Store IDs Category is Assigned To. */
  store_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Title of a Category. */
  title?: Maybe<Scalars['String']['output']>;
  /** Url Key of a Category. */
  url_key?: Maybe<Scalars['String']['output']>;
};

export type AmFaqCommonOutput = {
  /** Is an error occurred flag. */
  error?: Maybe<Scalars['Boolean']['output']>;
  /** Result message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** This enumeration defines types of question voting. */
export type AmFaqVoteTypeEnum =
  | 'VOTING'
  | 'YESNO'
  | 'AVERAGE';

export type AmSocialLoginButton = {
  /** Label */
  label?: Maybe<Scalars['String']['output']>;
  /** Social Platform Type */
  type?: Maybe<Scalars['String']['output']>;
  /** Social Url */
  url?: Maybe<Scalars['String']['output']>;
};

export type AmLinkedSocialAccounts = {
  /** Customer Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Social platform type */
  type?: Maybe<Scalars['String']['output']>;
};

export type AmUnlinkData = {
  /** Is unlink successful. */
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  /** Result message. */
  message?: Maybe<Scalars['String']['output']>;
};

export type SortingOrder = {
  /** Order code. */
  attribute: Scalars['String']['output'];
  /** Order id. */
  id: Scalars['String']['output'];
  sortDirection: Scalars['String']['output'];
  /** Order label. */
  text: Scalars['String']['output'];
};

export type ProductData = {
  /** Product add to cart URL. */
  addToCartUrl?: Maybe<Scalars['String']['output']>;
  /** Product add to compare params. */
  addToCompareParams?: Maybe<Scalars['String']['output']>;
  /** Product has required options. */
  hasRequiredOptions?: Maybe<Scalars['Boolean']['output']>;
  /** Item id. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Product is salable. */
  isSalable?: Maybe<Scalars['Boolean']['output']>;
  /** Product name. */
  name?: Maybe<Scalars['String']['output']>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** Product URL. */
  productUrl?: Maybe<Scalars['String']['output']>;
  /** Product SKU */
  sku: Scalars['String']['output'];
  /** The relative path to the product's small image. */
  small_image?: Maybe<ProductImage>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
};

export type PageTypeEnum =
  | 'CATEGORY'
  | 'SEARCH';

export type CheckoutSessionDetailsOutput = {
  response: Scalars['String']['output'];
};

export type CheckoutSessionDetailsOutputV2 = {
  billing?: Maybe<CheckoutSessionDetailsShippingOutput>;
  payment?: Maybe<Scalars['String']['output']>;
  shipping?: Maybe<CheckoutSessionDetailsShippingOutput>;
};

export type CheckoutSessionDetailsShippingOutput = {
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  region_code?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type CheckoutSessionConfigOutput = {
  button_color?: Maybe<Scalars['String']['output']>;
  checkout_payload?: Maybe<Scalars['String']['output']>;
  checkout_signature?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  login_payload?: Maybe<Scalars['String']['output']>;
  login_signature?: Maybe<Scalars['String']['output']>;
  merchant_id?: Maybe<Scalars['String']['output']>;
  pay_only?: Maybe<Scalars['Boolean']['output']>;
  paynow_payload?: Maybe<Scalars['String']['output']>;
  paynow_signature?: Maybe<Scalars['String']['output']>;
  public_key_id?: Maybe<Scalars['String']['output']>;
  sandbox?: Maybe<Scalars['Boolean']['output']>;
};

export type CheckoutSessionSignInOutput = {
  customer_bearer_token?: Maybe<Scalars['String']['output']>;
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_firstname?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['String']['output']>;
  customer_last?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetCustomerLinkOutput = {
  customer_bearer_token?: Maybe<Scalars['String']['output']>;
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_firstname?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['String']['output']>;
  customer_last?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CompleteCheckoutSessionOutput = {
  increment_id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateCheckoutSessionOutput = {
  redirectUrl?: Maybe<Scalars['String']['output']>;
};

export type AffirmInput = {
  /** The one-time checkout token generated by Affirm. Required field to make sale transaction. */
  checkout_token: Scalars['String']['input'];
};

export type createKlarnaPaymentsSessionInput = {
  cart_id: Scalars['String']['input'];
};

export type KlarnaInput = {
  /** The authorization token must be provided to set any Klarna Payments method */
  authorization_token: Scalars['String']['input'];
};

export type CreateKlarnaPaymentsSessionOutput = {
  /** The payment method client token */
  client_token?: Maybe<Scalars['String']['output']>;
  /** The payment method categories */
  payment_method_categories?: Maybe<Array<Maybe<Categories>>>;
};

export type Categories = {
  /** The payment method assets */
  asset_urls?: Maybe<Array<Maybe<Assets>>>;
  /** The payment method identifier */
  identifier: Scalars['String']['output'];
  /** The payment method name */
  name: Scalars['String']['output'];
};

export type Assets = {
  /** The payment method logo url (descriptive) */
  descriptive?: Maybe<Scalars['String']['output']>;
  /** The payment method logo url (standard) */
  standard?: Maybe<Scalars['String']['output']>;
};

export type Promotion = {
  availability: Scalars['Int']['output'];
  banner?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  promo_url?: Maybe<Scalars['String']['output']>;
};

export type Rebate = {
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entity_id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
};

export type Specials = {
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  rebates?: Maybe<Array<Maybe<Rebate>>>;
};

export type DeliveryMethod = {
  code: Scalars['String']['output'];
  delivery_info: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CartDelivery = {
  available_delivery_methods: Array<Maybe<DeliveryMethod>>;
  selected_delivery_method?: Maybe<DeliveryMethod>;
};

export type SetDeliveryMethodOnCartInput = {
  cart_id: Scalars['String']['input'];
  delivery_method: Scalars['String']['input'];
};

export type SetDeliveryMethodOnCartOutput = {
  cart: Cart;
};

export type DescriptionOverview = {
  /** Array of bullet points. */
  bullet_points?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Main paragraph of the description. */
  main_paragraph?: Maybe<Scalars['String']['output']>;
  /** Description notes, not a part of the actual description. */
  notes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of descriptive paragraphs. */
  paragraphs?: Maybe<Array<Maybe<Paragraph>>>;
  /** Array of product attributes. */
  specifications?: Maybe<Array<Maybe<Specifications>>>;
  /** The base product's title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Returns product's base title with size. */
  title_size?: Maybe<Scalars['String']['output']>;
};

export type Paragraph = {
  /** Paragraph body text. */
  content?: Maybe<Scalars['String']['output']>;
  /** Paragraph title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Specifications = {
  /** Label value of the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** The actual option value of the attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

export type MostPopularData = {
  groups?: Maybe<Array<Maybe<GroupData>>>;
};

export type GroupData = {
  category_group_products?: Maybe<Array<Maybe<ProductInfo>>>;
  default_group_products?: Maybe<Array<Maybe<ProductInterface>>>;
  enabled?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
};

export type ProductInfo = {
  most_popular_priority?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<ProductInterface>;
};

export type Installer = {
  /** Street address of the installer */
  address: Scalars['String']['output'];
  /** List of available appointment time slots */
  available_appointments: Array<Maybe<Appointment>>;
  /** City of the installer */
  city: Scalars['String']['output'];
  /** Primary email address of the installer */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the installer */
  id: Scalars['Int']['output'];
  /** Latitude coordinate of the installer */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude coordinate of the installer */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Display name of the installer */
  name: Scalars['String']['output'];
  /** Installer contact phone number */
  phone_number?: Maybe<Scalars['String']['output']>;
  /** Base price per tire for installation */
  price_per_tire?: Maybe<Scalars['String']['output']>;
  /** State of the installer */
  state: Scalars['String']['output'];
  /** Thumbnail image for installer store */
  thumbnail_image?: Maybe<Scalars['String']['output']>;
  /** Type of installer, 'regular' and 'mobile' is supported */
  type?: Maybe<Scalars['String']['output']>;
  /** Website URL of the installer */
  website?: Maybe<Scalars['String']['output']>;
  /** Postal code of the installer */
  zip_code?: Maybe<Scalars['Int']['output']>;
};

export type Appointment = {
  /** Closing time of the appointment window */
  closes_at: Scalars['String']['output'];
  /** Day of the week for the appointment slot */
  day_of_week: Scalars['String']['output'];
  /** Opening time of the appointment window */
  opens_at: Scalars['String']['output'];
};

export type CartInstaller = {
  /** Optional notes or references provided by the customer */
  appointment_information?: Maybe<Scalars['String']['output']>;
  /** Customer email address provided during installer selection */
  email?: Maybe<Scalars['String']['output']>;
  /** The exact appointment chosen for the cart */
  scheduled_appointment?: Maybe<SelectedAppointment>;
  /** The installer selected for the cart */
  selected_installer?: Maybe<Installer>;
  /** Vehicle VIN attached to the cart */
  vin?: Maybe<Scalars['String']['output']>;
};

export type InstallersInput = {
  /** Installer type (e.g. regular, mobile) */
  type: Scalars['String']['input'];
  /** ZIP/postal code to filter installers by location */
  zip: Scalars['String']['input'];
};

export type InstallersSearchResult = {
  /** List of installer records */
  items: Array<Maybe<Installer>>;
  /** Total number of installers found */
  total_count: Scalars['Int']['output'];
};

export type SetInstallerOnCartInput = {
  /** The appointment chosen for the cart (date and time) */
  appointment?: InputMaybe<SelectedAppointmentInput>;
  /** Optional notes or references */
  appointment_information?: InputMaybe<Scalars['String']['input']>;
  cart_id: Scalars['String']['input'];
  /** Customer email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The full installer object to assign to the cart */
  installer: InstallerInput;
  /** Optional vehicle VIN */
  vin?: InputMaybe<Scalars['String']['input']>;
};

export type SetInstallerOnCartOutput = {
  /** The updated cart with installer information */
  cart: Cart;
};

export type InstallerInput = {
  /** Street address of the installer */
  address: Scalars['String']['input'];
  /** City of the installer */
  city: Scalars['String']['input'];
  /** Primary email address of the installer */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier for the installer */
  id: Scalars['Int']['input'];
  /** Latitude coordinate of the installer */
  lat?: InputMaybe<Scalars['Float']['input']>;
  /** Longitude coordinate of the installer */
  lon?: InputMaybe<Scalars['Float']['input']>;
  /** Display name of the installer */
  name: Scalars['String']['input'];
  /** Installer contact phone number */
  phone_number?: InputMaybe<Scalars['String']['input']>;
  /** Base price per tire for installation */
  price_per_tire?: InputMaybe<Scalars['String']['input']>;
  /** State of the installer */
  state: Scalars['String']['input'];
  /** Thumbnail image for installer store */
  thumbnail_image?: InputMaybe<Scalars['String']['input']>;
  /** Type of installer, 'regular' and 'mobile' is supported */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Website URL of the installer */
  website?: InputMaybe<Scalars['String']['input']>;
  /** Postal code of the installer */
  zip_code?: InputMaybe<Scalars['Int']['input']>;
};

export type SelectedAppointment = {
  /** The appointment date in ISO format (YYYY-MM-DD) */
  date: Scalars['String']['output'];
  /** Exact time selected for the appointment, e.g. 14:30 */
  time: Scalars['String']['output'];
};

export type SelectedAppointmentInput = {
  /** The appointment date in ISO format (YYYY-MM-DD) */
  date: Scalars['String']['input'];
  /** Exact time selected for the appointment, e.g. 14:30 */
  time: Scalars['String']['input'];
};

export type ProductUrl = {
  /** The brand-specific category URL key, if available. */
  brandCategory?: Maybe<Scalars['String']['output']>;
  /** The main category URL key associated with the product. */
  mainCategory?: Maybe<Scalars['String']['output']>;
  /** The primary product URL key. For configurable products, this is the main product URL. */
  primary?: Maybe<Scalars['String']['output']>;
  /** The secondary product URL key. For simple products, this may be the child product’s URL. */
  secondary?: Maybe<Scalars['String']['output']>;
  /** Indicates the product type (e.g. configurable, simple, accessory, assembly, wheels). */
  type?: Maybe<Scalars['String']['output']>;
};

export type ProductRating = {
  /** Total number of reviews that contribute to the product's rating. */
  ratingCount?: Maybe<Scalars['Int']['output']>;
  /** Average rating value for the product, between 0 and 5. */
  ratingValue?: Maybe<Scalars['Float']['output']>;
};

/** Contains all data needed to display vehicle information. */
export type VehiclePages = {
  /** Banner image for the requested vehicle page. */
  banner?: Maybe<Scalars['String']['output']>;
  /** Url to the brand logo of the requested vehicle page. */
  brandLogo?: Maybe<Scalars['String']['output']>;
  /** Sizes compatible with the vehicle (front, rear, minus, plus, both...). */
  compatibleSizes?: Maybe<Array<Maybe<CompatibleSizes>>>;
  /** The description for the selected vehicle. */
  description?: Maybe<Scalars['String']['output']>;
  /** Frequently asked questions for the current vehicle page. */
  faqs?: Maybe<Array<Maybe<Faq>>>;
  /** List of available options for the provided url key. */
  items?: Maybe<Array<Maybe<Items>>>;
  /** Full name of the currently selected vehicle. */
  title?: Maybe<Scalars['String']['output']>;
  /** Returns the type (make,model,year,option). */
  type?: Maybe<Scalars['String']['output']>;
};

/** A frequently asked question and its answer for a vehicle page. */
export type Faq = {
  /** Answer text. */
  answer: Scalars['String']['output'];
  /** Question text. */
  question: Scalars['String']['output'];
};

export type CompatibleSizes = {
  /** Tire sizes when the front and back tires are different. */
  frontRear?: Maybe<Array<Maybe<FrontRearSizeGroup>>>;
  /** Smaller‑than‑stock tire options for extra clearance. */
  minusSizes?: Maybe<MinusSizes>;
  /** Bigger‑than‑stock tire options, sorted by type. */
  plusSizes?: Maybe<PlusSizes>;
  /** Tire sizes that match your stock setup (same front and back). */
  sameSizes?: Maybe<Array<Maybe<SizeGroup>>>;
};

export type PlusSizes = {
  /** Upsize tires on both front and back equally. */
  both?: Maybe<Array<Maybe<SizeGroup>>>;
  /** Upsize only the front tires. */
  frontUpstep?: Maybe<Array<Maybe<SizeGroup>>>;
  /** Upsize only the rear tires. */
  rearUpstep?: Maybe<Array<Maybe<SizeGroup>>>;
};

export type MinusSizes = {
  /** Downsize tires on both front and back equally. */
  both?: Maybe<Array<Maybe<SizeGroup>>>;
  /** Downsize only the front tires. */
  frontDownstep?: Maybe<Array<Maybe<SizeGroup>>>;
  /** Downsize only the rear tires. */
  rearDownstep?: Maybe<Array<Maybe<SizeGroup>>>;
};

export type Front = {
  /** Compatible size label. */
  label?: Maybe<Scalars['String']['output']>;
  /** Number of products in the category */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** URL key that leads to a size category/ */
  url?: Maybe<Scalars['String']['output']>;
};

export type Rear = {
  /** Compatible size label. */
  label?: Maybe<Scalars['String']['output']>;
  /** Number of products in the category */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** URL key that leads to a size category/ */
  url?: Maybe<Scalars['String']['output']>;
};

export type SizeGroup = {
  /** Rim diameter (e.g., '18'). */
  rim?: Maybe<Scalars['String']['output']>;
  /** List of tire sizes for this rim diameter. */
  size?: Maybe<Array<Maybe<Sizes>>>;
};

export type FrontRearSizeGroup = {
  /** Rim diameter (e.g., '18'). */
  rim?: Maybe<Scalars['String']['output']>;
  /** List of tire sizes for this rim diameter. */
  size?: Maybe<Array<Maybe<FrontRearSizes>>>;
};

/** Represents a list of sizes that fit the selected vehicle. */
export type FrontRearSizes = {
  front?: Maybe<Front>;
  /** Compatible size label. */
  label?: Maybe<Scalars['String']['output']>;
  rear?: Maybe<Rear>;
  /** URL key that leads to a size category/ */
  url?: Maybe<Scalars['String']['output']>;
};

/** Represents a list of sizes that fit the selected vehicle. */
export type Sizes = {
  /** Compatible size label. */
  label?: Maybe<Scalars['String']['output']>;
  /** Number of products in the category */
  product_count?: Maybe<Scalars['Int']['output']>;
  /** URL key that leads to a size category/ */
  url?: Maybe<Scalars['String']['output']>;
};

/** A generic item with a display name and slug/url key for navigation. */
export type Items = {
  /** Display name (e.g., '2024', 'Toyota', 'Camry', 'XSE'). */
  name?: Maybe<Scalars['String']['output']>;
  /** URL key or slug for routing (e.g., '2024','toyota'). */
  slug?: Maybe<Scalars['String']['output']>;
};

/** A vehicle manufacturer make. */
export type Make = {
  /** The brand's logo. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The display name of the make. */
  name: Scalars['String']['output'];
  /** The URL key for the make. */
  slug: Scalars['String']['output'];
};

/** A group of makes sharing the same first letter. */
export type MakeGroup = {
  /** The first letter of the make names. */
  letter: Scalars['String']['output'];
  /** Makes beginning with this letter. */
  makes: Array<Maybe<Make>>;
};

/** A vehicle model. */
export type Model = {
  /** The display name of the model. */
  name: Scalars['String']['output'];
  /** The URL key for the model. */
  slug: Scalars['String']['output'];
};

/** A vehicle trim or option package. */
export type Option = {
  /** Returns the chassis id of the vehicle. */
  chassis_id: Scalars['Int']['output'];
  /** The display name of the option. */
  name: Scalars['String']['output'];
  /** The URL key for the option. */
  slug: Scalars['String']['output'];
};

/** Result of checking whether a tire size fits a given vehicle configuration. */
export type SizeCompatibility = {
  /** Sizes compatible with the vehicle (front, rear, minus, plus, both...). */
  compatibleSizes?: Maybe<CompatibleSizes>;
  /** Type of fitment: 'oe', 'plus-size-both', 'minus-size-both', 'plus-size-front-only', 'plus-size-rear-only', 'minus-size-front-only', 'minus-size-rear-only', 'oe-front-only', 'oe-rear-only'. */
  fitmentTypes: Array<Maybe<Scalars['String']['output']>>;
  /** True if the size is compatible in any way (stock, upsize, downsize, front‑only or rear‑only). */
  isCompatible: Scalars['Boolean']['output'];
};

export type VehicleYearGroup = {
  decade: Scalars['String']['output'];
  years: Array<Maybe<Scalars['String']['output']>>;
};

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data?: InputMaybe<Scalars['String']['input']>;
  /** States whether the payment details (Credit/Debit Card, PayPal Account) entered by a customer should be tokenized for later usage. Required only if Vault is enabled for the relevant Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean']['input'];
  /** The one-time payment token generated by Braintree payment gateway based on payment details (Card, PayPal). Required field to make sale transaction. */
  payment_method_nonce: Scalars['String']['input'];
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']['input']>;
  public_hash: Scalars['String']['input'];
};

export type BraintreeVaultInput = {
  device_data?: InputMaybe<Scalars['String']['input']>;
  public_hash: Scalars['String']['input'];
};

export type TireSizeAttributes = {
  aspect_ratio?: InputMaybe<Scalars['Float']['input']>;
  rim_diameter?: InputMaybe<Scalars['Float']['input']>;
  section_width?: InputMaybe<Scalars['Float']['input']>;
  tire_size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TireSize = {
  aspect_ratios?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  rim_diameters?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  section_widths?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  tire_size_info?: Maybe<Array<Maybe<SizeLabels>>>;
};

export type SizeLabels = {
  categoryUrl?: Maybe<Scalars['String']['output']>;
  hasFrontOptions?: Maybe<Scalars['Boolean']['output']>;
  hasRearOptions?: Maybe<Scalars['Boolean']['output']>;
  size_label?: Maybe<Scalars['String']['output']>;
};

export type ComplementaryTireSizeAttributes = {
  aspect_ratio?: InputMaybe<Scalars['Float']['input']>;
  rim_diameter?: InputMaybe<Scalars['Float']['input']>;
  section_width?: InputMaybe<Scalars['Float']['input']>;
  size_label: Scalars['String']['input'];
};

export type ComplementaryTireSizes = {
  aspect_ratios?: Maybe<Array<Maybe<CAspectRatios>>>;
  rim_diameters?: Maybe<Array<Maybe<CRimDiameters>>>;
  section_widths?: Maybe<Array<Maybe<CSectionWidths>>>;
  size_labels?: Maybe<Array<Maybe<ComplementarySizeLabels>>>;
};

export type ComplementarySizeLabels = {
  categoryUrl?: Maybe<Scalars['String']['output']>;
  size_label?: Maybe<Scalars['String']['output']>;
};

export type CSectionWidths = {
  front?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  rear?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type CAspectRatios = {
  front?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  rear?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type CRimDiameters = {
  front?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  rear?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

  export type QuerySdk = {
      /** List all vehicle makes, grouped by their first letter. **/
  allVehicleMakes: InContextSdkMethod<Query['allVehicleMakes'], {}, MeshContext>,
  /** null **/
  amOrderList: InContextSdkMethod<Query['amOrderList'], {}, MeshContext>,
  /** List of linked accounts **/
  amSocialLoginAccountData: InContextSdkMethod<Query['amSocialLoginAccountData'], {}, MeshContext>,
  /** Button configuration **/
  amSocialLoginButtonConfig: InContextSdkMethod<Query['amSocialLoginButtonConfig'], {}, MeshContext>,
  /** null **/
  amfeaturedWidget: InContextSdkMethod<Query['amfeaturedWidget'], QueryamfeaturedWidgetArgs, MeshContext>,
  /** Retrieve EAV attributes associated to a frontend form. Use countries query provided by DirectoryGraphQl module to retrieve region_id and country_id attribute options. **/
  attributesForm: InContextSdkMethod<Query['attributesForm'], QueryattributesFormArgs, MeshContext>,
  /** Returns a list of attributes metadata for a given entity type. **/
  attributesList: InContextSdkMethod<Query['attributesList'], QueryattributesListArgs, MeshContext>,
  /** Get a list of available store views and their config information. **/
  availableStores: InContextSdkMethod<Query['availableStores'], QueryavailableStoresArgs, MeshContext>,
  /** The query returns information about Blog Authors **/
  awBlogAuthors: InContextSdkMethod<Query['awBlogAuthors'], QueryawBlogAuthorsArgs, MeshContext>,
  /** The query returns information about Blog Categories **/
  awBlogCategories: InContextSdkMethod<Query['awBlogCategories'], QueryawBlogCategoriesArgs, MeshContext>,
  /** The query returns information about Blog Config **/
  awBlogConfig: InContextSdkMethod<Query['awBlogConfig'], QueryawBlogConfigArgs, MeshContext>,
  /** The query returns information about Blog Comments **/
  awBlogPostComments: InContextSdkMethod<Query['awBlogPostComments'], QueryawBlogPostCommentsArgs, MeshContext>,
  /** The query returns information about Blog Reply Comments **/
  awBlogPostReplyComments: InContextSdkMethod<Query['awBlogPostReplyComments'], QueryawBlogPostReplyCommentsArgs, MeshContext>,
  /** The query returns information about Blog Post with list of related posts **/
  awBlogPostWithRelatedPosts: InContextSdkMethod<Query['awBlogPostWithRelatedPosts'], QueryawBlogPostWithRelatedPostsArgs, MeshContext>,
  /** The query returns information about Blog Posts **/
  awBlogPosts: InContextSdkMethod<Query['awBlogPosts'], QueryawBlogPostsArgs, MeshContext>,
  /** The query returns information about Blog Tags **/
  awBlogTags: InContextSdkMethod<Query['awBlogTags'], QueryawBlogTagsArgs, MeshContext>,
  /** The query returns information about Blog Tags Cloud **/
  awBlogTagsCloud: InContextSdkMethod<Query['awBlogTagsCloud'], QueryawBlogTagsCloudArgs, MeshContext>,
  /** Return information about the specified shopping cart. **/
  cart: InContextSdkMethod<Query['cart'], QuerycartArgs, MeshContext>,
  /** Return a list of categories that match the specified filter. **/
  categories: InContextSdkMethod<Query['categories'], QuerycategoriesArgs, MeshContext>,
  /** Search for categories that match the criteria specified in the `search` and `filter` attributes. **/
  category: InContextSdkMethod<Query['category'], QuerycategoryArgs, MeshContext>,
  /** Return an array of categories based on the specified filters. **/
  categoryList: InContextSdkMethod<Query['categoryList'], QuerycategoryListArgs, MeshContext>,
  /** Return Terms and Conditions configuration information. **/
  checkoutAgreements: InContextSdkMethod<Query['checkoutAgreements'], {}, MeshContext>,
  /** null **/
  checkoutSessionConfig: InContextSdkMethod<Query['checkoutSessionConfig'], QuerycheckoutSessionConfigArgs, MeshContext>,
  /** null **/
  checkoutSessionDetails: InContextSdkMethod<Query['checkoutSessionDetails'], QuerycheckoutSessionDetailsArgs, MeshContext>,
  /** null **/
  checkoutSessionDetailsV2: InContextSdkMethod<Query['checkoutSessionDetailsV2'], QuerycheckoutSessionDetailsV2Args, MeshContext>,
  /** null **/
  checkoutSessionSignIn: InContextSdkMethod<Query['checkoutSessionSignIn'], QuerycheckoutSessionSignInArgs, MeshContext>,
  /** Return information about CMS blocks. **/
  cmsBlocks: InContextSdkMethod<Query['cmsBlocks'], QuerycmsBlocksArgs, MeshContext>,
  /** Return details about a CMS page. **/
  cmsPage: InContextSdkMethod<Query['cmsPage'], QuerycmsPageArgs, MeshContext>,
  /** Return products that have been added to the specified compare list. **/
  compareList: InContextSdkMethod<Query['compareList'], QuerycompareListArgs, MeshContext>,
  /** The countries query provides information for all countries. **/
  countries: InContextSdkMethod<Query['countries'], {}, MeshContext>,
  /** The countries query provides information for a single country. **/
  country: InContextSdkMethod<Query['country'], QuerycountryArgs, MeshContext>,
  /** Return information about the store's currency. **/
  currency: InContextSdkMethod<Query['currency'], {}, MeshContext>,
  /** Return the attribute type, given an attribute code and entity type. **/
  customAttributeMetadata: InContextSdkMethod<Query['customAttributeMetadata'], QuerycustomAttributeMetadataArgs, MeshContext>,
  /** Retrieve EAV attributes metadata. **/
  customAttributeMetadataV2: InContextSdkMethod<Query['customAttributeMetadataV2'], QuerycustomAttributeMetadataV2Args, MeshContext>,
  /** Return detailed information about a customer account. **/
  customer: InContextSdkMethod<Query['customer'], {}, MeshContext>,
  /** Return information about the customer's shopping cart. **/
  customerCart: InContextSdkMethod<Query['customerCart'], {}, MeshContext>,
  /** Return a list of downloadable products the customer has purchased. **/
  customerDownloadableProducts: InContextSdkMethod<Query['customerDownloadableProducts'], {}, MeshContext>,
  /** null **/
  customerOrders: InContextSdkMethod<Query['customerOrders'], {}, MeshContext>,
  /** Return a list of customer payment tokens stored in the vault. **/
  customerPaymentTokens: InContextSdkMethod<Query['customerPaymentTokens'], {}, MeshContext>,
  /** null **/
  defaultSorting: InContextSdkMethod<Query['defaultSorting'], QuerydefaultSortingArgs, MeshContext>,
  /** Get FAQ Module Settings. **/
  getAmFaqSettings: InContextSdkMethod<Query['getAmFaqSettings'], {}, MeshContext>,
  /** null **/
  getComplementaryTireSizes: InContextSdkMethod<Query['getComplementaryTireSizes'], QuerygetComplementaryTireSizesArgs, MeshContext>,
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. **/
  getHostedProUrl: InContextSdkMethod<Query['getHostedProUrl'], QuerygetHostedProUrlArgs, MeshContext>,
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. **/
  getPayflowLinkToken: InContextSdkMethod<Query['getPayflowLinkToken'], QuerygetPayflowLinkTokenArgs, MeshContext>,
  /** Retrieves the payment configuration for a given location **/
  getPaymentConfig: InContextSdkMethod<Query['getPaymentConfig'], QuerygetPaymentConfigArgs, MeshContext>,
  /** Retrieves the payment details for the order **/
  getPaymentOrder: InContextSdkMethod<Query['getPaymentOrder'], QuerygetPaymentOrderArgs, MeshContext>,
  /** Gets the payment SDK urls and values **/
  getPaymentSDK: InContextSdkMethod<Query['getPaymentSDK'], QuerygetPaymentSDKArgs, MeshContext>,
  /** null **/
  getTireSize: InContextSdkMethod<Query['getTireSize'], QuerygetTireSizeArgs, MeshContext>,
  /** Retrieves the vault configuration **/
  getVaultConfig: InContextSdkMethod<Query['getVaultConfig'], {}, MeshContext>,
  /** Retrieve guest order details based on number, email and postcode. **/
  guestOrder: InContextSdkMethod<Query['guestOrder'], QueryguestOrderArgs, MeshContext>,
  /** Retrieve guest order details based on token. **/
  guestOrderByToken: InContextSdkMethod<Query['guestOrderByToken'], QueryguestOrderByTokenArgs, MeshContext>,
  /** Search for installers by ZIP code and type **/
  installers: InContextSdkMethod<Query['installers'], QueryinstallersArgs, MeshContext>,
  /** Check whether the specified email has already been used to create a customer account. **/
  isEmailAvailable: InContextSdkMethod<Query['isEmailAvailable'], QueryisEmailAvailableArgs, MeshContext>,
  /** The pickup locations query searches for locations that match the search request requirements. **/
  pickupLocations: InContextSdkMethod<Query['pickupLocations'], QuerypickupLocationsArgs, MeshContext>,
  /** Return the active ratings attributes and the values each rating can have. **/
  productReviewRatingsMetadata: InContextSdkMethod<Query['productReviewRatingsMetadata'], {}, MeshContext>,
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. **/
  products: InContextSdkMethod<Query['products'], QueryproductsArgs, MeshContext>,
  /** Returns details about Google reCAPTCHA V3-Invisible configuration. **/
  recaptchaV3Config: InContextSdkMethod<Query['recaptchaV3Config'], {}, MeshContext>,
  /** Return the full details for a specified product, category, or CMS page. **/
  route: InContextSdkMethod<CmsPage | CategoryTree | VirtualProduct | SimpleProduct | DownloadableProduct | BundleProduct | GroupedProduct | ConfigurableProduct | RoutableUrl | AwBlogCategory | AwBlogPost, QueryrouteArgs, MeshContext>,
  /** Search all FAQ categories by keyword with filter and sortOrder. **/
  searchAmFaqCategories: InContextSdkMethod<Query['searchAmFaqCategories'], QuerysearchAmFaqCategoriesArgs, MeshContext>,
  /** Search all FAQ questions with filter and sortOrder. **/
  searchAmFaqQuestions: InContextSdkMethod<Query['searchAmFaqQuestions'], QuerysearchAmFaqQuestionsArgs, MeshContext>,
  /** null **/
  sizeCompatible: InContextSdkMethod<Query['sizeCompatible'], QuerysizeCompatibleArgs, MeshContext>,
  /** null **/
  specials: InContextSdkMethod<Query['specials'], {}, MeshContext>,
  /** Return details about the store's configuration. **/
  storeConfig: InContextSdkMethod<Query['storeConfig'], {}, MeshContext>,
  /** Return the relative URL for a specified product, category or CMS page. **/
  urlResolver: InContextSdkMethod<Query['urlResolver'], QueryurlResolverArgs, MeshContext>,
  /** List all makes available for a given year. **/
  vehicleMakes: InContextSdkMethod<Query['vehicleMakes'], QueryvehicleMakesArgs, MeshContext>,
  /** List all models for a specific year and make. **/
  vehicleModels: InContextSdkMethod<Query['vehicleModels'], QueryvehicleModelsArgs, MeshContext>,
  /** List all options for a specific year, make, and model. **/
  vehicleOptions: InContextSdkMethod<Query['vehicleOptions'], QueryvehicleOptionsArgs, MeshContext>,
  /** null **/
  vehiclePages: InContextSdkMethod<Query['vehiclePages'], QueryvehiclePagesArgs, MeshContext>,
  /** List all available vehicle years, grouped by decade. **/
  vehicleYears: InContextSdkMethod<Query['vehicleYears'], {}, MeshContext>,
  /** Return the contents of a customer's wish list. **/
  wishlist: InContextSdkMethod<Query['wishlist'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addBundleProductsToCart: InContextSdkMethod<Mutation['addBundleProductsToCart'], MutationaddBundleProductsToCartArgs, MeshContext>,
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addConfigurableProductsToCart: InContextSdkMethod<Mutation['addConfigurableProductsToCart'], MutationaddConfigurableProductsToCartArgs, MeshContext>,
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addDownloadableProductsToCart: InContextSdkMethod<Mutation['addDownloadableProductsToCart'], MutationaddDownloadableProductsToCartArgs, MeshContext>,
  /** Add any type of product to the cart. **/
  addProductsToCart: InContextSdkMethod<Mutation['addProductsToCart'], MutationaddProductsToCartArgs, MeshContext>,
  /** Add products to the specified compare list. **/
  addProductsToCompareList: InContextSdkMethod<Mutation['addProductsToCompareList'], MutationaddProductsToCompareListArgs, MeshContext>,
  /** Add one or more products to the specified wish list. This mutation supports all product types. **/
  addProductsToWishlist: InContextSdkMethod<Mutation['addProductsToWishlist'], MutationaddProductsToWishlistArgs, MeshContext>,
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addSimpleProductsToCart: InContextSdkMethod<Mutation['addSimpleProductsToCart'], MutationaddSimpleProductsToCartArgs, MeshContext>,
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. **/
  addVirtualProductsToCart: InContextSdkMethod<Mutation['addVirtualProductsToCart'], MutationaddVirtualProductsToCartArgs, MeshContext>,
  /** Add items in the specified wishlist to the customer's cart. **/
  addWishlistItemsToCart: InContextSdkMethod<Mutation['addWishlistItemsToCart'], MutationaddWishlistItemsToCartArgs, MeshContext>,
  /** Link account **/
  amSocialLoginLinkAccount: InContextSdkMethod<Mutation['amSocialLoginLinkAccount'], MutationamSocialLoginLinkAccountArgs, MeshContext>,
  /** Unlink account **/
  amSocialLoginUnlinkAccount: InContextSdkMethod<Mutation['amSocialLoginUnlinkAccount'], MutationamSocialLoginUnlinkAccountArgs, MeshContext>,
  /** Apply a pre-defined coupon code to the specified cart. **/
  applyCouponToCart: InContextSdkMethod<Mutation['applyCouponToCart'], MutationapplyCouponToCartArgs, MeshContext>,
  /** Assign the specified compare list to the logged in customer. **/
  assignCompareListToCustomer: InContextSdkMethod<Mutation['assignCompareListToCustomer'], MutationassignCompareListToCustomerArgs, MeshContext>,
  /** Assign a logged-in customer to the specified guest shopping cart. **/
  assignCustomerToGuestCart: InContextSdkMethod<Mutation['assignCustomerToGuestCart'], MutationassignCustomerToGuestCartArgs, MeshContext>,
  /** null **/
  awBlogAddCommentToPost: InContextSdkMethod<Mutation['awBlogAddCommentToPost'], MutationawBlogAddCommentToPostArgs, MeshContext>,
  /** Cancel the specified customer order. **/
  cancelOrder: InContextSdkMethod<Mutation['cancelOrder'], MutationcancelOrderArgs, MeshContext>,
  /** Change the password for the logged-in customer. **/
  changeCustomerPassword: InContextSdkMethod<Mutation['changeCustomerPassword'], MutationchangeCustomerPasswordArgs, MeshContext>,
  /** Complete Checkout Session **/
  completeCheckoutSession: InContextSdkMethod<Mutation['completeCheckoutSession'], MutationcompleteCheckoutSessionArgs, MeshContext>,
  /** Confirms the email address for a customer. **/
  confirmEmail: InContextSdkMethod<Mutation['confirmEmail'], MutationconfirmEmailArgs, MeshContext>,
  /** Send a 'Contact Us' email to the merchant. **/
  contactUs: InContextSdkMethod<Mutation['contactUs'], MutationcontactUsArgs, MeshContext>,
  /** Creates Client Token for Braintree Javascript SDK initialization. **/
  createBraintreeClientToken: InContextSdkMethod<Mutation['createBraintreeClientToken'], {}, MeshContext>,
  /** Creates Client Token for Braintree PayPal Javascript SDK initialization. **/
  createBraintreePayPalClientToken: InContextSdkMethod<Mutation['createBraintreePayPalClientToken'], {}, MeshContext>,
  /** Creates Client Token for Braintree PayPal Vault Javascript SDK initialization. **/
  createBraintreePayPalVaultClientToken: InContextSdkMethod<Mutation['createBraintreePayPalVaultClientToken'], MutationcreateBraintreePayPalVaultClientTokenArgs, MeshContext>,
  /** Create a new compare list. The compare list is saved for logged in customers. **/
  createCompareList: InContextSdkMethod<Mutation['createCompareList'], MutationcreateCompareListArgs, MeshContext>,
  /** Use `createCustomerV2` instead. **/
  createCustomer: InContextSdkMethod<Mutation['createCustomer'], MutationcreateCustomerArgs, MeshContext>,
  /** Create a billing or shipping address for a customer or guest. **/
  createCustomerAddress: InContextSdkMethod<Mutation['createCustomerAddress'], MutationcreateCustomerAddressArgs, MeshContext>,
  /** Create a customer account. **/
  createCustomerV2: InContextSdkMethod<Mutation['createCustomerV2'], MutationcreateCustomerV2Args, MeshContext>,
  /** Create an empty shopping cart for a guest or logged in user **/
  createEmptyCart: InContextSdkMethod<Mutation['createEmptyCart'], MutationcreateEmptyCartArgs, MeshContext>,
  /** Create a new shopping cart **/
  createGuestCart: InContextSdkMethod<Mutation['createGuestCart'], MutationcreateGuestCartArgs, MeshContext>,
  /** Creates a Klarna Payments Session. **/
  createKlarnaPaymentsSession: InContextSdkMethod<Mutation['createKlarnaPaymentsSession'], MutationcreateKlarnaPaymentsSessionArgs, MeshContext>,
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods **/
  createPayflowProToken: InContextSdkMethod<Mutation['createPayflowProToken'], MutationcreatePayflowProTokenArgs, MeshContext>,
  /** Creates a payment order for further payment processing **/
  createPaymentOrder: InContextSdkMethod<Mutation['createPaymentOrder'], MutationcreatePaymentOrderArgs, MeshContext>,
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. **/
  createPaypalExpressToken: InContextSdkMethod<Mutation['createPaypalExpressToken'], MutationcreatePaypalExpressTokenArgs, MeshContext>,
  /** Create a product review for the specified product. **/
  createProductReview: InContextSdkMethod<Mutation['createProductReview'], MutationcreateProductReviewArgs, MeshContext>,
  /** Creates a vault payment token **/
  createVaultCardPaymentToken: InContextSdkMethod<Mutation['createVaultCardPaymentToken'], MutationcreateVaultCardPaymentTokenArgs, MeshContext>,
  /** Creates a vault card setup token **/
  createVaultCardSetupToken: InContextSdkMethod<Mutation['createVaultCardSetupToken'], MutationcreateVaultCardSetupTokenArgs, MeshContext>,
  /** Delete the specified compare list. **/
  deleteCompareList: InContextSdkMethod<Mutation['deleteCompareList'], MutationdeleteCompareListArgs, MeshContext>,
  /** Delete customer account **/
  deleteCustomer: InContextSdkMethod<Mutation['deleteCustomer'], {}, MeshContext>,
  /** Delete the billing or shipping address of a customer. **/
  deleteCustomerAddress: InContextSdkMethod<Mutation['deleteCustomerAddress'], MutationdeleteCustomerAddressArgs, MeshContext>,
  /** Delete a customer's payment token. **/
  deletePaymentToken: InContextSdkMethod<Mutation['deletePaymentToken'], MutationdeletePaymentTokenArgs, MeshContext>,
  /** Estimate shipping method(s) for cart based on address **/
  estimateShippingMethods: InContextSdkMethod<Mutation['estimateShippingMethods'], MutationestimateShippingMethodsArgs, MeshContext>,
  /** Estimate totals for cart based on the address **/
  estimateTotals: InContextSdkMethod<Mutation['estimateTotals'], MutationestimateTotalsArgs, MeshContext>,
  /** Generate a token for specified customer. **/
  generateCustomerToken: InContextSdkMethod<Mutation['generateCustomerToken'], MutationgenerateCustomerTokenArgs, MeshContext>,
  /** Request a customer token so that an administrator can perform remote shopping assistance. **/
  generateCustomerTokenAsAdmin: InContextSdkMethod<Mutation['generateCustomerTokenAsAdmin'], MutationgenerateCustomerTokenAsAdminArgs, MeshContext>,
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. **/
  handlePayflowProResponse: InContextSdkMethod<Mutation['handlePayflowProResponse'], MutationhandlePayflowProResponseArgs, MeshContext>,
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. **/
  mergeCarts: InContextSdkMethod<Mutation['mergeCarts'], MutationmergeCartsArgs, MeshContext>,
  /** Place new FAQ Question. **/
  placeAmFaqQuestion: InContextSdkMethod<Mutation['placeAmFaqQuestion'], MutationplaceAmFaqQuestionArgs, MeshContext>,
  /** Convert the quote into an order. **/
  placeOrder: InContextSdkMethod<Mutation['placeOrder'], MutationplaceOrderArgs, MeshContext>,
  /** Rate FAQ Question. **/
  rateAmFaqQuestion: InContextSdkMethod<Mutation['rateAmFaqQuestion'], MutationrateAmFaqQuestionArgs, MeshContext>,
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. **/
  removeCouponFromCart: InContextSdkMethod<Mutation['removeCouponFromCart'], MutationremoveCouponFromCartArgs, MeshContext>,
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. **/
  removeItemFromCart: InContextSdkMethod<Mutation['removeItemFromCart'], MutationremoveItemFromCartArgs, MeshContext>,
  /** Remove products from the specified compare list. **/
  removeProductsFromCompareList: InContextSdkMethod<Mutation['removeProductsFromCompareList'], MutationremoveProductsFromCompareListArgs, MeshContext>,
  /** Remove one or more products from the specified wish list. **/
  removeProductsFromWishlist: InContextSdkMethod<Mutation['removeProductsFromWishlist'], MutationremoveProductsFromWishlistArgs, MeshContext>,
  /** Add all products from a customer's previous order to the cart. **/
  reorderItems: InContextSdkMethod<Mutation['reorderItems'], MutationreorderItemsArgs, MeshContext>,
  /** Request an email with a reset password token for the registered customer identified by the specified email. **/
  requestPasswordResetEmail: InContextSdkMethod<Mutation['requestPasswordResetEmail'], MutationrequestPasswordResetEmailArgs, MeshContext>,
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. **/
  resetPassword: InContextSdkMethod<Mutation['resetPassword'], MutationresetPasswordArgs, MeshContext>,
  /** Revoke the customer token. **/
  revokeCustomerToken: InContextSdkMethod<Mutation['revokeCustomerToken'], {}, MeshContext>,
  /** Send a message on behalf of a customer to the specified email addresses. **/
  sendEmailToFriend: InContextSdkMethod<Mutation['sendEmailToFriend'], MutationsendEmailToFriendArgs, MeshContext>,
  /** Set the billing address on a specific cart. **/
  setBillingAddressOnCart: InContextSdkMethod<Mutation['setBillingAddressOnCart'], MutationsetBillingAddressOnCartArgs, MeshContext>,
  /** Set Customer Link **/
  setCustomerLink: InContextSdkMethod<Mutation['setCustomerLink'], MutationsetCustomerLinkArgs, MeshContext>,
  /** null **/
  setDeliveryMethodOnCart: InContextSdkMethod<Mutation['setDeliveryMethodOnCart'], MutationsetDeliveryMethodOnCartArgs, MeshContext>,
  /** Assign the email address of a guest to the cart. **/
  setGuestEmailOnCart: InContextSdkMethod<Mutation['setGuestEmailOnCart'], MutationsetGuestEmailOnCartArgs, MeshContext>,
  /** Assign an installer and appointment to a cart **/
  setInstallerOnCart: InContextSdkMethod<Mutation['setInstallerOnCart'], MutationsetInstallerOnCartArgs, MeshContext>,
  /** Set the cart payment method and convert the cart into an order. **/
  setPaymentMethodAndPlaceOrder: InContextSdkMethod<Mutation['setPaymentMethodAndPlaceOrder'], MutationsetPaymentMethodAndPlaceOrderArgs, MeshContext>,
  /** Apply a payment method to the cart. **/
  setPaymentMethodOnCart: InContextSdkMethod<Mutation['setPaymentMethodOnCart'], MutationsetPaymentMethodOnCartArgs, MeshContext>,
  /** Set one or more shipping addresses on a specific cart. **/
  setShippingAddressesOnCart: InContextSdkMethod<Mutation['setShippingAddressesOnCart'], MutationsetShippingAddressesOnCartArgs, MeshContext>,
  /** Set one or more delivery methods on a cart. **/
  setShippingMethodsOnCart: InContextSdkMethod<Mutation['setShippingMethodsOnCart'], MutationsetShippingMethodsOnCartArgs, MeshContext>,
  /** Subscribe the specified email to the store's newsletter. **/
  subscribeEmailToNewsletter: InContextSdkMethod<Mutation['subscribeEmailToNewsletter'], MutationsubscribeEmailToNewsletterArgs, MeshContext>,
  /** Synchronizes the payment order details for further payment processing **/
  syncPaymentOrder: InContextSdkMethod<Mutation['syncPaymentOrder'], MutationsyncPaymentOrderArgs, MeshContext>,
  /** Modify items in the cart. **/
  updateCartItems: InContextSdkMethod<Mutation['updateCartItems'], MutationupdateCartItemsArgs, MeshContext>,
  /** Update Checkout Session **/
  updateCheckoutSession: InContextSdkMethod<Mutation['updateCheckoutSession'], MutationupdateCheckoutSessionArgs, MeshContext>,
  /** Use `updateCustomerV2` instead. **/
  updateCustomer: InContextSdkMethod<Mutation['updateCustomer'], MutationupdateCustomerArgs, MeshContext>,
  /** Update the billing or shipping address of a customer or guest. **/
  updateCustomerAddress: InContextSdkMethod<Mutation['updateCustomerAddress'], MutationupdateCustomerAddressArgs, MeshContext>,
  /** Change the email address for the logged-in customer. **/
  updateCustomerEmail: InContextSdkMethod<Mutation['updateCustomerEmail'], MutationupdateCustomerEmailArgs, MeshContext>,
  /** Update the customer's personal information. **/
  updateCustomerV2: InContextSdkMethod<Mutation['updateCustomerV2'], MutationupdateCustomerV2Args, MeshContext>,
  /** Update one or more products in the specified wish list. **/
  updateProductsInWishlist: InContextSdkMethod<Mutation['updateProductsInWishlist'], MutationupdateProductsInWishlistArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["m2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
