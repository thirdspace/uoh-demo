// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Product Manager Skill Assessment",
        "main":    "<p>Click the start button when you are ready to begin.</p>",
        "results": "<p>Thanks for taking the assessment - you can retake the test at any time. The results have been mailed to both you and the hiring manager.</p><p>This test is now available to post to your profile.</p><br /><a href='applicant-assessment2.html' class='progress-btn btn primary'>Next</a>",
        "level1":  "<span class='success'>High Score</span>",
        "level2":  "<span class='success'>High Score</span>",
        "level3":  "<span class='normal'>Average Score</span>",
        "level4":  "<span class='danger'>Low Score</span>",
        "level5":  "<span class='danger'>Low Score</span>" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "As a product manager on a product in the mature stages of the product life cycle, what should you specifically do to best market your product?",
            "a": [
                {"option": "Defend against competitive marketing tactics",      "correct": false},
                {"option": "Prepare to discontinue the product",     "correct": false},
                {"option": "modify the product, market and the marketing mix",      "correct": true},
                {"option": "increase sampling programs",     "correct": false},
                {"option": "None of the above",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Setting prices as low as possible typically supports which of the following marketing objectives?",
            "a": [
                {"option": "Survival",               "correct": false},
                {"option": "Current profit maximization",  "correct": false},
                {"option": "Market-share leadership",    "correct": true},
                {"option": "Product-quality leadership", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How does a company estimate sales?",
            "a": [
                {"option": "It examines past sales history of similar products",           "correct": false},
                {"option": "It conducts market research to survey consumers",                  "correct": false},
                {"option": "It discusses manufacturing capacity with the plant manager",  "correct": false},
                {"option": "a and b",          "correct": true},
                {"option": "a, b and c",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "Which, if any, of the following are reasons producers use intermediaries?",
            "a": [
                {"option": "Because of their greater efficiency in making goods available to target markets ",    "correct": false},
                {"option": "Because of their contacts and experience with retailers",     "correct": false},
                {"option": "Because of their specialization in delivering goods as needed",      "correct": false},
                {"option": "a and b",   "correct": false},
                {"option": "a, b and c",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "When automobile manufacturers offer options in specially priced deals, they are practicing a form of",
            "a": [
                {"option": "Product-line pricing",    "correct": true},
                {"option": "Product-bundle pricing",     "correct": false},
                {"option": "Captive-product pricing",     "correct": false},
                {"option": "By-product pricing",     "correct": false},
                {"option": "Seasonal discounts",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 6
            "q": "Salespeople write their completed activities on ______________.",
            "a": [
                {"option": "Sales quota reports",    "correct": false},
                {"option": "Expense reports",     "correct": true},
                {"option": "Call reports",     "correct": false},
                {"option": "Annual territory marketing plans ",     "correct": false},
                {"option": "Sales reports",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 7
            "q": "Setting call objectives is done during this stage",
            "a": [
                {"option": "Preapproach",    "correct": true},
                {"option": "Follow-up",     "correct": false},
                {"option": "Approach",     "correct": false},
                {"option": "Presentation",     "correct": false},
                {"option": "Qualifying",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 8
            "q": "The marketing manager was asked to update the sales force on direct marketing. She should explain that direct marketing is",
            "a": [
                {"option": "One-to-one communication",    "correct": false},
                {"option": "Used to match marketing offers to individual buyers of narrowly defined segments",     "correct": false},
                {"option": "another word for sophisticated direct mail programs",     "correct": false},
                {"option": "a and b",     "correct": true},
                {"option": "a, b and c",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 9
            "q": "A corporate website is designed to do all the following except",
            "a": [
                {"option": "Directly sell products",    "correct": true},
                {"option": "Build customer goodwill ",     "correct": false},
                {"option": "Respond to communications initiated by the consumer",     "correct": false},
                {"option": "Indirectly sell company products ",     "correct": false},
                {"option": "provide opportunities for customers to learn more about the company and its products",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 10
            "q": "Which of the following factors should be considered when setting the advertising budget?",
            "a": [
                {"option": "Stage in the product life cycle",    "correct": false},
                {"option": "Market share",     "correct": false},
                {"option": "Product features",     "correct": false},
                {"option": "a and b",     "correct": true},
                {"option": "a, b and c",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 11
            "q": "Low competition, high repeat exposure, and low cost are advantages of which type of media?",
            "a": [
                {"option": "Magazines",    "correct": false},
                {"option": "Newspaper",     "correct": false},
                {"option": "Television",     "correct": false},
                {"option": "Outdoor ",     "correct": true},
                {"option": "Radio",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 12
            "q": "Which consumer promotion tool consists of certificates that give buyers a saving when they purchase specified products?",
            "a": [
                {"option": "Samples",    "correct": true},
                {"option": "Cash refunds",     "correct": false},
                {"option": "Sweepstakes ",     "correct": false},
                {"option": "Coupons ",     "correct": false},
                {"option": "Rebates",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
