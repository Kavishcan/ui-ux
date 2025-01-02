import { Button } from "@/components/ui/buttons/button";
import DottedButton from "@/components/ui/buttons/dottedButton";
import DrawOutlineButton from "@/components/ui/buttons/drawOutlineButton";
import NeuButton from "@/components/ui/buttons/neuButton";
import ButtonWrapper from "@/components/ui/buttons/spotlightButton";
import {
  dottedButtonUsage,
  neuButtonUsage,
  drawOutlineButtonUsage,
  spotlightButtonUsage,
  neuButtonReverseUsage,
} from "../../lib/constant";
import NeuButtonRev from "@/components/ui/buttons/neuButtonReverse";

interface ButtonSectionProps {
  title: string;
  description: string;
  usage: string;
  children: React.ReactNode;
}

function ButtonSection({
  title,
  description,
  usage,
  children,
}: ButtonSectionProps) {
  return (
    <section className="bg-white shadow overflow-hidden sm:rounded-lg w-full">
      <div className="px-4 py-5 sm:px-6 w-full">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0 w-full">
        <dl className="sm:divide-y sm:divide-gray-200 w-full">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 w-full">
            <dt className="text-sm font-medium text-gray-500">Preview</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {children}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 w-full">
            <dt className="text-sm font-medium text-gray-500">Usage</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
                <code>{usage}</code>
              </pre>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Button Components
        </h1>

        <div className="space-y-12">
          <ButtonSection
            title="Standard Button"
            description="A basic button component with customizable styles."
            usage={`ShadCN Button`}
          >
            <Button>Button</Button>
          </ButtonSection>

          <ButtonSection
            title="Dotted Button"
            description="A button with a dotted border effect."
            usage={dottedButtonUsage}
          >
            <DottedButton />
          </ButtonSection>

          <ButtonSection
            title="Neu Button"
            description="A button with a neu hover effect."
            usage={neuButtonUsage}
          >
            <NeuButton />
          </ButtonSection>

          <ButtonSection
            title="Neu Button"
            description="A button with a neu hover effect."
            usage={drawOutlineButtonUsage}
          >
            <div className="grid place-content-center bg-slate-900 p-4">
              <DrawOutlineButton>Hover me</DrawOutlineButton>
            </div>
          </ButtonSection>

          <ButtonSection
            title="Neu Button Reverse"
            description="A button with a neu reverse hover effect."
            usage={neuButtonReverseUsage}
          >
            <NeuButtonRev />
          </ButtonSection>

          <ButtonSection
            title="Spotlight Button"
            description="A button with a spotlight hover effect."
            usage={spotlightButtonUsage}
          >
            <ButtonWrapper />
          </ButtonSection>
        </div>
      </div>
    </div>
  );
}
