# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_003: Search with a valid chapter keyword returns relevant results
- Location: tests\specs\homePage.spec.js:83:3

# Error details

```
TimeoutError: locator.press: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Search chapters by title (e.g' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - img [ref=e7] [cursor=pointer]
      - generic [ref=e8]:
        - paragraph [ref=e9] [cursor=pointer]: Home
        - paragraph [ref=e10] [cursor=pointer]: Explore
        - paragraph [ref=e11] [cursor=pointer]: Reels
        - paragraph [ref=e12] [cursor=pointer]: Meet Our Team
        - paragraph [ref=e13] [cursor=pointer]: Contact Us
      - button [ref=e15] [cursor=pointer]:
        - generic:
          - img
        - img [ref=e17]
    - button [ref=e19] [cursor=pointer]:
      - img [ref=e20]
    - main [ref=e24]:
      - generic [ref=e25]:
        - generic [ref=e26]:
          - button [ref=e28] [cursor=pointer]:
            - img [ref=e29]
          - generic:
            - generic [ref=e65] [cursor=pointer]:
              - img [ref=e68]
              - paragraph [ref=e70]: Maths
            - generic [ref=e72] [cursor=pointer]:
              - img [ref=e75]
              - paragraph [ref=e77]: Urdu
            - generic [ref=e79] [cursor=pointer]:
              - img [ref=e82]
              - paragraph [ref=e84]: Computer
            - generic [ref=e86] [cursor=pointer]:
              - img [ref=e89]
              - paragraph [ref=e91]: English
            - generic [ref=e93] [cursor=pointer]:
              - img [ref=e96]
              - paragraph [ref=e98]: Physics
            - generic [ref=e100] [cursor=pointer]:
              - img [ref=e103]
              - paragraph [ref=e105]: Biology
            - generic [ref=e107] [cursor=pointer]:
              - img [ref=e110]
              - paragraph [ref=e112]: Science
            - generic [ref=e114] [cursor=pointer]:
              - img [ref=e117]
              - paragraph [ref=e119]: Chemistry
          - generic [ref=e121]:
            - generic [ref=e123]:
              - img [ref=e124]
              - paragraph [ref=e126]: Pakistan's First Free EdTech Platform
              - img [ref=e127]
            - heading [level=2] [ref=e130]:
              - text: Your Journey to
              - generic [ref=e132]: Excellence
            - paragraph [ref=e134]: Free,world-class education for every student in Pakistan from Kindergarten to Class 12 with interactive lessons & expert teachers.
            - generic [ref=e136]:
              - generic [ref=e137]:
                - generic:
                  - img
                - textbox [ref=e138]:
                  - /placeholder: Search chapters by title (e.g., Grammar, Algebra)
                  - text: Algebra
                - generic [ref=e141]: Loading...
              - generic [ref=e142]:
                - generic [ref=e143]: Searching chapters...
                - button [ref=e145] [cursor=pointer]:
                  - img [ref=e147]
                  - text: Explore Reels for quick concept recaps
            - generic [ref=e149]:
              - link [ref=e150] [cursor=pointer]:
                - /url: /explore
                - text: Start Learning — It's Free
                - img [ref=e152]
              - link [ref=e154] [cursor=pointer]:
                - /url: /reels
                - img [ref=e156]
                - text: "New: OTS Reels"
              - link [ref=e158] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - img [ref=e160]
                - text: Watch How It Works
        - generic [ref=e165]:
          - generic [ref=e166]:
            - generic [ref=e167]:
              - paragraph [ref=e168]: Explore School
              - paragraph [ref=e169]: Digital School
            - link [ref=e171] [cursor=pointer]:
              - /url: /explore/digitalschool
              - img [ref=e173]
              - text: View All Categories
          - generic [ref=e178]:
            - link [ref=e180] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e185]:
                - generic [ref=e186]:
                  - img [ref=e188]
                  - paragraph [ref=e191]: Kindergarten
                  - paragraph [ref=e192]: Early learning and foundational skills for young learners
                - generic [ref=e193]:
                  - paragraph [ref=e194]: 50+ Courses
                  - img [ref=e196]
            - link [ref=e199] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - img [ref=e207]
                  - paragraph [ref=e210]: Primary
                  - paragraph [ref=e211]: Classes 1-5 with core subjects and activities
                - generic [ref=e212]:
                  - paragraph [ref=e213]: 80+ Courses
                  - img [ref=e215]
            - link [ref=e218] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e223]:
                - generic [ref=e224]:
                  - img [ref=e226]
                  - paragraph [ref=e229]: Secondary
                  - paragraph [ref=e230]: Classes 6-8 with comprehensive academic courses
                - generic [ref=e231]:
                  - paragraph [ref=e232]: 100+ Courses
                  - img [ref=e234]
            - link [ref=e237] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e242]:
                - generic [ref=e243]:
                  - img [ref=e245]
                  - paragraph [ref=e248]: Higher Secondary
                  - paragraph [ref=e249]: Classes 9-12 with advanced subjects and career prep
                - generic [ref=e250]:
                  - paragraph [ref=e251]: 120+ Courses
                  - img [ref=e253]
          - generic [ref=e255]:
            - generic [ref=e256]:
              - paragraph [ref=e257]: Applied Learning
              - paragraph [ref=e258]: Skilled Courses
            - link [ref=e260] [cursor=pointer]:
              - /url: /explore/skilledbased
              - img [ref=e262]
              - text: View All Skills
          - generic [ref=e267]:
            - link [ref=e269] [cursor=pointer]:
              - /url: /explore/skilledbased/tech/3/subject-details
              - generic [ref=e274]:
                - generic [ref=e275]:
                  - img [ref=e277]
                  - generic [ref=e279]:
                    - paragraph [ref=e280]: Tech
                    - paragraph [ref=e281]: Logic Building
                - generic [ref=e282]:
                  - paragraph [ref=e283]: 12 Topics
                  - img [ref=e285]
            - link [ref=e288] [cursor=pointer]:
              - /url: /explore/skilledbased/arts-&-media/4/subject-details
              - generic [ref=e293]:
                - generic [ref=e294]:
                  - img [ref=e296]
                  - generic [ref=e298]:
                    - paragraph [ref=e299]: Arts & Media
                    - paragraph [ref=e300]: Basic Design Theory
                - generic [ref=e301]:
                  - paragraph [ref=e302]: 12 Topics
                  - img [ref=e304]
            - link [ref=e307] [cursor=pointer]:
              - /url: /explore/skilledbased/languages/5/subject-details
              - generic [ref=e312]:
                - generic [ref=e313]:
                  - img [ref=e315]
                  - generic [ref=e317]:
                    - paragraph [ref=e318]: Languages
                    - paragraph [ref=e319]: English Language
                - generic [ref=e320]:
                  - paragraph [ref=e321]: 12 Topics
                  - img [ref=e323]
        - generic [ref=e327]:
          - generic [ref=e328]:
            - paragraph [ref=e329]: Our Impact
            - paragraph [ref=e330]: Numbers That Speak
            - paragraph [ref=e331]: Transforming education across Pakistan with accessible, quality learning
          - generic [ref=e332]:
            - generic [ref=e336]:
              - img [ref=e338]
              - generic [ref=e344]:
                - paragraph [ref=e345]: "0"
                - paragraph [ref=e346]: +
              - paragraph [ref=e347]: Active Students
            - generic [ref=e351]:
              - img [ref=e353]
              - generic [ref=e357]:
                - paragraph [ref=e358]: "0"
                - paragraph [ref=e359]: +
              - paragraph [ref=e360]: EdTech videos
            - generic [ref=e364]:
              - img [ref=e366]
              - generic [ref=e370]:
                - paragraph [ref=e371]: "0"
                - paragraph [ref=e372]: +
              - paragraph [ref=e373]: lessons covered
            - generic [ref=e377]:
              - img [ref=e379]
              - generic [ref=e382]:
                - paragraph [ref=e383]: "0"
                - paragraph [ref=e384]: +
              - paragraph [ref=e385]: Educators
            - generic [ref=e389]:
              - img [ref=e391]
              - generic [ref=e395]:
                - paragraph [ref=e396]: "0"
                - paragraph [ref=e397]: +
              - paragraph [ref=e398]: App Downloads
        - generic [ref=e402]:
          - generic [ref=e403]:
            - paragraph [ref=e404]: Why Choose Us
            - paragraph [ref=e405]: Everything You Need to Succeed
            - paragraph [ref=e406]: Discover why thousands of students trust OTS for their educational journey. Our platform is designed to make learning effective, engaging, and accessible.
          - generic [ref=e407]:
            - generic [ref=e412] [cursor=pointer]:
              - img [ref=e414]
              - paragraph [ref=e416]: Interactive Video Lessons
              - paragraph [ref=e417]: Engaging video content with visual explanations that make complex concepts easy to understand.
              - generic [ref=e418]:
                - paragraph [ref=e419]: Learn More
                - paragraph [ref=e420]: →
            - generic [ref=e425] [cursor=pointer]:
              - img [ref=e427]
              - paragraph [ref=e429]: Complete Curriculum
              - paragraph [ref=e430]: From KG to Class 12, covering all subjects aligned with Sindh Board, Agha Khan, and Cambridge.
              - generic [ref=e431]:
                - paragraph [ref=e432]: Learn More
                - paragraph [ref=e433]: →
            - generic [ref=e438] [cursor=pointer]:
              - img [ref=e440]
              - paragraph [ref=e442]: Learn Anywhere
              - paragraph [ref=e443]: Access lessons on any device - mobile, tablet, or desktop. Learn on the go with our app.
              - generic [ref=e444]:
                - paragraph [ref=e445]: Learn More
                - paragraph [ref=e446]: →
            - generic [ref=e451] [cursor=pointer]:
              - img [ref=e453]
              - paragraph [ref=e456]: Quizzes & Assessments
              - paragraph [ref=e457]: Test your knowledge with interactive quizzes and track your progress with detailed analytics.
              - generic [ref=e458]:
                - paragraph [ref=e459]: Learn More
                - paragraph [ref=e460]: →
            - generic [ref=e465] [cursor=pointer]:
              - img [ref=e467]
              - paragraph [ref=e469]: Expert Teachers
              - paragraph [ref=e470]: Learn from qualified educators with years of experience in their respective fields.
              - generic [ref=e471]:
                - paragraph [ref=e472]: Learn More
                - paragraph [ref=e473]: →
            - generic [ref=e478] [cursor=pointer]:
              - img [ref=e480]
              - paragraph [ref=e483]: Learn at Your Pace
              - paragraph [ref=e484]: No deadlines, no pressure. Study whenever and wherever suits you best.
              - generic [ref=e485]:
                - paragraph [ref=e486]: Learn More
                - paragraph [ref=e487]: →
            - generic [ref=e492] [cursor=pointer]:
              - img [ref=e494]
              - paragraph [ref=e496]: Safe & Secure
              - paragraph [ref=e497]: Kid-friendly environment with no ads or inappropriate content. Safe for all ages.
              - generic [ref=e498]:
                - paragraph [ref=e499]: Learn More
                - paragraph [ref=e500]: →
            - generic [ref=e505] [cursor=pointer]:
              - img [ref=e507]
              - paragraph [ref=e509]: 100% Free Forever
              - paragraph [ref=e510]: Quality education should be accessible to everyone. All content is completely free.
              - generic [ref=e511]:
                - paragraph [ref=e512]: Learn More
                - paragraph [ref=e513]: →
        - generic [ref=e516]:
          - generic [ref=e517]:
            - paragraph [ref=e518]: The learning Flow
            - paragraph [ref=e519]: How It Works
            - paragraph [ref=e520]: Start your learning journey in just a few simple steps
          - generic [ref=e521]:
            - generic [ref=e523]:
              - generic [ref=e524]:
                - img [ref=e527]
                - generic [ref=e530]: "1"
              - generic [ref=e531]:
                - paragraph [ref=e532]: Create Account
                - paragraph [ref=e533]: Sign up for free in seconds. No credit card required.
            - generic [ref=e537]:
              - generic [ref=e538]:
                - img [ref=e541]
                - generic [ref=e544]: "2"
              - generic [ref=e545]:
                - paragraph [ref=e546]: Choose Your Class
                - paragraph [ref=e547]: Select your grade level and subjects you want to learn.
            - generic [ref=e551]:
              - generic [ref=e552]:
                - img [ref=e555]
                - generic [ref=e557]: "3"
              - generic [ref=e558]:
                - paragraph [ref=e559]: Start Learning
                - paragraph [ref=e560]: Watch engaging video lessons and practise with quizzes.
            - generic [ref=e564]:
              - generic [ref=e565]:
                - img [ref=e568]
                - generic [ref=e571]: "4"
              - generic [ref=e572]:
                - paragraph [ref=e573]: Track Progress
                - paragraph [ref=e574]: Monitor your improvement and celebrate your achievements.
          - link [ref=e576] [cursor=pointer]:
            - /url: /signup
            - text: Get Start
            - img [ref=e578]
        - generic [ref=e583]:
          - generic [ref=e584]:
            - generic [ref=e585]:
              - img [ref=e586]
              - paragraph [ref=e588]: Video Lessons
            - heading [level=2] [ref=e589]: Our YouTube Learning Hub
            - paragraph [ref=e590]: Explore our educational content and empower your learning journey with free video lessons.
          - generic [ref=e593]:
            - generic [ref=e594]:
              - img [ref=e596]
              - generic [ref=e597]:
                - heading [level=3] [ref=e598]: Loading...
                - generic [ref=e599]:
                  - generic [ref=e600]:
                    - img [ref=e601]
                    - paragraph [ref=e606]: Loading... Subs
                  - paragraph [ref=e607]: •
                  - generic [ref=e608]:
                    - img [ref=e609]
                    - paragraph [ref=e612]: Loading... Videos
                  - paragraph [ref=e613]: •
                  - generic [ref=e614]:
                    - img [ref=e615]
                    - paragraph [ref=e618]: Loading... Views
            - link [ref=e619] [cursor=pointer]:
              - /url: https://www.youtube.com/@otsedtech?sub_confirmation=1
              - img [ref=e621]
              - text: Subscribe
          - generic [ref=e623]:
            - link [ref=e624] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=d0aNEJfvH_o
              - generic [ref=e625]:
                - generic [ref=e627]:
                  - img [ref=e628]
                  - img [ref=e632]
                  - generic [ref=e634]: HD
                - generic [ref=e635]:
                  - paragraph [ref=e636]: Chapter 04 | Iteration/Loop | 10th Class | Computer | Sindh Board | @otsedtech
                  - generic [ref=e637]:
                    - generic [ref=e638]:
                      - img [ref=e639]
                      - paragraph [ref=e642]: 33K views
                    - paragraph [ref=e643]: •
                    - paragraph [ref=e644]: Off The School
            - link [ref=e645] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=mAGGOmv75hw
              - generic [ref=e646]:
                - generic [ref=e648]:
                  - img [ref=e649]
                  - img [ref=e653]
                  - generic [ref=e655]: HD
                - generic [ref=e656]:
                  - paragraph [ref=e657]: "Chapter 20: Theory of Quadratic Equations | Exercise 20.3 | 10th Class | Sindh Board | @otsedtech"
                  - generic [ref=e658]:
                    - generic [ref=e659]:
                      - img [ref=e660]
                      - paragraph [ref=e663]: 27K views
                    - paragraph [ref=e664]: •
                    - paragraph [ref=e665]: Off The School
            - link [ref=e666] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=VCtBlSio-eQ
              - generic [ref=e667]:
                - generic [ref=e669]:
                  - img [ref=e670]
                  - img [ref=e674]
                  - generic [ref=e676]: HD
                - generic [ref=e677]:
                  - paragraph [ref=e678]: "Unit 1: The Voice of God | 10th Class | English | Sindh Board | @otsedtech"
                  - generic [ref=e679]:
                    - generic [ref=e680]:
                      - img [ref=e681]
                      - paragraph [ref=e684]: 45K views
                    - paragraph [ref=e685]: •
                    - paragraph [ref=e686]: Off The School
            - link [ref=e687] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=IhpDT9_eMzE
              - generic [ref=e688]:
                - generic [ref=e690]:
                  - img [ref=e691]
                  - img [ref=e695]
                  - generic [ref=e697]: HD
                - generic [ref=e698]:
                  - paragraph [ref=e699]: Ideology of Pakistan | 10th Class | PST | Sindh Board | @otsedtech
                  - generic [ref=e700]:
                    - generic [ref=e701]:
                      - img [ref=e702]
                      - paragraph [ref=e705]: 23K views
                    - paragraph [ref=e706]: •
                    - paragraph [ref=e707]: Off The School
            - link [ref=e708] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=gjGaI5szJGA
              - generic [ref=e709]:
                - generic [ref=e711]:
                  - img [ref=e712]
                  - img [ref=e716]
                  - generic [ref=e718]: HD
                - generic [ref=e719]:
                  - paragraph [ref=e720]: Homeostasis | 10th Class | Biology | Sindh Board | @otsedtech
                  - generic [ref=e721]:
                    - generic [ref=e722]:
                      - img [ref=e723]
                      - paragraph [ref=e726]: 50K views
                    - paragraph [ref=e727]: •
                    - paragraph [ref=e728]: Off The School
            - link [ref=e729] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=j_1_V5vrBOE
              - generic [ref=e730]:
                - generic [ref=e732]:
                  - img [ref=e733]
                  - img [ref=e737]
                  - generic [ref=e739]: HD
                - generic [ref=e740]:
                  - paragraph [ref=e741]: 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝟗𝐭𝐡 𝐂𝐡𝐞𝐦𝐢𝐬𝐭𝐫𝐲 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐍𝐨𝐭𝐞𝐬 | @otsedtech | @Off-The-School
                  - generic [ref=e742]:
                    - generic [ref=e743]:
                      - img [ref=e744]
                      - paragraph [ref=e747]: 52K views
                    - paragraph [ref=e748]: •
                    - paragraph [ref=e749]: Off The School
          - link [ref=e751] [cursor=pointer]:
            - /url: https://www.youtube.com/@otsedtech
            - text: View All Videos
            - img [ref=e753]
        - generic [ref=e758]:
          - generic [ref=e759]:
            - generic [ref=e761]: Daily Micro Learning
            - heading [level=2] [ref=e764]: Learn Something New In A Minute
            - paragraph [ref=e766]: Scroll, Tap and Learn.
            - link [ref=e768] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - img [ref=e770]
              - text: Follow us on Instagram
          - generic [ref=e773]:
            - generic [ref=e775] [cursor=pointer]:
              - generic [ref=e776]:
                - img [ref=e777]
                - generic [ref=e779]:
                  - paragraph [ref=e780]: Our Tech Is Killing Us
                  - generic [ref=e781]:
                    - generic [ref=e782]:
                      - img [ref=e783]
                      - paragraph [ref=e786]: 5.4K
                    - generic [ref=e787]:
                      - img [ref=e788]
                      - paragraph [ref=e790]: Flip to watch
              - generic [ref=e793]:
                - img [ref=e794]
                - paragraph [ref=e797]: Watch on Instagram
                - link [ref=e798]:
                  - /url: https://www.instagram.com/reel/DT77VXwDxgs/
                  - text: Watch Reel
                  - img [ref=e800]
            - generic [ref=e805] [cursor=pointer]:
              - generic [ref=e806]:
                - img [ref=e807]
                - generic [ref=e809]:
                  - paragraph [ref=e810]: Japan's 1,500 Quakes Explained
                  - generic [ref=e811]:
                    - generic [ref=e812]:
                      - img [ref=e813]
                      - paragraph [ref=e816]: 9.1K
                    - generic [ref=e817]:
                      - img [ref=e818]
                      - paragraph [ref=e820]: Flip to watch
              - generic [ref=e823]:
                - img [ref=e824]
                - paragraph [ref=e827]: Watch on Instagram
                - link [ref=e828]:
                  - /url: https://www.instagram.com/reel/DTnGeWAFCR5/
                  - text: Watch Reel
                  - img [ref=e830]
            - generic [ref=e835] [cursor=pointer]:
              - generic [ref=e836]:
                - img [ref=e837]
                - generic [ref=e839]:
                  - paragraph [ref=e840]: "GenZ's Pakistan: From Consumer to Creator"
                  - generic [ref=e841]:
                    - generic [ref=e842]:
                      - img [ref=e843]
                      - paragraph [ref=e846]: 5.8K
                    - generic [ref=e847]:
                      - img [ref=e848]
                      - paragraph [ref=e850]: Flip to watch
              - generic [ref=e853]:
                - img [ref=e854]
                - paragraph [ref=e857]: Watch on Instagram
                - link [ref=e858]:
                  - /url: https://www.instagram.com/reel/DQ4Av80CONR/
                  - text: Watch Reel
                  - img [ref=e860]
            - generic [ref=e865] [cursor=pointer]:
              - generic [ref=e866]:
                - img [ref=e867]
                - generic [ref=e869]:
                  - paragraph [ref=e870]: The Eco Friendly Currency
                  - generic [ref=e871]:
                    - generic [ref=e872]:
                      - img [ref=e873]
                      - paragraph [ref=e876]: 6.7K
                    - generic [ref=e877]:
                      - img [ref=e878]
                      - paragraph [ref=e880]: Flip to watch
              - generic [ref=e883]:
                - img [ref=e884]
                - paragraph [ref=e887]: Watch on Instagram
                - link [ref=e888]:
                  - /url: https://www.instagram.com/reel/DQO6WC5ATaN/
                  - text: Watch Reel
                  - img [ref=e890]
          - generic [ref=e895]:
            - generic [ref=e896]:
              - paragraph [ref=e897]: 0s
              - paragraph [ref=e898]: Avg reel length
            - generic [ref=e899]:
              - paragraph [ref=e900]: 0+
              - paragraph [ref=e901]: Concepts simplified
            - generic [ref=e902]:
              - paragraph [ref=e903]: 0K+
              - paragraph [ref=e904]: Monthly views
            - link [ref=e906] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - generic [ref=e907]: Start Learning
              - img [ref=e909]
        - generic [ref=e916]:
          - generic [ref=e917]:
            - generic [ref=e918]:
              - generic [ref=e919]: 
              - text: Our YouTube Channels
            - heading [level=2] [ref=e920]:
              - generic [ref=e921]: Explore Our
              - text: Educational Network
            - paragraph [ref=e922]: Discover our diverse range of YouTube channels, each dedicated to different aspects of education and learning
          - generic [ref=e923]:
            - generic [ref=e924]:
              - link [ref=e926] [cursor=pointer]:
                - /url: https://www.youtube.com/@Off-The-School
                - generic [ref=e928]:
                  - generic [ref=e929]:
                    - img [ref=e931]
                    - img [ref=e934]
                  - paragraph [ref=e936]: Off The School
                  - paragraph [ref=e937]: Comprehensive educational content
                  - img [ref=e938]
              - link [ref=e941] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsednews
                - generic [ref=e943]:
                  - generic [ref=e944]:
                    - img [ref=e946]
                    - img [ref=e949]
                  - paragraph [ref=e951]: EdNews
                  - paragraph [ref=e952]: Latest education sector updates
                  - img [ref=e953]
            - generic [ref=e955]:
              - link [ref=e957] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - generic [ref=e959]:
                  - generic [ref=e960]:
                    - img [ref=e962]
                    - img [ref=e965]
                  - paragraph [ref=e967]: EdTech
                  - paragraph [ref=e968]: Technology-driven education
                  - img [ref=e969]
              - link [ref=e972] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedsense
                - generic [ref=e974]:
                  - generic [ref=e975]:
                    - img [ref=e977]
                    - img [ref=e980]
                  - paragraph [ref=e982]: EdSense
                  - paragraph [ref=e983]: Educational insights & discussions
                  - img [ref=e984]
              - link [ref=e987] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedfun
                - generic [ref=e989]:
                  - generic [ref=e990]:
                    - img [ref=e992]
                    - img [ref=e995]
                  - paragraph [ref=e997]: EdFun
                  - paragraph [ref=e998]: Fun & engaging learning
                  - img [ref=e999]
          - link [ref=e1002] [cursor=pointer]:
            - /url: https://www.youtube.com/@Off-The-School
            - img [ref=e1004]
            - text: Subscribe Our Channels
        - generic [ref=e1010]:
          - generic [ref=e1014]:
            - generic [ref=e1016]:
              - img [ref=e1017]
              - paragraph [ref=e1020]: Stay Updated
            - heading [level=2] [ref=e1022]:
              - generic [ref=e1023]: Subscribe to our
              - text: Newsletter
            - paragraph [ref=e1025]: Get the latest educational tips, course updates, and exclusive content delivered straight to your inbox.
            - generic [ref=e1027]:
              - textbox [ref=e1028]:
                - /placeholder: Enter your email address
              - button [ref=e1029] [cursor=pointer]:
                - text: Subscribe
                - img [ref=e1031]
            - paragraph [ref=e1035]: 🔒 No spam, unsubscribe anytime
          - generic [ref=e1037]:
            - img [ref=e1040]
            - heading [level=2] [ref=e1043]: Oops!
            - button [ref=e1044] [cursor=pointer]: Try Again
        - generic [ref=e1050]:
          - generic [ref=e1051]:
            - generic [ref=e1053]:
              - img [ref=e1054]
              - paragraph [ref=e1056]: Download Our App
            - paragraph [ref=e1058]: Learning Together
            - paragraph [ref=e1060]: Download our mobile app and access all courses offline. Learn anytime, anywhere with a seamless experience.
            - generic [ref=e1061]:
              - generic [ref=e1062]:
                - img [ref=e1063]
                - img [ref=e1065]
                - img [ref=e1067]
                - img [ref=e1069]
                - img [ref=e1071]
              - paragraph [ref=e1073]: 4.9 • 1000+ Reviews
            - generic [ref=e1074]:
              - link [ref=e1075] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.otsapp
                - img [ref=e1077]
                - generic [ref=e1079]:
                  - paragraph [ref=e1080]: GET IT ON
                  - paragraph [ref=e1081]: Google Play
              - link [ref=e1082] [cursor=pointer]:
                - /url: /signup
                - text: Try Web Version
                - img [ref=e1084]
          - img [ref=e1089]
        - generic [ref=e1091]:
          - generic [ref=e1092]:
            - generic [ref=e1094]:
              - img [ref=e1096]
              - paragraph [ref=e1097]: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
              - generic [ref=e1098]:
                - paragraph [ref=e1099]: Stay Updated
                - generic [ref=e1100]:
                  - textbox [ref=e1101]:
                    - /placeholder: Enter your email
                  - button [ref=e1102] [cursor=pointer]:
                    - img [ref=e1103]
              - generic [ref=e1107]:
                - link [ref=e1108] [cursor=pointer]:
                  - /url: https://www.facebook.com/OTS.Edtech/
                  - img [ref=e1109]
                - link [ref=e1111] [cursor=pointer]:
                  - /url: https://x.com/offtheschool
                  - img [ref=e1112]
                - link [ref=e1114] [cursor=pointer]:
                  - /url: https://www.instagram.com/otsedtech/
                  - img [ref=e1115]
                - link [ref=e1117] [cursor=pointer]:
                  - /url: https://linkedin.com/company/off-the-school/
                  - img [ref=e1118]
                - link [ref=e1120] [cursor=pointer]:
                  - /url: https://www.youtube.com/@otsedtech
                  - img [ref=e1121]
            - generic [ref=e1124]:
              - heading [level=4] [ref=e1125]: Quick Links
              - generic [ref=e1126]:
                - link [ref=e1127] [cursor=pointer]:
                  - /url: /aboutus
                  - img [ref=e1128]
                  - text: About Us
                - link [ref=e1131] [cursor=pointer]:
                  - /url: /contactus
                  - img [ref=e1132]
                  - text: Contact
                - link [ref=e1135] [cursor=pointer]:
                  - /url: /faq
                  - img [ref=e1136]
                  - text: FAQ
                - link [ref=e1139] [cursor=pointer]:
                  - /url: /privacy-policy
                  - img [ref=e1140]
                  - text: Privacy Policy
                - link [ref=e1143] [cursor=pointer]:
                  - /url: /terms-of-use
                  - img [ref=e1144]
                  - text: Terms of Use
            - generic [ref=e1148]:
              - heading [level=4] [ref=e1149]: Contact Us
              - generic [ref=e1150]:
                - generic [ref=e1151]:
                  - img [ref=e1153]
                  - paragraph [ref=e1156]: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
                - generic [ref=e1157]:
                  - img [ref=e1159]
                  - link [ref=e1162] [cursor=pointer]:
                    - /url: mailto:info@offtheschool.io
                    - text: info@offtheschool.io
                - generic [ref=e1163]:
                  - img [ref=e1165]
                  - link [ref=e1167] [cursor=pointer]:
                    - /url: tel:+923010687687
                    - text: +92 301 0687687
            - generic [ref=e1169]:
              - heading [level=4] [ref=e1170]: Download App
              - generic [ref=e1171]:
                - paragraph [ref=e1172]: Get our app for a better learning experience
                - generic [ref=e1174]:
                  - img [ref=e1175]
                  - generic [ref=e1176]:
                    - paragraph [ref=e1177]: Scan to Download
                    - link [ref=e1178] [cursor=pointer]:
                      - /url: https://play.google.com/store
                      - img [ref=e1179]
          - generic [ref=e1181]:
            - paragraph [ref=e1182]: © 2026 Off The School. All rights reserved.
            - generic [ref=e1183]:
              - link [ref=e1184] [cursor=pointer]:
                - /url: /privacy-policy
                - text: Privacy
              - link [ref=e1185] [cursor=pointer]:
                - /url: /terms-of-use
                - text: Terms
              - link [ref=e1186] [cursor=pointer]:
                - /url: /faq
                - text: FAQ
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
  - dialog [ref=e1189]:
    - generic [ref=e1191]:
      - button "Close" [active] [ref=e1196] [cursor=pointer]:
        - img [ref=e1197]
      - img "Off The School App" [ref=e1205]
      - generic [ref=e1207]:
        - generic [ref=e1209]:
          - img [ref=e1210]
          - paragraph [ref=e1212]: Off The School App
        - heading "Start Learning Smarter Anytime, Anywhere" [level=2] [ref=e1214]:
          - text: Start Learning Smarter
          - text: Anytime, Anywhere
        - paragraph [ref=e1216]: Download our app and unlock courses, quizzes, and a personalized learning experience.
        - generic [ref=e1217]:
          - generic [ref=e1219]:
            - img [ref=e1220]
            - paragraph [ref=e1222]: 100+ Courses
          - generic [ref=e1224]:
            - img [ref=e1225]
            - paragraph [ref=e1227]: Free Download
        - generic [ref=e1229]:
          - img [ref=e1230]
          - img [ref=e1232]
          - img [ref=e1234]
          - img [ref=e1236]
          - img [ref=e1238]
          - paragraph [ref=e1240]: 4.8 Rating
        - link "Google Play Get it on Google Play" [ref=e1242] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.otsapp
          - generic [ref=e1244]:
            - img "Google Play" [ref=e1245]
            - generic [ref=e1246]:
              - paragraph [ref=e1247]: Get it on
              - paragraph [ref=e1248]: Google Play
```

# Test source

```ts
  34  |     this.searchInput = page.getByRole('textbox', { name: 'Search chapters by title (e.g' });
  35  |     this.startLearningFreeLink = page.getByRole('link', { name: "Start Learning — It's Free" });
  36  | 
  37  |     // --- Digital School & Skills ---
  38  |     this.digitalSchoolHeading = page.getByText('Digital School');
  39  |     this.kindergartenLink = page.getByRole('link', { name: 'Kindergarten Early learning' });
  40  |     this.primaryLink = page.getByRole('link', { name: 'Primary Classes 1-5 with core' });
  41  |     this.secondaryLink = page.getByRole('link', { name: 'Secondary Classes 6-8 with' });
  42  |     this.higherSecondaryLink = page.getByRole('link', { name: 'Higher Secondary Classes 9-12' });
  43  |     this.appliedLearningText = page.getByText('Applied Learning');
  44  |     this.skilledCoursesText = page.getByText('Skilled Courses');
  45  |     this.viewAllSkillsLink = page.getByRole('link', { name: 'View All Skills' });
  46  |     this.basicComputerLink = page.getByRole('link', { name: 'Basic Computer Fundamentals' });
  47  |     this.canvaDesignLink = page.getByRole('link', { name: 'Canva Design Graphic design' });
  48  |     this.webDesignLink = page.getByRole('link', { name: 'Web Design Canva, Photoshop' });
  49  | 
  50  |     // --- Impact & Learning Flow ---
  51  |     this.ourImpactText = page.getByText('Our Impact');
  52  |     this.numbersThatSpeakText = page.getByText('Numbers That Speak');
  53  |     this.transformingEducationText = page.getByText('Transforming education across');
  54  |     // LIVE ADJUSTMENT: selectors.md used "5,000+Active Students" etc.; live Impact
  55  |     // counters animate from "0 +" with separate labels (Active Students / EdTech videos / …)
  56  |     this.activeStudentsStat = page.getByText('Active Students', { exact: true });
  57  |     this.edTechVideosStat = page.getByText('EdTech videos', { exact: true });
  58  |     this.lessonsCoveredStat = page.getByText('lessons covered', { exact: true });
  59  |     this.educatorsStat = page.getByText('Educators', { exact: true });
  60  |     this.learningFlowText = page.getByText('The learning Flow');
  61  |     this.howItWorksText = page.getByText('How It Works', { exact: true });
  62  |     this.startYourJourneyText = page.getByText('Start your learning journey');
  63  |     this.createAccountText = page.getByText('Create Account');
  64  |     this.signUpFreeText = page.getByText('Sign up for free in seconds.');
  65  |     this.chooseYourClassText = page.getByText('Choose Your Class');
  66  |     this.selectGradeText = page.getByText('Select your grade level and');
  67  |     this.startLearningParagraph = page.getByRole('paragraph').filter({ hasText: 'Start Learning' });
  68  |     this.watchEngagingText = page.getByText('Watch engaging video lessons');
  69  |     this.trackProgressText = page.getByText('Track Progress');
  70  |     this.monitorImprovementText = page.getByText('Monitor your improvement and');
  71  |     this.getStartLink = page.getByRole('link', { name: 'Get Start' });
  72  | 
  73  |     // --- YouTube Hub & Social ---
  74  |     this.videoLessonsMarker = page.locator('div').filter({ hasText: /^Video Lessons$/ });
  75  |     this.youtubeHubHeading = page.getByRole('heading', { name: 'Our YouTube Learning Hub' });
  76  |     this.youtubeHubCopy = page.getByText(
  77  |       'Explore our educational content and empower your learning journey with free'
  78  |     );
  79  |     this.channelLogo = page.getByRole('img', { name: 'Channel Logo' });
  80  |     this.otsEdTechHeading = page.getByRole('heading', { name: 'OTS EdTech' });
  81  |     // LIVE ADJUSTMENT: selectors.md hard-coded "2.0K Subs" / "496 Videos" / "146.2K Views"
  82  |     // (counts change; avoid /Subs/ which also matches "Subscribe")
  83  |     this.subsText = page.getByText(/\d+(\.\d+)?K Subs/);
  84  |     this.videosCountText = page.getByText(/\d+ Videos/);
  85  |     this.viewsText = page.getByText(/\d+(\.\d+)?K Views/);
  86  |     this.subscribeLink = page.getByRole('link', { name: 'Subscribe', exact: true });
  87  |     this.viewAllVideosLink = page.getByRole('link', { name: 'View All Videos' });
  88  |     this.dailyMicroLearningText = page.getByText('Daily Micro Learning');
  89  |     this.learnSomethingHeading = page.getByRole('heading', { name: 'Learn Something New In A' });
  90  |     this.scrollTapLearnText = page.getByText('Scroll, Tap and Learn.');
  91  |     this.followInstagramLink = page.getByRole('link', { name: 'Follow us on Instagram' });
  92  |     this.avgReelLengthText = page.getByText('Avg reel length');
  93  |     this.conceptsSimplifiedText = page.getByText('Concepts simplified');
  94  |     this.monthlyViewsText = page.getByText('Monthly views');
  95  |     // LIVE ADJUSTMENT: selectors.md "500+" / "100K+" not present on current homepage build
  96  |     this.conceptsCountText = page.getByText('Concepts simplified');
  97  |     this.monthlyViewsCountText = page.getByText('Monthly views');
  98  |     this.startLearningExactLink = page.getByRole('link', { name: 'Start Learning', exact: true });
  99  |     this.ourYoutubeChannelsText = page.getByText('Our YouTube Channels');
  100 |     this.exploreOurText = page.getByText('Explore Our', { exact: true });
  101 |     this.educationalNetworkText = page.getByText('Educational Network');
  102 |     this.offTheSchoolChannelLink = page.getByRole('link', { name: 'Off The School Comprehensive' });
  103 |     this.edNewsLink = page.getByRole('link', { name: 'EdNews Latest education' });
  104 |     this.edTechChannelLink = page.getByRole('link', { name: 'EdTech Technology-driven' });
  105 |     this.edSenseLink = page.getByRole('link', { name: 'EdSense Educational insights' });
  106 |     this.edFunLink = page.getByRole('link', { name: 'EdFun Fun & engaging learning' });
  107 |     this.subscribeOurChannelsLink = page.getByRole('link', { name: 'Subscribe Our Channels' });
  108 | 
  109 |     // --- Newly resolved gap selectors ---
  110 |     this.newOtsReelsText = page.getByText('New: OTS Reels');
  111 |     this.watchHowItWorksText = page.getByText('Watch How It Works');
  112 |     this.contactEmailText = page.getByText('info@offtheschool.io');
  113 |     this.courseCountBadge = page.getByText('100+ Courses').first();
  114 | 
  115 |     // --- Footer ---
  116 |     this.stayUpdatedText = page.getByText('Stay UpdatedSubscribe to our');
  117 |     // FALLBACK nth: selectors.md uses filter + .nth(5) for footer tagline container
  118 |     this.footerTagline = page
  119 |       .locator('div')
  120 |       .filter({
  121 |         hasText:
  122 |           "Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere",
  123 |       })
  124 |       .nth(5);
  125 |   }
  126 | 
  127 |   async goto(url = 'https://edu.offtheschool.io/') {
  128 |     await this.page.goto(url);
  129 |     await this.heroJourneyText.first().waitFor({ state: 'visible' });
  130 |   }
  131 | 
  132 |   async searchChapters(query) {
  133 |     await this.searchInput.fill(query);
> 134 |     await this.searchInput.press('Enter');
      |                            ^ TimeoutError: locator.press: Timeout 15000ms exceeded.
  135 |   }
  136 | 
  137 |   async openHeaderMenu() {
  138 |     await this.headerMenuButton.click();
  139 |   }
  140 | 
  141 |   async clickHomeNav() {
  142 |     await this.homeNav.first().click();
  143 |   }
  144 | 
  145 |   async clickExploreNav() {
  146 |     await this.exploreNav.click();
  147 |   }
  148 | 
  149 |   async clickReelsNav() {
  150 |     await this.reelsNav.first().click();
  151 |   }
  152 | 
  153 |   async clickLogo() {
  154 |     await this.logo.first().click();
  155 |   }
  156 | 
  157 |   async clickRegisterMenuItem() {
  158 |     await this.openHeaderMenu();
  159 |     await this.registerMenuItem.click();
  160 |   }
  161 | 
  162 |   async clickDashboardMenuItem() {
  163 |     await this.openHeaderMenu();
  164 |     await this.dashboardMenuItem.click();
  165 |   }
  166 | 
  167 |   async clickStartLearningFree() {
  168 |     await this.startLearningFreeLink.click();
  169 |   }
  170 | 
  171 |   async clickGetStart() {
  172 |     await this.getStartLink.click();
  173 |   }
  174 | 
  175 |   async clickViewAllSkills() {
  176 |     await this.viewAllSkillsLink.click();
  177 |   }
  178 | 
  179 |   async clickDigitalSchoolCategory(name) {
  180 |     await this.page.getByRole('link', { name }).click();
  181 |   }
  182 | 
  183 |   async clickSkillCourse(name) {
  184 |     await this.page.getByRole('link', { name }).click();
  185 |   }
  186 | 
  187 |   async clickChannelLink(name) {
  188 |     await this.page.getByRole('link', { name }).click();
  189 |   }
  190 | 
  191 |   async clickFollowInstagram() {
  192 |     await this.followInstagramLink.click();
  193 |   }
  194 | 
  195 |   async clickSubscribe() {
  196 |     await this.subscribeLink.click();
  197 |   }
  198 | 
  199 |   async clickViewAllVideos() {
  200 |     await this.viewAllVideosLink.click();
  201 |   }
  202 | 
  203 |   async clickStartLearningExact() {
  204 |     await this.startLearningExactLink.click();
  205 |   }
  206 | 
  207 |   async clickSubscribeOurChannels() {
  208 |     await this.subscribeOurChannelsLink.click();
  209 |   }
  210 | }
  211 | 
```