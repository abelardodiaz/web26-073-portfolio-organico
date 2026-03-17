import { ButtonLink } from "@/components/shared/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-4 py-32 text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="text-lg text-muted-foreground">
        Esta pagina no existe.
      </p>
      <ButtonLink href="/">Volver al inicio</ButtonLink>
    </div>
  );
}
