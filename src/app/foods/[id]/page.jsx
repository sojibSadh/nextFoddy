export function generateStaticParams() {
  return [{ id: '52792' }, { id: '52891' }, { id: '52860' }]
}


export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const { details = {} } = await res.json();

  return  {
    title: details.title,
    generator: 'Next.js',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
    creator: 'Jiachi Liu',
    publisher: 'Sebastian Markbåge',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }

}


const SingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch food");
  }

  const data = await res.json();
  return data.details;
};

const GetSingleFood = async ({ params }) => {
  const { id } = await params;
  const food = await SingleFood(id);

  console.log(food.video)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Image */}
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
          <img
            src={food.foodImg}
            alt={food.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{food.title}</h1>

          <div className="flex gap-4 text-sm text-gray-600">
            <span>🍗 {food.category}</span>
            <span>🌍 {food.area}</span>
          </div>

          <p className="text-xl font-semibold text-orange-500">
            ৳ {food.price}
          </p>

          {food.video && (
            <a
              href={food.video}
              target="_blank"
              className="inline-block mt-3 text-white bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              ▶ Watch Recipe
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetSingleFood;
