import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowLeft, CheckCircle, XCircle, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import back from '../assets/back.svg';

const PaymentPage = () => {
  const { cartItems, calculateSubtotal, clearCart } = useCart();
  
  const [paymentState, setPaymentState] = useState({
    isLoading: false,
    order: null,
    paymentResult: null,
    error: null
  });

  // Function to clear cart from localStorage
  const clearCartFromLocalStorage = () => {
    try {
      localStorage.removeItem('cart');
      // Also clear any other cart-related localStorage items if they exist
      localStorage.removeItem('cartItems');
      
      // If your cart context has a clearCart function, call it too
      if (clearCart && typeof clearCart === 'function') {
        clearCart();
      }
      
      console.log('Cart cleared from localStorage after successful payment');
    } catch (error) {
      console.error('Error clearing cart from localStorage:', error);
    }
  };

  const handleCreateOrder = async () => {
    if (cartItems.length === 0) return;
    
    setPaymentState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const totalAmount = calculateSubtotal();
      
      // Create a product ID based on cart items
      const productId = `cart_${Date.now()}`;
      
      const response = await fetch(`https://phoenix-backend-50z8.onrender.com/api/payments/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('clientToken')}`
        },
        body: JSON.stringify({
          amount: parseInt(totalAmount),
          product_id: productId,
          cart_items: cartItems.map(item => ({
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            price: item.price
          }))
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setPaymentState(prev => ({ 
          ...prev, 
          order: data.order, 
          isLoading: false
        }));
        
        // Initialize Razorpay payment
        initializeRazorpayPayment(data.order);
      } else {
        throw new Error(data.message || 'Failed to create order');
      }
    } catch (error) {
      setPaymentState(prev => ({ 
        ...prev, 
        error: error.message, 
        isLoading: false 
      }));
    }
  };

  const initializeRazorpayPayment = (order) => {
    // Check if Razorpay script is already loaded
    if (window.Razorpay) {
      openRazorpayCheckout(order);
      return;
    }

    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      openRazorpayCheckout(order);
    };
    
    script.onerror = () => {
      setPaymentState(prev => ({ 
        ...prev, 
        error: 'Failed to load Razorpay SDK. Please check your internet connection.',
        order: null,
        isLoading: false
      }));
    };
    
    document.body.appendChild(script);
  };

  const openRazorpayCheckout = (order) => {
    const options = {
      key: 'rzp_test_yqlF5mfGkplM3F', // Replace with your Razorpay key
      amount: order.amount,
      currency: order.currency || 'INR',
      name: 'PHEONIX',
      description: `Payment for ${cartItems.length} item(s)`,
      order_id: order.id,
      handler: function (response) {
        // Payment successful - verify payment
        verifyPayment(response);
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        cart_items: cartItems.map(item => `${item.title} (x${item.quantity})`).join(', ')
      },
      theme: {
        color: '#000000'
      },
      modal: {
        ondismiss: function() {
          setPaymentState(prev => ({ 
            ...prev, 
            order: null,
            isLoading: false
          }));
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const verifyPayment = async (paymentResponse) => {
    setPaymentState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const response = await fetch(`https://phoenix-backend-50z8.onrender.com/api/payments/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('clientToken')}`
        },
        body: JSON.stringify({
          payment_id: paymentResponse.razorpay_payment_id,
          order_id: paymentResponse.razorpay_order_id,
          signature: paymentResponse.razorpay_signature,
          cart_items: cartItems
        })
      });

      const data = await response.json();
      
      setPaymentState(prev => ({ 
        ...prev, 
        paymentResult: {
          success: data.success,
          message: data.message,
          paymentId: paymentResponse.razorpay_payment_id,
          orderId: paymentResponse.razorpay_order_id
        },
        order: null,
        isLoading: false
      }));

      // Clear cart from localStorage after successful payment
      if (data.success) {
        clearCartFromLocalStorage();
      }

    } catch (error) {
      setPaymentState(prev => ({ 
        ...prev, 
        paymentResult: {
          success: false,
          message: 'Payment verification failed. Please contact support.',
          error: error.message
        },
        order: null,
        isLoading: false
      }));
    }
  };

  const resetPaymentState = () => {
    setPaymentState({
      isLoading: false,
      order: null,
      paymentResult: null,
      error: null
    });
  };

  const handlePay = () => {
    handleCreateOrder();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-roboto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <img className="w-5 h-5" src={back} alt="Back" />
                </div>
                <span className="text-sm font-medium">Back to Checkout</span>
              </Link>
              <div className="text-center">
                <h1 className="font-tomorrow font-bold text-2xl lg:text-3xl text-gray-900">PHEONIX</h1>
                <p className="text-sm text-gray-500 mt-1">Secure Payment</p>
              </div>
              <div className="w-24"></div> {/* Spacer for centering */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column - Payment Status & Actions */}
            <div className="space-y-6">
              {/* Payment Result */}
              {paymentState.paymentResult && (
                <div className={`p-6 rounded-2xl border-2 shadow-lg ${
                  paymentState.paymentResult.success 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
                    : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      paymentState.paymentResult.success ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {paymentState.paymentResult.success ? (
                        <CheckCircle className="text-green-600" size={24} />
                      ) : (
                        <XCircle className="text-red-600" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 ${
                        paymentState.paymentResult.success ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {paymentState.paymentResult.success ? 'Payment Successful!' : 'Payment Failed'}
                      </h3>
                      <p className={`text-sm mb-3 ${
                        paymentState.paymentResult.success ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {paymentState.paymentResult.message}
                      </p>
                      {paymentState.paymentResult.success && (
                        <div className="bg-white/50 rounded-lg p-3 mb-3">
                          <p className="text-green-700 text-sm font-medium mb-1">
                            ✅ Your cart has been cleared automatically
                          </p>
                          <p className="text-xs text-green-600">
                            You can continue shopping for new items
                          </p>
                        </div>
                      )}
                      {paymentState.paymentResult.paymentId && (
                        <div className="bg-white/50 rounded-lg p-3 text-xs">
                          <p className="text-gray-600">
                            <span className="font-medium">Payment ID:</span> {paymentState.paymentResult.paymentId}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {paymentState.paymentResult.success && (
                    <div className="mt-6 flex gap-3">
                      <Link 
                        to="/" 
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Continue Shopping
                      </Link>
                      <button
                        onClick={resetPaymentState}
                        className="px-6 py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        New Payment
                      </button>
                    </div>
                  )}
                  
                  {!paymentState.paymentResult.success && (
                    <button
                      onClick={resetPaymentState}
                      className="mt-6 w-full px-6 py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                    >
                      Try Again
                    </button>
                  )}
                </div>
              )}

              {/* Error Display */}
              {paymentState.error && (
                <div className="p-6 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-full">
                      <AlertCircle className="text-red-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-red-800 text-lg mb-2">Something went wrong</h3>
                      <p className="text-red-700 text-sm mb-4">{paymentState.error}</p>
                      <button
                        onClick={resetPaymentState}
                        className="px-6 py-2 bg-white border-2 border-red-300 rounded-xl font-semibold text-red-700 hover:bg-red-50 hover:border-red-400 transition-all duration-200"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Pay Button */}
              {!paymentState.paymentResult && (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full mb-4">
                      <CreditCard className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Pay?</h2>
                    <p className="text-gray-600">Secure payment powered by Razorpay</p>
                  </div>
                  
                  <button
                    onClick={handlePay}
                    disabled={cartItems.length === 0 || paymentState.isLoading}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
                      cartItems.length === 0 || paymentState.isLoading
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    }`}
                  >
                    {paymentState.isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      `Pay ₹${new Intl.NumberFormat('en-IN').format(calculateSubtotal())}`
                    )}
                  </button>
                </div>
              )}

              {/* Testing Information */}
              {process.env.NODE_ENV === 'development' && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Test Payment Information
                  </h4>
                  <div className="bg-white rounded-xl p-4 text-sm text-blue-800 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Test Card:</span>
                      <span className="font-mono">4111 1111 1111 1111</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Expiry:</span>
                      <span>Any future date</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">CVV:</span>
                      <span>Any 3 digits</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              {!paymentState.paymentResult && (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-200 rounded-lg">
                          <ShoppingBag className="text-gray-700" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Order Summary</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{new Intl.NumberFormat('en-IN').format(calculateSubtotal())}
                        </p>
                        <p className="text-sm text-gray-500">{cartItems.length} item(s)</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {cartItems.length > 0 ? (
                      <div className="space-y-4">
                        {cartItems.map((item, index) => (
                          <div
                            key={item.id}
                            className={`flex justify-between items-center py-3 ${
                              index !== cartItems.length - 1 ? 'border-b border-gray-100' : ''
                            }`}
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{item.title}</h4>
                              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-900">
                                ₹{new Intl.NumberFormat('en-IN').format(
                                  Number(item.price?.replace(',', '') || 0) * item.quantity
                                )}
                              </p>
                              <p className="text-xs text-gray-500">
                                ₹{new Intl.NumberFormat('en-IN').format(
                                  Number(item.price?.replace(',', '') || 0)
                                )} each
                              </p>
                            </div>
                          </div>
                        ))}
                        
                        <div className="pt-4 mt-6 border-t-2 border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-900">Total Amount:</span>
                            <span className="text-2xl font-bold text-gray-900">
                              ₹{new Intl.NumberFormat('en-IN').format(calculateSubtotal())}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <ShoppingBag className="mx-auto text-gray-300 mb-4" size={48} />
                        <p className="text-gray-500">Your cart is empty.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;