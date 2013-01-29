
 db.categories.insert({ _id:  "S01"
	            , name:   "Grocery"
	            , type:   "SEGMENT"
		    });

 db.categories.insert({ _id:  "F002"
	            , name:   "Kitchen"
	            , type:   "FAMILY"
		    , parent: "S01"
		    });

 db.categories.insert([                    
                    { _id:    "C0001"
                    , name:   "Pickle, Sauce and Condiment"
                    , type:   "CLASS"
                    , parent: "F002"
                    },
                    { _id:    "C0002"
		    , name:   "Spices"
		    , type:   "CLASS"
		    , parent: "F002"
                    },
		    { _id:    "C0003"
	            , name:   "Biscuit & Cookie"
	            , type:   "CLASS"
	            , parent: "F002"
		    },
		    { _id:    "C0004"
	            , name:   "Snacks"
	            , type:   "CLASS"
	            , parent: "F002"
		    },
		    { _id:    "C0005"
	            , name:   "Breakfast & Cereal"
	            , type:   "CLASS"
	            , parent: "F002"
		    },
		    { _id:    "C0006"
	            , name:   "Pasta & Noodle"
	            , type:   "CLASS"
	            , parent: "F002"
		    },
                    { _id:    "B00001"
	            , name:   "Sauce"
	            , type:   "BRICKS"
	            , parent: "C0001"
		    },
                    { _id:    "B00002"
	            , name:   "Pickle"
	            , type:   "BRICKS"
	            , parent: "C0001"
		    },
                    { _id:    "B00003"
	            , name:   "Italian Condiments"
	            , type:   "BRICKS"
	            , parent: "C0001"
		    },
                    { _id:    "B00004"
	            , name:   "Italian Spice"
	            , type:   "BRICKS"
	            , parent: "C0001"
		    },
                    { _id:    "B00005"
	            , name:   "Mouth Freshener"
	            , type:   "BRICKS"
	            , parent: "C0001"
		    }
                   ]);
