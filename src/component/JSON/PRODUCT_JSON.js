// # Saving the JSON structure for a furniture website into a file.
export const furniture_json = {
  furniture: [
    {
      id: 1,
      name: "Modern Sofa",
      category: "LivingRoom",
      description:
        "A modern sofa with a sleek design, perfect for any contemporary living room.",
      price: 499.99,
      dimensions: {
        width: "80 inches",
        height: "30 inches",
        depth: "35 inches",
      },
      material: "Leather",
      color: "Black",
      imageUrl:
        "https://cdn.furnituremagik.com/wp-content/uploads/2018/12/dahlia_solid_wood_single_seater_sofa_by_furniture_magik_by_furniture_magik.jpg",
      stock: 20,
      rating: 4.5,
      reviews: [
        {
          reviewId: 101,
          author: "John Doe",
          rating: 5,
          comment: "Extremely comfortable and stylish!",
        },
        {
          reviewId: 102,
          author: "Jane Smith",
          rating: 4,
          comment:
            "Good quality but the color is slightly different than expected.",
        },
      ],
    },
    {
      id: 2,
      name: "Wooden Coffee Table",
      category: "LivingRoom",
      description: "A handcrafted wooden coffee table made from oak.",
      price: 249.99,
      dimensions: {
        width: "40 inches",
        height: "18 inches",
        depth: "20 inches",
      },
      material: "Oak Wood",
      color: "Brown",
      imageUrl:
        "https://tansi.tn.gov.in/sites/default/files/2023-04/NSTWCHR%201361_VIP%20Oval%20Shape%20Teakwood%20Chair_2.jpg",
      stock: 15,
      rating: 4.7,
      reviews: [
        {
          reviewId: 103,
          author: "Alice Brown",
          rating: 5,
          comment: "Beautiful craftsmanship and sturdy!",
        },
      ],
    },
    {
      id: 3,
      name: "Wooden Stand Table",
      category: "Bedroom",
      description: "A handcrafted wooden coffee table made from oak.",
      price: 249.99,
      dimensions: {
        width: "40 inches",
        height: "18 inches",
        depth: "20 inches",
      },
      material: "Oak Wood",
      color: "Brown",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9EGV1Ndy7uQ0sHadObn-zRDynoQPLlHwqtyR6t_OnIjtMYSlIX7zAIrKXMJnQjla2ZM&usqp=CAU",
      stock: 15,
      rating: 4.7,
      reviews: [
        {
          reviewId: 103,
          author: "Alice Brown",
          rating: 5,
          comment: "Beautiful craftsmanship and sturdy!",
        },
      ],
    },
    {
      id: 4,
      name: "Wooden Coffee Table",
      category: "LivingRoom",
      description: "A handcrafted wooden coffee table made from oak.",
      price: 249.99,
      dimensions: {
        width: "40 inches",
        height: "18 inches",
        depth: "20 inches",
      },
      material: "Oak Wood",
      color: "Brown",
      imageUrl:
        "https://yolagray.com/wp-content/uploads/2019/07/Photo-1-YGA-6.jpg",
      stock: 15,
      rating: 4.7,
      reviews: [
        {
          reviewId: 103,
          author: "Alice Brown",
          rating: 5,
          comment: "Beautiful craftsmanship and sturdy!",
        },
      ],
    },
    {
      id: 5,
      name: "Wooden Coffee Table",
      category: "DiningRoom",
      description: "A handcrafted wooden coffee table made from oak.",
      price: 239.99,
      dimensions: {
        width: "40 inches",
        height: "18 inches",
        depth: "20 inches",
      },
      material: "Oak Wood",
      color: "Brown",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHtecSaaA7hvbl45Ae5QoDdlCFkruFntkZQHv_4HyZBrR0jgfAXw-pRI-niUmZDcz_OQ&usqp=CAU",
      stock: 15,
      rating: 4.7,
      reviews: [
        {
          reviewId: 103,
          author: "Alice Brown",
          rating: 5,
          comment: "Beautiful craftsmanship and sturdy!",
        },
      ],
    },
    {
      id: 6,
      name: "Wooden Coffee Table",
      category: "Office",
      description: "A handcrafted wooden coffee table made from oak.",
      price: 239.99,
      dimensions: {
        width: "40 inches",
        height: "18 inches",
        depth: "20 inches",
      },
      material: "Oak Wood",
      color: "Brown",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHtecSaaA7hvbl45Ae5QoDdlCFkruFntkZQHv_4HyZBrR0jgfAXw-pRI-niUmZDcz_OQ&usqp=CAU",
      stock: 15,
      rating: 4.7,
      reviews: [
        {
          reviewId: 103,
          author: "Alice Brown",
          rating: 5,
          comment: "Beautiful craftsmanship and sturdy!",
        },
      ],
    },
    {
      id: 7,
      name: "Wooden Coffee Table",
      category: "Outdoor",
      description: "A handcrafted wooden coffee table made from oak.",
      price: 249.99,
      dimensions: {
        width: "40 inches",
        height: "18 inches",
        depth: "20 inches",
      },
      material: "Oak Wood",
      color: "Brown",
      imageUrl:
        "https://yolagray.com/wp-content/uploads/2019/07/Photo-1-YGA-6.jpg",
      stock: 15,
      rating: 4.7,
      reviews: [
        {
          reviewId: 103,
          author: "Alice Brown",
          rating: 5,
          comment: "Beautiful craftsmanship and sturdy!",
        },
      ],
    },
  ],
  categories: ["LivingRoom", "Bedroom", "DiningRoom", "Office", "Outdoor"],
  filters: {
    materials: ["Leather", "Wood", "Metal", "Fabric"],
    colors: ["Black", "Brown", "White", "Gray", "Beige"],
    priceRange: {
      min: 50,
      max: 5000,
    },
  },
};

export const feature = [
  {
    id: 1,
    img: "living_room1.jpg",
    name: "Living Room",
  },
  {
    id: 2,
    img: "bad_room.jpg",
    name: "Bed Room",
  },
  {
    id: 3,
    img: "outdoorFurniture.jpg",
    name: "Outdoor Furniture",
  },
];

export const popular = [
  {
    id: 1,
    title: "Popular",
    img: "1.jpg",
    price: "₹14,000",
    name: "Bomboo Chair",
  },
  {
    id: 2,
    title: "New",
    img: "2.jpg",
    price: "₹16,000",
    name: "Bomboo Chair",
  },
  {
    id: 3,
    title: "Popular",
    img: "3.jpg",
    price: "₹12,000",
    name: "Bomboo Chair",
  },
  {
    id: 4,
    title: "New",
    img: "4.jpg",
    price: "₹15,000",
    name: "Bomboo Chair",
  },
  {
    id: 5,
    title: "New",
    img: "5.jpg",
    price: "₹17,000",
    name: "Bomboo Chair",
  },
];
