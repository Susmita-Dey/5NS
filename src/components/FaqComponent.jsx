import React, { useState } from "react";
import AccordionItems from "./AccordionItems";

export default function FaqComponent() {
    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const accordiondata = [
        {
            title: "How long does it take for health supplements to start working?",
            desc: "Every individual is different so the speed of results may vary from person to person. But I should see results after 3-6 weeks if I take the recommended dose regularly as advised.",
        },
        {
            title: "Can I take health supplements while on medication?",
            desc: "Every individual is unique and may react to a supplement differently. This usually due to allergies or underlying health conditions. Please consult a healthcare practitioner before taking any supplement; especially if pregnant, taking any medications or facing any health conditions.",
        },
        {
            title: "Are all health supplements safe to take?",
            desc: "Most people can use dietary supplements safely as long as they don't take too much and follow recommended daily allowance. As we mentioned earlier every individual is unique and may have allergies or underlying health condition so please consult healthcare practitioner before taking supplement ; especially if pregnant, taking any medication or facing any health condition.",
        },
        {
            title:
                "What is your return policy for health supplements purchased on your ecommerce website?",
            desc: "We offer you complete peace of mind while ordering at ZyncaBiotics - you can return all items within 14 days of receipt of goods. Please ensure that the product is unused and the tags, boxes and other packaging is intact. If you are not satisfied with what you have bought, we'll gladly take it back within 14 days from the date of delivery, for that please send us pictures of the packaging and product(s) at customercare@zyncabiotics.com. If you have paid by card then we will reverse the payment. In case of Cash on Delivery or Bank Deposits as modes of payment, we will reverse the payment or issue a  cheque in the registered name of the customer.",
        },
        {
            title:
                "How long does it take for my health supplements to be shipped and delivered after ordering on your ecommerce website?",
            desc: "We deliver your order within 3-4 working days post-dispatch in Tier-1 and Tier-2 Metros (New Delhi, Mumbai, Kolkata, Bengaluru, Chennai, Pune, Ahmedabad and Hyderabad). For the rest of the cities, we deliver between 2-5 business days. Delivery by ground takes a little longer than air couriers. Ground-shipped orders are delivered to you between 5-7 business days post-dispatch. Deliveries to very remote locations such as North East may take up to 7 business days or longer, depending on the location's geographical constraints.",
        },
    ];
    return (
        <div className="container mx-auto my-10">
            <div className="px-4 text-center">
                <h1 className="text-4xl mt-20 heading">Frequently Asked Questions</h1>
                <p className=" m-auto mt-5 text-xl">
                    Need some help? Our most frequently asked questions are available to
                    support you.
                </p>
            </div>
            <div className="px-4 md:px-20 text-justify">
                {accordiondata.map((data, index) => {
                    return (
                        <AccordionItems
                            key={index}
                            open={index === open}
                            title={data.title}
                            desc={data.desc}
                            toggle={() => toggle(index)}
                        />
                    );
                })}
            </div>
        </div>
    )
}