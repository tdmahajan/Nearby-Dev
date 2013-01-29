
db.items.insert([{ SKUName: "Krackjack"
                  ,SKUDescription: "Its a crispy and delicious biscuit with a perfect balance of sweetness and saltiness."
                                 + "Once you start relishing it, you won't be able to stop the longing for more."
                                 + "Though Krackjack sweet and salty biscuits can be enjoyed anytime,"
                                 + "it goes wonderfully well with your evening cup of tea."
                 ,Categories: ["F002","C0003"]
                 ,BrandId:    "BR001"
                 ,TradeOptions: [{ tradeOptionId: 1
                               , Quantity: "50"
                               , UOM: "gm"
                               , PackagingType: "Packet"
                               , ImageUrl: { Web:    "parle-krackjack-50g-web.png"
                                           , Mobile: "parle-krackjack-50g-mobile.png"
                                           , Tablet: "parle-krackjack-50g-tablet.png"
                                           }
                               , BestBuyPrice: 5
                               , Rating: "0.1"
                               },
                               { tradeOptionId: 2
                               , Quantity: "100"
                               , UOM: "gm"
                               , PackagingType: "Packet"
                               , ImageUrl:    { Web:    "parle-krackjack-100g-web.png"
                                              , Mobile: "parle-krackjack-100g-mobile.png"
                                              , Tablet: "parle-krackjack-100g-tablet.png"
                                              }
                               , BestBuyPrice: 10
                               , Rating:      "0.2"
                               }]
                 ,ExpiryTerm: "Use Before Three Months"
                 ,Ingredients: ["Wheat Flour","Sugar","Edible Vegetable Oil","Partially Hydrogenated Edible Vegetable Oils"
                               ,"Leavening Agents [ 503 ( ii ), 500 ( ii ), 341 ( i ) ]", "Invert Syrup", "Salt", "Yeast"
                               ,"Emulsifiers [ 322 or 471 & E 481 ( i ) ]"
                               ,"Acid"]
                 ,Nutritions:   [{Nutrition: "Energy"
                                ,Quantity:  "265.00"
                                ,UOM: "Kcal"
                                },
                                {Nutrition: "Total Sugar"
                                ,Quantity: "67.00"
                                ,UOM: "gm"
                                }]
                }]);

db.items.insert([{ SKUName: "Krackjack5"
                  ,SKUDescription: "Its a crispy and delicious biscuit with a perfect balance of sweetness and saltiness."
                                 + "Once you start relishing it, you won't be able to stop the longing for more."
                                 + "Though Krackjack sweet and salty biscuits can be enjoyed anytime,"
                                 + "it goes wonderfully well with your evening cup of tea."
                 ,Categories: ["F002","C0003"]
                 ,BrandId:    "BR001"
                 ,TradeOptions: [{ tradeOptionId: 1
                               , Quantity: "50"
                               , UOM: "gm"
                               , PackagingType: "Packet"
                               , ImageUrl: { Web:    "parle-krackjack-50g-web.png"
                                           , Mobile: "parle-krackjack-50g-mobile.png"
                                           , Tablet: "parle-krackjack-50g-tablet.png"
                                           }
                               , BestBuyPrice: 5
                               , Rating: "0.1"
                               },
                               { tradeOptionId: 2
                               , Quantity: "100"
                               , UOM: "gm"
                               , PackagingType: "Packet"
                               , ImageUrl:    { Web:    "parle-krackjack-100g-web.png"
                                              , Mobile: "parle-krackjack-100g-mobile.png"
                                              , Tablet: "parle-krackjack-100g-tablet.png"
                                              }
                               , BestBuyPrice: 10
                               , Rating:      "0.2"
                               }]
                 ,ExpiryTerm: "Use Before Three Months"
                 ,Ingredients: ["Wheat Flour","Sugar","Edible Vegetable Oil","Partially Hydrogenated Edible Vegetable Oils"
                               ,"Leavening Agents [ 503 ( ii ), 500 ( ii ), 341 ( i ) ]", "Invert Syrup", "Salt", "Yeast"
                               ,"Emulsifiers [ 322 or 471 & E 481 ( i ) ]"
                               ,"Acid"]
                 ,Nutritions:   [{Nutrition: "Energy"
                                ,Quantity:  "265.00"
                                ,UOM: "Kcal"
                                },
                                {Nutrition: "Total Sugar"
                                ,Quantity: "67.00"
                                ,UOM: "gm"
                                }]
                }]);

set
db.items.update({"_id": ObjectId("50f915a55d8b3ebdfc4e9070")}, {$push: {Categories: "C0003"}});


{ item: "book", qty: { $gt: 5 } }, { $set: { x: 6 }, $inc: { y: 5} }                  


