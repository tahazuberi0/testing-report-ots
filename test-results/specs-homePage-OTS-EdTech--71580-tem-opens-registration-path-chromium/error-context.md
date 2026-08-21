# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_010: Register menuitem opens registration path
- Location: tests\specs\homePage.spec.js:233:3

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('[id^="menu-button-"]').first()
    - locator resolved to <button type="button" aria-haspopup="menu" id="menu-button-:rp:" aria-expanded="false" aria-controls="menu-list-:rp:" class="chakra-button chakra-menu__menu-button css-s69f2w">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" class="chakra-modal__content-container css-wl0d9u">…</div> from <div class="chakra-portal">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" class="chakra-modal__content-container css-wl0d9u">…</div> from <div class="chakra-portal">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    3 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" class="chakra-modal__content-container css-wl0d9u">…</div> from <div class="chakra-portal">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms

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
            - generic [ref=e64] [cursor=pointer]:
              - img [ref=e67]
              - paragraph [ref=e69]: Maths
            - generic [ref=e71] [cursor=pointer]:
              - img [ref=e74]
              - paragraph [ref=e76]: Urdu
            - generic [ref=e78] [cursor=pointer]:
              - img [ref=e81]
              - paragraph [ref=e83]: Computer
            - generic [ref=e85] [cursor=pointer]:
              - img [ref=e88]
              - paragraph [ref=e90]: English
            - generic [ref=e92] [cursor=pointer]:
              - img [ref=e95]
              - paragraph [ref=e97]: Physics
            - generic [ref=e99] [cursor=pointer]:
              - img [ref=e102]
              - paragraph [ref=e104]: Biology
            - generic [ref=e106] [cursor=pointer]:
              - img [ref=e109]
              - paragraph [ref=e111]: Science
            - generic [ref=e113] [cursor=pointer]:
              - img [ref=e116]
              - paragraph [ref=e118]: Chemistry
          - generic [ref=e120]:
            - generic [ref=e122]:
              - img [ref=e123]
              - paragraph [ref=e125]: Pakistan's First Free EdTech Platform
              - img [ref=e126]
            - heading [level=2] [ref=e129]: Your Journey to
            - paragraph [ref=e132]: Free,world-class education for every student in Pakistan from Kindergarten to Class 12 with interactive lessons & expert teachers.
            - generic [ref=e135]:
              - generic:
                - img
              - textbox [ref=e136]:
                - /placeholder: Search chapters by title (e.g., Grammar, Algebra)
            - generic [ref=e137]:
              - link [ref=e138] [cursor=pointer]:
                - /url: /explore
                - text: Start Learning — It's Free
                - img [ref=e140]
              - link [ref=e142] [cursor=pointer]:
                - /url: /reels
                - img [ref=e144]
                - text: "New: OTS Reels"
              - link [ref=e146] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - img [ref=e148]
                - text: Watch How It Works
        - generic [ref=e153]:
          - generic [ref=e154]:
            - generic [ref=e155]:
              - paragraph [ref=e156]: Explore School
              - paragraph [ref=e157]: Digital School
            - link [ref=e159] [cursor=pointer]:
              - /url: /explore/digitalschool
              - img [ref=e161]
              - text: View All Categories
          - generic [ref=e166]:
            - link [ref=e168] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e173]:
                - generic [ref=e174]:
                  - img [ref=e176]
                  - paragraph [ref=e179]: Kindergarten
                  - paragraph [ref=e180]: Early learning and foundational skills for young learners
                - generic [ref=e181]:
                  - paragraph [ref=e182]: 50+ Courses
                  - img [ref=e184]
            - link [ref=e187] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e192]:
                - generic [ref=e193]:
                  - img [ref=e195]
                  - paragraph [ref=e198]: Primary
                  - paragraph [ref=e199]: Classes 1-5 with core subjects and activities
                - generic [ref=e200]:
                  - paragraph [ref=e201]: 80+ Courses
                  - img [ref=e203]
            - link [ref=e206] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e211]:
                - generic [ref=e212]:
                  - img [ref=e214]
                  - paragraph [ref=e217]: Secondary
                  - paragraph [ref=e218]: Classes 6-8 with comprehensive academic courses
                - generic [ref=e219]:
                  - paragraph [ref=e220]: 100+ Courses
                  - img [ref=e222]
            - link [ref=e225] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e230]:
                - generic [ref=e231]:
                  - img [ref=e233]
                  - paragraph [ref=e236]: Higher Secondary
                  - paragraph [ref=e237]: Classes 9-12 with advanced subjects and career prep
                - generic [ref=e238]:
                  - paragraph [ref=e239]: 120+ Courses
                  - img [ref=e241]
          - generic [ref=e243]:
            - generic [ref=e244]:
              - paragraph [ref=e245]: Applied Learning
              - paragraph [ref=e246]: Skilled Courses
            - link [ref=e248] [cursor=pointer]:
              - /url: /explore/skilledbased
              - img [ref=e250]
              - text: View All Skills
          - generic [ref=e255]:
            - link [ref=e257] [cursor=pointer]:
              - /url: /explore/skilledbased/tech/3/subject-details
              - generic [ref=e262]:
                - generic [ref=e263]:
                  - img [ref=e265]
                  - generic [ref=e267]:
                    - paragraph [ref=e268]: Tech
                    - paragraph [ref=e269]: Logic Building
                - generic [ref=e270]:
                  - paragraph [ref=e271]: 12 Topics
                  - img [ref=e273]
            - link [ref=e276] [cursor=pointer]:
              - /url: /explore/skilledbased/arts-&-media/4/subject-details
              - generic [ref=e281]:
                - generic [ref=e282]:
                  - img [ref=e284]
                  - generic [ref=e286]:
                    - paragraph [ref=e287]: Arts & Media
                    - paragraph [ref=e288]: Basic Design Theory
                - generic [ref=e289]:
                  - paragraph [ref=e290]: 12 Topics
                  - img [ref=e292]
            - link [ref=e295] [cursor=pointer]:
              - /url: /explore/skilledbased/languages/5/subject-details
              - generic [ref=e300]:
                - generic [ref=e301]:
                  - img [ref=e303]
                  - generic [ref=e305]:
                    - paragraph [ref=e306]: Languages
                    - paragraph [ref=e307]: English Language
                - generic [ref=e308]:
                  - paragraph [ref=e309]: 12 Topics
                  - img [ref=e311]
        - generic [ref=e315]:
          - generic [ref=e316]:
            - paragraph [ref=e317]: Our Impact
            - paragraph [ref=e318]: Numbers That Speak
            - paragraph [ref=e319]: Transforming education across Pakistan with accessible, quality learning
          - generic [ref=e320]:
            - generic [ref=e324]:
              - img [ref=e326]
              - generic [ref=e332]:
                - paragraph [ref=e333]: "0"
                - paragraph [ref=e334]: +
              - paragraph [ref=e335]: Active Students
            - generic [ref=e339]:
              - img [ref=e341]
              - generic [ref=e345]:
                - paragraph [ref=e346]: "0"
                - paragraph [ref=e347]: +
              - paragraph [ref=e348]: EdTech videos
            - generic [ref=e352]:
              - img [ref=e354]
              - generic [ref=e358]:
                - paragraph [ref=e359]: "0"
                - paragraph [ref=e360]: +
              - paragraph [ref=e361]: lessons covered
            - generic [ref=e365]:
              - img [ref=e367]
              - generic [ref=e370]:
                - paragraph [ref=e371]: "0"
                - paragraph [ref=e372]: +
              - paragraph [ref=e373]: Educators
            - generic [ref=e377]:
              - img [ref=e379]
              - generic [ref=e383]:
                - paragraph [ref=e384]: "0"
                - paragraph [ref=e385]: +
              - paragraph [ref=e386]: App Downloads
        - generic [ref=e390]:
          - generic [ref=e391]:
            - paragraph [ref=e392]: Why Choose Us
            - paragraph [ref=e393]: Everything You Need to Succeed
            - paragraph [ref=e394]: Discover why thousands of students trust OTS for their educational journey. Our platform is designed to make learning effective, engaging, and accessible.
          - generic [ref=e395]:
            - generic [ref=e400] [cursor=pointer]:
              - img [ref=e402]
              - paragraph [ref=e404]: Interactive Video Lessons
              - paragraph [ref=e405]: Engaging video content with visual explanations that make complex concepts easy to understand.
              - generic [ref=e406]:
                - paragraph [ref=e407]: Learn More
                - paragraph [ref=e408]: →
            - generic [ref=e413] [cursor=pointer]:
              - img [ref=e415]
              - paragraph [ref=e417]: Complete Curriculum
              - paragraph [ref=e418]: From KG to Class 12, covering all subjects aligned with Sindh Board, Agha Khan, and Cambridge.
              - generic [ref=e419]:
                - paragraph [ref=e420]: Learn More
                - paragraph [ref=e421]: →
            - generic [ref=e426] [cursor=pointer]:
              - img [ref=e428]
              - paragraph [ref=e430]: Learn Anywhere
              - paragraph [ref=e431]: Access lessons on any device - mobile, tablet, or desktop. Learn on the go with our app.
              - generic [ref=e432]:
                - paragraph [ref=e433]: Learn More
                - paragraph [ref=e434]: →
            - generic [ref=e439] [cursor=pointer]:
              - img [ref=e441]
              - paragraph [ref=e444]: Quizzes & Assessments
              - paragraph [ref=e445]: Test your knowledge with interactive quizzes and track your progress with detailed analytics.
              - generic [ref=e446]:
                - paragraph [ref=e447]: Learn More
                - paragraph [ref=e448]: →
            - generic [ref=e453] [cursor=pointer]:
              - img [ref=e455]
              - paragraph [ref=e457]: Expert Teachers
              - paragraph [ref=e458]: Learn from qualified educators with years of experience in their respective fields.
              - generic [ref=e459]:
                - paragraph [ref=e460]: Learn More
                - paragraph [ref=e461]: →
            - generic [ref=e466] [cursor=pointer]:
              - img [ref=e468]
              - paragraph [ref=e471]: Learn at Your Pace
              - paragraph [ref=e472]: No deadlines, no pressure. Study whenever and wherever suits you best.
              - generic [ref=e473]:
                - paragraph [ref=e474]: Learn More
                - paragraph [ref=e475]: →
            - generic [ref=e480] [cursor=pointer]:
              - img [ref=e482]
              - paragraph [ref=e484]: Safe & Secure
              - paragraph [ref=e485]: Kid-friendly environment with no ads or inappropriate content. Safe for all ages.
              - generic [ref=e486]:
                - paragraph [ref=e487]: Learn More
                - paragraph [ref=e488]: →
            - generic [ref=e493] [cursor=pointer]:
              - img [ref=e495]
              - paragraph [ref=e497]: 100% Free Forever
              - paragraph [ref=e498]: Quality education should be accessible to everyone. All content is completely free.
              - generic [ref=e499]:
                - paragraph [ref=e500]: Learn More
                - paragraph [ref=e501]: →
        - generic [ref=e504]:
          - generic [ref=e505]:
            - paragraph [ref=e506]: The learning Flow
            - paragraph [ref=e507]: How It Works
            - paragraph [ref=e508]: Start your learning journey in just a few simple steps
          - generic [ref=e509]:
            - generic [ref=e511]:
              - generic [ref=e512]:
                - img [ref=e515]
                - generic [ref=e518]: "1"
              - generic [ref=e519]:
                - paragraph [ref=e520]: Create Account
                - paragraph [ref=e521]: Sign up for free in seconds. No credit card required.
            - generic [ref=e525]:
              - generic [ref=e526]:
                - img [ref=e529]
                - generic [ref=e532]: "2"
              - generic [ref=e533]:
                - paragraph [ref=e534]: Choose Your Class
                - paragraph [ref=e535]: Select your grade level and subjects you want to learn.
            - generic [ref=e539]:
              - generic [ref=e540]:
                - img [ref=e543]
                - generic [ref=e545]: "3"
              - generic [ref=e546]:
                - paragraph [ref=e547]: Start Learning
                - paragraph [ref=e548]: Watch engaging video lessons and practise with quizzes.
            - generic [ref=e552]:
              - generic [ref=e553]:
                - img [ref=e556]
                - generic [ref=e559]: "4"
              - generic [ref=e560]:
                - paragraph [ref=e561]: Track Progress
                - paragraph [ref=e562]: Monitor your improvement and celebrate your achievements.
          - link [ref=e564] [cursor=pointer]:
            - /url: /signup
            - text: Get Start
            - img [ref=e566]
        - generic [ref=e571]:
          - generic [ref=e572]:
            - generic [ref=e573]:
              - img [ref=e574]
              - paragraph [ref=e576]: Video Lessons
            - heading [level=2] [ref=e577]: Our YouTube Learning Hub
            - paragraph [ref=e578]: Explore our educational content and empower your learning journey with free video lessons.
          - generic [ref=e581]:
            - generic [ref=e582]:
              - img [ref=e584]
              - generic [ref=e585]:
                - heading [level=3] [ref=e586]: Loading...
                - generic [ref=e587]:
                  - generic [ref=e588]:
                    - img [ref=e589]
                    - paragraph [ref=e594]: Loading... Subs
                  - paragraph [ref=e595]: •
                  - generic [ref=e596]:
                    - img [ref=e597]
                    - paragraph [ref=e600]: Loading... Videos
                  - paragraph [ref=e601]: •
                  - generic [ref=e602]:
                    - img [ref=e603]
                    - paragraph [ref=e606]: Loading... Views
            - link [ref=e607] [cursor=pointer]:
              - /url: https://www.youtube.com/@otsedtech?sub_confirmation=1
              - img [ref=e609]
              - text: Subscribe
          - generic [ref=e611]:
            - link [ref=e612] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=d0aNEJfvH_o
              - generic [ref=e613]:
                - generic [ref=e615]:
                  - img [ref=e616]
                  - img [ref=e620]
                  - generic [ref=e622]: HD
                - generic [ref=e623]:
                  - paragraph [ref=e624]: Chapter 04 | Iteration/Loop | 10th Class | Computer | Sindh Board | @otsedtech
                  - generic [ref=e625]:
                    - generic [ref=e626]:
                      - img [ref=e627]
                      - paragraph [ref=e630]: 23K views
                    - paragraph [ref=e631]: •
                    - paragraph [ref=e632]: Off The School
            - link [ref=e633] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=mAGGOmv75hw
              - generic [ref=e634]:
                - generic [ref=e636]:
                  - img [ref=e637]
                  - img [ref=e641]
                  - generic [ref=e643]: HD
                - generic [ref=e644]:
                  - paragraph [ref=e645]: "Chapter 20: Theory of Quadratic Equations | Exercise 20.3 | 10th Class | Sindh Board | @otsedtech"
                  - generic [ref=e646]:
                    - generic [ref=e647]:
                      - img [ref=e648]
                      - paragraph [ref=e651]: 57K views
                    - paragraph [ref=e652]: •
                    - paragraph [ref=e653]: Off The School
            - link [ref=e654] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=VCtBlSio-eQ
              - generic [ref=e655]:
                - generic [ref=e657]:
                  - img [ref=e658]
                  - img [ref=e662]
                  - generic [ref=e664]: HD
                - generic [ref=e665]:
                  - paragraph [ref=e666]: "Unit 1: The Voice of God | 10th Class | English | Sindh Board | @otsedtech"
                  - generic [ref=e667]:
                    - generic [ref=e668]:
                      - img [ref=e669]
                      - paragraph [ref=e672]: 49K views
                    - paragraph [ref=e673]: •
                    - paragraph [ref=e674]: Off The School
            - link [ref=e675] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=IhpDT9_eMzE
              - generic [ref=e676]:
                - generic [ref=e678]:
                  - img [ref=e679]
                  - img [ref=e683]
                  - generic [ref=e685]: HD
                - generic [ref=e686]:
                  - paragraph [ref=e687]: Ideology of Pakistan | 10th Class | PST | Sindh Board | @otsedtech
                  - generic [ref=e688]:
                    - generic [ref=e689]:
                      - img [ref=e690]
                      - paragraph [ref=e693]: 18K views
                    - paragraph [ref=e694]: •
                    - paragraph [ref=e695]: Off The School
            - link [ref=e696] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=gjGaI5szJGA
              - generic [ref=e697]:
                - generic [ref=e699]:
                  - img [ref=e700]
                  - img [ref=e704]
                  - generic [ref=e706]: HD
                - generic [ref=e707]:
                  - paragraph [ref=e708]: Homeostasis | 10th Class | Biology | Sindh Board | @otsedtech
                  - generic [ref=e709]:
                    - generic [ref=e710]:
                      - img [ref=e711]
                      - paragraph [ref=e714]: 31K views
                    - paragraph [ref=e715]: •
                    - paragraph [ref=e716]: Off The School
            - link [ref=e717] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=j_1_V5vrBOE
              - generic [ref=e718]:
                - generic [ref=e720]:
                  - img [ref=e721]
                  - img [ref=e725]
                  - generic [ref=e727]: HD
                - generic [ref=e728]:
                  - paragraph [ref=e729]: 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝟗𝐭𝐡 𝐂𝐡𝐞𝐦𝐢𝐬𝐭𝐫𝐲 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐍𝐨𝐭𝐞𝐬 | @otsedtech | @Off-The-School
                  - generic [ref=e730]:
                    - generic [ref=e731]:
                      - img [ref=e732]
                      - paragraph [ref=e735]: 57K views
                    - paragraph [ref=e736]: •
                    - paragraph [ref=e737]: Off The School
          - link [ref=e739] [cursor=pointer]:
            - /url: https://www.youtube.com/@otsedtech
            - text: View All Videos
            - img [ref=e741]
        - generic [ref=e746]:
          - generic [ref=e747]:
            - generic [ref=e749]: Daily Micro Learning
            - heading [level=2] [ref=e752]: Learn Something New In A Minute
            - paragraph [ref=e754]: Scroll, Tap and Learn.
            - link [ref=e756] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - img [ref=e758]
              - text: Follow us on Instagram
          - generic [ref=e761]:
            - generic [ref=e763] [cursor=pointer]:
              - generic [ref=e764]:
                - img [ref=e765]
                - generic [ref=e767]:
                  - paragraph [ref=e768]: Our Tech Is Killing Us
                  - generic [ref=e769]:
                    - generic [ref=e770]:
                      - img [ref=e771]
                      - paragraph [ref=e774]: 5.4K
                    - generic [ref=e775]:
                      - img [ref=e776]
                      - paragraph [ref=e778]: Flip to watch
              - generic [ref=e781]:
                - img [ref=e782]
                - paragraph [ref=e785]: Watch on Instagram
                - link [ref=e786]:
                  - /url: https://www.instagram.com/reel/DT77VXwDxgs/
                  - text: Watch Reel
                  - img [ref=e788]
            - generic [ref=e793] [cursor=pointer]:
              - generic [ref=e794]:
                - img [ref=e795]
                - generic [ref=e797]:
                  - paragraph [ref=e798]: Japan's 1,500 Quakes Explained
                  - generic [ref=e799]:
                    - generic [ref=e800]:
                      - img [ref=e801]
                      - paragraph [ref=e804]: 9.1K
                    - generic [ref=e805]:
                      - img [ref=e806]
                      - paragraph [ref=e808]: Flip to watch
              - generic [ref=e811]:
                - img [ref=e812]
                - paragraph [ref=e815]: Watch on Instagram
                - link [ref=e816]:
                  - /url: https://www.instagram.com/reel/DTnGeWAFCR5/
                  - text: Watch Reel
                  - img [ref=e818]
            - generic [ref=e823] [cursor=pointer]:
              - generic [ref=e824]:
                - img [ref=e825]
                - generic [ref=e827]:
                  - paragraph [ref=e828]: "GenZ's Pakistan: From Consumer to Creator"
                  - generic [ref=e829]:
                    - generic [ref=e830]:
                      - img [ref=e831]
                      - paragraph [ref=e834]: 5.8K
                    - generic [ref=e835]:
                      - img [ref=e836]
                      - paragraph [ref=e838]: Flip to watch
              - generic [ref=e841]:
                - img [ref=e842]
                - paragraph [ref=e845]: Watch on Instagram
                - link [ref=e846]:
                  - /url: https://www.instagram.com/reel/DQ4Av80CONR/
                  - text: Watch Reel
                  - img [ref=e848]
            - generic [ref=e853] [cursor=pointer]:
              - generic [ref=e854]:
                - img [ref=e855]
                - generic [ref=e857]:
                  - paragraph [ref=e858]: The Eco Friendly Currency
                  - generic [ref=e859]:
                    - generic [ref=e860]:
                      - img [ref=e861]
                      - paragraph [ref=e864]: 6.7K
                    - generic [ref=e865]:
                      - img [ref=e866]
                      - paragraph [ref=e868]: Flip to watch
              - generic [ref=e871]:
                - img [ref=e872]
                - paragraph [ref=e875]: Watch on Instagram
                - link [ref=e876]:
                  - /url: https://www.instagram.com/reel/DQO6WC5ATaN/
                  - text: Watch Reel
                  - img [ref=e878]
          - generic [ref=e883]:
            - generic [ref=e884]:
              - paragraph [ref=e885]: 0s
              - paragraph [ref=e886]: Avg reel length
            - generic [ref=e887]:
              - paragraph [ref=e888]: 0+
              - paragraph [ref=e889]: Concepts simplified
            - generic [ref=e890]:
              - paragraph [ref=e891]: 0K+
              - paragraph [ref=e892]: Monthly views
            - link [ref=e894] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - generic [ref=e895]: Start Learning
              - img [ref=e897]
        - generic [ref=e904]:
          - generic [ref=e905]:
            - generic [ref=e906]:
              - generic [ref=e907]: 
              - text: Our YouTube Channels
            - heading [level=2] [ref=e908]:
              - generic [ref=e909]: Explore Our
              - text: Educational Network
            - paragraph [ref=e910]: Discover our diverse range of YouTube channels, each dedicated to different aspects of education and learning
          - generic [ref=e911]:
            - generic [ref=e912]:
              - link [ref=e914] [cursor=pointer]:
                - /url: https://www.youtube.com/@Off-The-School
                - generic [ref=e916]:
                  - generic [ref=e917]:
                    - img [ref=e919]
                    - img [ref=e922]
                  - paragraph [ref=e924]: Off The School
                  - paragraph [ref=e925]: Comprehensive educational content
                  - img [ref=e926]
              - link [ref=e929] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsednews
                - generic [ref=e931]:
                  - generic [ref=e932]:
                    - img [ref=e934]
                    - img [ref=e937]
                  - paragraph [ref=e939]: EdNews
                  - paragraph [ref=e940]: Latest education sector updates
                  - img [ref=e941]
            - generic [ref=e943]:
              - link [ref=e945] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - generic [ref=e947]:
                  - generic [ref=e948]:
                    - img [ref=e950]
                    - img [ref=e953]
                  - paragraph [ref=e955]: EdTech
                  - paragraph [ref=e956]: Technology-driven education
                  - img [ref=e957]
              - link [ref=e960] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedsense
                - generic [ref=e962]:
                  - generic [ref=e963]:
                    - img [ref=e965]
                    - img [ref=e968]
                  - paragraph [ref=e970]: EdSense
                  - paragraph [ref=e971]: Educational insights & discussions
                  - img [ref=e972]
              - link [ref=e975] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedfun
                - generic [ref=e977]:
                  - generic [ref=e978]:
                    - img [ref=e980]
                    - img [ref=e983]
                  - paragraph [ref=e985]: EdFun
                  - paragraph [ref=e986]: Fun & engaging learning
                  - img [ref=e987]
          - link [ref=e990] [cursor=pointer]:
            - /url: https://www.youtube.com/@Off-The-School
            - img [ref=e992]
            - text: Subscribe Our Channels
        - generic [ref=e998]:
          - generic [ref=e1002]:
            - generic [ref=e1004]:
              - img [ref=e1005]
              - paragraph [ref=e1008]: Stay Updated
            - heading [level=2] [ref=e1010]:
              - generic [ref=e1011]: Subscribe to our
              - text: Newsletter
            - paragraph [ref=e1013]: Get the latest educational tips, course updates, and exclusive content delivered straight to your inbox.
            - generic [ref=e1015]:
              - textbox [ref=e1016]:
                - /placeholder: Enter your email address
              - button [ref=e1017] [cursor=pointer]:
                - text: Subscribe
                - img [ref=e1019]
            - paragraph [ref=e1023]: 🔒 No spam, unsubscribe anytime
          - generic [ref=e1025]:
            - img [ref=e1028]
            - heading [level=2] [ref=e1031]: Oops!
            - button [ref=e1032] [cursor=pointer]: Try Again
        - generic [ref=e1038]:
          - generic [ref=e1039]:
            - generic [ref=e1041]:
              - img [ref=e1042]
              - paragraph [ref=e1044]: Download Our App
            - paragraph [ref=e1046]: Learning Together
            - paragraph [ref=e1048]: Download our mobile app and access all courses offline. Learn anytime, anywhere with a seamless experience.
            - generic [ref=e1049]:
              - generic [ref=e1050]:
                - img [ref=e1051]
                - img [ref=e1053]
                - img [ref=e1055]
                - img [ref=e1057]
                - img [ref=e1059]
              - paragraph [ref=e1061]: 4.9 • 1000+ Reviews
            - generic [ref=e1062]:
              - link [ref=e1063] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.otsapp
                - img [ref=e1065]
                - generic [ref=e1067]:
                  - paragraph [ref=e1068]: GET IT ON
                  - paragraph [ref=e1069]: Google Play
              - link [ref=e1070] [cursor=pointer]:
                - /url: /signup
                - text: Try Web Version
                - img [ref=e1072]
          - img [ref=e1077]
        - generic [ref=e1079]:
          - generic [ref=e1080]:
            - generic [ref=e1082]:
              - img [ref=e1084]
              - paragraph [ref=e1085]: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
              - generic [ref=e1086]:
                - paragraph [ref=e1087]: Stay Updated
                - generic [ref=e1088]:
                  - textbox [ref=e1089]:
                    - /placeholder: Enter your email
                  - button [ref=e1090] [cursor=pointer]:
                    - img [ref=e1091]
              - generic [ref=e1095]:
                - link [ref=e1096] [cursor=pointer]:
                  - /url: https://www.facebook.com/OTS.Edtech/
                  - img [ref=e1097]
                - link [ref=e1099] [cursor=pointer]:
                  - /url: https://x.com/offtheschool
                  - img [ref=e1100]
                - link [ref=e1102] [cursor=pointer]:
                  - /url: https://www.instagram.com/otsedtech/
                  - img [ref=e1103]
                - link [ref=e1105] [cursor=pointer]:
                  - /url: https://linkedin.com/company/off-the-school/
                  - img [ref=e1106]
                - link [ref=e1108] [cursor=pointer]:
                  - /url: https://www.youtube.com/@otsedtech
                  - img [ref=e1109]
            - generic [ref=e1112]:
              - heading [level=4] [ref=e1113]: Quick Links
              - generic [ref=e1114]:
                - link [ref=e1115] [cursor=pointer]:
                  - /url: /aboutus
                  - img [ref=e1116]
                  - text: About Us
                - link [ref=e1119] [cursor=pointer]:
                  - /url: /contactus
                  - img [ref=e1120]
                  - text: Contact
                - link [ref=e1123] [cursor=pointer]:
                  - /url: /faq
                  - img [ref=e1124]
                  - text: FAQ
                - link [ref=e1127] [cursor=pointer]:
                  - /url: /privacy-policy
                  - img [ref=e1128]
                  - text: Privacy Policy
                - link [ref=e1131] [cursor=pointer]:
                  - /url: /terms-of-use
                  - img [ref=e1132]
                  - text: Terms of Use
            - generic [ref=e1136]:
              - heading [level=4] [ref=e1137]: Contact Us
              - generic [ref=e1138]:
                - generic [ref=e1139]:
                  - img [ref=e1141]
                  - paragraph [ref=e1144]: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
                - generic [ref=e1145]:
                  - img [ref=e1147]
                  - link [ref=e1150] [cursor=pointer]:
                    - /url: mailto:info@offtheschool.io
                    - text: info@offtheschool.io
                - generic [ref=e1151]:
                  - img [ref=e1153]
                  - link [ref=e1155] [cursor=pointer]:
                    - /url: tel:+923010687687
                    - text: +92 301 0687687
            - generic [ref=e1157]:
              - heading [level=4] [ref=e1158]: Download App
              - generic [ref=e1159]:
                - paragraph [ref=e1160]: Get our app for a better learning experience
                - generic [ref=e1162]:
                  - img [ref=e1163]
                  - generic [ref=e1164]:
                    - paragraph [ref=e1165]: Scan to Download
                    - link [ref=e1166] [cursor=pointer]:
                      - /url: https://play.google.com/store
                      - img [ref=e1167]
          - generic [ref=e1169]:
            - paragraph [ref=e1170]: © 2026 Off The School. All rights reserved.
            - generic [ref=e1171]:
              - link [ref=e1172] [cursor=pointer]:
                - /url: /privacy-policy
                - text: Privacy
              - link [ref=e1173] [cursor=pointer]:
                - /url: /terms-of-use
                - text: Terms
              - link [ref=e1174] [cursor=pointer]:
                - /url: /faq
                - text: FAQ
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
  - dialog [ref=e1177]:
    - generic [ref=e1179]:
      - button "Close" [active] [ref=e1184] [cursor=pointer]:
        - img [ref=e1185]
      - img "Off The School App" [ref=e1193]
      - generic [ref=e1195]:
        - generic [ref=e1197]:
          - img [ref=e1198]
          - paragraph [ref=e1200]: Off The School App
        - heading "Start Learning Smarter Anytime, Anywhere" [level=2] [ref=e1202]:
          - text: Start Learning Smarter
          - text: Anytime, Anywhere
        - paragraph [ref=e1204]: Download our app and unlock courses, quizzes, and a personalized learning experience.
        - generic [ref=e1205]:
          - generic [ref=e1207]:
            - img [ref=e1208]
            - paragraph [ref=e1210]: 100+ Courses
          - generic [ref=e1212]:
            - img [ref=e1213]
            - paragraph [ref=e1215]: Free Download
        - generic [ref=e1217]:
          - img [ref=e1218]
          - img [ref=e1220]
          - img [ref=e1222]
          - img [ref=e1224]
          - img [ref=e1226]
          - paragraph [ref=e1228]: 4.8 Rating
        - link "Google Play Get it on Google Play" [ref=e1230] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.otsapp
          - generic [ref=e1232]:
            - img "Google Play" [ref=e1233]
            - generic [ref=e1234]:
              - paragraph [ref=e1235]: Get it on
              - paragraph [ref=e1236]: Google Play
```

# Test source

```ts
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
  134 |     await this.searchInput.press('Enter');
  135 |   }
  136 | 
  137 |   async openHeaderMenu() {
> 138 |     await this.headerMenuButton.click();
      |                                 ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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