import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="bg-atmosphere section-pad">
      <Container className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl text-navy">Sayfa bulunamadı</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="champagne">
            Ana Sayfa
          </Button>
          <Button href="/iletisim" variant="outline">
            İletişim
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          veya{" "}
          <Link href="/hizmetler" className="font-semibold text-navy hover:underline">
            hizmetlerimize
          </Link>{" "}
          göz atın.
        </p>
      </Container>
    </div>
  );
}
