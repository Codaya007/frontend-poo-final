import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Loader from "../loader/Loader";
import getHeaderToken from "../../helpers/getHeaderToken";
import { BASEURL, PUBLIC_KEY_STRIPE } from "../../assets/constants";
import { toast } from "react-toastify";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const stripePromise = loadStripe(PUBLIC_KEY_STRIPE);

const CheckoutForm = ({ orderId, amount, setPaid }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          `${BASEURL}/payment`,
          {
            processId: id,
            orderId,
          },
          getHeaderToken()
        );
        console.log(data);
        toast.info(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error.response.data);
        toast.error(error.response.data);
      } finally {
        setLoading(false);
        setPaid(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardElement />
      </div>
      <button disabled={!stripe}>
        {loading ? <Loader /> : `Buy $${amount}`}
      </button>
    </form>
  );
};

function PaymentForm() {
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    paid && navigate(`/order/${orderId}`);
  }, [paid, navigate, orderId]);

  return (
    <Elements stripe={stripePromise}>
      <div>
        <div>
          <CheckoutForm
            setPaid={(value) => setPaid(value)}
            orderId={orderId}
            amount={searchParams.get("amount")}
          />
        </div>
      </div>
    </Elements>
  );
}

export default PaymentForm;
