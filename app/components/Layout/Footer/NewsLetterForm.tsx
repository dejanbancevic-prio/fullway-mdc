"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@apollo/client/react";
import {
  SubscribeEmailToNewsletterDocument,
  type SubscribeEmailToNewsletterMutation,
  type SubscribeEmailToNewsletterMutationVariables,
} from "@/lib/__generated__/graphql";

const NewsLetterForm = () => {
  const [email, setEmail] = useState("");

 const [subscribe, { data, loading, error }] = useMutation<
    SubscribeEmailToNewsletterMutation,
    SubscribeEmailToNewsletterMutationVariables
  >(SubscribeEmailToNewsletterDocument);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const handleSubscribe = async () => {

      if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      await subscribe({ variables: { email } });
      setEmail(""); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center md:mt-[0rem] mt-[1.5rem] md:mb-[0rem] mb-[2.25rem]">
        <Input
          type="email"
          placeholder="example@mail.com"
          className="rounded-none w-[17.688rem]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          onClick={handleSubscribe}
           data-disabled={!isEmailValid || loading}
          className="bg-white text-black rounded-none italic text-base font-[600]
           hover:text-white cursor-pointer disabled:!bg-white disabled:!text-black disabled:!cursor-not-allowed"
        >
          {loading ? "Signing up..." : "SIGN UP"}
        </Button>

    </div>
  );
};

export default NewsLetterForm;
