"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function OnboardingDialog({ autoOpen = false, showTrigger = true }) {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(autoOpen);

  const stepContent = [
    {
      title: "Welcome to Paynback",
      description:
        "Discover rewards, local deals, and cashback moments designed to make every purchase feel more useful.",
    },
    {
      title: "Explore Local Benefits",
      description:
        "Find offers from nearby merchants and keep track of the savings that matter to you.",
    },
    {
      title: "Ready to Start?",
      description: "Begin using Paynback with a simple flow built for shoppers and merchants alike.",
    },
    {
      title: "Get Support",
      description:
        "Reach the Paynback team whenever you need help with onboarding, rewards, or merchant setup.",
    },
  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (open) setStep(1);
      }}
    >
      {showTrigger ? (
        <DialogTrigger asChild>
          <Button variant="outline">Onboarding</Button>
        </DialogTrigger>
      ) : null}
      <DialogContent className="gap-0 p-0 [&>button:last-child]:text-white">
        <div className="p-2">
          <Image
            className="h-auto w-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=764&q=80"
            width={382}
            height={216}
            alt="A customer using a phone to shop online"
          />
        </div>
        <div className="space-y-6 px-6 pb-6 pt-3">
          <DialogHeader>
            <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
            <DialogDescription>{stepContent[step - 1].description}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center space-x-1.5 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full bg-primary",
                    index + 1 === step ? "bg-primary" : "opacity-20",
                  )}
                />
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="ghost">
                  Skip
                </Button>
              </DialogClose>
              {step < totalSteps ? (
                <Button className="group" type="button" onClick={handleContinue}>
                  Next
                  <ArrowRight
                    className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button type="button">Okay</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { OnboardingDialog, OnboardingDialog as Component };
