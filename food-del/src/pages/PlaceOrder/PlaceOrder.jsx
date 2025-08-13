import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { QRCode } from 'react-qrcode-logo';

const PlaceOrder = () => {

    const { getTotalCartAmount, placeOrder, clearCart } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: ""
    });
    const [upiId, setUpiId] = useState("");
    const [upiApp, setUpiApp] = useState("GooglePay");
    const [showQR, setShowQR] = useState(false);
    const navigate = useNavigate();

    // Replace with your actual UPI ID
    const adminUpiId = "kunalcd2001@oksbi"; 

    useEffect(() => {
        if (getTotalCartAmount() === 0) {
            navigate('/')
        }
    }, [])

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const handleCardChange = (e) => {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>Rs.{getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Delivery Fee</p><p>Rs.{getTotalCartAmount() === 0 ? 0 : 30}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}</b></div>
                    </div>
                </div>
                <div className="payment-options">
                    <h2>Select Payment Method</h2>
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="cod"
                            name="payment"
                            value="COD"
                            checked={paymentMethod === "COD"}
                            onChange={() => setPaymentMethod("COD")}
                        />
                        <label htmlFor="cod">Cash On Delivery</label>
                    </div>
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="card"
                            name="payment"
                            value="Card"
                            checked={paymentMethod === "Card"}
                            onChange={() => setPaymentMethod("Card")}
                        />
                        <label htmlFor="card">Credit/Debit Card</label>
                    </div>
                    {paymentMethod === "Card" && (
                        <div className="card-details">
                            <input type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleCardChange} placeholder="Card Number" />
                            <input type="text" name="cardName" value={cardDetails.cardName} onChange={handleCardChange} placeholder="Name on Card" />
                            <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardChange} placeholder="Expiry (MM/YY)" />
                            <input type="text" name="cvv" value={cardDetails.cvv} onChange={handleCardChange} placeholder="CVV" />
                        </div>
                    )}
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="upi"
                            name="payment"
                            value="UPI"
                            checked={paymentMethod === "UPI"}
                            onChange={() => setPaymentMethod("UPI")}
                        />
                        <label htmlFor="upi">UPI</label>
                    </div>
                    {paymentMethod === "UPI" && (
                        <div className="upi-details">
                            <label>Select UPI App:</label>
                            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                                <label>
                                    <input
                                        type="radio"
                                        name="upiApp"
                                        value="GooglePay"
                                        checked={upiApp === "GooglePay"}
                                        onChange={() => setUpiApp("GooglePay")}
                                    />
                                    Google Pay
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="upiApp"
                                        value="PhonePe"
                                        checked={upiApp === "PhonePe"}
                                        onChange={() => setUpiApp("PhonePe")}
                                    />
                                    PhonePe
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="upiApp"
                                        value="Paytm"
                                        checked={upiApp === "Paytm"}
                                        onChange={() => setUpiApp("Paytm")}
                                    />
                                    Paytm
                                </label>
                            </div>
                            <div style={{ textAlign: "center", margin: "20px 0" }}>
                                <QRCode
                                    value={`upi://pay?pa=${adminUpiId}&pn=FoodDel&am=${getTotalCartAmount() + 30}&cu=INR`}
                                    size={180}
                                />
                                <div style={{ marginTop: "10px", color: "#49557E" }}>
                                    Scan this QR code with your UPI app to pay.<br />
                                    <b>UPI ID:</b> {adminUpiId}
                                </div>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => {
                            if (paymentMethod === "UPI") {
                                setShowQR(true);
                            } else {
                                placeOrder({ ...data, paymentMethod, cardDetails });
                                clearCart();
                                navigate("/order-placed");
                            }
                        }}
                    >
                        PLACE ORDER
                    </button>
                </div>
                {/* QR Modal */}
                {showQR && paymentMethod === "UPI" && (
                    <div className="qr-modal">
                        <div className="qr-modal-content">
                            <h3>Scan & Pay via UPI</h3>
                            <QRCode
                                value={`upi://pay?pa=${adminUpiId}&pn=FoodDel&am=${getTotalCartAmount() + 30}&cu=INR`}
                                size={220}
                            />
                            <p style={{ marginTop: "10px" }}>UPI ID: <b>{adminUpiId}</b></p>
                            <button
                                style={{ marginTop: "20px" }}
                                onClick={() => {
                                    placeOrder({ ...data, paymentMethod, upiApp });
                                    clearCart();
                                    setShowQR(false);
                                    navigate("/order-placed");
                                }}
                            >
                                Payment Done
                            </button>
                            <button
                                style={{ marginTop: "10px", background: "#eee", color: "#333" }}
                                onClick={() => setShowQR(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PlaceOrder


