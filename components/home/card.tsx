import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`bg-white relative col-span-1 overflow-hidden rounded-xl p-8 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="">
        <header className="mb-4">
          <h2 className="font-display text-xl font-bold md:text-3xl md:font-normal mb-2">
            <Balancer>{title}</Balancer>
          </h2>
          <div className="md:text-lg">
            <Balancer>
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                      className="font-medium text-gray-800 underline transition-colors"
                    />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      {...props}
                      // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                      inline="true"
                      className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                    />
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            </Balancer>
          </div>
        </header>
      </div>
      <div className="">{demo}</div>
    </div>
  );
}
