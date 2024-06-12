export const revalidate = 604800; //7 días
import { Metadata, ResolvingMetadata } from 'next';

import { notFound } from 'next/navigation';

import { titleFont } from '@/config/fonts';
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from '@/components';
import { getProductBySlug } from '@/actions';
import { AddToCart } from './ui/AddToCart';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      // images: [], // https://misitioweb.com/products/image.png
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  console.log(product);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Slideshow */}
        <div className="col-span-1 md:col-span-2 ">
          {/* Mobile Slideshow */}
          <ProductMobileSlideshow
            title={product.title}
            images={product.images}
            className="block md:hidden"
          />

          {/* Desktop Slideshow */}
          <ProductSlideshow
            title={product.title}
            images={product.images}
            className="hidden md:block"
          />
        </div>

        {/* Detalles */}
        <div className="col-span-1 px-5">
          <StockLabel slug={product.slug} />

          <h1 className={` ${titleFont.className} antialiased font-bold  text-2xl`}>
            {product.title}
          </h1>
{/* Aquí agregarías el selector de tallas y cantidad */}
          <div className="flex items-center my-4">
            <span className="text-xl text-red-500 line-through mr-2">${product.price}</span>
            <span className="text-2xl text-green-500">${product.price}</span>
            <span className="ml-2 p-1 bg-yellow-300 text-sm rounded">15% OFF</span>
          </div>

          <p className="text-lg mb-5">${product.price}</p>

          <AddToCart product={product} />

          {/* Descripción */}

          <div className="mt-10">
            <ul className="flex border-b">
              <li className="-mb-px mr-1">
                <a
                  className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                  href="#"
                >
                  Descripción
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-700 font-semibold"
                  href="#"
                >
                  Ficha técnica
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-700 font-semibold"
                  href="#"
                >
                  Recomendaciones
                </a>
              </li>
            </ul>
            <div className="tab-content mt-4">{/* Contenido de las pestañas */}</div>
          </div>
          <h3 className="font-bold text-sm">Descripción</h3>
          <p className="font-light">{product.description}</p>
        </div>

        {/* Recommended Products Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Productos recomendados</h2>
          <div className="flex gap-6">{/* Aquí agregarías los productos recomendados */}</div>
        </div>
      </div>
    </div>
  );
}
