import { Button } from "@/components/ui/button";
import DottedButton from "@/components/ui/dottedButton";
import ButtonWrapper from "@/components/ui/spotlightButton";

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
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
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 w-full">
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
