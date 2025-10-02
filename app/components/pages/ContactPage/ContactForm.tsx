"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CountryDropMenu from "./CountryDropMenu";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("You have successfully sent a message.", {
        className: "flex justify-center !items-center md:!w-[23rem] ",
      });
    } else {
      const errorData = await res.json();
      toast.error(
        `Failed to send message: ${errorData?.message || res.statusText}`,
        { className: "flex justify-center !items-center md:!w-[23rem] " }
      );
    }
  };

  return (
    <div className="flex justify-center md:w-fit w-full md:flex-none md:justify-end">
      <Card className="md:w-[31.75rem] w-full bg-[#141414] text-white rounded-none">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[0.62rem]">
              <div className="flex flex-col gap-[0.1rem]">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="rounded-none"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-[0.62rem]">
                <div className="flex flex-col gap-[0.1rem]">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    placeholder="e.g. John"
                    required
                    className="rounded-none "
                  />
                </div>
                <div className="flex flex-col gap-[0.1rem]">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    placeholder="e.g. Doe"
                    required
                    className="rounded-none"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[0.62rem]">
                <div className="flex flex-col gap-[0.1rem]">
                  <div className="flex gap-[0.1rem]">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Label className="text-[#636363]">(optional)</Label>
                  </div>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="phoneNumber"
                    placeholder="Phone Number"
                    required
                    className="rounded-none"
                  />
                </div>
                <div className="flex flex-col gap-[0.1rem]">
                  <Label htmlFor="country">Country</Label>
                  <CountryDropMenu name="country" />
                </div>
              </div>
              <div className="flex flex-col gap-[0.1rem]">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="subject"
                  placeholder="Subject"
                  required
                  className="rounded-none"
                />
              </div>
              <div className="flex flex-col gap-[0.1rem] ">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                  className="rounded-none h-[8.75rem] resize-none placeholder:text-[#636363] "
                />
              </div>
            </div>
            <CardFooter className="flex justify-end">
              <Button className="buttonSkew-white text-base font-[700] w-[10.4386rem] mt-[1.5rem]">
                SEND MESSAGE
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
