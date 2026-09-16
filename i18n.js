/* ==========================================================================
   Nuni – translations (Hebrew, English, Arabic, Russian, French)
   Every string is keyed to a data-i18n attribute in index.html.
   ========================================================================== */

const I18N = {
  he: {
    title: "נוני – מתכוננים להרדמה בעדינות",
    meta_desc: "אתר ידידותי לילדים ולהורים שמסביר בעדינות מה קורה לפני, במהלך ואחרי הרדמה וניתוח – כדי שיהיה רגוע ופחות מפחיד.",
    brand_name: "נוני",
    aria_main: "ניווט ראשי", aria_language: "בחירת שפה", aria_menu: "תפריט",
    nav_about: "מה זה", nav_journey: "המסע", nav_feelings: "רגשות", nav_faq: "שאלות", nav_parents: "להורים",
    hero_eyebrow: "לילדים אמיצים (ולמבוגרים שלהם)",
    hero_title: "הכול יהיה בסדר. בואו נתכונן ביחד.",
    hero_subtitle: "בקרוב יהיה לך ניתוח, ותקבל שינה מיוחדת כדי שכלום לא יכאב. נוני יראה לך בדיוק מה קורה – שלב אחרי שלב.",
    hero_cta: "תראה לי מה קורה", hero_cta2: "להורים",
    what_title: "מה זו \"שינה של ניתוח\"?",
    what_p1: "לפני הניתוח מקבלים שינה מיוחדת ועדינה שנקראת הרדמה. זו לא שינה כמו בלילה – זו שינה עמוקה שמכינים במיוחד בשביל הניתוח.",
    what_p2: "רופא מיוחד שנקרא הרופא המרדים נותן לך תרופה דרך מסכה רכה שנושמים דרכה, או דרך צינורית דקיקה ביד. ואז לאט־לאט נרדמים, כאילו מרחפים על ענן.",
    what_p3: "בזמן השינה לא מרגישים כלום – לא דקירה ולא כאב. הרופא המרדים נשאר לידך כל הזמן ומעיר אותך בעדינות כשהניתוח נגמר.",
    journey_title: "המסע שלך, שלב אחרי שלב",
    step1_title: "בבית",
    step1_text: "אפשר לארוז צעצוע או שמיכה אהובים להביא איתך. מבוגר יעזור לך להתכונן. בית החולים יגיד מתי להפסיק לאכול ולשתות – זה שומר על הבטן שלך בזמן השינה.",
    step2_title: "מגיעים לבית החולים",
    step2_text: "תפגוש אחים ואחיות נחמדים ואת הרופא המרדים. אולי יקשיבו ללב שלך ויבדקו כמה גדלת. אפשר לשאול אותם כל דבר!",
    step3_title: "מתכוננים",
    step3_text: "תלבש פיג'מה רכה של בית החולים. לפעמים מורחים קרם קסם על היד כדי שלא תרגיש כלום אם מכניסים שם צינורית דקיקה.",
    step4_title: "חדר השינה המיוחד",
    step4_text: "בחדר מיוחד נושמים דרך מסכה רכה שיכולה להריח כמו מסטיק או תות, או מקבלים תרופת שינה דרך הצינורית הדקיקה. אפשר לספור או לנפח בלון גדול מדומיין – ולפני שתסיים, כבר תהיה ישן.",
    step5_title: "בזמן שאתה ישן",
    step5_text: "לא תרגיש ולא תזכור את הניתוח. הרופא המרדים משגיח עליך כל הזמן ודואג שתהיה בטוח ונינוח.",
    step6_title: "מתעוררים",
    step6_text: "מתעוררים בחדר התאוששות נעים. מישהו שאוהב אותך יהיה שם. אולי תרגיש קצת עייף או צמא – ואולי אפילו תקבל ארטיק!",
    feelings_title: "זה בסדר להרגיש איך שאתה מרגיש",
    feelings_text: "נרגש, קצת לחוץ, סקרן, טיפה מפוחד – כל הרגשות האלה בסדר גמור. המון ילדים מרגישים ככה, והמבוגרים בבית החולים הם מומחים בלעזור לך להרגיש בטוח. הנה טריק מרגיע שאפשר לנסות בכל רגע:",
    breath_title: "נשימת בלון",
    breath_default: "לחצו על \"התחלה\" ונשמו יחד עם נוני",
    breath_start: "התחלה", breath_stop: "עצירה",
    breath_in: "שאיפה… מנפחים את הבלון", breath_hold: "מחזיקים…", breath_out: "נשיפה… לאט",
    faq_title: "שאלות שילדים שואלים",
    q1: "האם זה יכאב?",
    a1: "השינה עשויה כך שהניתוח לא כואב. ההכנה יכולה להרגיש כמו צביטה קטנטנה, אבל להרבה ילדים לא כואב בכלל.",
    q2: "אולי אתעורר באמצע?",
    a2: "לא. הרופא המרדים נותן בדיוק את הכמות הנכונה של תרופה ונשאר איתך כל הזמן, כך שתישאר ישן עד שהניתוח נגמר.",
    q3: "אבא או אמא יכולים לבוא איתי?",
    a3: "בדרך כלל מבוגר יכול להישאר איתך עד שנרדמים, והוא יהיה שם כשמתעוררים. שאל את הצוות מה נהוג בבית החולים שלך.",
    q4: "מה אם אני מפחד?",
    a4: "זה נורמלי לגמרי. ספר לצוות או למבוגר שלך – הם יכולים להחזיק לך את היד, להביא את הצעצוע שלך, או לנשום איתך נשימת בלון.",
    q5: "אולי ארגיש לא טוב אחר כך?",
    a5: "חלק מהילדים מרגישים קצת עייפים, מסוחררים או עם גרון קצת כואב לזמן קצר. זה עובר, והצוות יכול לעזור לך להרגיש טוב יותר.",
    q6: "כמה זמן זה לוקח?",
    a6: "כל ניתוח שונה. הרופא המרדים או האחות יכולים לספר לך בערך כמה זמן ייקח שלך. בשבילך זה ירגיש כאילו עצמת עיניים והתעוררת מיד.",
    parents_eyebrow: "להורים ולמטפלים",
    parents_title: "איך לעזור לילד להרגיש מוכן",
    parents_intro: "ילדים מתמודדים הרבה יותר טוב כשהם יודעים למה לצפות, במילים שהם מבינים. הנה דרכים לתמוך בילד לפני הרדמה וניתוח.",
    tip1: "היו כנים ופשוטים. הסבירו שרופא מיוחד יעזור להם לישון שינה עמוקה כדי שהניתוח לא יכאב, ושהם יתעוררו אחר כך.",
    tip2: "השתמשו במילים רגועות ומרגיעות. עדיף \"שינה מיוחדת\" ו\"תרופת שינה\" על פני ביטויים מפחידים.",
    tip3: "אפשרו חפץ מנחם. צעצוע אהוב, שמיכה או מוצץ יכולים לעשות הבדל גדול.",
    tip4: "תרגלו יחד. קריאה משותפת של האתר הזה או תרגול נשימת בלון מראש בונים ביטחון.",
    tip5: "עקבו בדיוק אחרי הוראות בית החולים – במיוחד לגבי צום (מתי הילד חייב להפסיק לאכול ולשתות). הזמנים האלה שומרים על בטיחות הילד ונקבעים על ידי הצוות הרפואי שלכם.",
    tip6: "שאלו שאלות. רשמו כל דבר שאתם לא בטוחים לגביו ושאלו את הרופא המרדים או הצוות הסיעודי – אין שאלה קטנה מדי.",
    note_title: "חשוב",
    note_text: "האתר הזה נותן מידע כללי וידידותי כדי לעזור בהכנת ילדים. הוא אינו מהווה ייעוץ רפואי. יש לפעול תמיד לפי ההוראות הספציפיות של בית החולים והצוות הרפואי שלכם, ולפנות אליהם בכל חשש.",
    footer_made: "נבנה בְּאהבה כדי לעזור לילדים להרגיש רגועים ומוכנים.",
    footer_disclaimer: "אינו תחליף לייעוץ רפואי מקצועי.",
    nav_home: "דף הבית", nav_story: "סרטון", nav_coloring: "דפי צביעה",
    hero_story: "צפו בסרטון של נוני",
    coloring_title: "דפי צביעה של נוני",
    coloring_intro: "בחרו דף, הדפיסו וצבעו! דרך נהדרת להירגע ולהכיר את נוני לפני הביקור בבית החולים.",
    coloring_print: "הדפיסו את כל הדפים",
    color_nuni: "נוני הכוכב", color_balloon: "בלון הנשימה", color_bed: "מיטת בית החולים",
    color_juice: "כוס מים", color_mask: "מסכת הקסם", color_nurse: "האח הנחמד",
    color_machine: "מכונת ההרדמה",
    coloring_hint: "לחצו על תמונה כדי להדפיס אותה לבד.",
    story_title: "היום של נוני בבית החולים",
    story_sub: "סרטון קצר בלי מילים – מתאים גם לקטנטנים שעוד לא קוראים.",
    story_replay: "מהתחלה",
    story_play_pause: "הפעלה או השהיה",
    story_scene: "סצנה",
    story_music: "מוזיקה",
    story_narration: "קריינות",
    story_narrate_title: "הקראת הסיפור",
    nav_equipment: "הציוד",
    equip_title: "מכירים את הציוד",
    equip_intro: "לחצו על כל דבר כדי לשמוע איך קוראים לו ומה הוא עושה. שום דבר לא כואב!",
    gear_hint: "לחצו כדי לגלות",
    gear_mask_name: "המסכה הרכה",
    gear_mask_desc: "נושמים דרכה כמו דרך ענן רך וקטן. היא יכולה להריח כמו תות או מסטיק.",
    gear_oximeter_name: "האור על האצבע",
    gear_oximeter_desc: "הוא מחבק בעדינות את קצה האצבע באור אדום רך וסופר את פעימות הלב. זה בכלל לא כואב – רק מדגדג קצת.",
    gear_cuff_name: "חיבוק ליד",
    gear_cuff_desc: "הוא לוחץ לך על היד בעדינות, כמו חיבוק קטן, ואז משחרר.",
    gear_steth_name: "מכשיר ההקשבה",
    gear_steth_desc: "הרופא מקשיב איתו איך הלב שלך עושה בום־בום. אולי זה ירגיש קצת קריר.",
    gear_band_name: "הצמיד עם השם שלך",
    gear_band_desc: "צמיד רך עם השם שלך, כדי שכולם בבית החולים ידעו שזה אתה.",
    gear_cream_name: "קרם הקסם",
    gear_cream_desc: "קרם קטן שגורם לנקודה על היד להיות רדומה, כך שכמעט לא מרגישים שם כלום.",
    gender_note: "האתר כתוב בלשון זכר מטעמי נוחות הקריאה, ומיועד לכל המגדרים כאחד."
  },

  en: {
    title: "Nuni – Getting ready for anesthesia, gently",
    meta_desc: "A friendly site for children and parents that gently explains what happens before, during and after anesthesia and an operation — to make it calmer and less scary.",
    brand_name: "Nuni",
    aria_main: "Main navigation", aria_language: "Choose language", aria_menu: "Menu",
    nav_about: "What it is", nav_journey: "The journey", nav_feelings: "Feelings", nav_faq: "Questions", nav_parents: "Parents",
    hero_eyebrow: "For brave kids (and their grown-ups)",
    hero_title: "You're going to be okay. Let's get ready together.",
    hero_subtitle: "Soon you'll have an operation, and you'll have a special sleep so nothing hurts. Nuni will show you exactly what happens — step by step.",
    hero_cta: "Show me what happens", hero_cta2: "For parents",
    what_title: "What is \"operation sleep\"?",
    what_p1: "Before your operation you get a special, gentle sleep called anesthesia. It's not like sleeping at night — it's a deep sleep made just for the operation.",
    what_p2: "A special doctor called the sleep doctor (anesthetist) gives you medicine through a soft mask you breathe through, or through a tiny thin straw in your hand. Then you slowly drift off, like floating on a cloud.",
    what_p3: "While you sleep you feel nothing at all — no poking and no hurting. The sleep doctor stays right next to you the whole time and wakes you gently when the operation is done.",
    journey_title: "Your journey, step by step",
    step1_title: "At home",
    step1_text: "Pack a favorite toy or blanket to bring with you. A grown-up will help you get ready. The hospital will tell you when to stop eating and drinking — this keeps your tummy safe during the sleep.",
    step2_title: "Arriving at the hospital",
    step2_text: "You'll meet friendly nurses and your sleep doctor. They might listen to your heart and check how much you've grown. You can ask them anything!",
    step3_title: "Getting ready",
    step3_text: "You'll put on soft hospital pajamas. Sometimes they use magic cream or a sticker on your hand so you won't feel a thing later.",
    step4_title: "The special sleep room",
    step4_text: "In a special room you'll breathe through a soft mask that can smell like bubblegum or strawberry, or get sleepy medicine through the tiny straw. Try counting or blowing up a big imaginary balloon — before you finish, you'll be asleep.",
    step5_title: "While you sleep",
    step5_text: "You won't feel or remember the operation. The sleep doctor watches over you the whole time, making sure you're safe and comfy.",
    step6_title: "Waking up",
    step6_text: "You wake up in a cozy recovery room. Someone who loves you will be there. You might feel a little sleepy or thirsty — and you might even get a popsicle!",
    feelings_title: "It's okay to feel however you feel",
    feelings_text: "Excited, a little nervous, curious, a bit scared — all of these feelings are okay. Lots of kids feel this way, and the grown-ups at the hospital are experts at helping you feel safe. Here's a calming trick you can try any time:",
    breath_title: "Balloon breathing",
    breath_default: "Tap \"Start\" and breathe with Nuni",
    breath_start: "Start", breath_stop: "Stop",
    breath_in: "Breathe in… fill the balloon", breath_hold: "Hold…", breath_out: "Breathe out… slowly",
    faq_title: "Questions kids ask",
    q1: "Will it hurt?",
    a1: "The sleep is made so the operation doesn't hurt. Getting ready might feel like a tiny pinch, but many kids don't feel anything at all.",
    q2: "Might I wake up in the middle?",
    a2: "No. The sleep doctor gives you just the right amount of medicine and stays with you the whole time, so you stay asleep until the operation is finished.",
    q3: "Can my mom or dad come with me?",
    a3: "Usually a grown-up can stay with you until you fall asleep, and they'll be there when you wake up. Ask the staff what happens at your hospital.",
    q4: "What if I feel scared?",
    a4: "That's completely normal. Tell the staff or your grown-up — they can hold your hand, bring your toy, or do balloon breathing with you.",
    q5: "Will I feel sick afterward?",
    a5: "Some kids feel a little sleepy, dizzy, or have a sore throat for a short while. It goes away, and the staff can help you feel better.",
    q6: "How long does it take?",
    a6: "Every operation is different. Your sleep doctor or nurse can tell you about how long yours will be. To you it will feel like you closed your eyes and woke up right away.",
    parents_eyebrow: "For parents & caregivers",
    parents_title: "Helping your child feel prepared",
    parents_intro: "Children cope far better when they know what to expect, in words they understand. Here are ways to support your child before an anesthetic and operation.",
    tip1: "Be honest and simple. Explain that a special doctor will help them have a deep sleep so the operation doesn't hurt, and that they'll wake up afterward.",
    tip2: "Use calm, reassuring words. 'Special sleep' and 'sleepy medicine' feel safer than frightening phrases.",
    tip3: "Allow a comfort item. A favorite toy, blanket, or dummy can make a big difference.",
    tip4: "Practice together. Reading through this site or trying balloon breathing beforehand builds confidence.",
    tip5: "Follow your hospital's instructions exactly — especially about fasting (when your child must stop eating and drinking). These times keep your child safe and are set by your medical team.",
    tip6: "Ask questions. Write down anything you're unsure about and ask the anesthetist or nurses — no question is too small.",
    note_title: "Important",
    note_text: "This website gives general, friendly information to help prepare children. It is not medical advice. Always follow the specific instructions given by your own hospital and medical team, and contact them with any concerns.",
    footer_made: "Made with care to help children feel calm and informed.",
    footer_disclaimer: "Not a substitute for professional medical advice.",
    nav_home: "Home", nav_story: "Story", nav_coloring: "Coloring",
    hero_story: "Watch Nuni's story",
    coloring_title: "Nuni's coloring pages",
    coloring_intro: "Pick a page, print it, and color! A lovely way to relax and get to know Nuni before the hospital visit.",
    coloring_print: "Print all pages",
    color_nuni: "Nuni the star", color_balloon: "Breathing balloon", color_bed: "Hospital bed",
    color_juice: "A glass of water", color_mask: "The magic mask", color_nurse: "The kind nurse",
    color_machine: "The anesthesia machine",
    coloring_hint: "Tap a picture to print just that one.",
    story_title: "Nuni's day at the hospital",
    story_sub: "A short wordless film — perfect for little ones who can't read yet.",
    story_replay: "Replay",
    story_play_pause: "Play or pause",
    story_scene: "Scene",
    story_music: "Music",
    story_narration: "Narration",
    story_narrate_title: "Read the story aloud",
    nav_equipment: "The equipment",
    equip_title: "Meet the equipment",
    equip_intro: "Tap each one to hear its friendly name and what it does. None of them hurt!",
    gear_hint: "Tap to explore",
    gear_mask_name: "The soft mask",
    gear_mask_desc: "You breathe through it like a soft little cloud. It can smell like strawberry or bubblegum.",
    gear_oximeter_name: "The finger light",
    gear_oximeter_desc: "It hugs your fingertip with a soft red light and counts your heartbeats. It doesn't hurt at all — it just tickles a little.",
    gear_cuff_name: "The arm hug",
    gear_cuff_desc: "It gives your arm a gentle squeeze, like a little hug, and then lets go.",
    gear_steth_name: "The listening ears",
    gear_steth_desc: "The doctor uses it to hear your heart go boom-boom. It might feel a tiny bit cool.",
    gear_band_name: "Your name bracelet",
    gear_band_desc: "A soft bracelet with your name on it, so everyone at the hospital knows it's you.",
    gear_cream_name: "The magic cream",
    gear_cream_desc: "A little cream that makes a spot on your hand feel sleepy, so you barely feel anything there.",
    gender_note: ""
  },

  ar: {
    title: "نوني – نستعدّ للتخدير بلطف",
    meta_desc: "موقع ودود للأطفال وأهاليهم يشرح بلطف ما يحدث قبل التخدير والعملية وأثناءهما وبعدهما — ليكون الأمر أهدأ وأقل خوفًا.",
    brand_name: "نوني",
    aria_main: "التنقل الرئيسي", aria_language: "اختيار اللغة", aria_menu: "القائمة",
    nav_about: "ما هو", nav_journey: "الرحلة", nav_feelings: "المشاعر", nav_faq: "أسئلة", nav_parents: "للأهل",
    hero_eyebrow: "للأطفال الشجعان (ولكبارهم)",
    hero_title: "كل شيء سيكون على ما يُرام. لنستعدّ معًا.",
    hero_subtitle: "قريبًا ستُجرى لك عملية، وستنام نومًا خاصًا حتى لا يؤلمك شيء. سيريك نوني بالضبط ما يحدث — خطوة بخطوة.",
    hero_cta: "أرِني ماذا يحدث", hero_cta2: "للأهل",
    what_title: "ما هو «نوم العملية»؟",
    what_p1: "قبل العملية تحصل على نوم خاص ولطيف اسمه التخدير. إنه ليس كالنوم في الليل — بل نوم عميق مُعدّ خصيصًا للعملية.",
    what_p2: "يعطيك طبيب خاص اسمه طبيب التخدير دواءً عبر قناع ناعم تتنفّس منه، أو عبر قَشّة رفيعة جدًا في يدك. ثم تغفو ببطء وكأنك تطفو على غيمة.",
    what_p3: "أثناء النوم لا تشعر بأي شيء — لا وخز ولا ألم. يبقى طبيب التخدير بجانبك طوال الوقت ويوقظك بلطف عند انتهاء العملية.",
    journey_title: "رحلتك، خطوة بخطوة",
    step1_title: "في البيت",
    step1_text: "احزم لعبتك أو بطانيتك المفضّلة لتأخذها معك. سيساعدك أحد الكبار على الاستعداد. سيخبرك المستشفى متى تتوقّف عن الأكل والشرب — هذا يحافظ على سلامة معدتك أثناء النوم.",
    step2_title: "الوصول إلى المستشفى",
    step2_text: "ستقابل ممرّضين لطفاء وطبيب التخدير. قد يستمعون إلى قلبك ويقيسون كم كبرت. يمكنك أن تسألهم أي شيء!",
    step3_title: "الاستعداد",
    step3_text: "سترتدي بيجامة ناعمة خاصة بالمستشفى. أحيانًا يضعون كريمًا سحريًا أو ملصقًا على يدك حتى لا تشعر بشيء لاحقًا.",
    step4_title: "غرفة النوم الخاصة",
    step4_text: "في غرفة خاصة ستتنفّس عبر قناع ناعم قد تكون رائحته كالعلكة أو الفراولة، أو تحصل على دواء النوم عبر القشّة الرفيعة. جرّب أن تعدّ أو تنفخ بالونًا كبيرًا في خيالك — وقبل أن تنتهي ستكون قد نمت.",
    step5_title: "بينما أنت نائم",
    step5_text: "لن تشعر بالعملية ولن تتذكّرها. يراقبك طبيب التخدير طوال الوقت ويتأكّد من أنك آمن ومرتاح.",
    step6_title: "الاستيقاظ",
    step6_text: "تستيقظ في غرفة إفاقة مريحة. سيكون هناك شخص يحبّك. قد تشعر ببعض النعاس أو العطش — وربما تحصل على مصّاصة مثلجة!",
    feelings_title: "لا بأس أن تشعر بما تشعر به",
    feelings_text: "متحمّس، قليل التوتر، فضولي، خائف بعض الشيء — كل هذه المشاعر لا بأس بها. كثير من الأطفال يشعرون هكذا، والكبار في المستشفى خبراء في مساعدتك على الشعور بالأمان. إليك حيلة مهدّئة يمكنك تجربتها في أي وقت:",
    breath_title: "تنفّس البالون",
    breath_default: "اضغط «ابدأ» وتنفّس مع نوني",
    breath_start: "ابدأ", breath_stop: "توقّف",
    breath_in: "خذ نفسًا… انفخ البالون", breath_hold: "احبس نفسك…", breath_out: "أخرِج النفس… ببطء",
    faq_title: "أسئلة يطرحها الأطفال",
    q1: "هل سيؤلمني؟",
    a1: "النوم مُعدّ حتى لا تؤلمك العملية. قد يكون الاستعداد كوخزة صغيرة جدًا، لكن كثيرًا من الأطفال لا يشعرون بشيء إطلاقًا.",
    q2: "هل قد أستيقظ في المنتصف؟",
    a2: "لا. يعطيك طبيب التخدير الكمية المناسبة تمامًا من الدواء ويبقى معك طوال الوقت، فتبقى نائمًا حتى تنتهي العملية.",
    q3: "هل يستطيع أبي أو أمي أن يأتي معي؟",
    a3: "عادةً يستطيع أحد الكبار البقاء معك حتى تنام، وسيكون هناك عندما تستيقظ. اسأل الطاقم عمّا هو معتاد في مستشفاك.",
    q4: "ماذا لو شعرت بالخوف؟",
    a4: "هذا طبيعي تمامًا. أخبر الطاقم أو الشخص الكبير معك — يمكنهم أن يمسكوا يدك، أو يحضروا لعبتك، أو يتنفّسوا معك تنفّس البالون.",
    q5: "هل سأشعر بتوعّك بعد ذلك؟",
    a5: "بعض الأطفال يشعرون ببعض النعاس أو الدوخة أو بألم خفيف في الحلق لفترة قصيرة. يزول ذلك، ويمكن للطاقم مساعدتك على الشعور بتحسّن.",
    q6: "كم يستغرق الأمر؟",
    a6: "كل عملية مختلفة. يستطيع طبيب التخدير أو الممرّض إخبارك تقريبًا كم ستستغرق عمليتك. بالنسبة لك، ستشعر وكأنك أغمضت عينيك واستيقظت فورًا.",
    parents_eyebrow: "للأهل ومقدّمي الرعاية",
    parents_title: "كيف تساعد طفلك على الشعور بالاستعداد",
    parents_intro: "يتأقلم الأطفال بشكل أفضل بكثير عندما يعرفون ما يمكن توقّعه، بكلمات يفهمونها. إليك طرقًا لدعم طفلك قبل التخدير والعملية.",
    tip1: "كن صادقًا وبسيطًا. اشرح أن طبيبًا خاصًا سيساعده على النوم نومًا عميقًا حتى لا تؤلمه العملية، وأنه سيستيقظ بعدها.",
    tip2: "استخدم كلمات هادئة ومطمئنة. عبارات مثل «نوم خاص» و«دواء النوم» تبدو أكثر أمانًا من العبارات المخيفة.",
    tip3: "اسمح بإحضار غرض مريح. لعبة مفضّلة أو بطانية أو لهّاية قد تُحدث فرقًا كبيرًا.",
    tip4: "تدرّبا معًا. قراءة هذا الموقع أو تجربة تنفّس البالون مسبقًا تبني الثقة.",
    tip5: "اتبع تعليمات المستشفى بدقة — خاصةً بشأن الصيام (متى يجب أن يتوقّف طفلك عن الأكل والشرب). هذه الأوقات تحافظ على سلامة طفلك ويحدّدها فريقك الطبي.",
    tip6: "اطرح الأسئلة. دوّن كل ما لست متأكدًا منه واسأل طبيب التخدير أو الممرّضين — لا يوجد سؤال صغير جدًا.",
    note_title: "مهم",
    note_text: "يقدّم هذا الموقع معلومات عامة وودّية للمساعدة في تهيئة الأطفال. وهو ليس استشارة طبية. اتبع دائمًا التعليمات المحدّدة التي يقدّمها مستشفاك وفريقك الطبي، وتواصل معهم عند أي قلق.",
    footer_made: "صُنع بعناية لمساعدة الأطفال على الشعور بالهدوء والاطمئنان.",
    footer_disclaimer: "ليس بديلاً عن الاستشارة الطبية المتخصّصة.",
    nav_home: "الرئيسية", nav_story: "الفيلم", nav_coloring: "التلوين",
    hero_story: "شاهد قصة نوني",
    coloring_title: "صفحات تلوين نوني",
    coloring_intro: "اختر صفحة، اطبعها، ولوّنها! طريقة جميلة للاسترخاء والتعرّف على نوني قبل زيارة المستشفى.",
    coloring_print: "اطبع كل الصفحات",
    color_nuni: "نوني النجمة", color_balloon: "بالون التنفّس", color_bed: "سرير المستشفى",
    color_juice: "كوب ماء", color_mask: "قناع السحر", color_nurse: "الممرّض اللطيف",
    color_machine: "جهاز التخدير",
    coloring_hint: "اضغط على صورة لطباعتها وحدها.",
    story_title: "يوم نوني في المستشفى",
    story_sub: "فيلم قصير بلا كلمات — مثالي للصغار الذين لا يقرؤون بعد.",
    story_replay: "من البداية",
    story_play_pause: "تشغيل أو إيقاف مؤقت",
    story_scene: "المشهد",
    story_music: "الموسيقى",
    story_narration: "السرد",
    story_narrate_title: "قراءة القصة بصوت عالٍ",
    nav_equipment: "المعدّات",
    equip_title: "تعرّف على المعدّات",
    equip_intro: "اضغط على كل شيء لتسمع اسمه اللطيف وماذا يفعل. لا شيء منها يؤلم!",
    gear_hint: "اضغط للاكتشاف",
    gear_mask_name: "القناع الناعم",
    gear_mask_desc: "تتنفّس من خلاله مثل غيمة صغيرة ناعمة. وقد تكون رائحته مثل الفراولة أو العلكة.",
    gear_oximeter_name: "ضوء الإصبع",
    gear_oximeter_desc: "يحتضن طرف إصبعك بضوء أحمر ناعم ويعدّ نبضات قلبك. لا يؤلم أبدًا — بل يدغدغ قليلًا.",
    gear_cuff_name: "عناق الذراع",
    gear_cuff_desc: "يضغط على ذراعك بلطف، مثل عناق صغير، ثم يفلته.",
    gear_steth_name: "أداة الإصغاء",
    gear_steth_desc: "يستمع بها الطبيب إلى قلبك وهو ينبض بوم-بوم. قد تشعر ببرودة بسيطة.",
    gear_band_name: "سوار باسمك",
    gear_band_desc: "سوار ناعم مكتوب عليه اسمك، ليعرف الجميع في المستشفى أنه أنت.",
    gear_cream_name: "كريم السحر",
    gear_cream_desc: "كريم صغير يجعل نقطة على يدك تشعر بالنعاس، فلا تكاد تشعر بشيء هناك.",
    gender_note: "كُتب الموقع بصيغة المذكّر لتسهيل القراءة، وهو موجّه لجميع الأطفال على حدٍّ سواء."
  },

  ru: {
    title: "Нуни – мягко готовимся к наркозу",
    meta_desc: "Добрый сайт для детей и родителей, который мягко объясняет, что происходит до, во время и после наркоза и операции — чтобы было спокойнее и не так страшно.",
    brand_name: "Нуни",
    aria_main: "Основная навигация", aria_language: "Выбор языка", aria_menu: "Меню",
    nav_about: "Что это", nav_journey: "Путешествие", nav_feelings: "Чувства", nav_faq: "Вопросы", nav_parents: "Родителям",
    hero_eyebrow: "Для храбрых детей (и их взрослых)",
    hero_title: "Всё будет хорошо. Давай подготовимся вместе.",
    hero_subtitle: "Скоро у тебя будет операция, и ты будешь спать особым сном, чтобы ничего не болело. Нуни покажет тебе, что именно происходит — шаг за шагом.",
    hero_cta: "Покажи, что будет", hero_cta2: "Родителям",
    what_title: "Что такое «операционный сон»?",
    what_p1: "Перед операцией тебе дают особый, мягкий сон — он называется наркоз. Это не как сон ночью — это глубокий сон, сделанный специально для операции.",
    what_p2: "Особый врач — врач-анестезиолог — даёт тебе лекарство через мягкую маску, через которую ты дышишь, или через тоненькую трубочку в руке. И ты медленно засыпаешь, как будто плывёшь на облаке.",
    what_p3: "Во время сна ты совсем ничего не чувствуешь — ни уколов, ни боли. Врач-анестезиолог всё время рядом с тобой и мягко будит тебя, когда операция закончилась.",
    journey_title: "Твоё путешествие, шаг за шагом",
    step1_title: "Дома",
    step1_text: "Возьми с собой любимую игрушку или одеяльце. Взрослый поможет тебе собраться. В больнице скажут, когда перестать есть и пить — так твой животик будет в безопасности во время сна.",
    step2_title: "Приезд в больницу",
    step2_text: "Ты познакомишься с добрыми медсёстрами и врачом-анестезиологом. Возможно, они послушают твоё сердечко и проверят, как ты подрос. Ты можешь спросить их о чём угодно!",
    step3_title: "Подготовка",
    step3_text: "Ты наденешь мягкую больничную пижаму. Иногда на руку наносят волшебный крем или наклейку, чтобы потом ты ничего не почувствовал.",
    step4_title: "Особая комната сна",
    step4_text: "В особой комнате ты будешь дышать через мягкую маску, которая может пахнуть жвачкой или клубникой, или получишь сонное лекарство через тоненькую трубочку. Попробуй считать или надувать большой воображаемый шарик — и не успеешь закончить, как уже уснёшь.",
    step5_title: "Пока ты спишь",
    step5_text: "Ты не почувствуешь и не запомнишь операцию. Врач-анестезиолог всё время следит за тобой и заботится, чтобы тебе было безопасно и удобно.",
    step6_title: "Пробуждение",
    step6_text: "Ты просыпаешься в уютной палате пробуждения. Рядом будет тот, кто тебя любит. Возможно, ты немного сонный или хочешь пить — а ещё тебе могут дать фруктовый лёд!",
    feelings_title: "Можно чувствовать всё, что ты чувствуешь",
    feelings_text: "Радостно, немного тревожно, любопытно, чуть-чуть страшно — все эти чувства нормальны. Многие дети чувствуют то же самое, а взрослые в больнице — мастера в том, чтобы ты чувствовал себя в безопасности. Вот успокаивающий трюк, который можно попробовать в любой момент:",
    breath_title: "Дыхание-шарик",
    breath_default: "Нажми «Начать» и дыши вместе с Нуни",
    breath_start: "Начать", breath_stop: "Стоп",
    breath_in: "Вдохни… надуй шарик", breath_hold: "Задержи…", breath_out: "Выдохни… медленно",
    faq_title: "Вопросы, которые задают дети",
    q1: "Будет ли больно?",
    a1: "Сон сделан так, чтобы операция не была больной. Подготовка может ощущаться как крошечный щипок, но многие дети совсем ничего не чувствуют.",
    q2: "Могу ли я проснуться посередине?",
    a2: "Нет. Врач-анестезиолог даёт ровно нужное количество лекарства и всё время рядом, поэтому ты спишь, пока операция не закончится.",
    q3: "Может ли мама или папа пойти со мной?",
    a3: "Обычно взрослый может побыть с тобой, пока ты не уснёшь, и будет рядом, когда ты проснёшься. Спроси у персонала, как это устроено в твоей больнице.",
    q4: "А если мне страшно?",
    a4: "Это совершенно нормально. Скажи персоналу или своему взрослому — они могут подержать тебя за руку, принести твою игрушку или подышать вместе с тобой дыханием-шариком.",
    q5: "Будет ли мне плохо потом?",
    a5: "Некоторые дети недолго чувствуют сонливость, головокружение или лёгкую боль в горле. Это проходит, и персонал поможет тебе почувствовать себя лучше.",
    q6: "Сколько это длится?",
    a6: "Каждая операция разная. Врач-анестезиолог или медсестра расскажут, сколько примерно продлится твоя. Для тебя это будет как будто ты закрыл глаза и тут же проснулся.",
    parents_eyebrow: "Родителям и опекунам",
    parents_title: "Как помочь ребёнку почувствовать себя готовым",
    parents_intro: "Дети справляются намного лучше, когда знают, чего ожидать, понятными им словами. Вот как поддержать ребёнка перед наркозом и операцией.",
    tip1: "Будьте честны и просты. Объясните, что особый врач поможет ему крепко уснуть, чтобы операция не была больной, и что потом он проснётся.",
    tip2: "Используйте спокойные, ободряющие слова. «Особый сон» и «сонное лекарство» звучат безопаснее пугающих выражений.",
    tip3: "Разрешите взять любимую вещь. Любимая игрушка, одеяльце или соска могут очень помочь.",
    tip4: "Потренируйтесь вместе. Чтение этого сайта или дыхание-шарик заранее придают уверенности.",
    tip5: "Точно следуйте указаниям больницы — особенно насчёт голодания (когда ребёнку нужно перестать есть и пить). Эти сроки обеспечивают безопасность ребёнка и устанавливаются вашей медицинской командой.",
    tip6: "Задавайте вопросы. Запишите всё, в чём не уверены, и спросите анестезиолога или медсестёр — не бывает слишком маленьких вопросов.",
    note_title: "Важно",
    note_text: "Этот сайт даёт общую, дружелюбную информацию, чтобы помочь подготовить детей. Это не медицинская консультация. Всегда следуйте конкретным указаниям вашей больницы и медицинской команды и обращайтесь к ним при любых сомнениях.",
    footer_made: "Сделано с заботой, чтобы дети чувствовали себя спокойно и уверенно.",
    footer_disclaimer: "Не заменяет профессиональную медицинскую консультацию.",
    nav_home: "Главная", nav_story: "Мультик", nav_coloring: "Раскраски",
    hero_story: "Смотреть мультик про Нуни",
    coloring_title: "Раскраски с Нуни",
    coloring_intro: "Выбери страницу, распечатай и раскрась! Прекрасный способ расслабиться и познакомиться с Нуни перед визитом в больницу.",
    coloring_print: "Распечатать все",
    color_nuni: "Звёздочка Нуни", color_balloon: "Шарик для дыхания", color_bed: "Больничная кроватка",
    color_juice: "Стакан воды", color_mask: "Волшебная маска", color_nurse: "Добрая медсестра",
    color_machine: "Наркозный аппарат",
    coloring_hint: "Нажмите на картинку, чтобы распечатать только её.",
    story_title: "День Нуни в больнице",
    story_sub: "Короткий мультик без слов — подойдёт даже малышам, которые ещё не читают.",
    story_replay: "Сначала",
    story_play_pause: "Воспроизвести или приостановить",
    story_scene: "Сцена",
    story_music: "Музыка",
    story_narration: "Озвучивание",
    story_narrate_title: "Прочитать историю вслух",
    nav_equipment: "Оборудование",
    equip_title: "Знакомимся с оборудованием",
    equip_intro: "Нажми на каждый предмет, чтобы услышать его доброе название и узнать, что он делает. Ничего из этого не больно!",
    gear_hint: "Нажми, чтобы узнать",
    gear_mask_name: "Мягкая маска",
    gear_mask_desc: "Через неё дышишь, как сквозь мягкое облачко. Она может пахнуть клубникой или жвачкой.",
    gear_oximeter_name: "Огонёк на пальчике",
    gear_oximeter_desc: "Он обнимает кончик пальца мягким красным светом и считает удары сердца. Совсем не больно — только чуть щекотно.",
    gear_cuff_name: "Обнимашка для руки",
    gear_cuff_desc: "Она мягко сжимает руку, как маленькое объятие, а потом отпускает.",
    gear_steth_name: "Слушающий приборчик",
    gear_steth_desc: "Им доктор слушает, как твоё сердце стучит тук-тук. Может быть немножко прохладно.",
    gear_band_name: "Браслет с твоим именем",
    gear_band_desc: "Мягкий браслет с твоим именем, чтобы все в больнице знали, что это ты.",
    gear_cream_name: "Волшебный крем",
    gear_cream_desc: "Маленький крем, от которого местечко на руке становится сонным, и ты там почти ничего не чувствуешь.",
    gender_note: "Сайт написан в мужском роде для удобства чтения и обращён ко всем детям одинаково."
  },

  fr: {
    title: "Nuni – se préparer en douceur à l'anesthésie",
    meta_desc: "Un site bienveillant pour les enfants et les parents qui explique en douceur ce qui se passe avant, pendant et après l'anesthésie et une opération — pour que ce soit plus calme et moins effrayant.",
    brand_name: "Nuni",
    aria_main: "Navigation principale", aria_language: "Choix de la langue", aria_menu: "Menu",
    nav_about: "C'est quoi", nav_journey: "Le parcours", nav_feelings: "Émotions", nav_faq: "Questions", nav_parents: "Parents",
    hero_eyebrow: "Pour les enfants courageux (et les adultes qui les accompagnent)",
    hero_title: "Tout va bien se passer. Préparons-nous ensemble.",
    hero_subtitle: "Bientôt tu vas avoir une opération, et tu auras un sommeil spécial pour que rien ne fasse mal. Nuni va te montrer exactement ce qui se passe — étape par étape.",
    hero_cta: "Montre-moi ce qui se passe", hero_cta2: "Pour les parents",
    what_title: "C'est quoi le « sommeil de l'opération » ?",
    what_p1: "Avant ton opération, on te donne un sommeil spécial et tout doux qui s'appelle l'anesthésie. Ce n'est pas comme dormir la nuit — c'est un sommeil profond préparé exprès pour l'opération.",
    what_p2: "Un médecin spécial qu'on appelle le médecin du sommeil (l'anesthésiste) te donne un médicament à travers un masque tout doux dans lequel tu respires, ou par un tout petit tuyau fin dans ta main. Puis tu t'endors tout doucement, comme si tu flottais sur un nuage.",
    what_p3: "Pendant que tu dors, tu ne sens rien du tout — ni piqûre ni douleur. Le médecin du sommeil reste juste à côté de toi tout le temps et te réveille en douceur quand l'opération est finie.",
    journey_title: "Ton parcours, étape par étape",
    step1_title: "À la maison",
    step1_text: "Tu peux emporter un jouet ou une couverture que tu aimes bien. Un adulte va t'aider à te préparer. L'hôpital te dira quand arrêter de manger et de boire — ça protège ton ventre pendant le sommeil.",
    step2_title: "L'arrivée à l'hôpital",
    step2_text: "Tu rencontreras des infirmiers et infirmières gentils et ton médecin du sommeil. Ils écouteront peut-être ton cœur et regarderont combien tu as grandi. Tu peux leur demander tout ce que tu veux !",
    step3_title: "On se prépare",
    step3_text: "Tu mettras un pyjama tout doux de l'hôpital. Parfois on met une crème magique ou un autocollant sur ta main pour que tu ne sentes rien plus tard.",
    step4_title: "La chambre du sommeil spécial",
    step4_text: "Dans une chambre spéciale, tu respireras à travers un masque tout doux qui peut sentir le chewing-gum ou la fraise, ou tu recevras un médicament pour dormir par le petit tuyau fin. Essaie de compter ou de gonfler un grand ballon imaginaire — et avant d'avoir fini, tu seras déjà endormi.",
    step5_title: "Pendant que tu dors",
    step5_text: "Tu ne sentiras pas et tu ne te souviendras pas de l'opération. Le médecin du sommeil veille sur toi tout le temps et fait attention à ce que tu sois en sécurité et bien installé.",
    step6_title: "Le réveil",
    step6_text: "Tu te réveilles dans une salle de réveil douillette. Quelqu'un qui t'aime sera là. Tu te sentiras peut-être un peu fatigué ou assoiffé — et tu auras peut-être même une glace !",
    feelings_title: "C'est normal de ressentir ce que tu ressens",
    feelings_text: "Excité, un peu nerveux, curieux, un petit peu effrayé — toutes ces émotions sont normales. Beaucoup d'enfants ressentent ça, et le personnel de l'hôpital sait très bien comment t'aider à te sentir en sécurité. Voici une astuce apaisante que tu peux essayer à tout moment :",
    breath_title: "La respiration du ballon",
    breath_default: "Appuie sur « Départ » et respire avec Nuni",
    breath_start: "Départ", breath_stop: "Stop",
    breath_in: "Inspire… gonfle le ballon", breath_hold: "Retiens…", breath_out: "Expire… tout doucement",
    faq_title: "Les questions que posent les enfants",
    q1: "Est-ce que ça va faire mal ?",
    a1: "Le sommeil est fait pour que l'opération ne fasse pas mal. La préparation peut ressembler à un tout petit pincement, mais beaucoup d'enfants ne sentent rien du tout.",
    q2: "Est-ce que je peux me réveiller au milieu ?",
    a2: "Non. Le médecin du sommeil te donne juste la bonne quantité de médicament et reste avec toi tout le temps, alors tu restes endormi jusqu'à ce que l'opération soit finie.",
    q3: "Est-ce que mon papa ou ma maman peut venir avec moi ?",
    a3: "En général, un adulte peut rester avec toi jusqu'à ce que tu t'endormes, et il sera là quand tu te réveilleras. Demande au personnel comment ça se passe dans ton hôpital.",
    q4: "Et si j'ai peur ?",
    a4: "C'est tout à fait normal. Dis-le au personnel ou à l'adulte qui t'accompagne — ils peuvent te tenir la main, apporter ton jouet, ou faire la respiration du ballon avec toi.",
    q5: "Est-ce que je vais me sentir mal après ?",
    a5: "Certains enfants se sentent un peu fatigués, un peu étourdis, ou ont un peu mal à la gorge pendant un petit moment. Ça passe, et le personnel peut t'aider à te sentir mieux.",
    q6: "Combien de temps ça dure ?",
    a6: "Chaque opération est différente. Ton médecin du sommeil ou l'infirmière peut te dire à peu près combien de temps durera la tienne. Pour toi, ce sera comme si tu avais fermé les yeux et que tu t'étais réveillé tout de suite.",
    parents_eyebrow: "Pour les parents et les accompagnants",
    parents_title: "Aider votre enfant à se sentir préparé",
    parents_intro: "Les enfants s'adaptent bien mieux lorsqu'ils savent à quoi s'attendre, avec des mots qu'ils comprennent. Voici des façons de soutenir votre enfant avant une anesthésie et une opération.",
    tip1: "Soyez honnête et simple. Expliquez qu'un médecin spécial l'aidera à dormir d'un sommeil profond pour que l'opération ne fasse pas mal, et qu'il se réveillera ensuite.",
    tip2: "Utilisez des mots calmes et rassurants. « Sommeil spécial » et « médicament pour dormir » sont plus rassurants que des expressions effrayantes.",
    tip3: "Autorisez un objet réconfortant. Un jouet préféré, une couverture ou une tétine peuvent faire une grande différence.",
    tip4: "Entraînez-vous ensemble. Lire ce site ensemble ou essayer la respiration du ballon à l'avance renforce la confiance.",
    tip5: "Suivez précisément les consignes de votre hôpital — surtout concernant le jeûne (quand votre enfant doit arrêter de manger et de boire). Ces horaires assurent la sécurité de votre enfant et sont fixés par votre équipe médicale.",
    tip6: "Posez des questions. Notez tout ce dont vous n'êtes pas sûr et demandez à l'anesthésiste ou au personnel soignant — aucune question n'est trop petite.",
    note_title: "Important",
    note_text: "Ce site fournit des informations générales et bienveillantes pour aider à préparer les enfants. Il ne constitue pas un avis médical. Suivez toujours les instructions spécifiques données par votre propre hôpital et votre équipe médicale, et contactez-les en cas de doute.",
    footer_made: "Fait avec soin pour aider les enfants à se sentir calmes et rassurés.",
    footer_disclaimer: "Ne remplace pas un avis médical professionnel.",
    nav_home: "Accueil", nav_story: "Le film", nav_coloring: "Coloriages",
    hero_story: "Regarder l'histoire de Nuni",
    coloring_title: "Les coloriages de Nuni",
    coloring_intro: "Choisis une page, imprime-la et colorie ! Une jolie façon de se détendre et de faire connaissance avec Nuni avant la visite à l'hôpital.",
    coloring_print: "Imprimer toutes les pages",
    color_nuni: "Nuni l'étoile", color_balloon: "Le ballon de la respiration", color_bed: "Le lit d'hôpital",
    color_juice: "Un verre d'eau", color_mask: "Le masque magique", color_nurse: "L'infirmier gentil",
    color_machine: "La machine d'anesthésie",
    coloring_hint: "Appuie sur une image pour l'imprimer toute seule.",
    story_title: "La journée de Nuni à l'hôpital",
    story_sub: "Un court film sans paroles — parfait aussi pour les petits qui ne lisent pas encore.",
    story_replay: "Revoir",
    story_play_pause: "Lire ou mettre en pause",
    story_scene: "Scène",
    story_music: "Musique",
    story_narration: "Narration",
    story_narrate_title: "Lire l'histoire à voix haute",
    nav_equipment: "Le matériel",
    equip_title: "Découvre le matériel",
    equip_intro: "Touche chaque objet pour entendre son petit nom et ce qu'il fait. Rien de tout ça ne fait mal !",
    gear_hint: "Touche pour découvrir",
    gear_mask_name: "Le masque tout doux",
    gear_mask_desc: "Tu respires à travers comme dans un petit nuage tout doux. Il peut sentir la fraise ou le chewing-gum.",
    gear_oximeter_name: "La petite lumière au doigt",
    gear_oximeter_desc: "Elle serre le bout de ton doigt avec une douce lumière rouge et compte les battements de ton cœur. Ça ne fait pas mal du tout — ça chatouille juste un peu.",
    gear_cuff_name: "Le câlin du bras",
    gear_cuff_desc: "Il serre ton bras tout doucement, comme un petit câlin, puis il relâche.",
    gear_steth_name: "Les oreilles qui écoutent",
    gear_steth_desc: "Le médecin s'en sert pour écouter ton cœur faire boum-boum. Ça peut être un peu frais.",
    gear_band_name: "Le bracelet à ton nom",
    gear_band_desc: "Un bracelet tout doux avec ton nom, pour que tout le monde à l'hôpital sache que c'est toi.",
    gear_cream_name: "La crème magique",
    gear_cream_desc: "Une petite crème qui endort un endroit sur ta main, pour que tu n'y sentes presque rien.",
    gender_note: "Le site est rédigé au masculin pour faciliter la lecture et s'adresse à tous les enfants de la même façon."
  }
};

/* Audience chooser and tailored home-page introductions. Kept together so the
   four experiences stay easy to compare across every supported language. */
const AUDIENCE_I18N = {
  he: {
    audience_change: "שינוי קבוצת גיל",
    audience_eyebrow: "המקום הנכון בשבילכם",
    audience_title: "למי נוני עוזר היום?",
    audience_intro: "בחרו גיל כדי לקבל הסברים ומראה שמתאימים בדיוק לכם.",
    audience_little: "גילאי 0 עד 6", audience_little_short: "גילאי 0 עד 6",
    audience_little_desc: "סיפור עדין, תמונות ומשחק",
    audience_kids: "גילאי 7 עד 12", audience_kids_short: "גילאי 7 עד 12",
    audience_kids_desc: "לגלות מה קורה, צעד אחר צעד",
    audience_teen: "גילאי 13 עד 18", audience_teen_short: "גילאי 13 עד 18",
    audience_teen_desc: "מידע ברור, ישיר ובגובה העיניים",
    audience_parents: "הורים ומטפלים", audience_parents_short: "להורים",
    audience_parents_desc: "כלים מעשיים להכנה ולתמיכה",
    audience_little_hero_eyebrow: "גילאי 0 עד 6 • אפשר לגלות יחד",
    audience_little_hero_title: "נוני כאן כדי להראות שהכול יהיה בסדר.",
    audience_little_hero_subtitle: "בעזרת סיפור, תמונות ומשחק נכיר את בית החולים ואת השינה המיוחדת — לאט וביחד.",
    audience_kids_hero_eyebrow: "גילאי 7 עד 12 • המסע שלך",
    audience_kids_hero_title: "כשיודעים מה יקרה, מרגישים מוכנים יותר.",
    audience_kids_hero_subtitle: "נוני יסביר מה קורה לפני הניתוח, בזמן ההרדמה ואחרי שמתעוררים — שלב אחרי שלב.",
    audience_teen_hero_eyebrow: "גילאי 13 עד 18 • בלי ניחושים",
    audience_teen_hero_title: "מידע ברור על ההרדמה והניתוח שלך.",
    audience_teen_hero_subtitle: "מה צפוי, מה אולי תרגישו ואילו שאלות כדאי לשאול. מידע ישיר שיעזור להגיע מוכנים יותר.",
    audience_parents_hero_eyebrow: "להורים ולמטפלים",
    audience_parents_hero_title: "לעזור לילד להגיע רגוע ומוכן יותר.",
    audience_parents_hero_subtitle: "הסברים מותאמי גיל, כלים לשיחה ורעיונות מעשיים לקראת הרדמה וניתוח.",
    audience_parent_cta: "לכלים להורים",
    nav_quiz: "חידון", audience_hub_aria: "תוכן מותאם לגיל",
    little_hub_eyebrow: "בואו נכיר יחד", little_hub_title: "לראות, לשחק ולהרגיש מוכנים",
    little_hub_intro: "לקטנטנים הכי קל להתכונן דרך תמונות, משחק וסיפור קצר יחד עם מבוגר.",
    little_path1_title: "הסיפור של נוני", little_path1_text: "סרטון קצר בלי צורך לקרוא",
    little_path2_title: "מכירים את הציוד", little_path2_text: "נוגעים ומגלים מה כל דבר עושה",
    little_path3_title: "צובעים עם נוני", little_path3_text: "דפים רגועים להדפסה ולצביעה",
    little_guidance: "למבוגר שמלווה: השתמשו במשפטים קצרים, תנו לילד לבחור במה להתחיל וחזרו על הסיפור כמה פעמים שירצה.",
    kids_hub_eyebrow: "המסע שלך", kids_hub_title: "לגלות מה יקרה ולהיות חלק מההכנה",
    kids_hub_intro: "אפשר להכיר את השלבים, לבדוק את הידע ולבחור מה יעזור לך להרגיש רגוע יותר.",
    kids_path1_title: "המסע לבית החולים", kids_path1_text: "כל מה שקורה, שלב אחר שלב",
    kids_path2_title: "חוקרים את הציוד", kids_path2_text: "מסכה, מדדים וצמיד זיהוי",
    kids_path3_title: "חידון ההרדמה", kids_path3_text: "עשר שאלות עם תשובה במקום",
    kids_guidance: "אפשר לשאול את הצוות כל שאלה ולספר מה מדאיג אותך. יחד תוכלו לבחור דרך הרגעה שמתאימה לך.",
    teen_hub_eyebrow: "ישר ולעניין", teen_hub_title: "מה באמת קורה ואיפה יש לך בחירה",
    teen_hub_intro: "מידע ישיר על ההרדמה, ההכנה וההתאוששות — בלי פעילויות שמיועדות לילדים קטנים.",
    teen_path1_title: "להבין את ההרדמה", teen_path1_text: "מה התרופות עושות ואיך משגיחים עליך",
    teen_path2_title: "לדעת למה לצפות", teen_path2_text: "קבלה, הכנה, הרדמה והתאוששות",
    teen_path3_title: "לבדוק את עצמך", teen_path3_text: "חידון קצר עם הסבר לכל תשובה",
    teen_guidance: "ההעדפות שלך חשובות. אפשר לומר לצוות אם מחטים, מסכה, בחילה, פרטיות או חוסר ודאות מטרידים אותך ולשאול אילו אפשרויות מתאימות ובטוחות עבורך.",
    parents_hub_eyebrow: "הכנה מעשית", parents_hub_title: "מה לומר, מה להביא ומה לשאול",
    parents_hub_intro: "כלים פשוטים שיעזרו לכם להכין את הילד בהתאם לגיל ולתמוך בו ביום הניתוח.",
    parents_path1_title: "איך לדבר על הניתוח", parents_path1_text: "כנות, תזמון ומילים מותאמות לגיל",
    parents_path2_title: "לעבור על היום מראש", parents_path2_text: "מהבית ועד חדר ההתאוששות",
    parents_path3_title: "להכין שאלות לצוות", parents_path3_text: "צום, תרופות, כאב וההתאוששות",
    parents_guidance: "הוראות בית החולים שלכם תמיד קודמות למידע כללי באתר, במיוחד בנוגע לצום, שתייה ותרופות קבועות.",
    quiz_eyebrow: "עכשיו תורך", quiz_title: "חידון ההרדמה",
    quiz_intro: "עשר שאלות קצרות על ההכנה, ההרדמה וההתאוששות. אחרי כל תשובה יופיע הסבר.",
    quiz_progress_aria: "התקדמות בחידון", quiz_options_aria: "אפשרויות תשובה",
    quiz_question_count: "שאלה {current} מתוך {total}", quiz_correct: "נכון!", quiz_incorrect: "לא בדיוק.",
    quiz_next: "לשאלה הבאה", quiz_finish: "לתוצאה", quiz_result_title: "סיימת את החידון!",
    quiz_score: "ענית נכון על {score} מתוך {total}", quiz_result_high: "מעולה — הגעת מוכן ועם ידע חשוב.",
    quiz_result_mid: "יפה מאוד — עכשיו ברור לך הרבה יותר מה צפוי.", quiz_result_low: "התחלה טובה — אפשר לעבור שוב על המסע ולנסות מחדש.",
    quiz_restart: "לנסות שוב", quiz_safety: "חשוב: תמיד פועלים לפי הוראות בית החולים שלכם, במיוחד לגבי אוכל, שתייה ותרופות."
  },
  en: {
    audience_change: "Change age group",
    audience_eyebrow: "The right space for you",
    audience_title: "Who is Nuni helping today?",
    audience_intro: "Choose an age group for explanations and a look made to fit.",
    audience_little: "Ages 0–6", audience_little_short: "Ages 0–6",
    audience_little_desc: "A gentle story, pictures and play",
    audience_kids: "Ages 7–12", audience_kids_short: "Ages 7–12",
    audience_kids_desc: "See what happens, step by step",
    audience_teen: "Ages 13–18", audience_teen_short: "Ages 13–18",
    audience_teen_desc: "Clear, direct, age-appropriate information",
    audience_parents: "Parents & caregivers", audience_parents_short: "Parents",
    audience_parents_desc: "Practical tools to prepare and support",
    audience_little_hero_eyebrow: "Ages 0–6 • Explore together",
    audience_little_hero_title: "Nuni is here to show you it will be okay.",
    audience_little_hero_subtitle: "With a story, pictures and play, we’ll meet the hospital and learn about special sleep — gently, together.",
    audience_kids_hero_eyebrow: "Ages 7–12 • Your journey",
    audience_kids_hero_title: "Knowing what will happen can help you feel ready.",
    audience_kids_hero_subtitle: "Nuni explains what happens before the operation, during anesthesia and after you wake up — one step at a time.",
    audience_teen_hero_eyebrow: "Ages 13–18 • No guesswork",
    audience_teen_hero_title: "Clear information about your anesthesia and operation.",
    audience_teen_hero_subtitle: "What to expect, what you might feel and what to ask. Straightforward information to help you arrive prepared.",
    audience_parents_hero_eyebrow: "For parents & caregivers",
    audience_parents_hero_title: "Help your child arrive calmer and better prepared.",
    audience_parents_hero_subtitle: "Age-appropriate explanations, conversation tools and practical ideas for anesthesia and surgery.",
    audience_parent_cta: "Parent resources",
    nav_quiz: "Quiz", audience_hub_aria: "Age-tailored content",
    little_hub_eyebrow: "Explore together", little_hub_title: "Watch, play and feel prepared",
    little_hub_intro: "Pictures, play and a short story shared with a grown-up make preparation easier for little ones.",
    little_path1_title: "Nuni’s story", little_path1_text: "A short film with no reading needed",
    little_path2_title: "Meet the equipment", little_path2_text: "Tap and discover what everything does",
    little_path3_title: "Color with Nuni", little_path3_text: "Calm printable coloring pages",
    little_guidance: "For the grown-up: use short sentences, let the child choose where to begin and replay the story as often as they like.",
    kids_hub_eyebrow: "Your journey", kids_hub_title: "Find out what happens and take part",
    kids_hub_intro: "Explore the steps, test your knowledge and choose what could help you feel calmer.",
    kids_path1_title: "The hospital journey", kids_path1_text: "Everything that happens, step by step",
    kids_path2_title: "Explore the equipment", kids_path2_text: "Mask, monitors and identity band",
    kids_path3_title: "Anesthesia quiz", kids_path3_text: "Ten questions with instant answers",
    kids_guidance: "You can ask the staff anything and tell them what worries you. Together you can choose a calming strategy that fits you.",
    teen_hub_eyebrow: "Straight to the point", teen_hub_title: "What really happens and where you have choices",
    teen_hub_intro: "Direct information about anesthesia, preparation and recovery — without activities designed for younger children.",
    teen_path1_title: "Understand anesthesia", teen_path1_text: "What the medicines do and how you are monitored",
    teen_path2_title: "Know what to expect", teen_path2_text: "Check-in, preparation, anesthesia and recovery",
    teen_path3_title: "Test yourself", teen_path3_text: "A short quiz with an explanation for every answer",
    teen_guidance: "Your preferences matter. Tell the staff if needles, masks, nausea, privacy or uncertainty concern you, and ask which options are safe and suitable for you.",
    parents_hub_eyebrow: "Practical preparation", parents_hub_title: "What to say, bring and ask",
    parents_hub_intro: "Simple tools to prepare your child in an age-appropriate way and support them on the day of surgery.",
    parents_path1_title: "How to talk about surgery", parents_path1_text: "Honesty, timing and age-appropriate words",
    parents_path2_title: "Preview the day", parents_path2_text: "From home to the recovery room",
    parents_path3_title: "Prepare questions", parents_path3_text: "Fasting, medicines, pain and recovery",
    parents_guidance: "Your hospital’s instructions always come before general website information, especially for fasting, drinking and regular medicines.",
    quiz_eyebrow: "Your turn", quiz_title: "The anesthesia quiz",
    quiz_intro: "Ten quick questions about preparation, anesthesia and recovery. You’ll get an explanation after every answer.",
    quiz_progress_aria: "Quiz progress", quiz_options_aria: "Answer options",
    quiz_question_count: "Question {current} of {total}", quiz_correct: "Correct!", quiz_incorrect: "Not quite.",
    quiz_next: "Next question", quiz_finish: "See my result", quiz_result_title: "You finished the quiz!",
    quiz_score: "You answered {score} out of {total} correctly", quiz_result_high: "Excellent — you’re arriving prepared with useful knowledge.",
    quiz_result_mid: "Nice work — you now know much more about what to expect.", quiz_result_low: "A good start — review the journey and try again when you’re ready.",
    quiz_restart: "Try again", quiz_safety: "Important: always follow your hospital’s instructions, especially about food, drinks and medicines."
  },
  ar: {
    audience_change: "تغيير الفئة العمرية",
    audience_eyebrow: "المكان المناسب لكم",
    audience_title: "من يساعد نوني اليوم؟",
    audience_intro: "اختاروا الفئة العمرية لتحصلوا على شرح وتصميم مناسبين لكم.",
    audience_little: "من 0 إلى 6 سنوات", audience_little_short: "من 0 إلى 6",
    audience_little_desc: "قصة لطيفة وصور ولعب",
    audience_kids: "من 7 إلى 12 سنة", audience_kids_short: "من 7 إلى 12",
    audience_kids_desc: "اكتشفوا ما سيحدث خطوة بخطوة",
    audience_teen: "من 13 إلى 18 سنة", audience_teen_short: "من 13 إلى 18",
    audience_teen_desc: "معلومات واضحة ومباشرة ومناسبة للعمر",
    audience_parents: "الأهل ومقدّمو الرعاية", audience_parents_short: "للأهل",
    audience_parents_desc: "أدوات عملية للاستعداد والدعم",
    audience_little_hero_eyebrow: "من 0 إلى 6 سنوات • نكتشف معًا",
    audience_little_hero_title: "نوني هنا ليُريك أن كل شيء سيكون بخير.",
    audience_little_hero_subtitle: "بالقصة والصور واللعب سنتعرّف معًا وبلطف إلى المستشفى والنوم الخاص.",
    audience_kids_hero_eyebrow: "من 7 إلى 12 سنة • رحلتك",
    audience_kids_hero_title: "عندما تعرف ما سيحدث، تشعر بأنك أكثر استعدادًا.",
    audience_kids_hero_subtitle: "يشرح نوني ما يحدث قبل العملية وأثناء التخدير وبعد الاستيقاظ — خطوة بخطوة.",
    audience_teen_hero_eyebrow: "من 13 إلى 18 سنة • بلا تخمين",
    audience_teen_hero_title: "معلومات واضحة عن التخدير والعملية.",
    audience_teen_hero_subtitle: "ما الذي سيحدث، وما قد تشعر به، وما الأسئلة التي يمكنك طرحها. معلومات مباشرة تساعدك على الاستعداد.",
    audience_parents_hero_eyebrow: "للأهل ومقدّمي الرعاية",
    audience_parents_hero_title: "ساعدوا طفلكم على الوصول بهدوء واستعداد أكبر.",
    audience_parents_hero_subtitle: "شرح مناسب للعمر وأدوات للحوار وأفكار عملية قبل التخدير والعملية.",
    audience_parent_cta: "أدوات للأهل",
    nav_quiz: "اختبار", audience_hub_aria: "محتوى مناسب للعمر",
    little_hub_eyebrow: "لنكتشف معًا", little_hub_title: "نشاهد ونلعب ونستعد",
    little_hub_intro: "تساعد الصور واللعب والقصة القصيرة مع أحد الكبار الصغار على الاستعداد بسهولة.",
    little_path1_title: "قصة نوني", little_path1_text: "فيلم قصير لا يحتاج إلى قراءة",
    little_path2_title: "نتعرّف إلى المعدات", little_path2_text: "المس واكتشف وظيفة كل شيء",
    little_path3_title: "نلوّن مع نوني", little_path3_text: "صفحات تلوين هادئة للطباعة",
    little_guidance: "للكبير المرافق: استخدموا جملاً قصيرة، ودعوا الطفل يختار من أين يبدأ، وكرّروا القصة بقدر ما يريد.",
    kids_hub_eyebrow: "رحلتك", kids_hub_title: "اكتشف ما سيحدث وشارك في الاستعداد",
    kids_hub_intro: "تعرّف إلى المراحل، واختبر معلوماتك، واختر ما قد يساعدك على الشعور بهدوء أكبر.",
    kids_path1_title: "الرحلة إلى المستشفى", kids_path1_text: "كل ما سيحدث خطوة بخطوة",
    kids_path2_title: "استكشف المعدات", kids_path2_text: "القناع وأجهزة المراقبة وسوار الهوية",
    kids_path3_title: "اختبار التخدير", kids_path3_text: "عشرة أسئلة مع إجابات فورية",
    kids_guidance: "يمكنك سؤال الطاقم عن أي شيء وإخبارهم بما يقلقك. ويمكنكم معًا اختيار طريقة تهدئة تناسبك.",
    teen_hub_eyebrow: "بوضوح ومباشرة", teen_hub_title: "ما الذي يحدث فعلًا وأين يمكنك الاختيار",
    teen_hub_intro: "معلومات مباشرة عن التخدير والاستعداد والتعافي — من دون أنشطة مخصّصة للأطفال الأصغر.",
    teen_path1_title: "افهم التخدير", teen_path1_text: "ما الذي تفعله الأدوية وكيف تتم مراقبتك",
    teen_path2_title: "اعرف ما تتوقعه", teen_path2_text: "الاستقبال والاستعداد والتخدير والتعافي",
    teen_path3_title: "اختبر معلوماتك", teen_path3_text: "اختبار قصير مع شرح لكل إجابة",
    teen_guidance: "تفضيلاتك مهمة. أخبر الطاقم إذا كانت الإبر أو القناع أو الغثيان أو الخصوصية أو عدم اليقين تقلقك، واسأل عن الخيارات الآمنة والمناسبة لك.",
    parents_hub_eyebrow: "استعداد عملي", parents_hub_title: "ماذا تقولون وتحضرون وتسألون",
    parents_hub_intro: "أدوات بسيطة لإعداد طفلكم بما يناسب عمره ودعمه يوم العملية.",
    parents_path1_title: "كيف نتحدث عن العملية", parents_path1_text: "الصدق والتوقيت وكلمات تناسب العمر",
    parents_path2_title: "استعرضوا اليوم مسبقًا", parents_path2_text: "من المنزل إلى غرفة التعافي",
    parents_path3_title: "حضّروا أسئلتكم", parents_path3_text: "الصيام والأدوية والألم والتعافي",
    parents_guidance: "تعليمات مستشفاكم تسبق دائمًا المعلومات العامة في الموقع، خاصة بشأن الصيام والشرب والأدوية المعتادة.",
    quiz_eyebrow: "دورك الآن", quiz_title: "اختبار التخدير",
    quiz_intro: "عشرة أسئلة قصيرة عن الاستعداد والتخدير والتعافي. سيظهر شرح بعد كل إجابة.",
    quiz_progress_aria: "التقدم في الاختبار", quiz_options_aria: "خيارات الإجابة",
    quiz_question_count: "السؤال {current} من {total}", quiz_correct: "صحيح!", quiz_incorrect: "ليس تمامًا.",
    quiz_next: "السؤال التالي", quiz_finish: "عرض النتيجة", quiz_result_title: "أنهيت الاختبار!",
    quiz_score: "أجبت بشكل صحيح عن {score} من {total}", quiz_result_high: "ممتاز — لديك معلومات مهمة تساعدك على الاستعداد.",
    quiz_result_mid: "عمل رائع — أصبحت تعرف أكثر بكثير عما سيحدث.", quiz_result_low: "بداية جيدة — راجع الرحلة وحاول مرة أخرى عندما تكون مستعدًا.",
    quiz_restart: "حاول مرة أخرى", quiz_safety: "مهم: اتبع دائمًا تعليمات مستشفاك، خاصة بشأن الطعام والشراب والأدوية."
  },
  ru: {
    audience_change: "Изменить возрастную группу",
    audience_eyebrow: "Подходящий раздел для вас",
    audience_title: "Кому Нуни помогает сегодня?",
    audience_intro: "Выберите возрастную группу — оформление и объяснения подстроятся под вас.",
    audience_little: "0–6 лет", audience_little_short: "0–6 лет",
    audience_little_desc: "Добрая история, картинки и игра",
    audience_kids: "7–12 лет", audience_kids_short: "7–12 лет",
    audience_kids_desc: "Узнать, что будет, шаг за шагом",
    audience_teen: "13–18 лет", audience_teen_short: "13–18 лет",
    audience_teen_desc: "Понятная и прямая информация по возрасту",
    audience_parents: "Родители и близкие", audience_parents_short: "Родителям",
    audience_parents_desc: "Практические способы подготовки и поддержки",
    audience_little_hero_eyebrow: "0–6 лет • Узнаём вместе",
    audience_little_hero_title: "Нуни покажет, что всё будет хорошо.",
    audience_little_hero_subtitle: "С помощью истории, картинок и игры мы вместе и без спешки познакомимся с больницей и особым сном.",
    audience_kids_hero_eyebrow: "7–12 лет • Твой путь",
    audience_kids_hero_title: "Когда знаешь, что будет, легче подготовиться.",
    audience_kids_hero_subtitle: "Нуни объяснит, что происходит до операции, во время анестезии и после пробуждения — шаг за шагом.",
    audience_teen_hero_eyebrow: "13–18 лет • Без догадок",
    audience_teen_hero_title: "Понятно об анестезии и предстоящей операции.",
    audience_teen_hero_subtitle: "Чего ожидать, что вы можете почувствовать и о чём стоит спросить. Прямые ответы помогут подготовиться.",
    audience_parents_hero_eyebrow: "Для родителей и близких",
    audience_parents_hero_title: "Помогите ребёнку прийти спокойнее и подготовленнее.",
    audience_parents_hero_subtitle: "Объяснения по возрасту, подсказки для разговора и практические идеи перед анестезией и операцией.",
    audience_parent_cta: "Материалы для родителей",
    nav_quiz: "Тест", audience_hub_aria: "Материалы по возрасту",
    little_hub_eyebrow: "Узнаём вместе", little_hub_title: "Смотреть, играть и готовиться",
    little_hub_intro: "Малышам легче подготовиться с помощью картинок, игры и короткой истории вместе со взрослым.",
    little_path1_title: "История Нуни", little_path1_text: "Короткий фильм, который не нужно читать",
    little_path2_title: "Знакомство с оборудованием", little_path2_text: "Нажимай и узнавай, для чего всё нужно",
    little_path3_title: "Раскраски с Нуни", little_path3_text: "Спокойные раскраски для печати",
    little_guidance: "Взрослому: говорите короткими фразами, позвольте ребёнку выбрать, с чего начать, и повторяйте историю столько раз, сколько он захочет.",
    kids_hub_eyebrow: "Твой путь", kids_hub_title: "Узнай, что будет, и участвуй в подготовке",
    kids_hub_intro: "Изучи этапы, проверь свои знания и выбери, что поможет тебе чувствовать себя спокойнее.",
    kids_path1_title: "Путь в больнице", kids_path1_text: "Всё, что произойдёт, шаг за шагом",
    kids_path2_title: "Исследуй оборудование", kids_path2_text: "Маска, мониторы и браслет с именем",
    kids_path3_title: "Тест об анестезии", kids_path3_text: "Десять вопросов с мгновенными ответами",
    kids_guidance: "Ты можешь задать персоналу любой вопрос и рассказать, что тебя беспокоит. Вместе вы выберете подходящий способ успокоиться.",
    teen_hub_eyebrow: "Прямо и по делу", teen_hub_title: "Что происходит на самом деле и где есть выбор",
    teen_hub_intro: "Прямая информация об анестезии, подготовке и восстановлении — без занятий для маленьких детей.",
    teen_path1_title: "Разобраться в анестезии", teen_path1_text: "Как действуют лекарства и как за тобой наблюдают",
    teen_path2_title: "Знать, чего ожидать", teen_path2_text: "Приём, подготовка, анестезия и восстановление",
    teen_path3_title: "Проверить себя", teen_path3_text: "Короткий тест с объяснением каждого ответа",
    teen_guidance: "Твои предпочтения важны. Скажи персоналу, если тебя беспокоят иглы, маска, тошнота, приватность или неизвестность, и спроси, какие варианты безопасны и подходят тебе.",
    parents_hub_eyebrow: "Практическая подготовка", parents_hub_title: "Что сказать, взять и спросить",
    parents_hub_intro: "Простые инструменты, чтобы подготовить ребёнка с учётом возраста и поддержать его в день операции.",
    parents_path1_title: "Как говорить об операции", parents_path1_text: "Честность, время и понятные по возрасту слова",
    parents_path2_title: "Заранее пройти весь день", parents_path2_text: "От дома до палаты пробуждения",
    parents_path3_title: "Подготовить вопросы", parents_path3_text: "Голодание, лекарства, боль и восстановление",
    parents_guidance: "Инструкции вашей больницы всегда важнее общей информации на сайте, особенно о голодании, питье и постоянных лекарствах.",
    quiz_eyebrow: "Теперь твоя очередь", quiz_title: "Тест об анестезии",
    quiz_intro: "Десять коротких вопросов о подготовке, анестезии и восстановлении. После каждого ответа появится объяснение.",
    quiz_progress_aria: "Прогресс теста", quiz_options_aria: "Варианты ответа",
    quiz_question_count: "Вопрос {current} из {total}", quiz_correct: "Верно!", quiz_incorrect: "Не совсем.",
    quiz_next: "Следующий вопрос", quiz_finish: "Узнать результат", quiz_result_title: "Тест завершён!",
    quiz_score: "Правильных ответов: {score} из {total}", quiz_result_high: "Отлично — у тебя есть важные знания для подготовки.",
    quiz_result_mid: "Хорошая работа — теперь ты гораздо лучше знаешь, чего ожидать.", quiz_result_low: "Хорошее начало — перечитай этапы и попробуй ещё раз.",
    quiz_restart: "Попробовать снова", quiz_safety: "Важно: всегда следуйте инструкциям вашей больницы, особенно о еде, питье и лекарствах."
  },
  fr: {
    audience_change: "Changer de groupe d’âge",
    audience_eyebrow: "L’espace qui vous correspond",
    audience_title: "Qui Nuni accompagne-t-il aujourd’hui ?",
    audience_intro: "Choisissez un âge pour adapter les explications et l’univers visuel.",
    audience_little: "0–6 ans", audience_little_short: "0–6 ans",
    audience_little_desc: "Une histoire douce, des images et du jeu",
    audience_kids: "7–12 ans", audience_kids_short: "7–12 ans",
    audience_kids_desc: "Découvrir chaque étape de l’aventure",
    audience_teen: "13–18 ans", audience_teen_short: "13–18 ans",
    audience_teen_desc: "Des informations claires, directes et adaptées",
    audience_parents: "Parents et accompagnants", audience_parents_short: "Parents",
    audience_parents_desc: "Des outils concrets pour préparer et soutenir",
    audience_little_hero_eyebrow: "0–6 ans • Découvrons ensemble",
    audience_little_hero_title: "Nuni est là pour te montrer que tout ira bien.",
    audience_little_hero_subtitle: "Avec une histoire, des images et du jeu, découvrons doucement l’hôpital et le sommeil spécial.",
    audience_kids_hero_eyebrow: "7–12 ans • Ton parcours",
    audience_kids_hero_title: "Savoir ce qui va se passer aide à se sentir prêt.",
    audience_kids_hero_subtitle: "Nuni explique ce qui se passe avant l’opération, pendant l’anesthésie et au réveil — étape par étape.",
    audience_teen_hero_eyebrow: "13–18 ans • Sans zone floue",
    audience_teen_hero_title: "Des informations claires sur ton anesthésie et ton opération.",
    audience_teen_hero_subtitle: "Ce qui va se passer, ce que tu pourrais ressentir et les questions à poser. Des réponses directes pour arriver mieux préparé.",
    audience_parents_hero_eyebrow: "Pour les parents et les accompagnants",
    audience_parents_hero_title: "Aidez votre enfant à arriver plus calme et mieux préparé.",
    audience_parents_hero_subtitle: "Des explications selon l’âge, des outils de dialogue et des idées concrètes avant l’anesthésie et l’opération.",
    audience_parent_cta: "Ressources pour les parents",
    nav_quiz: "Quiz", audience_hub_aria: "Contenu adapté à l’âge",
    little_hub_eyebrow: "Découvrons ensemble", little_hub_title: "Regarder, jouer et se préparer",
    little_hub_intro: "Les images, le jeu et une courte histoire partagée avec un adulte aident les petits à se préparer.",
    little_path1_title: "L’histoire de Nuni", little_path1_text: "Un petit film sans lecture nécessaire",
    little_path2_title: "Découvrir le matériel", little_path2_text: "Touche et découvre à quoi sert chaque objet",
    little_path3_title: "Colorier avec Nuni", little_path3_text: "Des coloriages calmes à imprimer",
    little_guidance: "Pour l’adulte : utilisez des phrases courtes, laissez l’enfant choisir par où commencer et rejouez l’histoire autant de fois qu’il le souhaite.",
    kids_hub_eyebrow: "Ton parcours", kids_hub_title: "Découvre ce qui va se passer et participe",
    kids_hub_intro: "Explore les étapes, teste tes connaissances et choisis ce qui pourrait t’aider à te sentir plus calme.",
    kids_path1_title: "Le parcours à l’hôpital", kids_path1_text: "Tout ce qui se passe, étape par étape",
    kids_path2_title: "Explorer le matériel", kids_path2_text: "Masque, moniteurs et bracelet d’identité",
    kids_path3_title: "Quiz sur l’anesthésie", kids_path3_text: "Dix questions avec des réponses immédiates",
    kids_guidance: "Tu peux tout demander au personnel et lui dire ce qui t’inquiète. Ensemble, vous pouvez choisir une méthode pour t’apaiser.",
    teen_hub_eyebrow: "Clair et direct", teen_hub_title: "Ce qui se passe vraiment et les choix possibles",
    teen_hub_intro: "Des informations directes sur l’anesthésie, la préparation et le réveil — sans activités destinées aux petits.",
    teen_path1_title: "Comprendre l’anesthésie", teen_path1_text: "L’action des médicaments et la surveillance",
    teen_path2_title: "Savoir à quoi s’attendre", teen_path2_text: "Accueil, préparation, anesthésie et réveil",
    teen_path3_title: "Tester tes connaissances", teen_path3_text: "Un quiz court avec une explication par réponse",
    teen_guidance: "Tes préférences comptent. Dis au personnel si les aiguilles, le masque, les nausées, l’intimité ou l’incertitude t’inquiètent, et demande quelles options sont sûres et adaptées.",
    parents_hub_eyebrow: "Préparation pratique", parents_hub_title: "Quoi dire, apporter et demander",
    parents_hub_intro: "Des outils simples pour préparer votre enfant selon son âge et le soutenir le jour de l’opération.",
    parents_path1_title: "Parler de l’opération", parents_path1_text: "Honnêteté, bon moment et mots adaptés à l’âge",
    parents_path2_title: "Prévoir le déroulement", parents_path2_text: "De la maison à la salle de réveil",
    parents_path3_title: "Préparer vos questions", parents_path3_text: "Jeûne, médicaments, douleur et réveil",
    parents_guidance: "Les consignes de votre hôpital passent toujours avant les informations générales du site, surtout pour le jeûne, les boissons et les traitements habituels.",
    quiz_eyebrow: "À toi de jouer", quiz_title: "Le quiz de l’anesthésie",
    quiz_intro: "Dix questions rapides sur la préparation, l’anesthésie et le réveil. Une explication apparaît après chaque réponse.",
    quiz_progress_aria: "Progression du quiz", quiz_options_aria: "Choix de réponse",
    quiz_question_count: "Question {current} sur {total}", quiz_correct: "Bonne réponse !", quiz_incorrect: "Pas tout à fait.",
    quiz_next: "Question suivante", quiz_finish: "Voir mon résultat", quiz_result_title: "Quiz terminé !",
    quiz_score: "Tu as {score} bonnes réponses sur {total}", quiz_result_high: "Excellent — tu arrives préparé avec des connaissances utiles.",
    quiz_result_mid: "Bravo — tu sais maintenant beaucoup mieux à quoi t’attendre.", quiz_result_low: "Bon début — relis le parcours et réessaie quand tu veux.",
    quiz_restart: "Recommencer", quiz_safety: "Important : suivez toujours les consignes de votre hôpital, surtout pour les aliments, les boissons et les médicaments."
  }
};

/* The ten questions are adapted from the supplied Hebrew quiz document. */
const QUIZ_I18N = {
  he: [
    { q: "למה חשוב לא לאכול ולשתות לפני הרדמה לפי הוראות בית החולים?", choices: ["כי תרופות ההרדמה לא עובדות אחרי אוכל", "כי שכיבה אחרי אוכל תמיד גורמת לכאב בטן", "כי אוכל או שתייה עלולים לעלות מהקיבה ולהגיע לריאות"], answer: 2, explanation: "בזמן הרדמה מנגנוני ההגנה של הגוף נחלשים. קיבה ריקה מפחיתה את הסיכון שתוכן מהקיבה יגיע לריאות." },
    { q: "למה לובשים בגדים מיוחדים לפני ניתוח?", choices: ["כי הם נקיים ומתאימים לסביבת הניתוח", "כי הם תמיד הבגדים הנוחים ביותר", "כי הם יפים ואופנתיים במיוחד"], answer: 0, explanation: "בגדי בית החולים נקיים, מאפשרים לצוות לטפל בך בקלות ומתאימים לסביבת חדר הניתוח." },
    { q: "למה מכניסים לפעמים צינורית דקיקה לכלי דם ביד?", choices: ["כדי לבדוק אם ישנים טוב", "כדי לבדוק את כלי הדם", "כדי לתת נוזלים ותרופות ישירות לדם"], answer: 2, explanation: "הצינורית נקראת עירוי או קנולה. דרכה אפשר לתת נוזלים ותרופות במהירות ובבטחה." },
    { q: "למה המנתח עשוי לצייר סימן על הגוף לפני הניתוח?", choices: ["כדי שכולם ידעו מי המנתח", "כדי לסמן בדיוק את המקום הנכון לניתוח", "כדי לבחור אילו צבעים מתאימים"], answer: 1, explanation: "סימון מקום הניתוח הוא אחת מבדיקות הבטיחות שעוזרות לצוות לוודא שמטפלים במקום הנכון." },
    { q: "למה מקבלים צמיד עם שם ופרטי זיהוי?", choices: ["כדי שהצוות יוודא בכל שלב שמטפלים באדם הנכון", "כדי שידעו מתי לקנות מתנת יום הולדת", "כדי לקשט את היד"], answer: 0, explanation: "הצוות בודק את הצמיד לפני טיפולים ותרופות כדי לזהות אותך בצורה בטוחה." },
    { q: "מה אפשר לעשות אם כואב אחרי הניתוח?", choices: ["לאכול כמה שיותר", "לשתוק ולחכות שהכאב יעבור", "לספר לצוות מה מרגישים ולבקש עזרה"], answer: 2, explanation: "חשוב לספר לצוות על כאב, בחילה או כל תחושה לא נעימה. יש להם דרכים לעזור." },
    { q: "איך הרופא המרדים יודע שההרדמה מתאימה לך בזמן הניתוח?", choices: ["הוא מודד את עוצמת הנחירות", "הוא מדבר איתך ושואל מה שלומך", "הוא נמצא לידך ועוקב ברצף אחרי הנשימה, הדופק, לחץ הדם ומדדים נוספים"], answer: 2, explanation: "הרופא המרדים נשאר איתך ועוקב בעזרת מכשירים אחר תפקודי הגוף לאורך כל הניתוח." },
    { q: "למה אפשר להרגיש עייפות אחרי ניתוח למרות שישנת?", choices: ["כי המיטות בחדר ההתאוששות נוחות מאוד", "כי השפעת תרופות ההרדמה יכולה להימשך זמן מה", "כי אין לימודים ועדיף להמשיך לישון"], answer: 1, explanation: "הגוף צריך זמן להתאושש, וחלק מתרופות ההרדמה ממשיכות להשפיע לזמן קצר אחרי שמתעוררים." },
    { q: "איזה מהמשקאות עשוי להיחשב נוזל צלול, רק אם הוראות בית החולים מאפשרות אותו?", choices: ["מיץ תפוחים צלול ללא חתיכות", "מילקשייק", "חלב סויה"], answer: 0, explanation: "מיץ תפוחים צלול עשוי להיחשב נוזל צלול. חלב, משקאות חלביים ומיצים עם חתיכות אינם נוזלים צלולים. תמיד פועלים לפי הוראות בית החולים." },
    { q: "למה נמצאים כמה אנשי צוות בחדר הניתוח?", choices: ["כי משעמם להם במקום אחר", "כדי לבדוק איך מתנהגים", "כי לכל אחד יש תפקיד שעוזר לשמור על בטיחותך ולטפל בך"], answer: 2, explanation: "רופאים מרדימים, מנתחים, צוות סיעודי וטכנאים עובדים יחד, ולכל אחד תפקיד מוגדר בטיפול ובבטיחות." }
  ],
  en: [
    { q: "Why is it important to stop eating and drinking according to the hospital’s instructions before anesthesia?", choices: ["Because anesthesia medicines do not work after food", "Because lying down after eating always causes a stomachache", "Because food or drink could come back up and enter the lungs"], answer: 2, explanation: "Anesthesia weakens the body’s protective reflexes. An empty stomach reduces the risk of stomach contents entering the lungs." },
    { q: "Why do you wear special clothes before an operation?", choices: ["They are clean and suitable for the operating area", "They are always the most comfortable clothes", "They are especially fashionable"], answer: 0, explanation: "Hospital clothes are clean, make it easier for the staff to care for you and are suitable for the operating area." },
    { q: "Why is a tiny tube sometimes placed in a blood vessel in your hand?", choices: ["To check whether you are sleeping well", "To inspect the blood vessel", "To give fluids and medicines directly into the bloodstream"], answer: 2, explanation: "The tube is called an IV or cannula. It lets the team give fluids and medicines quickly and safely." },
    { q: "Why might the surgeon draw a mark on your body before the operation?", choices: ["So everyone knows who the surgeon is", "To mark the exact place for the operation", "To choose which colors suit you"], answer: 1, explanation: "Marking the operation site is one of the safety checks that helps the team treat the correct place." },
    { q: "Why do you receive a wristband with your name and identifying details?", choices: ["So the staff can confirm at every step that they are treating the right person", "So they know when to buy a birthday present", "To decorate your wrist"], answer: 0, explanation: "The staff check the wristband before treatments and medicines to identify you safely." },
    { q: "What can you do if you have pain after the operation?", choices: ["Eat as much as possible", "Stay quiet and wait for it to pass", "Tell the staff how you feel and ask for help"], answer: 2, explanation: "Tell the staff about pain, nausea or anything uncomfortable. They have ways to help." },
    { q: "How does the anesthetist know the anesthesia is right for you during the operation?", choices: ["By measuring how loudly you snore", "By talking to you and asking how you feel", "By staying with you and continuously monitoring breathing, pulse, blood pressure and other signs"], answer: 2, explanation: "The anesthetist stays with you and uses monitors to follow your body’s functions throughout the operation." },
    { q: "Why might you feel tired after an operation even though you slept?", choices: ["Because recovery-room beds are very comfortable", "Because anesthesia medicines can keep affecting you for a while", "Because there is no school and it is better to keep sleeping"], answer: 1, explanation: "Your body needs time to recover, and some anesthesia medicines continue to have an effect for a short time after you wake." },
    { q: "Which drink may count as a clear liquid only if your hospital’s instructions allow it?", choices: ["Clear apple juice without pulp", "A milkshake", "Soy milk"], answer: 0, explanation: "Clear apple juice may count as a clear liquid. Milk, milky drinks and juice with pulp do not. Always follow your hospital’s instructions." },
    { q: "Why are several staff members in the operating room?", choices: ["They are bored elsewhere", "They came to check your behavior", "Each person has a role in caring for you and keeping you safe"], answer: 2, explanation: "Anesthetists, surgeons, nursing staff and technicians work together, each with a defined role in your care and safety." }
  ],
  ar: [
    { q: "لماذا من المهم التوقف عن الأكل والشرب قبل التخدير حسب تعليمات المستشفى؟", choices: ["لأن أدوية التخدير لا تعمل بعد الطعام", "لأن الاستلقاء بعد الطعام يسبب دائمًا ألمًا في البطن", "لأن الطعام أو الشراب قد يرجع من المعدة ويصل إلى الرئتين"], answer: 2, explanation: "يضعف التخدير ردود الفعل التي تحمي الجسم. وتقلل المعدة الفارغة خطر وصول محتوياتها إلى الرئتين." },
    { q: "لماذا ترتدي ملابس خاصة قبل العملية؟", choices: ["لأنها نظيفة ومناسبة لمنطقة العمليات", "لأنها دائمًا أكثر الملابس راحة", "لأنها جميلة وعصرية جدًا"], answer: 0, explanation: "ملابس المستشفى نظيفة، وتسهّل على الطاقم رعايتك، وتناسب بيئة غرفة العمليات." },
    { q: "لماذا توضع أحيانًا أنبوبة رفيعة في وعاء دموي في اليد؟", choices: ["للتأكد من أنك تنام جيدًا", "لفحص الوعاء الدموي", "لإعطاء السوائل والأدوية مباشرة إلى الدم"], answer: 2, explanation: "تسمى الأنبوبة خطًا وريديًا أو كانيولا، وتسمح بإعطاء السوائل والأدوية بسرعة وأمان." },
    { q: "لماذا قد يرسم الجرّاح علامة على جسمك قبل العملية؟", choices: ["ليعرف الجميع من هو الجرّاح", "لتحديد المكان الصحيح للعملية بدقة", "لاختيار الألوان التي تناسبك"], answer: 1, explanation: "تحديد موضع العملية أحد فحوص الأمان التي تساعد الطاقم على علاج المكان الصحيح." },
    { q: "لماذا تحصل على سوار يحمل اسمك وبيانات التعريف؟", choices: ["ليتأكد الطاقم في كل مرحلة أنه يعالج الشخص الصحيح", "ليعرف موعد شراء هدية عيد ميلاد", "لتزيين المعصم"], answer: 0, explanation: "يفحص الطاقم السوار قبل العلاجات والأدوية للتأكد من هويتك بأمان." },
    { q: "ماذا يمكنك أن تفعل إذا شعرت بألم بعد العملية؟", choices: ["تناول أكبر قدر ممكن من الطعام", "ابق صامتًا وانتظر زوال الألم", "أخبر الطاقم بما تشعر به واطلب المساعدة"], answer: 2, explanation: "أخبر الطاقم عن الألم أو الغثيان أو أي شعور مزعج، فلديهم طرق لمساعدتك." },
    { q: "كيف يعرف طبيب التخدير أن التخدير مناسب لك أثناء العملية؟", choices: ["يقيس صوت شخيرك", "يتحدث معك ويسألك عن حالك", "يبقى معك ويراقب التنفس والنبض وضغط الدم ومؤشرات أخرى باستمرار"], answer: 2, explanation: "يبقى طبيب التخدير معك ويستخدم الأجهزة لمتابعة وظائف جسمك طوال العملية." },
    { q: "لماذا قد تشعر بالتعب بعد العملية رغم أنك نمت؟", choices: ["لأن أسرّة التعافي مريحة جدًا", "لأن تأثير أدوية التخدير قد يستمر بعض الوقت", "لأنه لا توجد مدرسة ومن الأفضل مواصلة النوم"], answer: 1, explanation: "يحتاج جسمك إلى وقت للتعافي، وقد يستمر تأثير بعض أدوية التخدير لفترة قصيرة بعد الاستيقاظ." },
    { q: "أي مشروب قد يُعد سائلًا صافيًا فقط إذا سمحت تعليمات المستشفى؟", choices: ["عصير تفاح صافٍ بلا لب", "ميلك شيك", "حليب الصويا"], answer: 0, explanation: "قد يُعد عصير التفاح الصافي سائلًا صافيًا، أما الحليب والمشروبات اللبنية والعصير المحتوي على لب فلا. اتبع دائمًا تعليمات المستشفى." },
    { q: "لماذا يوجد عدة أشخاص من الطاقم في غرفة العمليات؟", choices: ["لأنهم يشعرون بالملل في مكان آخر", "لمراقبة سلوكك", "لأن لكل شخص دورًا في رعايتك والحفاظ على سلامتك"], answer: 2, explanation: "يعمل أطباء التخدير والجرّاحون وطاقم التمريض والفنيون معًا، ولكل منهم دور محدد في رعايتك وسلامتك." }
  ],
  ru: [
    { q: "Почему перед анестезией важно не есть и не пить в соответствии с инструкциями больницы?", choices: ["Лекарства для анестезии не действуют после еды", "После еды в положении лёжа всегда болит живот", "Еда или жидкость могут подняться из желудка и попасть в лёгкие"], answer: 2, explanation: "Анестезия ослабляет защитные рефлексы организма. Пустой желудок снижает риск попадания его содержимого в лёгкие." },
    { q: "Почему перед операцией надевают специальную одежду?", choices: ["Она чистая и подходит для операционной", "Она всегда самая удобная", "Она особенно красивая и модная"], answer: 0, explanation: "Больничная одежда чистая, позволяет персоналу легче ухаживать за тобой и подходит для операционной." },
    { q: "Зачем иногда ставят тонкую трубочку в вену на руке?", choices: ["Чтобы проверить, хорошо ли ты спишь", "Чтобы осмотреть кровеносный сосуд", "Чтобы вводить жидкости и лекарства прямо в кровь"], answer: 2, explanation: "Эта трубочка называется внутривенным катетером или канюлей. Через неё можно быстро и безопасно вводить жидкости и лекарства." },
    { q: "Зачем хирург может поставить отметку на теле перед операцией?", choices: ["Чтобы все знали, кто хирург", "Чтобы точно отметить место операции", "Чтобы выбрать подходящие цвета"], answer: 1, explanation: "Отметка места операции — одна из проверок безопасности, которая помогает лечить правильный участок." },
    { q: "Зачем выдают браслет с именем и данными?", choices: ["Чтобы на каждом этапе персонал мог убедиться, что лечит нужного человека", "Чтобы знать, когда покупать подарок", "Чтобы украсить руку"], answer: 0, explanation: "Персонал проверяет браслет перед процедурами и лекарствами, чтобы безопасно подтвердить твою личность." },
    { q: "Что делать, если после операции болит?", choices: ["Есть как можно больше", "Молчать и ждать, пока пройдёт", "Рассказать персоналу о своих ощущениях и попросить помощи"], answer: 2, explanation: "Сообщи персоналу о боли, тошноте или любом дискомфорте. Они знают, как помочь." },
    { q: "Как анестезиолог понимает, что анестезия подходит тебе во время операции?", choices: ["Измеряет громкость храпа", "Разговаривает с тобой и спрашивает о самочувствии", "Остаётся рядом и непрерывно следит за дыханием, пульсом, давлением и другими показателями"], answer: 2, explanation: "Анестезиолог остаётся с тобой и с помощью мониторов следит за работой организма на протяжении всей операции." },
    { q: "Почему после операции может быть усталость, хотя ты спал?", choices: ["Кровати в палате пробуждения очень удобные", "Действие препаратов для анестезии может продолжаться некоторое время", "Сегодня нет школы, поэтому лучше спать дальше"], answer: 1, explanation: "Организму нужно время на восстановление, а некоторые препараты ещё недолго действуют после пробуждения." },
    { q: "Какой напиток может считаться прозрачной жидкостью, только если это разрешено инструкциями больницы?", choices: ["Прозрачный яблочный сок без мякоти", "Молочный коктейль", "Соевое молоко"], answer: 0, explanation: "Прозрачный яблочный сок иногда считается прозрачной жидкостью. Молоко, молочные напитки и сок с мякотью — нет. Всегда следуй инструкциям больницы." },
    { q: "Почему в операционной находится несколько сотрудников?", choices: ["Им скучно в другом месте", "Они пришли проверить твоё поведение", "У каждого есть своя роль в лечении и обеспечении безопасности"], answer: 2, explanation: "Анестезиологи, хирурги, медсёстры и технические специалисты работают вместе, и у каждого своя задача." }
  ],
  fr: [
    { q: "Pourquoi faut-il arrêter de manger et de boire selon les consignes de l’hôpital avant l’anesthésie ?", choices: ["Les médicaments d’anesthésie ne fonctionnent pas après un repas", "S’allonger après avoir mangé donne toujours mal au ventre", "Des aliments ou des boissons pourraient remonter de l’estomac et entrer dans les poumons"], answer: 2, explanation: "L’anesthésie réduit les réflexes de protection du corps. Un estomac vide diminue le risque que son contenu entre dans les poumons." },
    { q: "Pourquoi portes-tu des vêtements spéciaux avant l’opération ?", choices: ["Ils sont propres et adaptés au bloc opératoire", "Ce sont toujours les vêtements les plus confortables", "Ils sont particulièrement beaux et à la mode"], answer: 0, explanation: "Les vêtements de l’hôpital sont propres, facilitent les soins et sont adaptés au bloc opératoire." },
    { q: "Pourquoi place-t-on parfois un petit tube dans une veine de la main ?", choices: ["Pour vérifier si tu dors bien", "Pour examiner le vaisseau sanguin", "Pour donner des liquides et des médicaments directement dans le sang"], answer: 2, explanation: "Ce tube s’appelle une perfusion ou une canule. Il permet de donner rapidement et sûrement des liquides et des médicaments." },
    { q: "Pourquoi le chirurgien peut-il dessiner une marque sur ton corps avant l’opération ?", choices: ["Pour que tout le monde sache qui est le chirurgien", "Pour marquer exactement l’endroit de l’opération", "Pour choisir les couleurs qui te vont"], answer: 1, explanation: "Le marquage du site opératoire est un contrôle de sécurité qui aide l’équipe à traiter le bon endroit." },
    { q: "Pourquoi reçois-tu un bracelet avec ton nom et tes informations ?", choices: ["Pour que l’équipe vérifie à chaque étape qu’elle soigne la bonne personne", "Pour savoir quand acheter un cadeau d’anniversaire", "Pour décorer ton poignet"], answer: 0, explanation: "L’équipe vérifie le bracelet avant les soins et les médicaments afin de t’identifier en toute sécurité." },
    { q: "Que peux-tu faire si tu as mal après l’opération ?", choices: ["Manger autant que possible", "Ne rien dire et attendre que ça passe", "Dire à l’équipe ce que tu ressens et demander de l’aide"], answer: 2, explanation: "Parle à l’équipe de toute douleur, nausée ou gêne. Elle dispose de plusieurs moyens pour t’aider." },
    { q: "Comment l’anesthésiste sait-il que l’anesthésie te convient pendant l’opération ?", choices: ["Il mesure le volume de tes ronflements", "Il te parle et te demande comment tu vas", "Il reste avec toi et surveille en continu la respiration, le pouls, la tension et d’autres signes"], answer: 2, explanation: "L’anesthésiste reste avec toi et utilise des moniteurs pour suivre le fonctionnement de ton corps pendant toute l’opération." },
    { q: "Pourquoi peux-tu être fatigué après l’opération alors que tu as dormi ?", choices: ["Les lits de la salle de réveil sont très confortables", "Les médicaments d’anesthésie peuvent continuer à agir un moment", "Il n’y a pas école et mieux vaut continuer à dormir"], answer: 1, explanation: "Ton corps a besoin de récupérer et certains médicaments continuent à agir brièvement après le réveil." },
    { q: "Quelle boisson peut être considérée comme un liquide clair seulement si les consignes de l’hôpital l’autorisent ?", choices: ["Du jus de pomme clair sans pulpe", "Un milk-shake", "Du lait de soja"], answer: 0, explanation: "Le jus de pomme clair peut parfois compter comme liquide clair. Le lait, les boissons lactées et les jus avec pulpe ne le sont pas. Suis toujours les consignes de l’hôpital." },
    { q: "Pourquoi plusieurs membres du personnel sont-ils dans la salle d’opération ?", choices: ["Ils s’ennuient ailleurs", "Ils viennent vérifier ton comportement", "Chacun a un rôle pour te soigner et assurer ta sécurité"], answer: 2, explanation: "Anesthésistes, chirurgiens, personnel infirmier et techniciens travaillent ensemble, chacun avec un rôle précis." }
  ]
};

Object.keys(AUDIENCE_I18N).forEach((lang) => Object.assign(I18N[lang], AUDIENCE_I18N[lang]));

const RTL_LANGS = ["he", "ar"];

/* Currently active language + dictionary, exposed for app.js */
window.NUNI = { lang: "he", t: I18N.he, quiz: QUIZ_I18N.he, audience: null };

const AUDIENCES = ["little", "kids", "teen", "parents"];
let activeAudience = null;

try {
  const savedAudience = localStorage.getItem("nuni-audience");
  if (AUDIENCES.includes(savedAudience)) activeAudience = savedAudience;
} catch (e) {}

function updateAudienceUI(audience) {
  if (!AUDIENCES.includes(audience)) return;

  if (audience === "teen" && document.querySelector(".coloring-main")) {
    window.location.replace("index.html");
    return;
  }

  document.body.dataset.audience = audience;
  window.NUNI.audience = audience;

  const dict = window.NUNI.t;
  const label = dict[`audience_${audience}_short`];
  document.querySelectorAll(".audience-switch-label").forEach((el) => {
    el.textContent = label;
  });

  document.querySelectorAll("[data-audiences]").forEach((el) => {
    const allowed = el.dataset.audiences.split(",");
    el.hidden = !allowed.includes(audience);
  });

  document.querySelectorAll(".audience-card").forEach((card) => {
    card.classList.toggle("is-current", card.dataset.audience === audience);
  });

  const heroEyebrow = document.querySelector(".hero .eyebrow");
  const heroTitle = document.querySelector(".hero h1");
  const heroSubtitle = document.querySelector(".hero .lead");
  if (heroEyebrow) heroEyebrow.textContent = dict[`audience_${audience}_hero_eyebrow`];
  if (heroTitle) heroTitle.textContent = dict[`audience_${audience}_hero_title`];
  if (heroSubtitle) heroSubtitle.textContent = dict[`audience_${audience}_hero_subtitle`];

  const primaryCta = document.querySelector(".hero-cta .btn-primary");
  const parentCta = document.querySelector(".hero-cta .btn-ghost");
  if (primaryCta && parentCta) {
    if (audience === "parents") {
      primaryCta.textContent = dict.audience_parent_cta;
      primaryCta.setAttribute("href", "#parents");
      parentCta.hidden = true;
    } else {
      primaryCta.textContent = dict.hero_cta;
      primaryCta.setAttribute("href", "#journey");
      parentCta.hidden = false;
    }
  }
}

function setAudience(audience, { save = true, closeGate = true } = {}) {
  if (!AUDIENCES.includes(audience)) return;
  activeAudience = audience;
  updateAudienceUI(audience);

  if (save) {
    try { localStorage.setItem("nuni-audience", audience); } catch (e) {}
  }

  if (closeGate) {
    const gate = document.querySelector(".audience-gate");
    if (gate) gate.hidden = true;
    document.body.classList.remove("audience-choosing");
    document.querySelectorAll(".site-header, main, .site-footer").forEach((el) => { el.inert = false; });

    const url = new URL(window.location.href);
    if (url.searchParams.has("choose")) {
      url.searchParams.delete("choose");
      window.history.replaceState({}, "", url);
    }
  }
}

function openAudienceGate() {
  const gate = document.querySelector(".audience-gate");
  if (!gate) {
    window.location.href = "index.html?choose=1";
    return;
  }
  gate.hidden = false;
  document.body.classList.add("audience-choosing");
  document.querySelectorAll(".site-header, main, .site-footer").forEach((el) => { el.inert = true; });
  const current = gate.querySelector(".audience-card.is-current") || gate.querySelector(".audience-card");
  if (current) current.focus({ preventScroll: true });
}

window.NUNI.setAudience = setAudience;

function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;

  // Swap every translatable element
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!(key in dict)) return;
    if (el.tagName === "META") {
      el.setAttribute("content", dict[key]);
    } else if (el.tagName === "TITLE") {
      el.textContent = dict[key];
    } else {
      el.textContent = dict[key];
      // Notes that only apply to some languages carry an empty string elsewhere
      if (el.classList.contains("lang-optional")) {
        el.style.display = dict[key] ? "" : "none";
      }
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (key in dict) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (key in dict) el.setAttribute("title", dict[key]);
  });

  document.title = dict.title;

  // Active-state on the language buttons
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  window.NUNI.lang = lang;
  window.NUNI.t = dict;
  window.NUNI.quiz = QUIZ_I18N[lang];
  try { localStorage.setItem("nuni-lang", lang); } catch (e) {}

  updateAudienceUI(activeAudience || "kids");

  // Let app.js update any live UI (e.g. the breathing button label)
  window.dispatchEvent(new CustomEvent("nuni:langchange", { detail: { lang, dict } }));
}

// Wire up the switcher and restore the saved language
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  // Inner pages receive the same persistent audience control without repeating markup.
  if (header && !header.querySelector(".audience-switch")) {
    const audienceSwitch = document.createElement("button");
    audienceSwitch.className = "audience-switch";
    audienceSwitch.type = "button";
    audienceSwitch.setAttribute("data-i18n-aria-label", "audience_change");
    audienceSwitch.innerHTML = '<span class="audience-switch-dot" aria-hidden="true"></span><span class="audience-switch-label"></span>';
    header.insertBefore(audienceSwitch, toggle);
  }

  const closeMenu = () => {
    if (!header || !toggle) return;
    header.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  if (header && toggle) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    header.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
      closeMenu();
    });
  });

  let saved = "he";
  try { saved = localStorage.getItem("nuni-lang") || "he"; } catch (e) {}
  applyLanguage(saved);

  document.querySelectorAll(".audience-card").forEach((card) => {
    card.addEventListener("click", () => setAudience(card.dataset.audience));
  });

  document.querySelectorAll(".audience-switch").forEach((btn) => {
    btn.addEventListener("click", openAudienceGate);
  });

  const forceChooser = new URLSearchParams(window.location.search).get("choose") === "1";
  if (forceChooser || !activeAudience) openAudienceGate();

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !activeAudience) return;
    const gate = document.querySelector(".audience-gate");
    if (gate && !gate.hidden) {
      gate.hidden = true;
      document.body.classList.remove("audience-choosing");
      document.querySelectorAll(".site-header, main, .site-footer").forEach((el) => { el.inert = false; });
      document.querySelector(".audience-switch")?.focus();
    }
  });
});
