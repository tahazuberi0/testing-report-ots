# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_004: Empty search query does not crash the homepage
- Location: tests\specs\homePage.spec.js:106:3

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
              - generic [ref=e132]: Growth
            - paragraph [ref=e134]: Free,world-class education for every student in Pakistan from Kindergarten to Class 12 with interactive lessons & expert teachers.
            - generic [ref=e136]:
              - generic [ref=e137]:
                - generic:
                  - img
                - textbox [ref=e138]:
                  - /placeholder: Search chapters by title (e.g., Grammar, Algebra)
              - generic [ref=e139]:
                - paragraph [ref=e140]: Browse by Class
                - generic [ref=e141]:
                  - button [ref=e142] [cursor=pointer]: Class 1
                  - button [ref=e143] [cursor=pointer]: Class 2
                  - button [ref=e144] [cursor=pointer]: Class 3
                  - button [ref=e145] [cursor=pointer]: Class 4
                  - button [ref=e146] [cursor=pointer]: Class 5
                  - button [ref=e147] [cursor=pointer]: Class 6
                  - button [ref=e148] [cursor=pointer]: Class 7
                  - button [ref=e149] [cursor=pointer]: Class 8
                  - button [ref=e150] [cursor=pointer]: Class 9
                  - button [ref=e151] [cursor=pointer]: Class 10
                  - button [ref=e152] [cursor=pointer]: Class 11
                  - button [ref=e153] [cursor=pointer]: class 12
            - generic [ref=e154]:
              - link [ref=e155] [cursor=pointer]:
                - /url: /explore
                - text: Start Learning — It's Free
                - img [ref=e157]
              - link [ref=e159] [cursor=pointer]:
                - /url: /reels
                - img [ref=e161]
                - text: "New: OTS Reels"
              - link [ref=e163] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - img [ref=e165]
                - text: Watch How It Works
        - generic [ref=e170]:
          - generic [ref=e171]:
            - generic [ref=e172]:
              - paragraph [ref=e173]: Explore School
              - paragraph [ref=e174]: Digital School
            - link [ref=e176] [cursor=pointer]:
              - /url: /explore/digitalschool
              - img [ref=e178]
              - text: View All Categories
          - generic [ref=e183]:
            - link [ref=e185] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e190]:
                - generic [ref=e191]:
                  - img [ref=e193]
                  - paragraph [ref=e196]: Kindergarten
                  - paragraph [ref=e197]: Early learning and foundational skills for young learners
                - generic [ref=e198]:
                  - paragraph [ref=e199]: 50+ Courses
                  - img [ref=e201]
            - link [ref=e204] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e209]:
                - generic [ref=e210]:
                  - img [ref=e212]
                  - paragraph [ref=e215]: Primary
                  - paragraph [ref=e216]: Classes 1-5 with core subjects and activities
                - generic [ref=e217]:
                  - paragraph [ref=e218]: 80+ Courses
                  - img [ref=e220]
            - link [ref=e223] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e228]:
                - generic [ref=e229]:
                  - img [ref=e231]
                  - paragraph [ref=e234]: Secondary
                  - paragraph [ref=e235]: Classes 6-8 with comprehensive academic courses
                - generic [ref=e236]:
                  - paragraph [ref=e237]: 100+ Courses
                  - img [ref=e239]
            - link [ref=e242] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e247]:
                - generic [ref=e248]:
                  - img [ref=e250]
                  - paragraph [ref=e253]: Higher Secondary
                  - paragraph [ref=e254]: Classes 9-12 with advanced subjects and career prep
                - generic [ref=e255]:
                  - paragraph [ref=e256]: 120+ Courses
                  - img [ref=e258]
          - generic [ref=e260]:
            - generic [ref=e261]:
              - paragraph [ref=e262]: Applied Learning
              - paragraph [ref=e263]: Skilled Courses
            - link [ref=e265] [cursor=pointer]:
              - /url: /explore/skilledbased
              - img [ref=e267]
              - text: View All Skills
          - generic [ref=e272]:
            - link [ref=e274] [cursor=pointer]:
              - /url: /explore/skilledbased/tech/3/subject-details
              - generic [ref=e279]:
                - generic [ref=e280]:
                  - img [ref=e282]
                  - generic [ref=e284]:
                    - paragraph [ref=e285]: Tech
                    - paragraph [ref=e286]: Logic Building
                - generic [ref=e287]:
                  - paragraph [ref=e288]: 12 Topics
                  - img [ref=e290]
            - link [ref=e293] [cursor=pointer]:
              - /url: /explore/skilledbased/arts-&-media/4/subject-details
              - generic [ref=e298]:
                - generic [ref=e299]:
                  - img [ref=e301]
                  - generic [ref=e303]:
                    - paragraph [ref=e304]: Arts & Media
                    - paragraph [ref=e305]: Basic Design Theory
                - generic [ref=e306]:
                  - paragraph [ref=e307]: 12 Topics
                  - img [ref=e309]
            - link [ref=e312] [cursor=pointer]:
              - /url: /explore/skilledbased/languages/5/subject-details
              - generic [ref=e317]:
                - generic [ref=e318]:
                  - img [ref=e320]
                  - generic [ref=e322]:
                    - paragraph [ref=e323]: Languages
                    - paragraph [ref=e324]: English Language
                - generic [ref=e325]:
                  - paragraph [ref=e326]: 12 Topics
                  - img [ref=e328]
        - generic [ref=e332]:
          - generic [ref=e333]:
            - paragraph [ref=e334]: Our Impact
            - paragraph [ref=e335]: Numbers That Speak
            - paragraph [ref=e336]: Transforming education across Pakistan with accessible, quality learning
          - generic [ref=e337]:
            - generic [ref=e341]:
              - img [ref=e343]
              - generic [ref=e349]:
                - paragraph [ref=e350]: "0"
                - paragraph [ref=e351]: +
              - paragraph [ref=e352]: Active Students
            - generic [ref=e356]:
              - img [ref=e358]
              - generic [ref=e362]:
                - paragraph [ref=e363]: "0"
                - paragraph [ref=e364]: +
              - paragraph [ref=e365]: EdTech videos
            - generic [ref=e369]:
              - img [ref=e371]
              - generic [ref=e375]:
                - paragraph [ref=e376]: "0"
                - paragraph [ref=e377]: +
              - paragraph [ref=e378]: lessons covered
            - generic [ref=e382]:
              - img [ref=e384]
              - generic [ref=e387]:
                - paragraph [ref=e388]: "0"
                - paragraph [ref=e389]: +
              - paragraph [ref=e390]: Educators
            - generic [ref=e394]:
              - img [ref=e396]
              - generic [ref=e400]:
                - paragraph [ref=e401]: "0"
                - paragraph [ref=e402]: +
              - paragraph [ref=e403]: App Downloads
        - generic [ref=e407]:
          - generic [ref=e408]:
            - paragraph [ref=e409]: Why Choose Us
            - paragraph [ref=e410]: Everything You Need to Succeed
            - paragraph [ref=e411]: Discover why thousands of students trust OTS for their educational journey. Our platform is designed to make learning effective, engaging, and accessible.
          - generic [ref=e412]:
            - generic [ref=e417] [cursor=pointer]:
              - img [ref=e419]
              - paragraph [ref=e421]: Interactive Video Lessons
              - paragraph [ref=e422]: Engaging video content with visual explanations that make complex concepts easy to understand.
              - generic [ref=e423]:
                - paragraph [ref=e424]: Learn More
                - paragraph [ref=e425]: →
            - generic [ref=e430] [cursor=pointer]:
              - img [ref=e432]
              - paragraph [ref=e434]: Complete Curriculum
              - paragraph [ref=e435]: From KG to Class 12, covering all subjects aligned with Sindh Board, Agha Khan, and Cambridge.
              - generic [ref=e436]:
                - paragraph [ref=e437]: Learn More
                - paragraph [ref=e438]: →
            - generic [ref=e443] [cursor=pointer]:
              - img [ref=e445]
              - paragraph [ref=e447]: Learn Anywhere
              - paragraph [ref=e448]: Access lessons on any device - mobile, tablet, or desktop. Learn on the go with our app.
              - generic [ref=e449]:
                - paragraph [ref=e450]: Learn More
                - paragraph [ref=e451]: →
            - generic [ref=e456] [cursor=pointer]:
              - img [ref=e458]
              - paragraph [ref=e461]: Quizzes & Assessments
              - paragraph [ref=e462]: Test your knowledge with interactive quizzes and track your progress with detailed analytics.
              - generic [ref=e463]:
                - paragraph [ref=e464]: Learn More
                - paragraph [ref=e465]: →
            - generic [ref=e470] [cursor=pointer]:
              - img [ref=e472]
              - paragraph [ref=e474]: Expert Teachers
              - paragraph [ref=e475]: Learn from qualified educators with years of experience in their respective fields.
              - generic [ref=e476]:
                - paragraph [ref=e477]: Learn More
                - paragraph [ref=e478]: →
            - generic [ref=e483] [cursor=pointer]:
              - img [ref=e485]
              - paragraph [ref=e488]: Learn at Your Pace
              - paragraph [ref=e489]: No deadlines, no pressure. Study whenever and wherever suits you best.
              - generic [ref=e490]:
                - paragraph [ref=e491]: Learn More
                - paragraph [ref=e492]: →
            - generic [ref=e497] [cursor=pointer]:
              - img [ref=e499]
              - paragraph [ref=e501]: Safe & Secure
              - paragraph [ref=e502]: Kid-friendly environment with no ads or inappropriate content. Safe for all ages.
              - generic [ref=e503]:
                - paragraph [ref=e504]: Learn More
                - paragraph [ref=e505]: →
            - generic [ref=e510] [cursor=pointer]:
              - img [ref=e512]
              - paragraph [ref=e514]: 100% Free Forever
              - paragraph [ref=e515]: Quality education should be accessible to everyone. All content is completely free.
              - generic [ref=e516]:
                - paragraph [ref=e517]: Learn More
                - paragraph [ref=e518]: →
        - generic [ref=e521]:
          - generic [ref=e522]:
            - paragraph [ref=e523]: The learning Flow
            - paragraph [ref=e524]: How It Works
            - paragraph [ref=e525]: Start your learning journey in just a few simple steps
          - generic [ref=e526]:
            - generic [ref=e528]:
              - generic [ref=e529]:
                - img [ref=e532]
                - generic [ref=e535]: "1"
              - generic [ref=e536]:
                - paragraph [ref=e537]: Create Account
                - paragraph [ref=e538]: Sign up for free in seconds. No credit card required.
            - generic [ref=e542]:
              - generic [ref=e543]:
                - img [ref=e546]
                - generic [ref=e549]: "2"
              - generic [ref=e550]:
                - paragraph [ref=e551]: Choose Your Class
                - paragraph [ref=e552]: Select your grade level and subjects you want to learn.
            - generic [ref=e556]:
              - generic [ref=e557]:
                - img [ref=e560]
                - generic [ref=e562]: "3"
              - generic [ref=e563]:
                - paragraph [ref=e564]: Start Learning
                - paragraph [ref=e565]: Watch engaging video lessons and practise with quizzes.
            - generic [ref=e569]:
              - generic [ref=e570]:
                - img [ref=e573]
                - generic [ref=e576]: "4"
              - generic [ref=e577]:
                - paragraph [ref=e578]: Track Progress
                - paragraph [ref=e579]: Monitor your improvement and celebrate your achievements.
          - link [ref=e581] [cursor=pointer]:
            - /url: /signup
            - text: Get Start
            - img [ref=e583]
        - generic [ref=e588]:
          - generic [ref=e589]:
            - generic [ref=e590]:
              - img [ref=e591]
              - paragraph [ref=e593]: Video Lessons
            - heading [level=2] [ref=e594]: Our YouTube Learning Hub
            - paragraph [ref=e595]: Explore our educational content and empower your learning journey with free video lessons.
          - generic [ref=e598]:
            - generic [ref=e599]:
              - img [ref=e601]
              - generic [ref=e602]:
                - heading [level=3] [ref=e603]: Loading...
                - generic [ref=e604]:
                  - generic [ref=e605]:
                    - img [ref=e606]
                    - paragraph [ref=e611]: Loading... Subs
                  - paragraph [ref=e612]: •
                  - generic [ref=e613]:
                    - img [ref=e614]
                    - paragraph [ref=e617]: Loading... Videos
                  - paragraph [ref=e618]: •
                  - generic [ref=e619]:
                    - img [ref=e620]
                    - paragraph [ref=e623]: Loading... Views
            - link [ref=e624] [cursor=pointer]:
              - /url: https://www.youtube.com/@otsedtech?sub_confirmation=1
              - img [ref=e626]
              - text: Subscribe
          - generic [ref=e628]:
            - link [ref=e629] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=d0aNEJfvH_o
              - generic [ref=e630]:
                - generic [ref=e632]:
                  - img [ref=e633]
                  - img [ref=e637]
                  - generic [ref=e639]: HD
                - generic [ref=e640]:
                  - paragraph [ref=e641]: Chapter 04 | Iteration/Loop | 10th Class | Computer | Sindh Board | @otsedtech
                  - generic [ref=e642]:
                    - generic [ref=e643]:
                      - img [ref=e644]
                      - paragraph [ref=e647]: 16K views
                    - paragraph [ref=e648]: •
                    - paragraph [ref=e649]: Off The School
            - link [ref=e650] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=mAGGOmv75hw
              - generic [ref=e651]:
                - generic [ref=e653]:
                  - img [ref=e654]
                  - img [ref=e658]
                  - generic [ref=e660]: HD
                - generic [ref=e661]:
                  - paragraph [ref=e662]: "Chapter 20: Theory of Quadratic Equations | Exercise 20.3 | 10th Class | Sindh Board | @otsedtech"
                  - generic [ref=e663]:
                    - generic [ref=e664]:
                      - img [ref=e665]
                      - paragraph [ref=e668]: 38K views
                    - paragraph [ref=e669]: •
                    - paragraph [ref=e670]: Off The School
            - link [ref=e671] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=VCtBlSio-eQ
              - generic [ref=e672]:
                - generic [ref=e674]:
                  - img [ref=e675]
                  - img [ref=e679]
                  - generic [ref=e681]: HD
                - generic [ref=e682]:
                  - paragraph [ref=e683]: "Unit 1: The Voice of God | 10th Class | English | Sindh Board | @otsedtech"
                  - generic [ref=e684]:
                    - generic [ref=e685]:
                      - img [ref=e686]
                      - paragraph [ref=e689]: 19K views
                    - paragraph [ref=e690]: •
                    - paragraph [ref=e691]: Off The School
            - link [ref=e692] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=IhpDT9_eMzE
              - generic [ref=e693]:
                - generic [ref=e695]:
                  - img [ref=e696]
                  - img [ref=e700]
                  - generic [ref=e702]: HD
                - generic [ref=e703]:
                  - paragraph [ref=e704]: Ideology of Pakistan | 10th Class | PST | Sindh Board | @otsedtech
                  - generic [ref=e705]:
                    - generic [ref=e706]:
                      - img [ref=e707]
                      - paragraph [ref=e710]: 33K views
                    - paragraph [ref=e711]: •
                    - paragraph [ref=e712]: Off The School
            - link [ref=e713] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=gjGaI5szJGA
              - generic [ref=e714]:
                - generic [ref=e716]:
                  - img [ref=e717]
                  - img [ref=e721]
                  - generic [ref=e723]: HD
                - generic [ref=e724]:
                  - paragraph [ref=e725]: Homeostasis | 10th Class | Biology | Sindh Board | @otsedtech
                  - generic [ref=e726]:
                    - generic [ref=e727]:
                      - img [ref=e728]
                      - paragraph [ref=e731]: 19K views
                    - paragraph [ref=e732]: •
                    - paragraph [ref=e733]: Off The School
            - link [ref=e734] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=j_1_V5vrBOE
              - generic [ref=e735]:
                - generic [ref=e737]:
                  - img [ref=e738]
                  - img [ref=e742]
                  - generic [ref=e744]: HD
                - generic [ref=e745]:
                  - paragraph [ref=e746]: 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝟗𝐭𝐡 𝐂𝐡𝐞𝐦𝐢𝐬𝐭𝐫𝐲 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐍𝐨𝐭𝐞𝐬 | @otsedtech | @Off-The-School
                  - generic [ref=e747]:
                    - generic [ref=e748]:
                      - img [ref=e749]
                      - paragraph [ref=e752]: 31K views
                    - paragraph [ref=e753]: •
                    - paragraph [ref=e754]: Off The School
          - link [ref=e756] [cursor=pointer]:
            - /url: https://www.youtube.com/@otsedtech
            - text: View All Videos
            - img [ref=e758]
        - generic [ref=e763]:
          - generic [ref=e764]:
            - generic [ref=e766]: Daily Micro Learning
            - heading [level=2] [ref=e769]: Learn Something New In A Minute
            - paragraph [ref=e771]: Scroll, Tap and Learn.
            - link [ref=e773] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - img [ref=e775]
              - text: Follow us on Instagram
          - generic [ref=e778]:
            - generic [ref=e780] [cursor=pointer]:
              - generic [ref=e781]:
                - img [ref=e782]
                - generic [ref=e784]:
                  - paragraph [ref=e785]: Our Tech Is Killing Us
                  - generic [ref=e786]:
                    - generic [ref=e787]:
                      - img [ref=e788]
                      - paragraph [ref=e791]: 5.4K
                    - generic [ref=e792]:
                      - img [ref=e793]
                      - paragraph [ref=e795]: Flip to watch
              - generic [ref=e798]:
                - img [ref=e799]
                - paragraph [ref=e802]: Watch on Instagram
                - link [ref=e803]:
                  - /url: https://www.instagram.com/reel/DT77VXwDxgs/
                  - text: Watch Reel
                  - img [ref=e805]
            - generic [ref=e810] [cursor=pointer]:
              - generic [ref=e811]:
                - img [ref=e812]
                - generic [ref=e814]:
                  - paragraph [ref=e815]: Japan's 1,500 Quakes Explained
                  - generic [ref=e816]:
                    - generic [ref=e817]:
                      - img [ref=e818]
                      - paragraph [ref=e821]: 9.1K
                    - generic [ref=e822]:
                      - img [ref=e823]
                      - paragraph [ref=e825]: Flip to watch
              - generic [ref=e828]:
                - img [ref=e829]
                - paragraph [ref=e832]: Watch on Instagram
                - link [ref=e833]:
                  - /url: https://www.instagram.com/reel/DTnGeWAFCR5/
                  - text: Watch Reel
                  - img [ref=e835]
            - generic [ref=e840] [cursor=pointer]:
              - generic [ref=e841]:
                - img [ref=e842]
                - generic [ref=e844]:
                  - paragraph [ref=e845]: "GenZ's Pakistan: From Consumer to Creator"
                  - generic [ref=e846]:
                    - generic [ref=e847]:
                      - img [ref=e848]
                      - paragraph [ref=e851]: 5.8K
                    - generic [ref=e852]:
                      - img [ref=e853]
                      - paragraph [ref=e855]: Flip to watch
              - generic [ref=e858]:
                - img [ref=e859]
                - paragraph [ref=e862]: Watch on Instagram
                - link [ref=e863]:
                  - /url: https://www.instagram.com/reel/DQ4Av80CONR/
                  - text: Watch Reel
                  - img [ref=e865]
            - generic [ref=e870] [cursor=pointer]:
              - generic [ref=e871]:
                - img [ref=e872]
                - generic [ref=e874]:
                  - paragraph [ref=e875]: The Eco Friendly Currency
                  - generic [ref=e876]:
                    - generic [ref=e877]:
                      - img [ref=e878]
                      - paragraph [ref=e881]: 6.7K
                    - generic [ref=e882]:
                      - img [ref=e883]
                      - paragraph [ref=e885]: Flip to watch
              - generic [ref=e888]:
                - img [ref=e889]
                - paragraph [ref=e892]: Watch on Instagram
                - link [ref=e893]:
                  - /url: https://www.instagram.com/reel/DQO6WC5ATaN/
                  - text: Watch Reel
                  - img [ref=e895]
          - generic [ref=e900]:
            - generic [ref=e901]:
              - paragraph [ref=e902]: 0s
              - paragraph [ref=e903]: Avg reel length
            - generic [ref=e904]:
              - paragraph [ref=e905]: 0+
              - paragraph [ref=e906]: Concepts simplified
            - generic [ref=e907]:
              - paragraph [ref=e908]: 0K+
              - paragraph [ref=e909]: Monthly views
            - link [ref=e911] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - generic [ref=e912]: Start Learning
              - img [ref=e914]
        - generic [ref=e921]:
          - generic [ref=e922]:
            - generic [ref=e923]:
              - generic [ref=e924]: 
              - text: Our YouTube Channels
            - heading [level=2] [ref=e925]:
              - generic [ref=e926]: Explore Our
              - text: Educational Network
            - paragraph [ref=e927]: Discover our diverse range of YouTube channels, each dedicated to different aspects of education and learning
          - generic [ref=e928]:
            - generic [ref=e929]:
              - link [ref=e931] [cursor=pointer]:
                - /url: https://www.youtube.com/@Off-The-School
                - generic [ref=e933]:
                  - generic [ref=e934]:
                    - img [ref=e936]
                    - img [ref=e939]
                  - paragraph [ref=e941]: Off The School
                  - paragraph [ref=e942]: Comprehensive educational content
                  - img [ref=e943]
              - link [ref=e946] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsednews
                - generic [ref=e948]:
                  - generic [ref=e949]:
                    - img [ref=e951]
                    - img [ref=e954]
                  - paragraph [ref=e956]: EdNews
                  - paragraph [ref=e957]: Latest education sector updates
                  - img [ref=e958]
            - generic [ref=e960]:
              - link [ref=e962] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - generic [ref=e964]:
                  - generic [ref=e965]:
                    - img [ref=e967]
                    - img [ref=e970]
                  - paragraph [ref=e972]: EdTech
                  - paragraph [ref=e973]: Technology-driven education
                  - img [ref=e974]
              - link [ref=e977] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedsense
                - generic [ref=e979]:
                  - generic [ref=e980]:
                    - img [ref=e982]
                    - img [ref=e985]
                  - paragraph [ref=e987]: EdSense
                  - paragraph [ref=e988]: Educational insights & discussions
                  - img [ref=e989]
              - link [ref=e992] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedfun
                - generic [ref=e994]:
                  - generic [ref=e995]:
                    - img [ref=e997]
                    - img [ref=e1000]
                  - paragraph [ref=e1002]: EdFun
                  - paragraph [ref=e1003]: Fun & engaging learning
                  - img [ref=e1004]
          - link [ref=e1007] [cursor=pointer]:
            - /url: https://www.youtube.com/@Off-The-School
            - img [ref=e1009]
            - text: Subscribe Our Channels
        - generic [ref=e1015]:
          - generic [ref=e1019]:
            - generic [ref=e1021]:
              - img [ref=e1022]
              - paragraph [ref=e1025]: Stay Updated
            - heading [level=2] [ref=e1027]:
              - generic [ref=e1028]: Subscribe to our
              - text: Newsletter
            - paragraph [ref=e1030]: Get the latest educational tips, course updates, and exclusive content delivered straight to your inbox.
            - generic [ref=e1032]:
              - textbox [ref=e1033]:
                - /placeholder: Enter your email address
              - button [ref=e1034] [cursor=pointer]:
                - text: Subscribe
                - img [ref=e1036]
            - paragraph [ref=e1040]: 🔒 No spam, unsubscribe anytime
          - generic [ref=e1042]:
            - img [ref=e1045]
            - heading [level=2] [ref=e1048]: Oops!
            - button [ref=e1049] [cursor=pointer]: Try Again
        - generic [ref=e1055]:
          - generic [ref=e1056]:
            - generic [ref=e1058]:
              - img [ref=e1059]
              - paragraph [ref=e1061]: Download Our App
            - paragraph [ref=e1063]: Learning Together
            - paragraph [ref=e1065]: Download our mobile app and access all courses offline. Learn anytime, anywhere with a seamless experience.
            - generic [ref=e1066]:
              - generic [ref=e1067]:
                - img [ref=e1068]
                - img [ref=e1070]
                - img [ref=e1072]
                - img [ref=e1074]
                - img [ref=e1076]
              - paragraph [ref=e1078]: 4.9 • 1000+ Reviews
            - generic [ref=e1079]:
              - link [ref=e1080] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.otsapp
                - img [ref=e1082]
                - generic [ref=e1084]:
                  - paragraph [ref=e1085]: GET IT ON
                  - paragraph [ref=e1086]: Google Play
              - link [ref=e1087] [cursor=pointer]:
                - /url: /signup
                - text: Try Web Version
                - img [ref=e1089]
          - img [ref=e1094]
        - generic [ref=e1096]:
          - generic [ref=e1097]:
            - generic [ref=e1099]:
              - img [ref=e1101]
              - paragraph [ref=e1102]: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
              - generic [ref=e1103]:
                - paragraph [ref=e1104]: Stay Updated
                - generic [ref=e1105]:
                  - textbox [ref=e1106]:
                    - /placeholder: Enter your email
                  - button [ref=e1107] [cursor=pointer]:
                    - img [ref=e1108]
              - generic [ref=e1112]:
                - link [ref=e1113] [cursor=pointer]:
                  - /url: https://www.facebook.com/OTS.Edtech/
                  - img [ref=e1114]
                - link [ref=e1116] [cursor=pointer]:
                  - /url: https://x.com/offtheschool
                  - img [ref=e1117]
                - link [ref=e1119] [cursor=pointer]:
                  - /url: https://www.instagram.com/otsedtech/
                  - img [ref=e1120]
                - link [ref=e1122] [cursor=pointer]:
                  - /url: https://linkedin.com/company/off-the-school/
                  - img [ref=e1123]
                - link [ref=e1125] [cursor=pointer]:
                  - /url: https://www.youtube.com/@otsedtech
                  - img [ref=e1126]
            - generic [ref=e1129]:
              - heading [level=4] [ref=e1130]: Quick Links
              - generic [ref=e1131]:
                - link [ref=e1132] [cursor=pointer]:
                  - /url: /aboutus
                  - img [ref=e1133]
                  - text: About Us
                - link [ref=e1136] [cursor=pointer]:
                  - /url: /contactus
                  - img [ref=e1137]
                  - text: Contact
                - link [ref=e1140] [cursor=pointer]:
                  - /url: /faq
                  - img [ref=e1141]
                  - text: FAQ
                - link [ref=e1144] [cursor=pointer]:
                  - /url: /privacy-policy
                  - img [ref=e1145]
                  - text: Privacy Policy
                - link [ref=e1148] [cursor=pointer]:
                  - /url: /terms-of-use
                  - img [ref=e1149]
                  - text: Terms of Use
            - generic [ref=e1153]:
              - heading [level=4] [ref=e1154]: Contact Us
              - generic [ref=e1155]:
                - generic [ref=e1156]:
                  - img [ref=e1158]
                  - paragraph [ref=e1161]: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
                - generic [ref=e1162]:
                  - img [ref=e1164]
                  - link [ref=e1167] [cursor=pointer]:
                    - /url: mailto:info@offtheschool.io
                    - text: info@offtheschool.io
                - generic [ref=e1168]:
                  - img [ref=e1170]
                  - link [ref=e1172] [cursor=pointer]:
                    - /url: tel:+923010687687
                    - text: +92 301 0687687
            - generic [ref=e1174]:
              - heading [level=4] [ref=e1175]: Download App
              - generic [ref=e1176]:
                - paragraph [ref=e1177]: Get our app for a better learning experience
                - generic [ref=e1179]:
                  - img [ref=e1180]
                  - generic [ref=e1181]:
                    - paragraph [ref=e1182]: Scan to Download
                    - link [ref=e1183] [cursor=pointer]:
                      - /url: https://play.google.com/store
                      - img [ref=e1184]
          - generic [ref=e1186]:
            - paragraph [ref=e1187]: © 2026 Off The School. All rights reserved.
            - generic [ref=e1188]:
              - link [ref=e1189] [cursor=pointer]:
                - /url: /privacy-policy
                - text: Privacy
              - link [ref=e1190] [cursor=pointer]:
                - /url: /terms-of-use
                - text: Terms
              - link [ref=e1191] [cursor=pointer]:
                - /url: /faq
                - text: FAQ
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
  - dialog [ref=e1194]:
    - generic [ref=e1196]:
      - button "Close" [active] [ref=e1201] [cursor=pointer]:
        - img [ref=e1202]
      - img "Off The School App" [ref=e1210]
      - generic [ref=e1212]:
        - generic [ref=e1214]:
          - img [ref=e1215]
          - paragraph [ref=e1217]: Off The School App
        - heading "Start Learning Smarter Anytime, Anywhere" [level=2] [ref=e1219]:
          - text: Start Learning Smarter
          - text: Anytime, Anywhere
        - paragraph [ref=e1221]: Download our app and unlock courses, quizzes, and a personalized learning experience.
        - generic [ref=e1222]:
          - generic [ref=e1224]:
            - img [ref=e1225]
            - paragraph [ref=e1227]: 100+ Courses
          - generic [ref=e1229]:
            - img [ref=e1230]
            - paragraph [ref=e1232]: Free Download
        - generic [ref=e1234]:
          - img [ref=e1235]
          - img [ref=e1237]
          - img [ref=e1239]
          - img [ref=e1241]
          - img [ref=e1243]
          - paragraph [ref=e1245]: 4.8 Rating
        - link "Google Play Get it on Google Play" [ref=e1247] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.otsapp
          - generic [ref=e1249]:
            - img "Google Play" [ref=e1250]
            - generic [ref=e1251]:
              - paragraph [ref=e1252]: Get it on
              - paragraph [ref=e1253]: Google Play
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