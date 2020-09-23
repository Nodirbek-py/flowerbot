const config = require('./config')
const tg_bot = require('node-telegram-bot-api')
const kb = require('./keyboard')


const bot = new tg_bot(config.token, {
    polling: true
})
bot.on("message", msg => {
    if (msg.text == "/start"){
    bot.sendMessage(msg.chat.id, "Greeting words", {
        reply_markup:{
            keyboard: kb.language
        } 
    })
}
    const chat_id = msg.chat.id
    const command = msg.text
    if (command == "O'zbek tili") {
        bot.sendMessage(chat_id, "Birini tanlang", {
            reply_markup: {
                keyboard: kb.main_uzbek
            }
        })
    } 
    else if (command == "Русский язык"){
        bot.sendMessage(chat_id, "Выбери один", {
            reply_markup: {
                keyboard: kb.main_rus
            }
        })
    }
})
bot.on("message", msg=>{
    const chat_id = msg.chat.id
    const command = msg.text
    if(command == "Buket va kompozitsiyalar"){
        bot.sendMessage(chat_id, "Buket va kompozitsiyalar", {
            reply_markup:{
                inline_keyboard: kb.buket_uzbek
            }
        })
}
else if(command == "Букеты и композиции"){
    bot.sendMessage(chat_id, "Букеты и композиции", {
        reply_markup:{
            inline_keyboard: kb.buket_rus
        }
    })
}

else if (command == "Atirgullar"){
    bot.sendMessage(chat_id, "Atirgul", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Atirgullar borasida taklif",
                        callback_data: "rose_uz"
                    }
                ]
            ]
        }
})}

else if (command == "Розы"){
    bot.sendMessage(chat_id, "Роза", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Atirgullar borasida taklif",
                        callback_data: "rose_uz"
                    }
                ]
            ]
        }
})}

else if (command == "Xona gullari"){
    bot.sendMessage(chat_id, "Xona gullari", {
        reply_markup:{
            inline_keyboard:kb.room_uz
        }
    })
    bot.on("callback_query", query => {
        if(query.data == "blossom_uz" || query.data == "decorative_uz"){
            bot.sendMessage(chat_id, "Qanday qabul qilasiz", {
                reply_markup:{
                    inline_keyboard:[
                        [
                            {
                                text:"Idish bilan",
                                callback_data:"Idish"

                            },
                            {
                                text:"Idishsiz",
                                callback_data:"Idishsiz"
                            }
                        ]
                    ]
                }
            })
        }
    })    
}

else if (command == "Комнатные расстение"){
    bot.sendMessage(chat_id, "Комнатные расстение", {
        reply_markup:{
            inline_keyboard:kb.room_rus
        }
    })
    bot.on("callback_query", query => {
        if(query.data == "blossom_rus" || query.data == "decorative_rus"){
            bot.sendMessage(chat_id, "Как вы хотите получить", {
                reply_markup:{
                    inline_keyboard:[
                        [
                            {
                                text:"С кашпо",
                                callback_data:"С кашпо"

                            },
                            {
                                text:"Без кашпо",
                                callback_data:"Без кашпо"
                            }
                        ]
                    ]
                }
            })
        }
    })    
}

else if (command == "Bayramlarni bezatish"){
bot.sendMessage(chat_id, "Bayramlarni bezatish", {
    reply_markup:{
        inline_keyboard:kb.event_uz
    }
})
}

else if (command == "Оформление торжеств"){
bot.sendMessage(chat_id, "Bayramlarni bezatish", {
    reply_markup:{
        inline_keyboard:kb.event_rus
    }
})
}

else if (command == "Obodonlashtirish"){
    bot.sendMessage(chat_id, "Obodonlashtirish", {
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text:"Portfolio",
                        callback_data:"cleaning_uz",
                        url: "https://google.com"
                    }
                ]
            ]
        }
    })
}

else if (command == "Озеленение"){
    bot.sendMessage(chat_id, "Озеленение", {
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text:"Портфолио",
                        callback_data:"cleaning_rus",
                        url: "https://google.com"
                    }
                ]
            ]
        }
    })
}

else if (command == "Vazalar, Dekorativ idishlar, Tuvaklar"){
    bot.sendMessage(chat_id, "Vazalar, Dekorativ idishlar, Tuvaklar", {
        reply_markup:{
            inline_keyboard:kb.vase_uz
        }
    })
    bot.on("callback_query", query => {
        if(query.data == "Metall" || query.data == "Sopol" || query.data == "Shisha" || query.data == "Yog'och" || query.data == "Plastik"){
        bot.sendMessage(query.message.chat.id, `${query.data} tanlandi`, {    
            reply_markup:{
                inline_keyboard:kb.type_uz
            }
        })
    }
    })
}

else if(command == "Вазы, Кашпо, Горшки"){
    bot.sendMessage(chat_id, "Вазы, Кашпо, Горшки", {
        reply_markup:{
            inline_keyboard:kb.vase_rus
        }
    })
    bot.on("callback_query", query => {
        if(query.data == "Металл" || query.data == "Керамика" || query.data == "Стекло" || query.data == "Дерево" || query.data == "Пластик"){
        bot.sendMessage(query.message.chat.id, `${query.data} выбран`, {
            reply_markup:{
                inline_keyboard:kb.type_rus
            }
        })
    }
    })
}

else if(command == "Servis"){
    bot.sendMessage(chat_id, "Bizning xizmatlar", {
        reply_markup:{
            inline_keyboard: kb.service_uz
        }
    })
    bot.on("callback_query", query => {
        if (query.data == "Konsultatsiya"){
        bot.sendMessage(query.message.chat.id, "Konsultatsiya", {
            reply_markup:{
                inline_keyboard:kb.consulting_uz
            }
        })}
    })
}

else if(command == "Сервис"){
    bot.sendMessage(chat_id, "Наши сервисы", {
        reply_markup:{
            inline_keyboard: kb.service_rus
        }
    })
    bot.on("callback_query", query => {
        if(query.data == "Консультация"){
        bot.sendMessage(query.message.chat.id, "Консультация", {
            reply_markup:{
                inline_keyboard:kb.consulting_rus
            }
        })}
    })
}

else if(command == "HomeDecor"){
    bot.sendMessage(chat_id, "Home decor", {
        reply_markup:{
            inline_keyboard:kb.decor_uz
        }
    })
}

else if (command == "Home Decor"){
    bot.sendMessage(chat_id, "Home decor", {
        reply_markup:{
            inline_keyboard:kb.decor_rus
        }
    })
}

else if(command == "Katalog"){
    bot.sendDocument(chat_id, "filepath")
}

else if(command == "Каталог"){
    bot.sendDocument(chat_id, "filepath")
}
})
