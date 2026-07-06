export const links = [{ label: "Menu", to: "menu" }];

export type CoffeeItem = {
	id: string;
	name: string;
	subtitle: string;
	description: string;
	price: string;
	category: string;
	image: string;
	rating: number;
	popular?: boolean;
};

export const coffees: CoffeeItem[] = [
	{
		id: "cappuccino",
		name: "Cappuccino",
		subtitle: "Velvety espresso bliss",
		description: "A balanced blend of espresso, steamed milk, and silky foam.",
		price: "$4.50",
		category: "Signature",
		image: "/cappucino.png",
		rating: 4.8,
		popular: true,
	},
	{
		id: "latte",
		name: "Honey Latte",
		subtitle: "Soft and creamy",
		description: "Smooth espresso layered with steamed milk and a gentle honey finish.",
		price: "$5.20",
		category: "Seasonal",
		image: "/latte.png",
		rating: 4.7,
	},
	{
		id: "doppio",
		name: "Doppio",
		subtitle: "Double the energy",
		description: "A bold double-shot espresso for those who like it rich and intense.",
		price: "$4.20",
		category: "Bold",
		image: "/doppio.png",
		rating: 4.9,
	},
	{
		id: "macha",
		name: "Matcha Mist",
		subtitle: "Bright and earthy",
		description: "Whisked green tea with airy foam and a calm, refreshing finish.",
		price: "$5.80",
		category: "Tea House",
		image: "/macha.png",
		rating: 4.6,
	},
	{
		id: "sakura",
		name: "Sakura Bloom",
		subtitle: "Floral and delicate",
		description: "A fragrant blend inspired by cherry blossoms and soft sweetness.",
		price: "$6.10",
		category: "Limited",
		image: "/sakura.png",
		rating: 4.8,
	},
];