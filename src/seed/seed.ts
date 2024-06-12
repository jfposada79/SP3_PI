import bcryptjs from "bcryptjs";

interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes?: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: "bags" | "pottery" | "jackets";
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type ValidTypes = "bags" | "pottery" | "jackets";

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "jose@fernandoposada.com",
      name: "Jose Posada",
      password: bcryptjs.hashSync("123456"),
      role: "admin",
    },
    {
      email: "fernando@fernandoposada.com",
      name: "Fernando Pasada",
      password: bcryptjs.hashSync("123456"),
      role: "user",
    },
  ],

  categories: ["Bags", "Pottery", "Jackets"],
  products: [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra pretium. Phasellus porta tellus felis, quis pulvinar enim molestie vitae. Nam non nulla nibh. Morbi quis leo eu enim vulputate accumsan. Nullam dapibus convallis ornare. Aenean aliquet, erat vel interdum sollicitudin, nulla risus hendrerit mi, sit amet ultrices nisl felis et ante. Fusce mi enim, vehicula in tempor vitae, laoreet eu leo. Aliquam euismod quam sit amet suscipit dictum. Cras vitae nunc lobortis libero maximus interdum.",
      images: ["1.jpg", "1a.jpg"],
      inStock: 7,
      price: 75,
      sizes: ["S", "M", "L"],
      slug: "Lorem_ipsum_dolor",
      type: "pottery",
      tags: ["pottery"],
      title: "Lorem ipsum dolor",
      gender: "pottery",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra pretium. Phasellus porta tellus felis, quis pulvinar enim molestie vitae. Nam non nulla nibh. Morbi quis leo eu enim vulputate accumsan. Nullam dapibus convallis ornare. Aenean aliquet, erat vel interdum sollicitudin, nulla risus hendrerit mi, sit amet ultrices nisl felis et ante. Fusce mi enim, vehicula in tempor vitae, laoreet eu leo. Aliquam euismod quam sit amet suscipit dictum. Cras vitae nunc lobortis libero maximus interdum.",
      images: ["3.jpg", "3a.jpg"],
      inStock: 5,
      price: 200,
      sizes: ["S", "M", "L"],
      slug: "Lorem_ipsum_dolor2",
      type: "pottery",
      tags: ["pottery"],
      title: "Lorem ipsum dolor",
      gender: "pottery",
    },

    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra pretium. Phasellus porta tellus felis, quis pulvinar enim molestie vitae. Nam non nulla nibh. Morbi quis leo eu enim vulputate accumsan. Nullam dapibus convallis ornare. Aenean aliquet, erat vel interdum sollicitudin, nulla risus hendrerit mi, sit amet ultrices nisl felis et ante. Fusce mi enim, vehicula in tempor vitae, laoreet eu leo. Aliquam euismod quam sit amet suscipit dictum. Cras vitae nunc lobortis libero maximus interdum.",
      images: ["2.jpg", "2a.jpg"],
      inStock: 10,
      price: 130,
      sizes: ["S", "M", "L"],
      slug: "Lorem_ipsum_dolor3",
      type: "pottery",
      tags: ["pottery"],
      title: "Lorem ipsum dolor",
      gender: "pottery",
    },

    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra pretium. Phasellus porta tellus felis, quis pulvinar enim molestie vitae. Nam non nulla nibh. Morbi quis leo eu enim vulputate accumsan. Nullam dapibus convallis ornare. Aenean aliquet, erat vel interdum sollicitudin, nulla risus hendrerit mi, sit amet ultrices nisl felis et ante. Fusce mi enim, vehicula in tempor vitae, laoreet eu leo. Aliquam euismod quam sit amet suscipit dictum. Cras vitae nunc lobortis libero maximus interdum.",
      images: ["4.jpg", "4a.jpg"],
      inStock: 50,
      price: 45,
      sizes: ["XS", "S", "M", "L"],
      slug: "Lorem_ipsum_dolor4",
      type: "jackets",
      tags: ["jackets"],
      title: "Lorem ipsum dolor",
      gender: "jackets",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra pretium. Phasellus porta tellus felis, quis pulvinar enim molestie vitae. Nam non nulla nibh. Morbi quis leo eu enim vulputate accumsan. Nullam dapibus convallis ornare. Aenean aliquet, erat vel interdum sollicitudin, nulla risus hendrerit mi, sit amet ultrices nisl felis et ante. Fusce mi enim, vehicula in tempor vitae, laoreet eu leo. Aliquam euismod quam sit amet suscipit dictum. Cras vitae nunc lobortis libero maximus interdum.",
      images: ["5.jpg", "5a.jpg"],
      inStock: 50,
      price: 40,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "Lorem_ipsum_dolor5",
      type: "jackets",
      tags: ["jackets"],
      title: "Lorem ipsum dolor",
      gender: "jackets",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra pretium. Phasellus porta tellus felis, quis pulvinar enim molestie vitae. Nam non nulla nibh. Morbi quis leo eu enim vulputate accumsan. Nullam dapibus convallis ornare. Aenean aliquet, erat vel interdum sollicitudin, nulla risus hendrerit mi, sit amet ultrices nisl felis et ante. Fusce mi enim, vehicula in tempor vitae, laoreet eu leo. Aliquam euismod quam sit amet suscipit dictum. Cras vitae nunc lobortis libero maximus interdum..",
      images: ["6.png", "6a.png"],
      inStock: 0,
      price: 35,
      sizes: ["S", "M", "L"],
      slug: "bag_bag_bag",
      type: "bags",
      tags: ["bag"],
      title: "Lorem ipsum dolor sit amet",
      gender: "bags",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra pretium. Phasellus porta tellus felis, quis pulvinar enim molestie vitae. Nam non nulla nibh. Morbi quis leo eu enim vulputate accumsan. Nullam dapibus convallis ornare. Aenean aliquet, erat vel interdum sollicitudin, nulla risus hendrerit mi, sit amet ultrices nisl felis et ante. Fusce mi enim, vehicula in tempor vitae, laoreet eu leo. Aliquam euismod quam sit amet suscipit dictum. Cras vitae nunc lobortis libero maximus interdum.",
      images: ["7.png", "7a.png"],
      inStock: 15,
      price: 35,
      sizes: ["S", "M", "L"],
      slug: "bag_cybertruck_owl_tee6",
      type: "bags",
      tags: ["bag"],
      title: "Lorem ipsum dolor sit amet",
      gender: "bags",
    },
  ],
};
