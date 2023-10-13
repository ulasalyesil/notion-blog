import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col gap-4 m-20 p-auto max-w-7xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          This is a heading.
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
        <div className="flex gap-2 mt-4">
          <Button>Sign up</Button>
          <Button variant="secondary">Sign in</Button>
        </div>
      </div>
    </main>
  );
}
