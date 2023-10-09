const CardCheckout = ({ image, title, quantity, sellPrice, price }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        color: '#ececec',
        fontSize: '19px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <img
          src={image}
          style={{ borderRadius: '4px', objectFit: 'cover', height: '100px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginBottom: '0' }}>{title}</p>
          <p style={{ marginLeft: '10px', color: '#ececec9f' }}>
            Cantidad: {quantity}, Precio unidad: {sellPrice}
          </p>
        </div>
      </div>
      <div>${price}</div>
    </div>
  )
}

export default CardCheckout
