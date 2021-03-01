export const DescriptionItem = ({description}) => {
  return (
    <div className="descriptionContainer">
      <h2>Descripcion del producto</h2>
      <p>{description}</p>
    </div>
  );
};

export const PriceItem = ({price}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: `${price.currency}`,
    minimumFractionDigits: price.decimals || 2
  });
  const amount = formatter.format(price.amount);
  return (
    <span>{amount}</span>
  );
};

export const ConditionItem = ({condition, soldQuantity = null}) => {
  return !!soldQuantity ? 
  (<span>{condition} - {soldQuantity} vendidos </span>) :
  (<span>{condition}</span>);
};

export const FreeShippingIcon = ({freeShipping}) => {
  const freeShippingIcon = '/assets/ic_shipping.png';
  return (!!freeShipping && (<img src={freeShippingIcon} alt="free shipping icon" />));
};

export const MeLiIcon = ({freeShipping}) => {
  const meLiLogo = '/assets/Logo_ML.png';
  return (
    <img src={meLiLogo} alt="Mercado Libre's logo"/>
  )
};


export default {
DescriptionItem,
PriceItem,
ConditionItem,
FreeShippingIcon,
MeLiIcon
};