module.exports = {
   language:[
    ["Русский язык", "O'zbek tili"]
    ],
    main_uzbek: [
        ["Buket va kompozitsiyalar"],
        ["Atirgullar", "Xona gullari"],
        ["Bayramlarni bezatish", "Obodonlashtirish"],
        ["Vazalar, Dekorativ idishlar, Tuvaklar", "Servis"],
        ["HomeDecor", "Katalog"]
    ],
    main_rus: [
        ["Букеты и композиции"],
        ["Розы", "Комнатные расстение"],
        ["Оформление торжеств", "Озеленение"],
        ["Вазы, Кашпо, Горшки", "Сервис"],
        ["Home Decor", "Каталог"]
    ],
    buket_uzbek:[
        [
            {
                text: "Tug'ilgan kun",
                callback_data: "birthday_uz"
            },
            {
                text: "Suyukligimga",
                callback_data:"love_uz"
            }
        ],
        [
            {
                text:"To'y",
                callback_data:"wedding_uz"
            },
            {
                text:"Yangi chaqaloq",
                callback_data:"baby_uz"
            },
            {
                text:"Biznes-buket",
                callback_data:"business_uz"
            },
        ],
        [
            {
                text:"Bayram uchun",
                callback_data:"event_uz"
            },
            {
                text:"Marosim floristikasi",
                callback_data:"ritual_uz"
            },
        ]
    ],
    buket_rus:[
        [
            {
                text: "День рождения",
                callback_data: "birthday_rus"
            },
            {
                text: "Любимой(-ому)...",
                callback_data:"love_rus"
            }
        ],
        [
            {
                text:"Свадьба",
                callback_data:"wedding_rus"
            },
            {
                text:"Рождение ребенка",
                callback_data:"baby_rus"
            },
            {
                text:"Бизнес-букет",
                callback_data:"business_rus"
            },
        ],
        [
            {
                text:"К торжеству",
                callback_data:"event_rus"
            },
            {
                text:"Ритуальная флористика",
                callback_data:"ritual_rus"
            },
        ]
    ],
    room_uz:[
        [
            {
                text:"Gullaydigan",
                callback_data: "blossom_uz"
            },
            {
                text: "Dekorativ",
                callback_data:"decorative_uz"
            }
        ],
        [
            {
                text:"Tuproq va substratlar",
                callback_data:"soil_uz"
            },
            {
                text: "O'g'itlar",
                callback_data:"fertilizer_uz"
            }
        ]
    ],
    room_rus:[
        [
            {
                text:"Цветущие",
                callback_data: "blossom_rus"
            },
            {
                text: "Декоративно-лиственные",
                callback_data:"decorative_rus"
            }
        ],
        [
            {
                text:"Грунты и субстраты",
                callback_data:"soil_rus"
            },
            {
                text: "Удобрения и подкорм",
                callback_data:"fertilizer_rus"
            }
        ]
    ],
    event_uz:[
        [
            {
                text: "Korporativ tadbir",
                callback_data: "corporate_uz"
            }
        ],
        [
            {
                text: "To'y",
                callback_data: "wedding_uz"
            }
        ],
        [
            {
                text:"Oilaviy bayram",
                callback_data: "familiy_uz"
            }
        ]
    ],
    event_rus:[
        [
            {
                text: "Корпоративная мероприятия",
                callback_data: "corporate_rus"
            }
        ],
        [
            {
                text: "Сваодьбы",
                callback_data: "wedding_rus"
            }
        ],
        [
            {
                text:"Семейные праздники",
                callback_data: "familiy_rus"
            }
        ]
    ],
    vase_uz:[
        [
            {
                text:"Sopol",
                callback_data:"Sopol"
            },
            {
                text:"Shisha",
                callback_data:"Shisha"
            },
            {
                text:"Metall",
                callback_data:"Metall"
            },
        ],
        [
            {
                text:"Yog'och",
                callback_data:"Yog'och"
            },
            {
                text:"Plastik",
                callback_data:"Plastik"
            }
        ]
    ],
    vase_rus:[
        [
            {
                text:"Керамика",
                callback_data:"Керамика"
            },
            {
                text:"Стекло",
                callback_data:"Стекло"
            },
            {
                text:"Металл",
                callback_data:"Металл"
            },
        ],
        [
            {
                text:"Дерево",
                callback_data:"Дерево"
            },
            {
                text:"Пластик",
                callback_data:"Пластик"
            }
        ]
    ],
    type_uz:[
        [{
            text:"Idish turini tanlang",
            callback_data:"Idish"
        }],
        [
            {
                text:"Vaza",
                callback_data:"Vaza"
            }
            ,{
                text:"Tuvak",
                callback_data:"Tuvak"
            },
            {
                text: "Dekorativ idish",
                callback_data:"Dekorativ idish"
            }
        ]
    ],
    type_rus:[
        [{
            text:"Выбери тип контейнера",
            callback_data:"контейнер"
        }],
        [
            {
                text:"Ваза",
                callback_data:"Ваза"
            }
            ,{
                text:"Горшок",
                callback_data:"Горшок"
            },
            {
                text: "Кашпо",
                callback_data:"Кашпо"
            }
        ]
    ],
    service_rus:[
        [
            {
                text:"Уход за домашными растениями",
                callback_data:"Уход"
            },
            {
                text: "Флористическое оформление интерьеров",
                callback_data:"Флористическое оформление"
            }
        ],
        [
            {
                text: "Обновление цветов",
                callback_data:"Обновление"
            },
            {
                text: "Фитодизайн для интерьера",
                callback_data:"Фитодизайн"
            },
            {
                text:"Консультация",
                callback_data:"Консультация"
            }
        ]
    ],
    service_uz:[
        [
            {
                text:"Xona gullariga g'amxorlik",
                callback_data:"Xona gullariga g'amxorlik"
            },
            {
                text: "Interyerni floristik bezatish",
                callback_data:"bezatish"
            }
        ],
        [
            {
                text: "Gullarni yangilash",
                callback_data:"yangilash"
            },
            {
                text: "Interyer uchun fitodizayn",
                callback_data:"fitodizayn"
            },
            {
                text:"Konsultatsiya",
                callback_data:"Konsultatsiya"
            }
        ]
    ],
    consulting_uz:[
        [
            {
                text:"FAQ",
                callback_data:"FAQ"
            },
            {
                text:"Kontaktlar",
                callback_data:"Kontaktlar"
            }
        ]
    ],
    consulting_rus:[
        [
            {
                text:"FAQ",
                callback_data:"FAQ"
            },
            {
                text:"Контакты",
                callback_data:"Контакты"
            }
        ]
    ],
    decor_uz:[
        [
            {
                text:"Shamdonlar",
                callback_data: "Shamdonlar"
            },
            {
                text:"Vazalar",
                callback_data:"Vazalar"
            }
        ],
        [
            {
                text:"Tirgak(Podstavka)",
                callback_data:"Tirgak"
            },
            {
                text:"Boshqa",
                callback_data:"Boshqa"
            }
        ]
    ],
    decor_rus:[
        [
            {
                text:"Подсвечники",
                callback_data: "Подсвечники"
            },
            {
                text:"Вазы",
                callback_data:"Вазы"
            }
        ],
        [
            {
                text:"Подставка",
                callback_data:"Подставка"
            },
            {
                text:"Прочее",
                callback_data:"Прочее"
            }
        ]
    ]

}