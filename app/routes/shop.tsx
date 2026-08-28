import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Button } from "~/components/ui/button";

export default function Shop() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  const products = [
    { id: 1, title: "ARMADA Tote Bag", price: "2,450", material: "Upcycled Canvas" },
    { id: 2, title: "Terracotta Vase", price: "1,200", material: "Natural Clay" },
    { id: 3, title: "Craft Artisan Box", price: "3,800", material: "Reclaimed Wood" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          Craft Commerce
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          {t.nav.shop}
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 max-w-xl">
          สนับสนุนงานฝีมือประณีตและผลิตภัณฑ์ดีไซน์ยั่งยืน ทุกการสั่งซื้อช่วยสนับสนุนชุมชนช่างฝีมือพื้นถิ่นโดยตรง
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border border-armada-navy/10 p-6 space-y-6 bg-white transition-calm hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full aspect-square bg-armada-navy/5 flex items-center justify-center p-4">
                <span className="font-headline text-lg italic text-armada-navy/30">
                  {projectTitle(product.title)} Image
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-wider text-armada-sand uppercase">
                  {product.material}
                </span>
                <h3 className="font-headline text-2xl text-armada-navy">{product.title}</h3>
              </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-armada-navy/5">
              <div className="flex justify-between items-center">
                <span className="font-sans text-[10px] font-bold uppercase text-armada-navy/40">
                  {t.common.price}
                </span>
                <span className="font-sans text-sm font-bold text-armada-navy">
                  ฿{product.price}
                </span>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                {t.common.buyNow}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function projectTitle(title: string) {
  return title;
}
