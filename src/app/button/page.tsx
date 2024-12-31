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
            usage={`ShadCN Button`}
          >
            <Button>Button</Button>
          </ButtonSection>

          <ButtonSection
            title="Dotted Button"
            description="A button with a dotted border effect."
            usage={`const DottedButton = () => {
  return (
    <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Hover me
    </button>
  );
};

export default DottedButton;
`}
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
            usage={`const DrawOutlineButton = ({
              children,
              ...rest
            }: React.DetailedHTMLProps<
              React.ButtonHTMLAttributes<HTMLButtonElement>,
              HTMLButtonElement
            >) => {
              return (
                <button
                  {...rest}
                  className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
                >
                  <span>{children}</span>
            
                  {/* TOP */}
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
            
                  {/* RIGHT */}
                  <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
            
                  {/* BOTTOM */}
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
            
                  {/* LEFT */}
                  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
                </button>
              );
            };
            
            export default DrawOutlineButton;`}
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
