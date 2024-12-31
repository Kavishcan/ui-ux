import { Button } from "@/components/ui/button";
import DottedButton from "@/components/ui/dottedButton";
import DrawOutlineButton from "@/components/ui/drawOutlineButton";
import NeuButton from "@/components/ui/neuButton";
import ButtonWrapper from "@/components/ui/spotlightButton";

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
            usage={`<Button>Button</Button>`}
          >
            <Button>Button</Button>
          </ButtonSection>

          <ButtonSection
            title="Dotted Button"
            description="A button with a dotted border effect."
            usage={`<DottedButton />`}
          >
            <DottedButton />
          </ButtonSection>

          <ButtonSection
            title="Neu Button"
            description="A button with a neu hover effect."
            usage={`const NeuButton = () => {
  return (
    <div className="bg-white flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Hover me
      </button>
    </div>
  );
};

export default NeuButton;
`}
          >
            <NeuButton />
          </ButtonSection>

          <ButtonSection
            title="Neu Button"
            description="A button with a neu hover effect."
            usage={`<DrawOutlineButton>Hover me</DrawOutlineButton>`}
          >
            <div className="grid place-content-center bg-slate-900 p-4">
              <DrawOutlineButton>Hover me</DrawOutlineButton>
            </div>
          </ButtonSection>

          <ButtonSection
            title="Spotlight Button"
            description="A button with a spotlight hover effect."
            usage={`<ButtonWrapper />`}
          >
            <ButtonWrapper />
          </ButtonSection>
        </div>
      </div>
    </div>
  );
}
