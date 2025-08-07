"use client";

import { SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type LandingActionsProps = {
  location: "hero";
};

export default function LandingActions({ location }: LandingActionsProps) {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return null;
  }

  if (location === "hero") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <SignUpButton>
          <Button
            size="lg"
            className="text-lg px-8 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </SignUpButton>
        <Button variant="outline" size="lg" className="text-lg px-8">
          Watch a Demo
        </Button>
      </div>
    );
  }

  return null;
}
