import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FrontPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="bg-primary text-primary-foreground py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Agustin de Llamas</h1>
            <p className="text-lg md:text-xl">
              Full Stack Developer ! Estudiante avanzado de Ingenieria en sistemas.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="John Doe"
              className="rounded-full"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Tecnologías</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Estas son algunas de las tecnologías en las que me especializo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center gap-2">
              <CodepenIcon className="w-12 h-12" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <NetworkIcon className="w-12 h-12" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DatabaseIcon className="w-12 h-12" />
              <span className="text-sm font-medium">SQL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <PiIcon className="w-12 h-12" />
              <span className="text-sm font-medium">API REST</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <WindIcon className="w-12 h-12" />
              <span className="text-sm font-medium">Tailwind.css</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Proyectos</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Algunos de los proyectos en los que he trabajado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="#" className="group" prefetch={false}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Project 1"
                    className="rounded-md object-cover aspect-[16/9]"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold group-hover:underline">Proyecto 1</h3>
                    <p className="text-muted-foreground">Descripción del proyecto 1.</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Project 2"
                    className="rounded-md object-cover aspect-[16/9]"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold group-hover:underline">Proyecto 2</h3>
                    <p className="text-muted-foreground">Descripción del proyecto 2.</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Project 3"
                    className="rounded-md object-cover aspect-[16/9]"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold group-hover:underline">Proyecto 3</h3>
                    <p className="text-muted-foreground">Descripción del proyecto 3.</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ponte en contacto conmigo a través del siguiente formulario o por teléfono.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MailIcon className="w-6 h-6 text-muted-foreground" />
                <span className="text-muted-foreground">john@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-muted-foreground" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="message" rows={5} placeholder="Escribe tu mensaje..." />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="8" height="8" x="14" y="2" rx="2" ry="2" />
      <rect width="8" height="8" x="14" y="14" rx="2" ry="2" />
      <rect width="8" height="8" x="2" y="14" rx="2" ry="2" />
      <path d="M6 6h.01M18 6h.01M18 18h.01M6 18h.01" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12c0 1.5 4 3 9 3s9-1.5 9-3" />
      <path d="M3 7c0 1.5 4 3 9 3s9-1.5 9-3" />
      <path d="M3 17c0 1.5 4 3 9 3s9-1.5 9-3" />
    </svg>
  );
}

function PiIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" x2="19" y1="4" y2="4" />
      <path d="M4 17c0 1.1.9 2 2 2s2-.9 2-2V4" />
      <path d="M16 4v10.5a3.5 3.5 0 0 0 7 0" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.67 17.67A4 4 0 1 0 11 12h5a2 2 0 1 1 0 4H6.5" />
      <path d="M9.6 6.6A4 4 0 1 1 15 12H9a2 2 0 1 0 0 4h12.5" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12l-7.3 5.3a5 5 0 0 1-5.4 0L2 12" />
      <path d="M22 12V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-2.63A19.68 19.68 0 0 1 3.7 12.81 19.86 19.86 0 0 1 1.07 4.18 2 2 0 0 1 3.09 2h3a2 2 0 0 1 2 1.72c.13.88.32 1.74.57 2.58a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 7.48 7.48l1.27-1.27a2 2 0 0 1 2.11-.45c.84.25 1.7.44 2.58.57a2 2 0 0 1 1.72 2.03z" />
    </svg>
  );
}
