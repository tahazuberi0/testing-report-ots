# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_008: Reels nav opens micro-learning / reels
- Location: tests\specs\homePage.spec.js:189:3

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Reels' }).first()
    - locator resolved to <a href="/reels" data-discover="true" class="chakra-button css-1nq3ryu">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" class="chakra-modal__content-container css-wl0d9u">…</div> from <div class="chakra-portal">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <p class="chakra-text css-jafx1l">Download our app and unlock courses, quizzes, and…</p> from <div class="chakra-portal">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" class="chakra-modal__content-container css-wl0d9u">…</div> from <div class="chakra-portal">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
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
            - heading [level=2] [ref=e130]: Your Journey to
            - paragraph [ref=e133]: Free,world-class education for every student in Pakistan from Kindergarten to Class 12 with interactive lessons & expert teachers.
            - generic [ref=e136]:
              - generic:
                - img
              - textbox [ref=e137]:
                - /placeholder: Search chapters by title (e.g., Grammar, Algebra)
            - generic [ref=e138]:
              - link [ref=e139] [cursor=pointer]:
                - /url: /explore
                - text: Start Learning — It's Free
                - img [ref=e141]
              - link [ref=e143] [cursor=pointer]:
                - /url: /reels
                - img [ref=e145]
                - text: "New: OTS Reels"
              - link [ref=e147] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - img [ref=e149]
                - text: Watch How It Works
        - generic [ref=e154]:
          - generic [ref=e155]:
            - generic [ref=e156]:
              - paragraph [ref=e157]: Explore School
              - paragraph [ref=e158]: Digital School
            - link [ref=e160] [cursor=pointer]:
              - /url: /explore/digitalschool
              - img [ref=e162]
              - text: View All Categories
          - generic [ref=e167]:
            - link [ref=e169] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e174]:
                - generic [ref=e175]:
                  - img [ref=e177]
                  - paragraph [ref=e180]: Kindergarten
                  - paragraph [ref=e181]: Early learning and foundational skills for young learners
                - generic [ref=e182]:
                  - paragraph [ref=e183]: 50+ Courses
                  - img [ref=e185]
            - link [ref=e188] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e193]:
                - generic [ref=e194]:
                  - img [ref=e196]
                  - paragraph [ref=e199]: Primary
                  - paragraph [ref=e200]: Classes 1-5 with core subjects and activities
                - generic [ref=e201]:
                  - paragraph [ref=e202]: 80+ Courses
                  - img [ref=e204]
            - link [ref=e207] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e212]:
                - generic [ref=e213]:
                  - img [ref=e215]
                  - paragraph [ref=e218]: Secondary
                  - paragraph [ref=e219]: Classes 6-8 with comprehensive academic courses
                - generic [ref=e220]:
                  - paragraph [ref=e221]: 100+ Courses
                  - img [ref=e223]
            - link [ref=e226] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e231]:
                - generic [ref=e232]:
                  - img [ref=e234]
                  - paragraph [ref=e237]: Higher Secondary
                  - paragraph [ref=e238]: Classes 9-12 with advanced subjects and career prep
                - generic [ref=e239]:
                  - paragraph [ref=e240]: 120+ Courses
                  - img [ref=e242]
          - generic [ref=e244]:
            - generic [ref=e245]:
              - paragraph [ref=e246]: Applied Learning
              - paragraph [ref=e247]: Skilled Courses
            - link [ref=e249] [cursor=pointer]:
              - /url: /explore/skilledbased
              - img [ref=e251]
              - text: View All Skills
          - generic [ref=e256]:
            - link [ref=e258] [cursor=pointer]:
              - /url: /explore/skilledbased/tech/3/subject-details
              - generic [ref=e263]:
                - generic [ref=e264]:
                  - img [ref=e266]
                  - generic [ref=e268]:
                    - paragraph [ref=e269]: Tech
                    - paragraph [ref=e270]: Logic Building
                - generic [ref=e271]:
                  - paragraph [ref=e272]: 12 Topics
                  - img [ref=e274]
            - link [ref=e277] [cursor=pointer]:
              - /url: /explore/skilledbased/arts-&-media/4/subject-details
              - generic [ref=e282]:
                - generic [ref=e283]:
                  - img [ref=e285]
                  - generic [ref=e287]:
                    - paragraph [ref=e288]: Arts & Media
                    - paragraph [ref=e289]: Basic Design Theory
                - generic [ref=e290]:
                  - paragraph [ref=e291]: 12 Topics
                  - img [ref=e293]
            - link [ref=e296] [cursor=pointer]:
              - /url: /explore/skilledbased/languages/5/subject-details
              - generic [ref=e301]:
                - generic [ref=e302]:
                  - img [ref=e304]
                  - generic [ref=e306]:
                    - paragraph [ref=e307]: Languages
                    - paragraph [ref=e308]: English Language
                - generic [ref=e309]:
                  - paragraph [ref=e310]: 12 Topics
                  - img [ref=e312]
        - generic [ref=e316]:
          - generic [ref=e317]:
            - paragraph [ref=e318]: Our Impact
            - paragraph [ref=e319]: Numbers That Speak
            - paragraph [ref=e320]: Transforming education across Pakistan with accessible, quality learning
          - generic [ref=e321]:
            - generic [ref=e325]:
              - img [ref=e327]
              - generic [ref=e333]:
                - paragraph [ref=e334]: "0"
                - paragraph [ref=e335]: +
              - paragraph [ref=e336]: Active Students
            - generic [ref=e340]:
              - img [ref=e342]
              - generic [ref=e346]:
                - paragraph [ref=e347]: "0"
                - paragraph [ref=e348]: +
              - paragraph [ref=e349]: EdTech videos
            - generic [ref=e353]:
              - img [ref=e355]
              - generic [ref=e359]:
                - paragraph [ref=e360]: "0"
                - paragraph [ref=e361]: +
              - paragraph [ref=e362]: lessons covered
            - generic [ref=e366]:
              - img [ref=e368]
              - generic [ref=e371]:
                - paragraph [ref=e372]: "0"
                - paragraph [ref=e373]: +
              - paragraph [ref=e374]: Educators
            - generic [ref=e378]:
              - img [ref=e380]
              - generic [ref=e384]:
                - paragraph [ref=e385]: "0"
                - paragraph [ref=e386]: +
              - paragraph [ref=e387]: App Downloads
        - generic [ref=e391]:
          - generic [ref=e392]:
            - paragraph [ref=e393]: Why Choose Us
            - paragraph [ref=e394]: Everything You Need to Succeed
            - paragraph [ref=e395]: Discover why thousands of students trust OTS for their educational journey. Our platform is designed to make learning effective, engaging, and accessible.
          - generic [ref=e396]:
            - generic [ref=e401] [cursor=pointer]:
              - img [ref=e403]
              - paragraph [ref=e405]: Interactive Video Lessons
              - paragraph [ref=e406]: Engaging video content with visual explanations that make complex concepts easy to understand.
              - generic [ref=e407]:
                - paragraph [ref=e408]: Learn More
                - paragraph [ref=e409]: →
            - generic [ref=e414] [cursor=pointer]:
              - img [ref=e416]
              - paragraph [ref=e418]: Complete Curriculum
              - paragraph [ref=e419]: From KG to Class 12, covering all subjects aligned with Sindh Board, Agha Khan, and Cambridge.
              - generic [ref=e420]:
                - paragraph [ref=e421]: Learn More
                - paragraph [ref=e422]: →
            - generic [ref=e427] [cursor=pointer]:
              - img [ref=e429]
              - paragraph [ref=e431]: Learn Anywhere
              - paragraph [ref=e432]: Access lessons on any device - mobile, tablet, or desktop. Learn on the go with our app.
              - generic [ref=e433]:
                - paragraph [ref=e434]: Learn More
                - paragraph [ref=e435]: →
            - generic [ref=e440] [cursor=pointer]:
              - img [ref=e442]
              - paragraph [ref=e445]: Quizzes & Assessments
              - paragraph [ref=e446]: Test your knowledge with interactive quizzes and track your progress with detailed analytics.
              - generic [ref=e447]:
                - paragraph [ref=e448]: Learn More
                - paragraph [ref=e449]: →
            - generic [ref=e454] [cursor=pointer]:
              - img [ref=e456]
              - paragraph [ref=e458]: Expert Teachers
              - paragraph [ref=e459]: Learn from qualified educators with years of experience in their respective fields.
              - generic [ref=e460]:
                - paragraph [ref=e461]: Learn More
                - paragraph [ref=e462]: →
            - generic [ref=e467] [cursor=pointer]:
              - img [ref=e469]
              - paragraph [ref=e472]: Learn at Your Pace
              - paragraph [ref=e473]: No deadlines, no pressure. Study whenever and wherever suits you best.
              - generic [ref=e474]:
                - paragraph [ref=e475]: Learn More
                - paragraph [ref=e476]: →
            - generic [ref=e481] [cursor=pointer]:
              - img [ref=e483]
              - paragraph [ref=e485]: Safe & Secure
              - paragraph [ref=e486]: Kid-friendly environment with no ads or inappropriate content. Safe for all ages.
              - generic [ref=e487]:
                - paragraph [ref=e488]: Learn More
                - paragraph [ref=e489]: →
            - generic [ref=e494] [cursor=pointer]:
              - img [ref=e496]
              - paragraph [ref=e498]: 100% Free Forever
              - paragraph [ref=e499]: Quality education should be accessible to everyone. All content is completely free.
              - generic [ref=e500]:
                - paragraph [ref=e501]: Learn More
                - paragraph [ref=e502]: →
        - generic [ref=e505]:
          - generic [ref=e506]:
            - paragraph [ref=e507]: The learning Flow
            - paragraph [ref=e508]: How It Works
            - paragraph [ref=e509]: Start your learning journey in just a few simple steps
          - generic [ref=e510]:
            - generic [ref=e512]:
              - generic [ref=e513]:
                - img [ref=e516]
                - generic [ref=e519]: "1"
              - generic [ref=e520]:
                - paragraph [ref=e521]: Create Account
                - paragraph [ref=e522]: Sign up for free in seconds. No credit card required.
            - generic [ref=e526]:
              - generic [ref=e527]:
                - img [ref=e530]
                - generic [ref=e533]: "2"
              - generic [ref=e534]:
                - paragraph [ref=e535]: Choose Your Class
                - paragraph [ref=e536]: Select your grade level and subjects you want to learn.
            - generic [ref=e540]:
              - generic [ref=e541]:
                - img [ref=e544]
                - generic [ref=e546]: "3"
              - generic [ref=e547]:
                - paragraph [ref=e548]: Start Learning
                - paragraph [ref=e549]: Watch engaging video lessons and practise with quizzes.
            - generic [ref=e553]:
              - generic [ref=e554]:
                - img [ref=e557]
                - generic [ref=e560]: "4"
              - generic [ref=e561]:
                - paragraph [ref=e562]: Track Progress
                - paragraph [ref=e563]: Monitor your improvement and celebrate your achievements.
          - link [ref=e565] [cursor=pointer]:
            - /url: /signup
            - text: Get Start
            - img [ref=e567]
        - generic [ref=e572]:
          - generic [ref=e573]:
            - generic [ref=e574]:
              - img [ref=e575]
              - paragraph [ref=e577]: Video Lessons
            - heading [level=2] [ref=e578]: Our YouTube Learning Hub
            - paragraph [ref=e579]: Explore our educational content and empower your learning journey with free video lessons.
          - generic [ref=e582]:
            - generic [ref=e583]:
              - img [ref=e585]
              - generic [ref=e586]:
                - heading [level=3] [ref=e587]: Loading...
                - generic [ref=e588]:
                  - generic [ref=e589]:
                    - img [ref=e590]
                    - paragraph [ref=e595]: Loading... Subs
                  - paragraph [ref=e596]: •
                  - generic [ref=e597]:
                    - img [ref=e598]
                    - paragraph [ref=e601]: Loading... Videos
                  - paragraph [ref=e602]: •
                  - generic [ref=e603]:
                    - img [ref=e604]
                    - paragraph [ref=e607]: Loading... Views
            - link [ref=e608] [cursor=pointer]:
              - /url: https://www.youtube.com/@otsedtech?sub_confirmation=1
              - img [ref=e610]
              - text: Subscribe
          - generic [ref=e612]:
            - link [ref=e613] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=d0aNEJfvH_o
              - generic [ref=e614]:
                - generic [ref=e616]:
                  - img [ref=e617]
                  - img [ref=e621]
                  - generic [ref=e623]: HD
                - generic [ref=e624]:
                  - paragraph [ref=e625]: Chapter 04 | Iteration/Loop | 10th Class | Computer | Sindh Board | @otsedtech
                  - generic [ref=e626]:
                    - generic [ref=e627]:
                      - img [ref=e628]
                      - paragraph [ref=e631]: 25K views
                    - paragraph [ref=e632]: •
                    - paragraph [ref=e633]: Off The School
            - link [ref=e634] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=mAGGOmv75hw
              - generic [ref=e635]:
                - generic [ref=e637]:
                  - img [ref=e638]
                  - img [ref=e642]
                  - generic [ref=e644]: HD
                - generic [ref=e645]:
                  - paragraph [ref=e646]: "Chapter 20: Theory of Quadratic Equations | Exercise 20.3 | 10th Class | Sindh Board | @otsedtech"
                  - generic [ref=e647]:
                    - generic [ref=e648]:
                      - img [ref=e649]
                      - paragraph [ref=e652]: 11K views
                    - paragraph [ref=e653]: •
                    - paragraph [ref=e654]: Off The School
            - link [ref=e655] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=VCtBlSio-eQ
              - generic [ref=e656]:
                - generic [ref=e658]:
                  - img [ref=e659]
                  - img [ref=e663]
                  - generic [ref=e665]: HD
                - generic [ref=e666]:
                  - paragraph [ref=e667]: "Unit 1: The Voice of God | 10th Class | English | Sindh Board | @otsedtech"
                  - generic [ref=e668]:
                    - generic [ref=e669]:
                      - img [ref=e670]
                      - paragraph [ref=e673]: 28K views
                    - paragraph [ref=e674]: •
                    - paragraph [ref=e675]: Off The School
            - link [ref=e676] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=IhpDT9_eMzE
              - generic [ref=e677]:
                - generic [ref=e679]:
                  - img [ref=e680]
                  - img [ref=e684]
                  - generic [ref=e686]: HD
                - generic [ref=e687]:
                  - paragraph [ref=e688]: Ideology of Pakistan | 10th Class | PST | Sindh Board | @otsedtech
                  - generic [ref=e689]:
                    - generic [ref=e690]:
                      - img [ref=e691]
                      - paragraph [ref=e694]: 51K views
                    - paragraph [ref=e695]: •
                    - paragraph [ref=e696]: Off The School
            - link [ref=e697] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=gjGaI5szJGA
              - generic [ref=e698]:
                - generic [ref=e700]:
                  - img [ref=e701]
                  - img [ref=e705]
                  - generic [ref=e707]: HD
                - generic [ref=e708]:
                  - paragraph [ref=e709]: Homeostasis | 10th Class | Biology | Sindh Board | @otsedtech
                  - generic [ref=e710]:
                    - generic [ref=e711]:
                      - img [ref=e712]
                      - paragraph [ref=e715]: 11K views
                    - paragraph [ref=e716]: •
                    - paragraph [ref=e717]: Off The School
            - link [ref=e718] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=j_1_V5vrBOE
              - generic [ref=e719]:
                - generic [ref=e721]:
                  - img [ref=e722]
                  - img [ref=e726]
                  - generic [ref=e728]: HD
                - generic [ref=e729]:
                  - paragraph [ref=e730]: 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝟗𝐭𝐡 𝐂𝐡𝐞𝐦𝐢𝐬𝐭𝐫𝐲 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐍𝐨𝐭𝐞𝐬 | @otsedtech | @Off-The-School
                  - generic [ref=e731]:
                    - generic [ref=e732]:
                      - img [ref=e733]
                      - paragraph [ref=e736]: 28K views
                    - paragraph [ref=e737]: •
                    - paragraph [ref=e738]: Off The School
          - link [ref=e740] [cursor=pointer]:
            - /url: https://www.youtube.com/@otsedtech
            - text: View All Videos
            - img [ref=e742]
        - generic [ref=e747]:
          - generic [ref=e748]:
            - generic [ref=e750]: Daily Micro Learning
            - heading [level=2] [ref=e753]: Learn Something New In A Minute
            - paragraph [ref=e755]: Scroll, Tap and Learn.
            - link [ref=e757] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - img [ref=e759]
              - text: Follow us on Instagram
          - generic [ref=e762]:
            - generic [ref=e764] [cursor=pointer]:
              - generic [ref=e765]:
                - img [ref=e766]
                - generic [ref=e768]:
                  - paragraph [ref=e769]: Our Tech Is Killing Us
                  - generic [ref=e770]:
                    - generic [ref=e771]:
                      - img [ref=e772]
                      - paragraph [ref=e775]: 5.4K
                    - generic [ref=e776]:
                      - img [ref=e777]
                      - paragraph [ref=e779]: Flip to watch
              - generic [ref=e782]:
                - img [ref=e783]
                - paragraph [ref=e786]: Watch on Instagram
                - link [ref=e787]:
                  - /url: https://www.instagram.com/reel/DT77VXwDxgs/
                  - text: Watch Reel
                  - img [ref=e789]
            - generic [ref=e794] [cursor=pointer]:
              - generic [ref=e795]:
                - img [ref=e796]
                - generic [ref=e798]:
                  - paragraph [ref=e799]: Japan's 1,500 Quakes Explained
                  - generic [ref=e800]:
                    - generic [ref=e801]:
                      - img [ref=e802]
                      - paragraph [ref=e805]: 9.1K
                    - generic [ref=e806]:
                      - img [ref=e807]
                      - paragraph [ref=e809]: Flip to watch
              - generic [ref=e812]:
                - img [ref=e813]
                - paragraph [ref=e816]: Watch on Instagram
                - link [ref=e817]:
                  - /url: https://www.instagram.com/reel/DTnGeWAFCR5/
                  - text: Watch Reel
                  - img [ref=e819]
            - generic [ref=e824] [cursor=pointer]:
              - generic [ref=e825]:
                - img [ref=e826]
                - generic [ref=e828]:
                  - paragraph [ref=e829]: "GenZ's Pakistan: From Consumer to Creator"
                  - generic [ref=e830]:
                    - generic [ref=e831]:
                      - img [ref=e832]
                      - paragraph [ref=e835]: 5.8K
                    - generic [ref=e836]:
                      - img [ref=e837]
                      - paragraph [ref=e839]: Flip to watch
              - generic [ref=e842]:
                - img [ref=e843]
                - paragraph [ref=e846]: Watch on Instagram
                - link [ref=e847]:
                  - /url: https://www.instagram.com/reel/DQ4Av80CONR/
                  - text: Watch Reel
                  - img [ref=e849]
            - generic [ref=e854] [cursor=pointer]:
              - generic [ref=e855]:
                - img [ref=e856]
                - generic [ref=e858]:
                  - paragraph [ref=e859]: The Eco Friendly Currency
                  - generic [ref=e860]:
                    - generic [ref=e861]:
                      - img [ref=e862]
                      - paragraph [ref=e865]: 6.7K
                    - generic [ref=e866]:
                      - img [ref=e867]
                      - paragraph [ref=e869]: Flip to watch
              - generic [ref=e872]:
                - img [ref=e873]
                - paragraph [ref=e876]: Watch on Instagram
                - link [ref=e877]:
                  - /url: https://www.instagram.com/reel/DQO6WC5ATaN/
                  - text: Watch Reel
                  - img [ref=e879]
          - generic [ref=e884]:
            - generic [ref=e885]:
              - paragraph [ref=e886]: 0s
              - paragraph [ref=e887]: Avg reel length
            - generic [ref=e888]:
              - paragraph [ref=e889]: 0+
              - paragraph [ref=e890]: Concepts simplified
            - generic [ref=e891]:
              - paragraph [ref=e892]: 0K+
              - paragraph [ref=e893]: Monthly views
            - link [ref=e895] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - generic [ref=e896]: Start Learning
              - img [ref=e898]
        - generic [ref=e905]:
          - generic [ref=e906]:
            - generic [ref=e907]:
              - generic [ref=e908]: 
              - text: Our YouTube Channels
            - heading [level=2] [ref=e909]:
              - generic [ref=e910]: Explore Our
              - text: Educational Network
            - paragraph [ref=e911]: Discover our diverse range of YouTube channels, each dedicated to different aspects of education and learning
          - generic [ref=e912]:
            - generic [ref=e913]:
              - link [ref=e915] [cursor=pointer]:
                - /url: https://www.youtube.com/@Off-The-School
                - generic [ref=e917]:
                  - generic [ref=e918]:
                    - img [ref=e920]
                    - img [ref=e923]
                  - paragraph [ref=e925]: Off The School
                  - paragraph [ref=e926]: Comprehensive educational content
                  - img [ref=e927]
              - link [ref=e930] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsednews
                - generic [ref=e932]:
                  - generic [ref=e933]:
                    - img [ref=e935]
                    - img [ref=e938]
                  - paragraph [ref=e940]: EdNews
                  - paragraph [ref=e941]: Latest education sector updates
                  - img [ref=e942]
            - generic [ref=e944]:
              - link [ref=e946] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - generic [ref=e948]:
                  - generic [ref=e949]:
                    - img [ref=e951]
                    - img [ref=e954]
                  - paragraph [ref=e956]: EdTech
                  - paragraph [ref=e957]: Technology-driven education
                  - img [ref=e958]
              - link [ref=e961] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedsense
                - generic [ref=e963]:
                  - generic [ref=e964]:
                    - img [ref=e966]
                    - img [ref=e969]
                  - paragraph [ref=e971]: EdSense
                  - paragraph [ref=e972]: Educational insights & discussions
                  - img [ref=e973]
              - link [ref=e976] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedfun
                - generic [ref=e978]:
                  - generic [ref=e979]:
                    - img [ref=e981]
                    - img [ref=e984]
                  - paragraph [ref=e986]: EdFun
                  - paragraph [ref=e987]: Fun & engaging learning
                  - img [ref=e988]
          - link [ref=e991] [cursor=pointer]:
            - /url: https://www.youtube.com/@Off-The-School
            - img [ref=e993]
            - text: Subscribe Our Channels
        - generic [ref=e999]:
          - generic [ref=e1003]:
            - generic [ref=e1005]:
              - img [ref=e1006]
              - paragraph [ref=e1009]: Stay Updated
            - heading [level=2] [ref=e1011]:
              - generic [ref=e1012]: Subscribe to our
              - text: Newsletter
            - paragraph [ref=e1014]: Get the latest educational tips, course updates, and exclusive content delivered straight to your inbox.
            - generic [ref=e1016]:
              - textbox [ref=e1017]:
                - /placeholder: Enter your email address
              - button [ref=e1018] [cursor=pointer]:
                - text: Subscribe
                - img [ref=e1020]
            - paragraph [ref=e1024]: 🔒 No spam, unsubscribe anytime
          - generic [ref=e1026]:
            - img [ref=e1029]
            - heading [level=2] [ref=e1032]: Oops!
            - button [ref=e1033] [cursor=pointer]: Try Again
        - generic [ref=e1039]:
          - generic [ref=e1040]:
            - generic [ref=e1042]:
              - img [ref=e1043]
              - paragraph [ref=e1045]: Download Our App
            - paragraph [ref=e1047]: Learning Together
            - paragraph [ref=e1049]: Download our mobile app and access all courses offline. Learn anytime, anywhere with a seamless experience.
            - generic [ref=e1050]:
              - generic [ref=e1051]:
                - img [ref=e1052]
                - img [ref=e1054]
                - img [ref=e1056]
                - img [ref=e1058]
                - img [ref=e1060]
              - paragraph [ref=e1062]: 4.9 • 1000+ Reviews
            - generic [ref=e1063]:
              - link [ref=e1064] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.otsapp
                - img [ref=e1066]
                - generic [ref=e1068]:
                  - paragraph [ref=e1069]: GET IT ON
                  - paragraph [ref=e1070]: Google Play
              - link [ref=e1071] [cursor=pointer]:
                - /url: /signup
                - text: Try Web Version
                - img [ref=e1073]
          - img [ref=e1078]
        - generic [ref=e1080]:
          - generic [ref=e1081]:
            - generic [ref=e1083]:
              - img [ref=e1085]
              - paragraph [ref=e1086]: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
              - generic [ref=e1087]:
                - paragraph [ref=e1088]: Stay Updated
                - generic [ref=e1089]:
                  - textbox [ref=e1090]:
                    - /placeholder: Enter your email
                  - button [ref=e1091] [cursor=pointer]:
                    - img [ref=e1092]
              - generic [ref=e1096]:
                - link [ref=e1097] [cursor=pointer]:
                  - /url: https://www.facebook.com/OTS.Edtech/
                  - img [ref=e1098]
                - link [ref=e1100] [cursor=pointer]:
                  - /url: https://x.com/offtheschool
                  - img [ref=e1101]
                - link [ref=e1103] [cursor=pointer]:
                  - /url: https://www.instagram.com/otsedtech/
                  - img [ref=e1104]
                - link [ref=e1106] [cursor=pointer]:
                  - /url: https://linkedin.com/company/off-the-school/
                  - img [ref=e1107]
                - link [ref=e1109] [cursor=pointer]:
                  - /url: https://www.youtube.com/@otsedtech
                  - img [ref=e1110]
            - generic [ref=e1113]:
              - heading [level=4] [ref=e1114]: Quick Links
              - generic [ref=e1115]:
                - link [ref=e1116] [cursor=pointer]:
                  - /url: /aboutus
                  - img [ref=e1117]
                  - text: About Us
                - link [ref=e1120] [cursor=pointer]:
                  - /url: /contactus
                  - img [ref=e1121]
                  - text: Contact
                - link [ref=e1124] [cursor=pointer]:
                  - /url: /faq
                  - img [ref=e1125]
                  - text: FAQ
                - link [ref=e1128] [cursor=pointer]:
                  - /url: /privacy-policy
                  - img [ref=e1129]
                  - text: Privacy Policy
                - link [ref=e1132] [cursor=pointer]:
                  - /url: /terms-of-use
                  - img [ref=e1133]
                  - text: Terms of Use
            - generic [ref=e1137]:
              - heading [level=4] [ref=e1138]: Contact Us
              - generic [ref=e1139]:
                - generic [ref=e1140]:
                  - img [ref=e1142]
                  - paragraph [ref=e1145]: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
                - generic [ref=e1146]:
                  - img [ref=e1148]
                  - link [ref=e1151] [cursor=pointer]:
                    - /url: mailto:info@offtheschool.io
                    - text: info@offtheschool.io
                - generic [ref=e1152]:
                  - img [ref=e1154]
                  - link [ref=e1156] [cursor=pointer]:
                    - /url: tel:+923010687687
                    - text: +92 301 0687687
            - generic [ref=e1158]:
              - heading [level=4] [ref=e1159]: Download App
              - generic [ref=e1160]:
                - paragraph [ref=e1161]: Get our app for a better learning experience
                - generic [ref=e1163]:
                  - img [ref=e1164]
                  - generic [ref=e1165]:
                    - paragraph [ref=e1166]: Scan to Download
                    - link [ref=e1167] [cursor=pointer]:
                      - /url: https://play.google.com/store
                      - img [ref=e1168]
          - generic [ref=e1170]:
            - paragraph [ref=e1171]: © 2026 Off The School. All rights reserved.
            - generic [ref=e1172]:
              - link [ref=e1173] [cursor=pointer]:
                - /url: /privacy-policy
                - text: Privacy
              - link [ref=e1174] [cursor=pointer]:
                - /url: /terms-of-use
                - text: Terms
              - link [ref=e1175] [cursor=pointer]:
                - /url: /faq
                - text: FAQ
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
  - dialog [ref=e1178]:
    - generic [ref=e1180]:
      - button "Close" [active] [ref=e1185] [cursor=pointer]:
        - img [ref=e1186]
      - img "Off The School App" [ref=e1194]
      - generic [ref=e1196]:
        - generic [ref=e1198]:
          - img [ref=e1199]
          - paragraph [ref=e1201]: Off The School App
        - heading "Start Learning Smarter Anytime, Anywhere" [level=2] [ref=e1203]:
          - text: Start Learning Smarter
          - text: Anytime, Anywhere
        - paragraph [ref=e1205]: Download our app and unlock courses, quizzes, and a personalized learning experience.
        - generic [ref=e1206]:
          - generic [ref=e1208]:
            - img [ref=e1209]
            - paragraph [ref=e1211]: 100+ Courses
          - generic [ref=e1213]:
            - img [ref=e1214]
            - paragraph [ref=e1216]: Free Download
        - generic [ref=e1218]:
          - img [ref=e1219]
          - img [ref=e1221]
          - img [ref=e1223]
          - img [ref=e1225]
          - img [ref=e1227]
          - paragraph [ref=e1229]: 4.8 Rating
        - link "Google Play Get it on Google Play" [ref=e1231] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.otsapp
          - generic [ref=e1233]:
            - img "Google Play" [ref=e1234]
            - generic [ref=e1235]:
              - paragraph [ref=e1236]: Get it on
              - paragraph [ref=e1237]: Google Play
```

# Test source

```ts
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
> 150 |     await this.reelsNav.first().click();
      |                                 ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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