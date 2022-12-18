const detailsData = [
    {
        id: 1,
        name: 'Бендикс 2101, 2102, 2103, 2104, 2105, 2106, 2107 Авто-Электрика (привод стартера)_',
        brand: 'Авто-Электрика',
        quantity: 10,
        price: 139.73,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/6812/0010.jpg', 'https://detali.zp.ua/uploads/photo/3d/6812/0001.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_06/2018_06_30_I6G_142754.jpg']
    },
    {
        id: 2,
        name: 'Бендикс 2101, 2102, 2103, 2104, 2105, 2106, 2107 Авто-Электрика для БАТЭ 425.3708',
        quantity: 5,
        brand: 'Авто-Электрика',
        price: 186.30,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/18345/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/18345/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_06/2020_06_27_I6G_121153.jpg']
    },
    {
        id: 3,
        name: 'Бендикс 2108, 2109, 21099, 2113, 2114, 2115 Авто-Электрика (привод стартера)_',
        quantity: 12,
        brand: 'Авто-Электрика',
        price: 128.08,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/6813/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6813/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_08_I7G_105704.jpg']
    },
    {
        id: 3,
        name: 'Бендикс 2108, 2109, 21099, 2113, 2114, 2115 Авто-Электрика для БАТЭ',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 186.30,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/18346/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/18346/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_06/2020_06_27_I6G_121232.jpg']
    },
    {
        id: 4,
        name: 'Бендикс 402 двигатель малый Авто-Электрика',
        quantity: 7,
        brand: 'Авто-Электрика',
        price: 209.59,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/6815/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6815/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_08_I7G_160055.jpg']
    },
    {
        id: 5,
        name: 'Бендикс 406 двигатель 3302, 2217, 2705, 3110 Авто-Электрика',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 186.30,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/18341/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/18341/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_06/2020_06_27_I6G_121019.jpg']
    },
    {
        id: 6,
        name: 'Бендикс Таврия, 1102, 1103, 1105 Авто-Электрика',
        quantity: 8,
        brand: 'Авто-Электрика',
        price: 139.73,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/18339/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/18339/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_06/2020_06_27_I6G_121000.jpg']
    },
    {
        id: 7,
        name: 'Бендикс большой ГАЗ-53 Авто-Электрика (привод стартера)',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 186.30,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/6814/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6814/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_03/2018_03_31_I3G_162300.jpg']
    },
    {
        id: 8,
        name: 'Бендикс 2110 Vanssi (на стартер батэ)',
        quantity: 10,
        brand: 'Vanssi',
        price: 205.71,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/25444/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/25444/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_05/2022_05_28_I5G_114917.jpg']
    },
    {
        id: 9,
        name: 'Бендикс 2101 Vanssi (на стартер батэ)',
        quantity: 14,
        brand: 'Vanssi',
        price: 207.00,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/25433/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/25433/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_05/2022_05_28_I5G_152221.jpg']
    },
    {
        id: 10,
        name: 'Бендикс 402 дв малый Vanssi',
        quantity: 5,
        brand: 'Vanssi',
        price: 221.23,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/27715/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/27715/0010.jpg', 'https://detali.zp.ua/uploads/photo/3d/27715/0028.jpg']
    },
    {
        id: 11,
        name: 'Бендикс 2101 Vanssi (на стартер Bosch с вилкой)',
        quantity: 10,
        brand: 'Vanssi',
        price: 223.82,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/25434/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/25434/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_05/2022_05_28_I5G_172823.jpg']
    },
    {
        id: 12,
        name: 'Бендикс 2108 Vanssi (на стартер батэ)',
        quantity: 8,
        brand: 'Vanssi',
        price: 226.41,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/25440/0010.jpg', 'https://detali.zp.ua/uploads/photo/3d/25440/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_05/2022_05_28_I5G_152104.jpg']
    },
    {
        id: 13,
        name: 'Бендикс 406 дв 3302,3110 Vanssi малый (для стартера батэ)',
        quantity: 10,
        brand: 'Vanssi',
        price: 226.41,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/25450/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/25450/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_05/2022_05_28_I5G_115016.jpg']
    },
    {
        id: 14,
        name: 'Бендикс 2108 Vanssi (на стартер электромаш)',
        quantity: 4,
        brand: 'Vanssi',
        price: 234.17,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/25435/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/25435/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_05/2022_05_28_I5G_172926.jpg']
    },
    {
        id: 15,
        name: 'Бендикс 2101 Vanssi на постоянных магнитах',
        quantity: 9,
        brand: 'Vanssi',
        price: 238.05,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/25429/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/25429/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_05/2022_05_28_I5G_114818.jpg']
    },
    {
        id: 16,
        name: 'Бендикс 2101, 2102, 2103, 2104, 2105, 2106, 2107 LSA (привод стартера)',
        quantity: 19,
        brand: 'LSA',
        price: 156.67,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/11127/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/11127/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_15_I12G_093738.jpg']
    },
    {
        id: 17,
        name: 'Бендикс большой ГАЗ-53, 2401, 2410, УАЗ-452, 469, Москвич 412, 2140 LSA (привод стартера)',
        quantity: 2,
        brand: 'LSA',
        price: 230.68,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/11165/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/11165/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_26_I12G_093755.jpg']
    },
    {
        id: 18,
        name: 'Бендикс 2108, 2109, 21099, 2113, 2114, 2115 LSA (привод стартера)',
        quantity: 7,
        brand: 'LSA',
        price: 156.71,
        description: 'Число зубцов 11',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/11128/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/11128/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_13_I12G_164349.jpg']
    },
    {
        id: 19,
        name: 'Бендикс Москвич 2141 LSA (привод стартера)',
        quantity: 5,
        brand: 'LSA',
        price: 161.99,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/11129/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/11129/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_06/2018_06_30_I6G_164231.jpg']
    },
    {
        id: 20,
        name: 'Бендикс Таврия, 1102, 1103, 1105 LSA (привод стартера)',
        quantity: 2,
        brand: 'LSA',
        price: 142.07,
        description: 'Число зубцов 9',
        category: 'Бендикс',
        images: ['https://detali.zp.ua/uploads/photo/3d/11130/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/11130/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_21_I12G_162648.jpg']
    },
    {
        id: 21,
        name: 'Щетка генератора 2 контактная в сборе Волга, ГАЗ Авто-Электрика',
        quantity: 16,
        brand: 'Авто-Электрика',
        price: 48.90,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/15998/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/15998/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_10/2020_10_29_I10G_140509.jpg']
    },
    {
        id: 22,
        name: 'Щетка генератора 2101, 2102, 2103, 2104, 2106, 2107 Авто-Электрика',
        quantity: 8,
        brand: 'Авто-Электрика',
        price: 34.93,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/7001/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/7001/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_08_I7G_141308.jpg']
    },
    {
        id: 23,
        name: 'Щетка генератора 1 контактная в сборе Москвич, РАФ, ПАЗ, УАЗ, ЛАЗ Авто-Электрика',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 48.90,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/15997/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/15997/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_09/2020_09_26_I9G_085910.jpg']
    },
    {
        id: 24,
        name: 'Щетка генератора 2104, 2105, 2107 Авто-Электрика',
        quantity: 17,
        brand: 'Авто-Электрика',
        price: 30.27,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/15995/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/15995/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_05/2020_05_10_I5G_111437.jpg']
    },
    {
        id: 25,
        name: 'Щетка генератора 2108, 2109, 21099 Авто-Электрика',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 30.27,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/15996/0019.jpg', 'https://detali.zp.ua/uploads/photo/3d/15996/0001.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_05/2020_05_10_I5G_111413.jpg']
    },
    {
        id: 26,
        name: 'Регулятор напряжения 2108 с щетками Авто-Электрика',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 97.03,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/15926/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/15926/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2020_04/2020_04_21_I4G_160146.jpg']
    },
    {
        id: 27,
        name: 'Регулятор напряжения 2110, 2111, 2112 с щетками (интегралка, реле зарядки, шоколадка) Авто-Электрика',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 76.33,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/6825/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6825/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_03/2018_03_31_I3G_140816.jpg']
    },
    {
        id: 28,
        name: 'Регулятор напряжения 2110, 2111, 2112, 2170, 2171, 2172, 2123 с щетками ВТН (интегралка, реле зарядки, шоколадка)',
        quantity: 10,
        brand: 'ВТН',
        price: 276.35,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/5866/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/5866/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_22_I12G_092425.jpg']
    },
    {
        id: 29,
        name: 'Регулятор напряжения 2110, 2111, 2112 с щетками ВТН (интегралка, реле зарядки, шоколадка)',
        quantity: 7,
        brand: 'ВТН',
        price: 106.35,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/64433/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/64433/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_12_I12G_143046.jpg']
    },
    {
        id: 30,
        name: 'Регулятор напряжения 2108, 2109, 21099 с щетками (интегралка, реле зарядки, шоколадка) ВТН',
        quantity: 4,
        brand: 'ВТН',
        price: 128.47,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/98425/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/98425/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_27_I12G_121627.jpg']
    },
    {
        id: 31,
        name: 'Регулятор напряжения 2110, 2111, 2112 с щетками ВТН (интегралка, реле зарядки, шоколадка)',
        quantity: 12,
        brand: 'ВТН',
        price: 106.56,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/28040/0010.jpg', 'https://detali.zp.ua/uploads/photo/3d/28040/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_22_I10G_123639.jpg']
    },
    {
        id: 32,
        name: 'Регулятор напряжения 2110, 2111, 2123 с щетками ВТН',
        quantity: 10,
        brand: 'ВТН',
        price: 260.82,
        description: 'Рабочее напряжение 12-14,4В',
        category: 'Щетки генератора, регуляторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/28044/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/28044/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_22_I10G_123713.jpg']
    },
    {
        id: 33,
        name: 'Стартер Ланос, Авео, Лачетти, Нексия, Эсперо, Такума, Нубира 1,5 - 1,6 двигатели Авто-Электрика редукторный 10 зубьев',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 2067.41,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/6811/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6811/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_03/2018_03_31_I3G_154918.jpg']
    },
    {
        id: 34,
        name: 'Стартер 2108, 2109, 2113, 2114, 2115 Авто-Электрика (на постоянных магнитах с редуктором)',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 2067.41,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/7693/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/7693/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_05_I7G_133134.jpg']
    },
    {
        id: 35,
        name: 'Стартер 2110, 2111, 2112, 1117, 1118, 1119 Авто-Электрика (на постоянных магнитах с редуктором)',
        quantity: 2,
        brand: 'Авто-Электрика',
        price: 2067.41,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/6807/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6807/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_03/2018_03_31_I3G_101809.jpg']
    },
    {
        id: 36,
        name: 'Стартер 402 двигатель малый Авто-Электрика (на постоянный магнитах с редукторм)',
        quantity: 7,
        brand: 'Авто-Электрика',
        price: 2112.69,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/6809/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6809/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_03/2018_03_31_I3G_141620.jpg']
    },
    {
        id: 37,
        name: 'Стартер 405, 406 двигатель Авто-Электрика (на постоянный магнитах с редуктором)',
        quantity: 4,
        brand: 'Авто-Электрика',
        price: 2112.69,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/6808/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6808/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_03/2018_03_29_I3G_121519.jpg']
    },
    {
        id: 38,
        name: 'Стартер Таврия, 1102, 1103, 1105, Сенс Авто-Электрика (на постоянных магнитах)',
        quantity: 10,
        brand: 'Авто-Электрика',
        price: 2067.41,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/6810/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6810/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_28_I7G_155121.jpg']
    },
    {
        id: 39,
        name: 'Стартер 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2121, 21213, 21214, 2123 AT (на постоянных магнитах с редуктором)',
        quantity: 4,
        brand: 'Авто-Электрика',
        price: 2067.41,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/6804/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6804/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_04/2018_04_12_I4G_162837.jpg']
    },
    {
        id: 40,
        name: 'Стартер 402 двигатель малый LSA (на постоянный магнитах с редукторм)',
        quantity: 4,
        brand: 'LSA',
        price: 2173.43,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/54603/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/54603/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_01_I12G_112624.jpg']
    },
    {
        id: 41,
        name: 'Стартер 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2121, 21213, 21214, 2123 LSA (на постоянных магнитах с редуктором)',
        quantity: 9,
        brand: 'LSA',
        price: 2142.71,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/11160/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/11160/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_09_I12G_171003.jpg']
    },
    {
        id: 42,
        name: 'Стартер 2108, 2109, 2113, 2114, 2115 LSA (на постоянных магнитах с редуктором)',
        quantity: 12,
        brand: 'LSA',
        price: 2141.98,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/11161/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/11161/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_20_I12G_104720.jpg']
    },
    {
        id: 43,
        name: 'Стартер 2110, 2111, 2112, 1117, 1118, 1119 LSA (на постоянный магнитах с редукторм)',
        quantity: 7,
        brand: 'LSA',
        price: 2142.21,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/51612/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/51612/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_23_I12G_110018.jpg']
    },
    {
        id: 44,
        name: 'Стартер Ланос, Авео, Лачетти, Нексия, Эсперо, Такума, Нубира 1,5 - 1,6 двигатели LSA 9зуб',
        quantity: 10,
        brand: 'LSA',
        price: 2141.48,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/54604/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/54604/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_12/2016_12_28_I12G_101355.jpg']
    },
    {
        id: 45,
        name: 'Стартер 1102,Сенс Gumex (на пост магн)',
        quantity: 3,
        brand: 'Gumex',
        price: 2132.10,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/26501/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26501/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_08/2022_08_30_I8G_102032.jpg']
    },
    {
        id: 46,
        name: 'Стартер 2101-07,2121 (на пост магн с редукт) Gumex',
        quantity: 4,
        brand: 'Gumex',
        price: 2132.10,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/26499/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26499/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_08/2022_08_30_I8G_102321.jpg']
    },
    {
        id: 47,
        name: 'Стартер 2108-09,2113-15 Gumex(на пост магн с редукт)',
        quantity: 5,
        brand: 'Gumex',
        price: 2132.10,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/26498/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26498/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_08/2022_08_30_I8G_102542.jpg']
    },
    {
        id: 48,
        name: 'Стартер 2110-12,1118 Gumex (на пост магн с редукт)',
        quantity: 10,
        brand: 'Gumex',
        price: 2132.10,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/26500/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26500/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_08/2022_08_30_I8G_102636.jpg']
    },
    {
        id: 49,
        name: 'Стартер Ланос 1.5, 1.6, Авео 1.5, 1.6, Лачетти 1.6 Gumex редукторный 10 зубьев',
        quantity: 10,
        brand: 'Gumex',
        price: 2154.09,
        description: 'Напряжение, В: 12',
        category: 'Стартера',
        images: ['https://detali.zp.ua/uploads/photo/3d/26502/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26502/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_08/2022_08_30_I8G_102806.jpg']
    },
    {
        id: 50,
        name: 'Генератор 21214 100А Авто-Электрика',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 3156.75,
        description: 'Сила тока, А - 100, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/28393/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/28393/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_11/2022_11_04_I11G_084317.jpg']
    },
    {
        id: 51,
        name: 'Генератор 2108, 2109, 21099, 2110, 2111, 2112 100А инжекторный двигатель Авто-Электрика',
        quantity: 2,
        brand: 'Авто-Электрика',
        price: 3155.46,
        description: 'Сила тока, А - 100, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/6179/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6179/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_14_I7G_134846.jpg']
    },
    {
        id: 52,
        name: 'Генератор 2123 100А Авто-Электрика',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 3117.94,
        description: 'Сила тока, А - 100, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/28383/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/28383/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_11/2022_11_04_I11G_084401.jpg']
    },
    {
        id: 53,
        name: 'Генератор 1102, 1103, 1105, Сенс 65А Авто-Электрика',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 2643.13,
        description: 'Сила тока, А - 65, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/6243/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6243/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_03/2018_03_31_I3G_123340.jpg']
    },
    {
        id: 54,
        name: 'Генератор 2108, 2109, 21099, 2110, 2111 73А Авто-Электрика',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 2432.25,
        description: 'Сила тока, А - 73, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/6178/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6178/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_11_I7G_085404.jpg']
    },
    {
        id: 55,
        name: 'Генератор 2104, 2105, 2107 73А Авто-Электрика',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 2419.31,
        description: 'Сила тока, А - 73, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/6177/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6177/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_08_I7G_133458.jpg']
    },
    {
        id: 56,
        name: 'Генератор 2101, 2102, 2103, 2104,2106, 2107 55А Авто-Электрика',
        quantity: 3,
        brand: 'Авто-Электрика',
        price: 2251.13,
        description: 'Сила тока, А - 55, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/6176/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/6176/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2018_07/2018_07_03_I7G_122144.jpg']
    },
    {
        id: 57,
        name: 'Генератор 1102,Сенс 65А Gumex',
        quantity: 3,
        brand: 'Gumex',
        price: 2445.19,
        description: 'Сила тока, А - 65, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/26925/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26925/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_18_I10G_094710.jpg']
    },
    {
        id: 58,
        name: 'Генератор 2101 55А Gumex',
        quantity: 5,
        brand: 'Gumex',
        price: 2277.00,
        description: 'Сила тока, А - 55, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/26926/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26926/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_12_I10G_112545.jpg']
    },
    {
        id: 59,
        name: 'Генератор 2105 73А Gumex',
        quantity: 7,
        brand: 'Gumex',
        price: 2419.31,
        description: 'Сила тока, А - 73, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/26927/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26927/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_12_I10G_112509.jpg']
    },
    {
        id: 60,
        name: 'Генератор 2108 73А Gumex',
        quantity: 2,
        brand: 'Gumex',
        price: 2458.13,
        description: 'Сила тока, А - 73, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/26929/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26929/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_12_I10G_112432.jpg']
    },
    {
        id: 61,
        name: 'Генератор 2108-2110 100А инж.дв. Gumex',
        quantity: 8,
        brand: 'Gumex',
        price: 3027.38,
        description: 'Сила тока, А - 100, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/26932/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26932/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_12_I10G_112335.jpg']
    },
    {
        id: 62,
        name: 'Генератор Ланос 85А (шкив 5РК) Gumex',
        quantity: 4,
        brand: 'Gumex',
        price: 2980.80,
        description: 'Сила тока, А - 85, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/26938/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26938/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_12_I10G_112256.jpg']
    },
    {
        id: 63,
        name: 'Генератор 2101, 2102, 2103, 2104, 2106, 2107 50А LSA',
        quantity: 5,
        brand: 'LSA',
        price: 2295.28,
        description: 'Сила тока, А - 50, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/53143/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/53143/0019.jpg', 'https://detali.zp.ua/uploads/photo/3d/53143/0028.jpg']
    },
    {
        id: 64,
        name: 'Генератор 2104, 2105, 2107, 2108, 2109,21099 55А LSA',
        quantity: 7,
        brand: 'LSA',
        price: 2261.21,
        description: 'Сила тока, А - 55, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/53146/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/53146/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2016_11/2016_11_24_I11G_112924.jpg']
    },
    {
        id: 65,
        name: 'Генератор 1102,Сенс 65А LSA',
        quantity: 2,
        brand: 'LSA',
        price: 2474.58,
        description: 'Сила тока, А - 65, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/26999/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/26999/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_10/2022_10_18_I10G_094623.jpg']
    },
    {
        id: 66,
        name: 'Генератор 1118,2170 95A LSA',
        quantity: 5,
        brand: 'LSA',
        price: 2523.43,
        description: 'Сила тока, А - 95, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/24032/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/24032/0010.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_04/2022_04_27_I4G_125312.jpg']
    },
    {
        id: 67,
        name: 'Генератор 2108-2110 100А инж.дв. LSA',
        quantity: 8,
        brand: 'LSA',
        price: 2905.39,
        description: 'Сила тока, А - 100, Напряжение, В - 12',
        category: 'Генераторы',
        images: ['https://detali.zp.ua/uploads/photo/3d/24033/0001.jpg', 'https://detali.zp.ua/uploads/photo/3d/24033/0019.jpg', 'https://detali.zp.ua/uploads/photo/big/2022_04/2022_04_28_I4G_152030.jpg']
    },
];

export default detailsData;