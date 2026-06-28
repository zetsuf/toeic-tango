// ===== TOEIC リスニング練習（オリジナル問題・出題エンジン）=====
// ※実際のTOEIC問題ではなく、出題形式に沿って独自作成した練習問題です。
// 音声は端末の音声合成(Web Speech API)で英文を読み上げます。

// ---- Part 2 ＜応答問題＞: 質問/発言を聞き、最適な応答A-Cを選ぶ ----
window.PART2 = [
  { prompt: 'Where is the nearest train station?', choices: ["It's about five minutes from here.", 'I took the train yesterday.', 'The station is quite large.'], answer: 0 },
  { prompt: 'When does the meeting start?', choices: ['In the large conference room.', 'At three this afternoon.', "Yes, I'll attend."], answer: 1 },
  { prompt: "Who's in charge of the marketing project?", choices: ['Ms. Tanaka is.', "It's on the second floor.", 'Last Monday.'], answer: 0 },
  { prompt: 'Why was the shipment delayed?', choices: ['By express delivery.', 'Because of the bad weather.', 'To the warehouse.'], answer: 1 },
  { prompt: 'How can I get to the airport from here?', choices: ['It costs thirty dollars.', 'You can take the shuttle bus.', 'Around noon.'], answer: 1 },
  { prompt: 'Would you like some coffee or tea?', choices: ['Tea, please.', 'Yes, I would.', "It's in the kitchen."], answer: 0 },
  { prompt: 'Could you send me the report by Friday?', choices: ['Sure, no problem.', 'It was a great report.', "It's on the desk."], answer: 0 },
  { prompt: "The printer isn't working again.", choices: ["I'll call the technician.", 'Yes, I printed it.', "It's a new model."], answer: 0 },
  { prompt: 'How long will the renovation take?', choices: ['About two weeks.', 'On the third floor.', 'It looks great.'], answer: 0 },
  { prompt: 'Do you want to join us for lunch?', choices: ["I'd love to, thanks.", 'It was delicious.', 'At the restaurant.'], answer: 0 },
  { prompt: "Isn't the new manager starting today?", choices: ['Yes, this morning.', 'The old office.', "It's a good plan."], answer: 0 },
  { prompt: 'What time should we leave for the airport?', choices: ['By taxi.', "Let's leave at six.", 'Terminal two.'], answer: 1 },
  { prompt: 'Where did you put the contract?', choices: ['I filed it in the cabinet.', 'Yesterday afternoon.', 'With the client.'], answer: 0 },
  { prompt: 'How was the conference?', choices: ['Very informative.', 'In Osaka.', 'Three days long.'], answer: 0 },
  { prompt: "Why don't we postpone the meeting?", choices: ["That's a good idea.", 'In the meeting room.', 'He arrived late.'], answer: 0 },
  { prompt: 'Has the budget been approved yet?', choices: ['Not yet, actually.', 'By the finance team.', "It's over budget."], answer: 0 },
  { prompt: 'Which printer should I use?', choices: ['The one on the left.', 'I need to print this.', "We're out of paper."], answer: 0 },
  { prompt: 'Do you prefer the morning or afternoon session?', choices: ['The morning one.', 'Yes, I do.', 'It was long.'], answer: 0 },
  { prompt: 'Can you recommend a good hotel downtown?', choices: ['The Grand Plaza is nice.', 'I stayed three nights.', 'For a business trip.'], answer: 0 },
  { prompt: 'I think we should hire more staff.', choices: ['I agree completely.', 'He was hired last week.', 'In the HR department.'], answer: 0 },
  { prompt: 'When will the new product be launched?', choices: ['Next quarter.', "It's very popular.", 'At the store.'], answer: 0 },
  { prompt: 'Who approved this expense?', choices: ['The department head did.', "It's quite expensive.", "Last month's report."], answer: 0 },
  { prompt: 'Where are the meeting materials?', choices: ["I'll email them to you.", 'It was a long meeting.', "Yes, they're ready."], answer: 0 },
  { prompt: 'Would you mind closing the window?', choices: ['Not at all.', "It's a nice view.", 'The window is new.'], answer: 0 },
  { prompt: 'How often do you travel for work?', choices: ['About once a month.', 'To New York.', 'By plane.'], answer: 0 },
  { prompt: 'Is the projector ready for the presentation?', choices: ["Yes, it's all set up.", 'A great presentation.', 'In room B.'], answer: 0 },
  { prompt: 'Should I call the client now or later?', choices: ['Now would be better.', "He's a new client.", 'On the phone.'], answer: 0 },
  { prompt: "What's the Wi-Fi password?", choices: ["It's printed on the card.", 'Very fast connection.', 'In the lobby.'], answer: 0 },
  { prompt: "Didn't you order the supplies already?", choices: ['Yes, last week.', 'From the supplier.', 'Office supplies.'], answer: 0 },
  { prompt: 'The elevator is out of order.', choices: ["Let's take the stairs.", 'On the top floor.', "It's very fast."], answer: 0 },
  { prompt: 'Could you turn down the air conditioning?', choices: ["Sure, it is a bit cold.", 'Yes, I turned it on.', 'The conditioner is new.'], answer: 0 },
  { prompt: 'When is the deadline for the report?', choices: ['By the end of the week.', "It's in the report.", 'Mr. Sato wrote it.'], answer: 0 },
  { prompt: 'Where should I sign?', choices: ['At the bottom of the page.', "It's a new pen.", 'Yes, please sign.'], answer: 0 },
  { prompt: 'How much does shipping cost?', choices: ["It's free for members.", 'By truck.', 'Next Monday.'], answer: 0 },
  { prompt: 'Why is the office closed today?', choices: ["It's a public holiday.", 'On the fifth floor.', 'At nine.'], answer: 0 },
  { prompt: 'Have you met our new client?', choices: ['Not yet.', "It's a big client.", 'In the lobby.'], answer: 0 },
  { prompt: 'Do you know how to use this software?', choices: ['Yes, I use it every day.', "It's expensive software.", 'On my computer.'], answer: 0 },
  { prompt: 'Should we take the stairs or the elevator?', choices: ["Let's take the elevator.", 'On the top floor.', 'Yes, we should.'], answer: 0 },
  { prompt: "Who's giving the presentation tomorrow?", choices: ['I think Maria is.', 'In the main hall.', 'About sales.'], answer: 0 },
  { prompt: 'Can I leave early today?', choices: ["Of course, that's fine.", 'I left it at home.', 'Early in the morning.'], answer: 0 },
  { prompt: 'Is this seat taken?', choices: ['No, go ahead.', "It's a comfortable seat.", 'Yes, I sat down.'], answer: 0 },
  { prompt: "What's the agenda for the meeting?", choices: ["I'll send it to you now.", 'In the conference room.', 'At ten.'], answer: 0 },
  { prompt: 'Would you prefer a window or aisle seat?', choices: ['A window seat, please.', 'On the plane.', 'Yes, I would.'], answer: 0 },
  { prompt: 'Did the client approve the design?', choices: ['Yes, they loved it.', 'A new designer.', 'On the website.'], answer: 0 },
  { prompt: 'How do I reset my password?', choices: ["Click 'forgot password' on the login page.", "It's a strong password.", 'Every month.'], answer: 0 },
  { prompt: "We're running low on paper.", choices: ["I'll order some more.", "It's a paper company.", 'On the printer.'], answer: 0 },
  { prompt: 'When will you finish the translation?', choices: ['By tomorrow morning.', 'Into French.', "It's a long document."], answer: 0 },
  { prompt: 'Could you recommend a nearby restaurant?', choices: ["There's a great Italian place around the corner.", 'I had lunch already.', 'It was delicious.'], answer: 0 },
  { prompt: "Why don't we carpool to the conference?", choices: ["Good idea, I'll drive.", "It's far away.", 'At the conference.'], answer: 0 },
  { prompt: 'Is the manager available now?', choices: ["She's in a meeting until three.", "He's a good manager.", 'On the phone.'], answer: 0 },
];

// ---- Part 3 ＜会話問題＞: 会話を聞き、設問に答える(各3問・選択肢A-D) ----
window.PART3 = [
  { title: '返品の会話', script: [
      { spk: 'W', text: "Hi, I'd like to return this jacket. It's too small." },
      { spk: 'M', text: 'Sure. Do you have the receipt with you?' },
      { spk: 'W', text: 'Yes, here it is. Can I exchange it for a larger size?' },
      { spk: 'M', text: 'Let me check our stock. We have it in medium and large.' },
      { spk: 'W', text: "I'll take the large, please." },
    ], questions: [
      { q: 'Where does the conversation take place?', options: ['At a clothing store', 'At a restaurant', 'At a bank', 'At an airport'], answer: 0 },
      { q: 'What does the woman want to do?', options: ['Get a refund', 'Exchange an item', 'Buy a gift', 'Make a complaint'], answer: 1 },
      { q: 'What size does the woman choose?', options: ['Small', 'Medium', 'Large', 'Extra large'], answer: 2 },
    ] },
  { title: '打ち合わせの予定', script: [
      { spk: 'M', text: 'Karen, are you free for a quick meeting this afternoon?' },
      { spk: 'W', text: "I have a call at two, but I'm open after three." },
      { spk: 'M', text: "Great. Let's meet at three thirty to discuss the budget." },
      { spk: 'W', text: 'Sounds good. Should I bring the latest figures?' },
      { spk: 'M', text: 'Yes, please. And invite Tom as well.' },
    ], questions: [
      { q: 'What time will they meet?', options: ['2:00', '3:00', '3:30', '4:00'], answer: 2 },
      { q: 'What will they discuss?', options: ['The budget', 'A new hire', 'A product launch', 'Travel plans'], answer: 0 },
      { q: 'What does the man ask the woman to do?', options: ['Cancel a call', 'Bring figures and invite Tom', 'Book a room', 'Send an email'], answer: 1 },
    ] },
  { title: 'ホテルのフロント', script: [
      { spk: 'W', text: 'Good evening. I have a reservation under the name Brooks.' },
      { spk: 'M', text: 'Let me see... yes, a single room for two nights.' },
      { spk: 'W', text: 'Actually, could I extend my stay by one more night?' },
      { spk: 'M', text: 'Of course. That will be three nights total. Breakfast is included.' },
      { spk: 'W', text: 'Perfect. What time is check-out?' },
      { spk: 'M', text: 'Check-out is at eleven a.m.' },
    ], questions: [
      { q: 'Where most likely are the speakers?', options: ['At a hotel', 'At a travel agency', 'At a restaurant', 'At an airport'], answer: 0 },
      { q: 'What does the woman want to change?', options: ['Her room type', 'The number of nights', 'Her payment', 'The breakfast time'], answer: 1 },
      { q: 'What time is check-out?', options: ['9 a.m.', '10 a.m.', '11 a.m.', 'Noon'], answer: 2 },
    ] },
  { title: 'ITサポート', script: [
      { spk: 'M', text: 'Help desk, this is Raj. How can I help?' },
      { spk: 'W', text: "My laptop won't connect to the office network." },
      { spk: 'M', text: 'Have you tried restarting it?' },
      { spk: 'W', text: "Yes, twice, but it still doesn't work." },
      { spk: 'M', text: "Okay, I'll come to your desk in a few minutes to take a look." },
    ], questions: [
      { q: 'Why is the woman calling?', options: ['To order a laptop', 'To report a network problem', 'To schedule training', 'To reset a password'], answer: 1 },
      { q: 'What has the woman already done?', options: ['Restarted the laptop', 'Called a colleague', 'Bought a cable', 'Changed her password'], answer: 0 },
      { q: 'What will the man do next?', options: ['Send an email', 'Replace the laptop', 'Visit her desk', 'Call back later'], answer: 2 },
    ] },
  { title: 'レストランの席', script: [
      { spk: 'W', text: 'Thanks for coming. Do you have a reservation?' },
      { spk: 'M', text: 'Yes, for four people at seven, under Davis.' },
      { spk: 'W', text: "I'm sorry, but your table isn't quite ready. It'll be about ten minutes." },
      { spk: 'M', text: 'No problem. Can we wait at the bar?' },
      { spk: 'W', text: "Absolutely. I'll call you when your table is ready." },
    ], questions: [
      { q: "How many people are in the man's party?", options: ['Two', 'Three', 'Four', 'Five'], answer: 2 },
      { q: 'What is the problem?', options: ['The restaurant is closed', "The table isn't ready", 'They have no reservation', 'The kitchen is full'], answer: 1 },
      { q: 'What will the man do while waiting?', options: ['Leave', 'Wait at the bar', 'Order takeout', 'Come back later'], answer: 1 },
    ] },
  { title: 'プレゼン準備', script: [
      { spk: 'M', text: "Have you finished the slides for tomorrow's presentation?" },
      { spk: 'W', text: 'Almost. I just need to add the sales charts.' },
      { spk: 'M', text: 'Do you need any help with the data?' },
      { spk: 'W', text: "That would be great. Could you send me last month's figures?" },
      { spk: 'M', text: "Sure, I'll email them right away." },
    ], questions: [
      { q: 'What are the speakers preparing?', options: ['A presentation', 'A budget report', 'A contract', 'A newsletter'], answer: 0 },
      { q: 'What does the woman still need to do?', options: ['Print handouts', 'Add sales charts', 'Book a room', 'Rehearse'], answer: 1 },
      { q: 'What will the man do?', options: ['Email the figures', 'Make the slides', 'Cancel the meeting', 'Call a client'], answer: 0 },
    ] },
  { title: '配送の問い合わせ', script: [
      { spk: 'W', text: "I'm calling about my order. It hasn't arrived yet." },
      { spk: 'M', text: 'I apologize. Can I have your order number?' },
      { spk: 'W', text: "It's four-five-eight-two." },
      { spk: 'M', text: 'Thank you. It looks like there was a delay at the warehouse. It should arrive tomorrow.' },
      { spk: 'W', text: 'Okay, thank you for checking.' },
    ], questions: [
      { q: 'Why is the woman calling?', options: ['To place an order', 'About a late delivery', 'To cancel an order', 'To change an address'], answer: 1 },
      { q: 'What does the man ask for?', options: ['Her phone number', 'Her order number', 'Her address', 'Her email'], answer: 1 },
      { q: 'When will the order arrive?', options: ['Today', 'Tomorrow', 'Next week', 'In an hour'], answer: 1 },
    ] },
  { title: '採用面接', script: [
      { spk: 'M', text: 'I saw your application for the sales position. Your experience is impressive.' },
      { spk: 'W', text: "Thank you. I've worked in retail sales for five years." },
      { spk: 'M', text: 'Are you available to start next month?' },
      { spk: 'W', text: 'Yes, I can start on the first.' },
      { spk: 'M', text: "Great. We'll send you an offer by email this week." },
    ], questions: [
      { q: 'What position is the woman applying for?', options: ['Sales', 'Marketing', 'Accounting', 'IT'], answer: 0 },
      { q: 'How long has the woman worked in sales?', options: ['Two years', 'Three years', 'Five years', 'Ten years'], answer: 2 },
      { q: 'What will the man send this week?', options: ['A schedule', 'A job offer', 'A sample', 'A plan'], answer: 1 },
    ] },
  { title: '会議室の設備', script: [
      { spk: 'W', text: "The air conditioning in the meeting room isn't working." },
      { spk: 'M', text: "I noticed that too. It's really warm in there." },
      { spk: 'W', text: 'Should we use a different room for the workshop?' },
      { spk: 'M', text: 'Good idea. Room 305 is available all afternoon.' },
      { spk: 'W', text: "I'll let everyone know about the change." },
    ], questions: [
      { q: 'What is the problem?', options: ['The lights are off', "The AC isn't working", 'The room is booked', 'The projector broke'], answer: 1 },
      { q: 'What do they decide to do?', options: ['Cancel the workshop', 'Fix the AC', 'Move to another room', 'Open the windows'], answer: 2 },
      { q: 'What will the woman do?', options: ['Call maintenance', 'Inform everyone', 'Reserve a room', 'Buy a fan'], answer: 1 },
    ] },
  { title: '家電量販店', script: [
      { spk: 'M', text: 'Welcome to TechMart. Are you looking for anything specific?' },
      { spk: 'W', text: 'Yes, I need a wireless keyboard.' },
      { spk: 'M', text: "They're on aisle four, and they're twenty percent off this week." },
      { spk: 'W', text: "That's great. Do you have them in black?" },
      { spk: 'M', text: 'Yes, we have several in stock.' },
    ], questions: [
      { q: 'What is the woman looking for?', options: ['A monitor', 'A wireless keyboard', 'A laptop', 'A printer'], answer: 1 },
      { q: 'What does the man say about the keyboards?', options: ["They're sold out", "They're on sale", "They're new models", "They're discontinued"], answer: 1 },
      { q: 'What color does the woman want?', options: ['White', 'Silver', 'Black', 'Blue'], answer: 2 },
    ] },
  { title: '銀行で口座開設', script: [
      { spk: 'W', text: "Good morning. I'd like to open a savings account." },
      { spk: 'M', text: 'Certainly. Do you have a photo ID with you?' },
      { spk: 'W', text: "Yes, here's my driver's license." },
      { spk: 'M', text: "Great. Please fill out this form, and we'll set it up in a few minutes." },
    ], questions: [
      { q: 'Where does this conversation take place?', options: ['At a bank', 'At a library', 'At a post office', 'At a hotel'], answer: 0 },
      { q: 'What does the woman want to do?', options: ['Close an account', 'Open a savings account', 'Apply for a loan', 'Exchange money'], answer: 1 },
      { q: 'What does the man ask for?', options: ['A password', 'A photo ID', 'A signature only', 'A deposit'], answer: 1 },
    ] },
  { title: '新しいコピー機', script: [
      { spk: 'M', text: 'The new copier on the third floor is much faster.' },
      { spk: 'W', text: 'Really? The one on our floor is always jammed.' },
      { spk: 'M', text: 'You should try the new one. It also scans to email.' },
      { spk: 'W', text: "That's helpful. I'll use it for the big report." },
    ], questions: [
      { q: 'What are the speakers discussing?', options: ['A new copier', 'A new hire', 'A meeting', 'Some software'], answer: 0 },
      { q: 'What problem does the woman mention?', options: ["It's slow", "It's always jammed", "It's out of ink", "It's too far"], answer: 1 },
      { q: 'What feature does the man mention?', options: ['Color printing', 'Scanning to email', 'Stapling', 'Faxing'], answer: 1 },
    ] },
  { title: '海外オフィスとの電話', script: [
      { spk: 'W', text: 'Can we schedule a call with the London office?' },
      { spk: 'M', text: "Sure. Remember there's an eight-hour time difference." },
      { spk: 'W', text: 'Right. How about 9 a.m. our time? That\'s 5 p.m. for them.' },
      { spk: 'M', text: "That works. I'll send a calendar invite." },
    ], questions: [
      { q: 'Who do they want to call?', options: ['The London office', 'A client', 'The CEO', 'A supplier'], answer: 0 },
      { q: 'What does the man remind her about?', options: ['A deadline', 'The time difference', 'A budget', 'A document'], answer: 1 },
      { q: 'What will the man do?', options: ['Make the call', 'Send a calendar invite', 'Cancel the meeting', 'Book a flight'], answer: 1 },
    ] },
  { title: '保証での交換', script: [
      { spk: 'M', text: 'My headphones stopped working after two weeks.' },
      { spk: 'W', text: "I'm sorry. Do you have the warranty card?" },
      { spk: 'M', text: 'Yes, and the receipt too.' },
      { spk: 'W', text: 'We can replace them with a new pair today.' },
    ], questions: [
      { q: "What is the man's problem?", options: ['Lost headphones', 'Broken headphones', 'Wrong size', 'High price'], answer: 1 },
      { q: 'What does the woman ask for?', options: ['The warranty card', 'His phone number', 'His address', 'A photo'], answer: 0 },
      { q: 'What will happen?', options: ['A refund', 'A repair', 'A replacement', 'A discount'], answer: 2 },
    ] },
  { title: '通勤の話', script: [
      { spk: 'W', text: 'How was your commute this morning?' },
      { spk: 'M', text: 'Terrible. The train was delayed by thirty minutes.' },
      { spk: 'W', text: 'Again? Maybe you should try the express bus.' },
      { spk: 'M', text: 'Good idea. Does it stop near the office?' },
      { spk: 'W', text: 'Yes, right in front of the building.' },
    ], questions: [
      { q: 'What was the problem?', options: ['A delayed train', 'A traffic jam', 'Bad weather', 'A flat tire'], answer: 0 },
      { q: 'What does the woman suggest?', options: ['Driving', 'Taking the express bus', 'Working from home', 'Leaving earlier'], answer: 1 },
      { q: 'Where does the bus stop?', options: ['At the station', 'Near his home', 'In front of the office', 'At a mall'], answer: 2 },
    ] },
  { title: 'ケータリングの手配', script: [
      { spk: 'M', text: "We need to order food for Friday's workshop." },
      { spk: 'W', text: 'How many people are attending?' },
      { spk: 'M', text: 'About twenty-five.' },
      { spk: 'W', text: "I'll order sandwiches and drinks from the usual caterer." },
      { spk: 'M', text: 'Perfect. Please ask for some vegetarian options too.' },
    ], questions: [
      { q: 'What are they planning?', options: ["Food for a workshop", 'A birthday party', 'A product launch', 'A meeting room'], answer: 0 },
      { q: 'How many people will attend?', options: ['15', '20', '25', '30'], answer: 2 },
      { q: 'What does the man request?', options: ['Vegetarian options', 'A bigger room', 'More drinks', 'A discount'], answer: 0 },
    ] },
  { title: 'オフィス移転', script: [
      { spk: 'W', text: 'Have you seen the new office space downtown?' },
      { spk: 'M', text: "Yes, it's bigger and closer to the station." },
      { spk: 'W', text: 'When are we planning to move?' },
      { spk: 'M', text: 'Management says early next month.' },
      { spk: 'W', text: "I'd better start packing my desk." },
    ], questions: [
      { q: 'What are they discussing?', options: ['A new office space', 'A vacation', 'A client visit', 'A renovation'], answer: 0 },
      { q: 'What does the man say about it?', options: ["It's smaller", "It's bigger and closer to the station", "It's more expensive", "It's far away"], answer: 1 },
      { q: 'When will they move?', options: ['This week', 'Early next month', 'Next year', 'Tomorrow'], answer: 1 },
    ] },
];

// ---- Part 4 ＜説明文問題＞: 1人の説明文(アナウンス/留守電/広告等)を聞き、設問に答える ----
window.PART4 = [
  { title: '空港アナウンス', script: [
      { spk: 'N', text: 'Attention passengers. Flight 207 to Chicago has been delayed due to weather conditions. The new departure time is 4:45 p.m. Passengers may use the lounge on the second floor. We apologize for the inconvenience.' },
    ], questions: [
      { q: 'Where is this announcement being made?', options: ['At a train station', 'At an airport', 'At a bus terminal', 'On a ship'], answer: 1 },
      { q: 'Why is the flight delayed?', options: ['A technical problem', 'Weather conditions', 'A crew shortage', 'Heavy traffic'], answer: 1 },
      { q: 'What can passengers do while waiting?', options: ['Get a refund', 'Use the lounge', 'Rebook online', 'Board early'], answer: 1 },
    ] },
  { title: '歯科の留守電', script: [
      { spk: 'N', text: 'Hi, this is Mark from Greenfield Dental calling for Ms. Lee. This is a reminder about your appointment tomorrow at 10 a.m. Please arrive ten minutes early to fill out a form. If you need to reschedule, call us at 555-0182.' },
    ], questions: [
      { q: 'Why is the speaker calling?', options: ['To confirm an order', 'To remind about an appointment', 'To offer a discount', 'To apply for a job'], answer: 1 },
      { q: 'What should the listener do before the appointment?', options: ['Pay a fee', 'Arrive early to fill out a form', 'Bring a friend', 'Cancel online'], answer: 1 },
      { q: 'How can the listener reschedule?', options: ['Send an email', 'Call the office', 'Visit in person', 'Use the website'], answer: 1 },
    ] },
  { title: '家具店の広告', script: [
      { spk: 'N', text: 'This weekend only, Sunny Home Furniture is holding its biggest sale of the year. All sofas and dining tables are thirty percent off. Plus, get free delivery on orders over five hundred dollars. Our showroom on Main Street is open from nine to eight.' },
    ], questions: [
      { q: 'What is being advertised?', options: ['A furniture sale', 'A grand opening', 'A restaurant', 'A delivery service'], answer: 0 },
      { q: 'What is offered on large orders?', options: ['A free gift', 'Free delivery', 'An extra discount', 'A warranty'], answer: 1 },
      { q: 'When does the showroom close?', options: ['6 p.m.', '7 p.m.', '8 p.m.', '9 p.m.'], answer: 2 },
    ] },
  { title: '朝礼の挨拶', script: [
      { spk: 'N', text: "Good morning, everyone. Thanks for joining today's staff meeting. First, I'd like to welcome our new team member, Sarah, who joins us from the Tokyo office. After introductions, we'll review last quarter's results and then discuss the new project timeline." },
    ], questions: [
      { q: 'What is the purpose of the talk?', options: ['To start a meeting', 'To give a tour', 'To train staff', 'To advertise'], answer: 0 },
      { q: 'Who is Sarah?', options: ['A client', 'A new team member', 'A manager', 'A trainer'], answer: 1 },
      { q: 'What will they discuss after introductions?', options: ['Salaries', "Last quarter's results", 'Office rules', 'Vacation plans'], answer: 1 },
    ] },
  { title: '美術館ツアー', script: [
      { spk: 'N', text: 'Welcome to the City Art Museum. Our tour will begin in the modern art gallery on this floor, then move upstairs to the photography exhibit. Please remember that photography is not allowed inside the galleries. The tour lasts about an hour and ends at the gift shop.' },
    ], questions: [
      { q: 'Where does the tour begin?', options: ['The gift shop', 'The modern art gallery', 'The photography exhibit', 'The café'], answer: 1 },
      { q: 'What are visitors not allowed to do?', options: ['Take photos', 'Touch the art', 'Talk', 'Eat'], answer: 0 },
      { q: 'Where does the tour end?', options: ['The lobby', 'The gift shop', 'Upstairs', 'The garden'], answer: 1 },
    ] },
  { title: '交通情報', script: [
      { spk: 'N', text: "And now for the morning traffic report. There's heavy congestion on Highway 5 northbound due to an earlier accident. Drivers are advised to use Route 9 as an alternative. The downtown area is also busy because of road construction on Oak Street." },
    ], questions: [
      { q: 'What is causing congestion on Highway 5?', options: ['Construction', 'An accident', 'A festival', 'Bad weather'], answer: 1 },
      { q: 'What are drivers advised to do?', options: ['Stay home', 'Use Route 9', 'Take the train', 'Leave later'], answer: 1 },
      { q: 'Why is downtown busy?', options: ['A parade', 'Road construction', 'An accident', 'A holiday'], answer: 1 },
    ] },
  { title: '製品の使い方', script: [
      { spk: 'N', text: 'Thank you for purchasing the BrewMaster coffee machine. Before first use, rinse the water tank and fill it with fresh water. Place a filter in the basket and add ground coffee. Press start, and your coffee will be ready in about five minutes. For best results, clean the machine weekly.' },
    ], questions: [
      { q: 'What is the speaker explaining?', options: ['How to use a coffee machine', 'How to repair a machine', 'How to order coffee', 'How to return a product'], answer: 0 },
      { q: 'How long does it take to make coffee?', options: ['One minute', 'Five minutes', 'Ten minutes', 'Fifteen minutes'], answer: 1 },
      { q: 'How often should the machine be cleaned?', options: ['Daily', 'Weekly', 'Monthly', 'Yearly'], answer: 1 },
    ] },
  { title: 'イベント案内', script: [
      { spk: 'N', text: 'Welcome to the annual Marketing Summit. Today\'s keynote speech will start at 9:30 in the main hall. Afterward, you can choose from several workshops in rooms A through D. Lunch will be served at noon. Please wear your name badge at all times.' },
    ], questions: [
      { q: 'What event is taking place?', options: ['A marketing summit', 'A job fair', 'A product launch', 'A training course'], answer: 0 },
      { q: 'When does the keynote start?', options: ['9:00', '9:30', '10:00', 'Noon'], answer: 1 },
      { q: 'What are attendees asked to do?', options: ['Turn off phones', 'Wear a name badge', 'Sit in front', 'Register online'], answer: 1 },
    ] },
  { title: 'ビジネスニュース', script: [
      { spk: 'N', text: 'In business news, the technology company NovaTech announced today that it will open a new factory in the southern region, creating about three hundred jobs. The factory is expected to begin operations next spring, in response to growing demand for their products.' },
    ], questions: [
      { q: 'What did NovaTech announce?', options: ['A new product', 'A new factory', 'A merger', 'Layoffs'], answer: 1 },
      { q: 'How many jobs will be created?', options: ['100', '200', '300', '500'], answer: 2 },
      { q: 'When will the factory start operating?', options: ['This winter', 'Next spring', 'Next summer', "Next year's end"], answer: 1 },
    ] },
  { title: '社内アナウンス', script: [
      { spk: 'N', text: "Attention all staff. The building's parking lot will be repaved this Saturday. Please do not park in the lot after 6 p.m. on Friday. Employees who need parking can use the public garage across the street, and the company will cover the cost. Normal parking resumes Monday." },
    ], questions: [
      { q: 'What will happen on Saturday?', options: ['A staff party', 'The parking lot will be repaved', 'An office move', 'A fire drill'], answer: 1 },
      { q: 'Where can employees park?', options: ['On the street', 'In the public garage', 'At a nearby mall', 'At home'], answer: 1 },
      { q: 'When will normal parking resume?', options: ['Saturday', 'Sunday', 'Monday', 'Friday'], answer: 2 },
    ] },
  { title: '閉店アナウンス', script: [
      { spk: 'N', text: 'Attention shoppers. Our store will be closing in fifteen minutes. Please bring your final purchases to the checkout counters now. Our customer service desk is open until closing for any returns or questions. Thank you for shopping with us.' },
    ], questions: [
      { q: 'What is the purpose of the announcement?', options: ['A sale', 'The store is closing soon', 'A lost child', 'A new product'], answer: 1 },
      { q: 'What should shoppers do?', options: ['Leave immediately', 'Bring purchases to checkout', 'Go to the parking lot', 'Wait at the entrance'], answer: 1 },
      { q: 'What is open until closing?', options: ['The café', 'The customer service desk', 'The pharmacy', 'The restrooms'], answer: 1 },
    ] },
  { title: '電車内アナウンス', script: [
      { spk: 'N', text: 'This is the express train to Central Station. The next stop is Riverside. Please note that this train does not stop at Oak Park or Greenwood. Passengers for those stations should change to the local train at Riverside. Mind the gap when leaving the train.' },
    ], questions: [
      { q: 'Where is this announcement heard?', options: ['On a train', 'On a plane', 'On a bus', 'At a port'], answer: 0 },
      { q: 'What is the next stop?', options: ['Central Station', 'Riverside', 'Oak Park', 'Greenwood'], answer: 1 },
      { q: 'What should passengers for Oak Park do?', options: ['Get off now', 'Change to the local train at Riverside', 'Stay on the train', 'Buy a new ticket'], answer: 1 },
    ] },
  { title: '配送の留守電', script: [
      { spk: 'N', text: 'Hello, this message is for Mr. Carter. This is Lisa from Apex Supplies. Your order of office chairs has shipped and will arrive on Thursday. Someone must be present to sign for the delivery. If Thursday does not work, please call us to reschedule.' },
    ], questions: [
      { q: 'What was ordered?', options: ['Office chairs', 'Desks', 'Computers', 'Printers'], answer: 0 },
      { q: 'When will it arrive?', options: ['Monday', 'Wednesday', 'Thursday', 'Friday'], answer: 2 },
      { q: 'What must someone do?', options: ['Pay on delivery', 'Be present to sign', 'Pick it up', 'Assemble it'], answer: 1 },
    ] },
  { title: 'ジムの案内', script: [
      { spk: 'N', text: 'Welcome to FitLife Gym. On your left is the cardio area with treadmills and bikes. Upstairs you will find the weight room and the yoga studio. Locker rooms with showers are at the back. Remember to wipe down equipment after use.' },
    ], questions: [
      { q: 'What kind of place is this?', options: ['A gym', 'A spa', 'A school', 'A hotel'], answer: 0 },
      { q: 'Where is the yoga studio?', options: ['On the left', 'Upstairs', 'At the back', 'At the entrance'], answer: 1 },
      { q: 'What are members reminded to do?', options: ['Bring a towel', 'Wipe down equipment', 'Sign in', 'Pay a fee'], answer: 1 },
    ] },
  { title: '週末の天気予報', script: [
      { spk: 'N', text: "Here's your weekend forecast. Saturday will be sunny with a high of twenty-five degrees, perfect for outdoor plans. However, rain is expected on Sunday afternoon, so don't forget your umbrella. Temperatures will drop slightly next week." },
    ], questions: [
      { q: 'What is the speaker giving?', options: ['A weather forecast', 'Traffic news', 'Sports results', 'An advertisement'], answer: 0 },
      { q: 'What will the weather be like on Saturday?', options: ['Rainy', 'Sunny', 'Snowy', 'Cloudy'], answer: 1 },
      { q: 'What should listeners bring on Sunday?', options: ['Sunglasses', 'An umbrella', 'A coat', 'A hat'], answer: 1 },
    ] },
  { title: '研修の説明', script: [
      { spk: 'N', text: "Welcome to today's time-management workshop. Over the next two hours, we'll cover how to prioritize tasks and avoid distractions. There will be a short break at the halfway point. Handouts are available at the front, and please feel free to ask questions at any time." },
    ], questions: [
      { q: 'What is the workshop about?', options: ['Time management', 'Public speaking', 'Sales', 'Marketing'], answer: 0 },
      { q: 'How long will it last?', options: ['One hour', 'Two hours', 'Three hours', 'Half a day'], answer: 1 },
      { q: 'Where can attendees get handouts?', options: ['Online', 'At the front', 'By email', 'At the back'], answer: 1 },
    ] },
  { title: '搭乗案内', script: [
      { spk: 'N', text: 'Good afternoon, passengers. We will begin boarding Flight 88 to Sydney shortly. We will start with first class and passengers needing extra assistance, followed by groups one through four. Please have your boarding pass and passport ready.' },
    ], questions: [
      { q: 'Where is this announcement made?', options: ['At an airport gate', 'On a train', 'At a hotel', 'At a bus stop'], answer: 0 },
      { q: 'Who boards first?', options: ['Group four', 'First class and those needing assistance', 'Families', 'Group one'], answer: 1 },
      { q: 'What should passengers have ready?', options: ['Their luggage', 'Boarding pass and passport', 'A credit card', 'A ticket number'], answer: 1 },
    ] },
];

// ===== 出題エンジン =====
window.Listening = (function () {
  const PARTS = { part2: window.PART2, part3: window.PART3, part4: window.PART4 };
  const TITLES = { part2: 'Part 2 ＜応答問題＞', part3: 'Part 3 ＜会話問題＞', part4: 'Part 4 ＜説明文問題＞' };
  const L3 = ['A', 'B', 'C'];
  const L4 = ['A', 'B', 'C', 'D'];
  let part = null, idx = 0, correct = 0, total = 0;

  function el() { return document.getElementById('listeningView'); }
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  // ---- 音声合成（アプリ=ネイティブTTS / ブラウザ=Web Speech API）----
  const Cap = window.Capacitor;
  const isNative = !!(Cap && typeof Cap.isNativePlatform === 'function' && Cap.isNativePlatform());
  let NativeTTS = null;
  if (isNative) {
    try {
      if (Cap.Plugins && Cap.Plugins.TextToSpeech) NativeTTS = Cap.Plugins.TextToSpeech;
      else if (typeof Cap.registerPlugin === 'function') NativeTTS = Cap.registerPlugin('TextToSpeech');
    } catch (e) { NativeTTS = null; }
  }
  const hasWebTTS = ('speechSynthesis' in window) && typeof window.SpeechSynthesisUtterance === 'function';
  let speakToken = 0;

  let enVoice = null;
  function pickVoice() {
    if (!hasWebTTS) return;
    const vs = speechSynthesis.getVoices();
    enVoice = vs.find((v) => /en[-_]US/i.test(v.lang)) || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if (hasWebTTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }

  function ttsAvailable() { return !!NativeTTS || hasWebTTS; }
  function stopAudio() {
    speakToken++; // 再生中のシーケンスを無効化
    if (NativeTTS) { try { NativeTTS.stop(); } catch (e) {} }
    if (hasWebTTS) speechSynthesis.cancel();
  }

  async function speakLines(lines) {
    if (!ttsAvailable()) { alert('この端末は音声読み上げに対応していません。'); return; }
    stopAudio();
    const myToken = speakToken;
    if (NativeTTS) {
      // ネイティブTTSは1文ずつ順番に読み上げ（完了待ち）
      let spokeAny = false;
      for (const ln of lines) {
        if (myToken !== speakToken) return; // 中断された
        try {
          await NativeTTS.speak({ text: ln.text, lang: 'en-US', rate: 1.0, pitch: ln.pitch || 1.0, volume: 1.0, category: 'playback' });
          spokeAny = true;
        } catch (e) { /* この行は飛ばして続行 */ }
      }
      if (!spokeAny) alert('英語の音声データが見つかりませんでした。端末の「設定 → 言語と入力 → 音声合成(TTS)」で英語の音声をインストールしてください。');
    } else {
      lines.forEach((ln) => {
        const u = new SpeechSynthesisUtterance(ln.text);
        u.lang = 'en-US'; if (enVoice) u.voice = enVoice;
        u.rate = 0.95; u.pitch = ln.pitch || 1;
        speechSynthesis.speak(u);
      });
    }
  }

  function open(p) { part = p; idx = 0; correct = 0; total = 0; render(); }
  function close() { stopAudio(); }

  function header() {
    const n = PARTS[part].length;
    const unit = part === 'part2' ? '問題' : 'セット';
    return `<div class="li-head">
      <div class="li-title">${TITLES[part]}</div>
      <div class="li-meta">${unit} ${idx + 1} / ${n} ・ 正解 ${correct}/${total}</div>
    </div>`;
  }
  function updateMeta() {
    const n = PARTS[part].length;
    const unit = part === 'part2' ? '問題' : 'セット';
    el().querySelector('.li-meta').textContent = `${unit} ${idx + 1} / ${n} ・ 正解 ${correct}/${total}`;
  }
  function nextItem() { stopAudio(); idx = (idx + 1) % PARTS[part].length; render(); window.scrollTo({ top: 0 }); }

  function render() {
    const item = PARTS[part][idx];
    if (!item) { el().innerHTML = '<p class="li-empty">問題がありません。</p>'; return; }
    if (part === 'part2') renderPart2(item); else renderPart34(item);
  }

  function renderPart2(item) {
    el().innerHTML = header() + `
      <p class="li-inst">質問または発言を聞き、最も適切な応答(A・B・C)を選びましょう。応答は音声のみです。</p>
      <button class="li-play" id="liPlay">▶ 音声を再生</button>
      <div class="li-choices">
        ${L3.map((L, i) => `<button class="li-opt" data-i="${i}">${L}</button>`).join('')}
      </div>
      <div class="li-review" id="liReview" hidden></div>
      <button class="btn-next" id="liNext" hidden>次の問題 →</button>
    `;
    document.getElementById('liPlay').onclick = () => {
      const lines = [{ text: item.prompt }];
      item.choices.forEach((c, i) => lines.push({ text: `${L3[i]}. ${c}` }));
      speakLines(lines);
    };
    let done = false;
    el().querySelectorAll('.li-opt').forEach((btn) => {
      btn.onclick = () => {
        if (done) return; done = true;
        const sel = +btn.dataset.i;
        total++; if (sel === item.answer) correct++;
        el().querySelectorAll('.li-opt').forEach((b, i) => {
          if (i === item.answer) b.classList.add('correct');
          else if (i === sel) b.classList.add('wrong');
          b.disabled = true;
        });
        const rev = document.getElementById('liReview'); rev.hidden = false;
        rev.innerHTML = `<div class="li-result ${sel === item.answer ? 'ok' : 'ng'}">${sel === item.answer ? '正解！' : '不正解'}（正解: ${L3[item.answer]}）</div>
          <div class="li-subhead">スクリプト</div>
          <div class="li-script"><div class="li-sline"><b>Q.</b> ${esc(item.prompt)}</div>
          ${item.choices.map((c, i) => `<div class="li-sline ${i === item.answer ? 'ans' : ''}">(${L3[i]}) ${esc(c)}</div>`).join('')}</div>`;
        document.getElementById('liNext').hidden = false;
        updateMeta();
        rev.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      };
    });
    document.getElementById('liNext').onclick = nextItem;
  }

  function renderPart34(set) {
    el().innerHTML = header() + `
      <p class="li-inst">${part === 'part3' ? '会話' : '説明文(トーク)'}を聞いて、各設問に最も適切な答え(A〜D)を選びましょう。</p>
      <button class="li-play" id="liPlay">▶ 音声を再生</button>
      <div class="li-questions">
        ${set.questions.map((q, qi) => `
          <div class="li-q">
            <div class="li-qtext">${qi + 1}. ${esc(q.q)}</div>
            ${q.options.map((o, oi) => `<button class="li-opt4" data-qi="${qi}" data-oi="${oi}">(${L4[oi]}) ${esc(o)}</button>`).join('')}
          </div>`).join('')}
      </div>
      <button class="btn-next" id="liCheck">答え合わせ</button>
      <div class="li-review" id="liReview" hidden></div>
      <button class="btn-next" id="liNext" hidden>次へ →</button>
    `;
    document.getElementById('liPlay').onclick = () => {
      const lines = set.script.map((s) => ({ text: s.text, pitch: s.spk === 'W' ? 1.25 : (s.spk === 'M' ? 0.8 : 1) }));
      speakLines(lines);
    };
    const selected = {};
    el().querySelectorAll('.li-opt4').forEach((btn) => {
      btn.onclick = () => {
        const qi = +btn.dataset.qi, oi = +btn.dataset.oi;
        if (btn.disabled) return;
        selected[qi] = oi;
        el().querySelectorAll(`.li-opt4[data-qi="${qi}"]`).forEach((b) => b.classList.toggle('sel', +b.dataset.oi === oi));
      };
    });
    let done = false;
    document.getElementById('liCheck').onclick = () => {
      if (done) return;
      if (Object.keys(selected).length < set.questions.length) { alert('すべての設問に回答してください。'); return; }
      done = true;
      set.questions.forEach((q, qi) => {
        total++; if (selected[qi] === q.answer) correct++;
        el().querySelectorAll(`.li-opt4[data-qi="${qi}"]`).forEach((b) => {
          const oi = +b.dataset.oi;
          if (oi === q.answer) b.classList.add('correct');
          else if (oi === selected[qi]) b.classList.add('wrong');
          b.disabled = true;
        });
      });
      const rev = document.getElementById('liReview'); rev.hidden = false;
      const sc = set.questions.filter((q, qi) => selected[qi] === q.answer).length;
      rev.innerHTML = `<div class="li-result ${sc === set.questions.length ? 'ok' : 'ng'}">このセット ${sc}/${set.questions.length} 正解</div>
        <div class="li-subhead">スクリプト</div>
        <div class="li-script">${set.script.map((s) => `<div class="li-sline">${s.spk === 'N' ? '' : '<b>' + s.spk + ':</b> '}${esc(s.text)}</div>`).join('')}</div>`;
      document.getElementById('liCheck').hidden = true;
      document.getElementById('liNext').hidden = false;
      updateMeta();
      rev.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
    document.getElementById('liNext').onclick = nextItem;
  }

  return { open, close };
})();
