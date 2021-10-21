

const dummy_data = [
	{
		product_id: 1,
		commodity_category: "Animal Products",
		sub_category: "Other",
		product_name: "Eggs",
		product_price: 1.50,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 2,
		commodity_category: "Animal Products",
		sub_category: "Other",
		product_name: "Milk",
		product_price: 2.50,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 3,
		commodity_category: "Animal Products",
		sub_category: "Other",
		product_name: "Nile Perch",
		product_price: 11.75,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 4,
		commodity_category: "Animal Products",
		sub_category: "Other",
		product_name: "Processed Honey",
		product_price: 8.00,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 5,
		commodity_category: "Beans",
		sub_category: "Beans",
		product_name: "Black Beans",
		product_price: 3.25,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 6,
		commodity_category: "Beans",
		sub_category: "Beans",
		product_name: "Pinto Beans",
		product_price: 2.75,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 7,
		commodity_category: "Cereals",
		sub_category: "Maize",
		product_name: "Maize Bran",
		product_price: 1.50,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 8,
		commodity_category: "Cereals",
		sub_category: "Maize",
		product_name: "Maize Flour",
		product_price: 2.25,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 9,
		commodity_category: "Cereals",
		sub_category: "Barley",
		product_name: "Barley",
		product_price: 2.00,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 10,
		commodity_category: "Cereals",
		sub_category: "Millet",
		product_name: "Bulrush Millet",
		product_price: 2.00,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 1
	},
	{
		product_id: 11,
		commodity_category: "Fruits",
		sub_category: "Avocado",
		product_name: "Avocado",
		product_price: 5.00,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 12,
		commodity_category: "Fruits",
		sub_category: "Bananas",
		product_name: "Apple Bananas",
		product_price: 1.25,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 13,
		commodity_category: "Fruits",
		sub_category: "Bananas",
		product_name: "Cavendish (Bogoya)",
		product_price: 1.50,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 14,
		commodity_category: "Fruits",
		sub_category: "Bananas",
		product_name: "Cooking Bananas",
		product_price: 0.75,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 15,
		commodity_category: "Coffee",
		sub_category: "Robusta",
		product_name: "Kenya's Coffee",
		product_price: 5.50,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 16,
		commodity_category: "Coffee",
		sub_category: "Arabica",
		product_name: "Yirgacheffe Coffee",
		product_price: 3.25,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 17,
		commodity_category: "Textiles",
		sub_category: "Cotton",
		product_name: "Unprocessed Cotton",
		product_price: 10.00,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 18,
		commodity_category: "Tea",
		sub_category: "Unprocessed",
		product_name: "Black Tea",
		product_price: 2.00,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 19,
		commodity_category: "Vegetables",
		sub_category: "Onions",
		product_name: "Spring Onions",
		product_price: 3.00,
		location: 'Kenya',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	},
	{
		product_id: 20,
		commodity_category: "Vegetables",
		sub_category: "Tomatoes",
		product_name: "Heirloom Tomatoes",
		product_price: 3.25,
		location: 'Ethiopia',
		product_image: null,
		product_description: 'Description placeholder',
		user_id: 2
	}
];

/*
const dummy_data = [
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Eggs",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Exotic Eggs",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Local Eggs",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Milk",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Nile Perch",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Processed Honey",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Tilapia",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Animal Products - Other",
	  product_name: "Unprocessed Honey",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Livestock",
	  product_name: "Beef",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Livestock",
	  product_name: "Goat Meat",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Livestock",
	  product_name: "Pork",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Poultry",
	  product_name: "Exotic Chicken",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Poultry",
	  product_name: "Local Chicken",
	},
	{
	  commodity_category: "Animal Products",
	  sub_category: "Poultry",
	  product_name: "Turkey",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Agwedde Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Beans (K132)",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Beans Canadian",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Beans Mwitemania",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Beans Rosecoco",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Black Beans (Dolichos)",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Dolichos (Njahi)",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Green Gram",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Kproduct_idney Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Mixed Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Mwezi Moja",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Nambale Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Old Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Red Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Soya Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "White Beans",
	},
	{
	  commodity_category: "Beans",
	  sub_category: "Beans",
	  product_name: "Yellow Beans",
	},
	{
	  commodity_category: "Cereals - Maize",
	  sub_category: "Maize",
	  product_name: "Dry Maize",
	},
	{
	  commodity_category: "Cereals - Maize",
	  sub_category: "Maize",
	  product_name: "Green Maize",
	},
	{
	  commodity_category: "Cereals - Maize",
	  sub_category: "Maize",
	  product_name: "Maize",
	},
	{
	  commodity_category: "Cereals - Maize",
	  sub_category: "Maize",
	  product_name: "Maize Bran",
	},
	{
	  commodity_category: "Cereals - Maize",
	  sub_category: "Maize",
	  product_name: "Maize Flour",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Barley",
	  product_name: "Barley",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Millet",
	  product_name: "Bulrush Millet",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Millet",
	  product_name: "Finger Millet",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Millet",
	  product_name: "Millet Flour",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Millet",
	  product_name: "Millet Grain",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Millet",
	  product_name: "Pearl Millet",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Millet",
	  product_name: "White Millet",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Sorghum",
	  product_name: "Red Sorghum",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Sorghum",
	  product_name: "Sorghum",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Sorghum",
	  product_name: "Sorghum Flour",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Sorghum",
	  product_name: "Sorghum Grain",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Sorghum",
	  product_name: "White Sorghum",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Wheat",
	  product_name: "Wheat",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Wheat",
	  product_name: "Wheat Bran",
	},
	{
	  commodity_category: "Cereals - Other",
	  sub_category: "Wheat",
	  product_name: "Wheat Flour",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Imported Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Kahama Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Kayiso Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Kilombero Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Mbeya Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Morogoro Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Paddy Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Rice Bran",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Super Rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Unprocessed/husked rice",
	},
	{
	  commodity_category: "Cereals - Rice",
	  sub_category: "Rice",
	  product_name: "Upland Rice",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Avocado",
	  product_name: "Avocado",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Bananas",
	  product_name: "Apple Bananas",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Bananas",
	  product_name: "Cavendish (Bogoya)",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Bananas",
	  product_name: "Cooking Bananas",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Bananas",
	  product_name: "Ripe Bananas",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Fruits",
	  product_name: "Passion Fruits",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Lemons",
	  product_name: "Lemons",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Limes",
	  product_name: "Limes",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Mangoes",
	  product_name: "Mangoes Local",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Mangoes",
	  product_name: "Mangoes Ngowe",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Oranges",
	  product_name: "Oranges",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Pawpaw",
	  product_name: "Pawpaw",
	},
	{
	  commodity_category: "Fruits",
	  sub_category: "Pineapples",
	  product_name: "Pineapples",
	},
	{
	  commodity_category: "Other",
	  sub_category: "Coffee",
	  product_name: "Coffee (Arabica)",
	},
	{
	  commodity_category: "Other",
	  sub_category: "Coffee",
	  product_name: "Coffee (Robusta)",
	},
	{
	  commodity_category: "Other",
	  sub_category: "Cotton",
	  product_name: "Unprocessed Cotton",
	},
	{
	  commodity_category: "Other",
	  sub_category: "Tea",
	  product_name: "Unprocessed Tea",
	},
	{
	  commodity_category: "Other",
	  sub_category: "Tobacco",
	  product_name: "Tobacco",
	},
	{
	  commodity_category: "Other",
	  sub_category: "Vanilla",
	  product_name: "Unprocessed Vanilla",
	},
	{
	  commodity_category: "Peas",
	  sub_category: "Peas",
	  product_name: "Chic Pea",
	},
	{
	  commodity_category: "Peas",
	  sub_category: "Peas",
	  product_name: "Cowpeas",
	},
	{
	  commodity_category: "Peas",
	  sub_category: "Peas",
	  product_name: "Dry Peas",
	},
	{
	  commodity_category: "Peas",
	  sub_category: "Peas",
	  product_name: "Fresh Peas",
	},
	{
	  commodity_category: "Peas",
	  sub_category: "Peas",
	  product_name: "Green Peas",
	},
	{
	  commodity_category: "Peas",
	  sub_category: "Peas",
	  product_name: "Peas",
	},
	{
	  commodity_category: "Peas",
	  sub_category: "Peas",
	  product_name: "Pigeon Peas",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Cassava",
	  product_name: "Cassava Chips",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Cassava",
	  product_name: "Cassava Flour",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Cassava",
	  product_name: "Cassava Fresh",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Cassava",
	  product_name: "Dry Fermented Cassava",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Cassava",
	  product_name: "Sun Dried Cassava",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Potatoes",
	  product_name: "Red Irish Potatoes",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Potatoes",
	  product_name: "Round Potatoes",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Potatoes",
	  product_name: "Sweet Potatoes",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Potatoes",
	  product_name: "White Fleshed Sweet Potatoes",
	},
	{
	  commodity_category: "Roots & Tubers",
	  sub_category: "Potatoes",
	  product_name: "White Irish Potatoes",
	},
	{
	  commodity_category: "Seeds & Nuts",
	  sub_category: "Nuts",
	  product_name: "Ground Nuts",
	},
	{
	  commodity_category: "Seeds & Nuts",
	  sub_category: "Nuts",
	  product_name: "Groundnuts",
	},
	{
	  commodity_category: "Seeds & Nuts",
	  sub_category: "Simsim",
	  product_name: "Simsim",
	},
	{
	  commodity_category: "Seeds & Nuts",
	  sub_category: "Sunflowers",
	  product_name: "Sunflower Seed",
	},
	{
	  commodity_category: "Seeds & Nuts",
	  sub_category: "Sunflowers",
	  product_name: "Sunflower Seed Cake",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Brinjals",
	  product_name: "Brinjal/Eggplant",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Cabbages",
	  product_name: "Cabbages",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Capsicums",
	  product_name: "Capsicums",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Carrots",
	  product_name: "Carrots",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Cauliflower",
	  product_name: "Cauliflower",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Chillies",
	  product_name: "Chillies",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Cucumber",
	  product_name: "Cucumber",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Ginger",
	  product_name: "Ginger",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Kales",
	  product_name: "Kales",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Lettuce",
	  product_name: "Lettuce",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Onions",
	  product_name: "Onions Dry",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Onions",
	  product_name: "Spring Onions",
	},
	{
	  commodity_category: "Vegetables",
	  sub_category: "Tomatoes",
	  product_name: "Tomatoes",
	},
];
 */

export default dummy_data;