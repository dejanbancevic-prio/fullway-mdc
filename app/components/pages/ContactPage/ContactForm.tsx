import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CountryDropMenu from "./CountryDropMenu";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <div>
      <Card className="md:w-[31.75rem] w-[21.4375rem] bg-[#141414] text-white rounded-none">
        <CardContent>
          <form>
            <div className="flex flex-col gap-[0.62rem]">
              <div className="flex flex-col gap-[0.1rem]">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
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
                    type="phoneNumber"
                    placeholder="Phone Number"
                    required
                    className="rounded-none"
                  />
                </div>
                <div className="flex flex-col gap-[0.1rem]">
                  <Label htmlFor="country">Country</Label>
                  <CountryDropMenu />
                </div>
              </div>
              <div className="flex flex-col gap-[0.1rem]">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
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
                  placeholder="Write your message here..."
                  required
                  className="rounded-none h-[8.75rem] resize-none placeholder:text-[#636363] "
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="buttonSkew-white text-base font-[700] w-[10.4386rem]">
            SEND MESSAGE
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactForm;
