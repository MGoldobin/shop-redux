import { Product } from '../types/index'

export const DATA: {status: number, data: Product[]} = {
	status: 200,
	data: [
		{
			id: 1,
			title: 'Google Pixel 6 Pro',
			description: 'Супер пупер телефон',
			characteristics: [
				'Экран 6.7" (3120×1440) OLED 120 Гц',
				'Встроенная память 128 ГБ',
				'Оперативная память	12 ГБ',
				'3 камеры 50 МП, 12 МП, 48 МП',
				'Аккумулятор 4905 мА·ч',
				'Процессор Google Tensor',
				'SIM-карты 2 (nano SIM+eSIM)',
				'Операционная система Android 12',
				'Беспроводные интерфейсы NFC',
				'Bluetooth, Wi-Fi',
				'Стандарт связи	4G LTE, 5G, 3G',
				'Степень защиты	IP68',
				'Вес	210 г'
			],
			price: 99000,
			category: 'Smartphone',
			images: [
				'https://1click.ru/upload/resized/500/500/75/upload/iblock/d44/xd441424f8c54bbccaa27494065a18253.png,q1645517154.pagespeed.ic.te9UZ_-4FG.png',
			],rating: [5, 651]
		},
		{
			id: 2,
			title: 'HTC Wildfire E Lite',
			description: '',
			characteristics: [
				'Экран	5.45" (1440×720) IPS',
				'Встроенная память	16 ГБ',
				'Оперативная память	2 ГБ',
				'Двойная камера	8 МП, 0.30 МП',
				'Аккумулятор	3000 мА·ч',
				'Процессор MediaTek Helio A20',
				'SIM-карты	2 (nano SIM)',
				'Операционная система	Android 10',
				'Беспроводные интерфейсы Bluetooth, Wi-Fi',
				'Стандарт связи	3G, 4G LTE',
				'Вес	160 г'
			],
			price: 7490,
			category: 'Smartphone',
			images: [
				'https://ogo1.ru/upload/iblock/1f2/1f2fe3ed46202990aad458181b2c9e7b.png',
			],
			rating: [5, 919]
		},
		{
			id: 3,
			title: 'Apple iPhone 11 Pro Max',
			description: '',
			characteristics: [
				'Экран	6.5" (2688×1242) Super Retina XDR (OLED)',
				'Встроенная память	256 ГБ',
				'Оперативная память	4 ГБ',
				'Тройная камера	12 МП, 12 МП, 12 МП',
				'Аккумулятор	3969 мА·ч',
				'Процессор Apple A13 Bionic',
				'SIM-карты 	1 (nano SIM) + eSIM',
				'Операционная система	iOS 13',
				'Беспроводные интерфейсы Bluetooth, Wi-Fi, зарядка, NFC, Apple Pay',
				'Стандарт связи	3G, 4G LTE',
				'Вес	226 г'
			],
			price: 75000,
			category: 'Smartphone',
			images: [
				'https://cdn.svyaznoy.ru/upload/iblock/4ca/iphone_11_pro_sg_2.jpg',
			],
			rating: [9, 666]
		},
		{
			id: 4,
			title: 'Apple iPhone 13 Pro Max',
			description: '',
			characteristics: [
				'Экран	6.7" (2778×1284) Super Retina XDR (OLED)',
				'Встроенная память	256 ГБ',
				'Оперативная память	6 ГБ',
				'Тройная камера	12 МП, 12 МП, 12 МП',
				'Аккумулятор	3969 мА·ч',
				'Процессор Apple A15 Bionic',
				'SIM-карты 	1 (nano SIM) + eSIM',
				'Операционная система	iOS 13',
				'Беспроводные интерфейсы Bluetooth, Wi-Fi, зарядка, NFC, Apple Pay',
				'Стандарт связи	3G, 4G LTE',
				'Вес	226 г'
			],
			price: 138000,
			category: 'Smartphone',
			images: [
				'https://cdn.svyaznoy.ru/upload/iblock/24e/iphone_13_pro_max_q421_sierra_blue_pdp_image_position-1a__ru-ru.jpg',
			],
			rating: [7, 777]
		},
	]
}

export const fetchFakeData = () => new Promise<{status: number, data: Product[]}>(res => res(DATA))
