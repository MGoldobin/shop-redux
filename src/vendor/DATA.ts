import { Product } from '../types/index'

export const DATA: {status: number, data: Product[]} = {
	status: 200,
	data: [
		{
			id: 1,
			title: 'Google Pixel 6 Pro',
			description: 'Экран	6.7" (3120×1440) OLED 120 Гц; Встроенная память	128 ГБ; Оперативная память	12 ГБ; 3 камеры	50 МП, 12 МП, 48 МП; Аккумулятор	4905 мА·ч; Процессор; Google Tensor; SIM-карты	2 (nano SIM+eSIM); Операционная система	Android 12; Беспроводные интерфейсы	NFC, Bluetooth, Wi-Fi; Стандарт связи	4G LTE, 5G, 3G; Степень защиты	IP68; Вес	210 г',
			price: 99000,
			category: 'Smartphone',
			image: 'https://avatars.mds.yandex.net/get-mpic/5175047/img_id1108527980434144420.jpeg/orig',
			rating: [5, 651]
		},
		{
			id: 2,
			title: 'HTC Wildfire E Lite',
			description: 'Экран	5.45" (1440×720) IPS; Встроенная память	16 ГБ; Оперативная память	2 ГБ; Двойная камера	8 МП, 0.30 МП; Аккумулятор	3000 мА·ч; Процессор; MediaTek Helio A20; SIM-карты	2 (nano SIM); Операционная система	Android 10; Беспроводные интерфейсы	Bluetooth, Wi-Fi; Стандарт связи	3G, 4G LTE; Вес	160 г',
			price: 7490,
			category: 'Smartphone',
			image: 'https://avatars.mds.yandex.net/get-mpic/4011308/img_id4324657931159313606.jpeg/orig',
			rating: [5, 919]
		},
	]
}

export const fetchFakeData = () => new Promise<{status: number, data: Product[]}>(res => res(DATA))