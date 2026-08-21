# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_017: Get Start link initiates onboarding / registration
- Location: tests\specs\homePage.spec.js:398:3

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Get Start' })
    - locator resolved to <a href="/signup" data-discover="true" class="chakra-button css-o0bpip">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
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
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <p class="chakra-text css-jafx1l">Download our app and unlock courses, quizzes, and…</p> from <div class="chakra-portal">…</div> subtree intercepts pointer events
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
            - heading [level=2] [ref=e130]:
              - text: Your Journey to
              - generic [ref=e132]: Learning
            - paragraph [ref=e134]: Free,world-class education for every student in Pakistan from Kindergarten to Class 12 with interactive lessons & expert teachers.
            - generic [ref=e137]:
              - generic:
                - img
              - textbox [ref=e138]:
                - /placeholder: Search chapters by title (e.g., Grammar, Algebra)
            - generic [ref=e139]:
              - link [ref=e140] [cursor=pointer]:
                - /url: /explore
                - text: Start Learning — It's Free
                - img [ref=e142]
              - link [ref=e144] [cursor=pointer]:
                - /url: /reels
                - img [ref=e146]
                - text: "New: OTS Reels"
              - link [ref=e148] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - img [ref=e150]
                - text: Watch How It Works
        - generic [ref=e155]:
          - generic [ref=e156]:
            - generic [ref=e157]:
              - paragraph [ref=e158]: Explore School
              - paragraph [ref=e159]: Digital School
            - link [ref=e161] [cursor=pointer]:
              - /url: /explore/digitalschool
              - img [ref=e163]
              - text: View All Categories
          - generic [ref=e168]:
            - link [ref=e170] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e175]:
                - generic [ref=e176]:
                  - img [ref=e178]
                  - paragraph [ref=e181]: Kindergarten
                  - paragraph [ref=e182]: Early learning and foundational skills for young learners
                - generic [ref=e183]:
                  - paragraph [ref=e184]: 50+ Courses
                  - img [ref=e186]
            - link [ref=e189] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - img [ref=e197]
                  - paragraph [ref=e200]: Primary
                  - paragraph [ref=e201]: Classes 1-5 with core subjects and activities
                - generic [ref=e202]:
                  - paragraph [ref=e203]: 80+ Courses
                  - img [ref=e205]
            - link [ref=e208] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e213]:
                - generic [ref=e214]:
                  - img [ref=e216]
                  - paragraph [ref=e219]: Secondary
                  - paragraph [ref=e220]: Classes 6-8 with comprehensive academic courses
                - generic [ref=e221]:
                  - paragraph [ref=e222]: 100+ Courses
                  - img [ref=e224]
            - link [ref=e227] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e232]:
                - generic [ref=e233]:
                  - img [ref=e235]
                  - paragraph [ref=e238]: Higher Secondary
                  - paragraph [ref=e239]: Classes 9-12 with advanced subjects and career prep
                - generic [ref=e240]:
                  - paragraph [ref=e241]: 120+ Courses
                  - img [ref=e243]
          - generic [ref=e245]:
            - generic [ref=e246]:
              - paragraph [ref=e247]: Applied Learning
              - paragraph [ref=e248]: Skilled Courses
            - link [ref=e250] [cursor=pointer]:
              - /url: /explore/skilledbased
              - img [ref=e252]
              - text: View All Skills
          - generic [ref=e257]:
            - link [ref=e259] [cursor=pointer]:
              - /url: /explore/skilledbased/tech/3/subject-details
              - generic [ref=e264]:
                - generic [ref=e265]:
                  - img [ref=e267]
                  - generic [ref=e269]:
                    - paragraph [ref=e270]: Tech
                    - paragraph [ref=e271]: Logic Building
                - generic [ref=e272]:
                  - paragraph [ref=e273]: 12 Topics
                  - img [ref=e275]
            - link [ref=e278] [cursor=pointer]:
              - /url: /explore/skilledbased/arts-&-media/4/subject-details
              - generic [ref=e283]:
                - generic [ref=e284]:
                  - img [ref=e286]
                  - generic [ref=e288]:
                    - paragraph [ref=e289]: Arts & Media
                    - paragraph [ref=e290]: Basic Design Theory
                - generic [ref=e291]:
                  - paragraph [ref=e292]: 12 Topics
                  - img [ref=e294]
            - link [ref=e297] [cursor=pointer]:
              - /url: /explore/skilledbased/languages/5/subject-details
              - generic [ref=e302]:
                - generic [ref=e303]:
                  - img [ref=e305]
                  - generic [ref=e307]:
                    - paragraph [ref=e308]: Languages
                    - paragraph [ref=e309]: English Language
                - generic [ref=e310]:
                  - paragraph [ref=e311]: 12 Topics
                  - img [ref=e313]
        - generic [ref=e317]:
          - generic [ref=e318]:
            - paragraph [ref=e319]: Our Impact
            - paragraph [ref=e320]: Numbers That Speak
            - paragraph [ref=e321]: Transforming education across Pakistan with accessible, quality learning
          - generic [ref=e322]:
            - generic [ref=e326]:
              - img [ref=e328]
              - generic [ref=e334]:
                - paragraph [ref=e335]: "0"
                - paragraph [ref=e336]: +
              - paragraph [ref=e337]: Active Students
            - generic [ref=e341]:
              - img [ref=e343]
              - generic [ref=e347]:
                - paragraph [ref=e348]: "0"
                - paragraph [ref=e349]: +
              - paragraph [ref=e350]: EdTech videos
            - generic [ref=e354]:
              - img [ref=e356]
              - generic [ref=e360]:
                - paragraph [ref=e361]: "0"
                - paragraph [ref=e362]: +
              - paragraph [ref=e363]: lessons covered
            - generic [ref=e367]:
              - img [ref=e369]
              - generic [ref=e372]:
                - paragraph [ref=e373]: "0"
                - paragraph [ref=e374]: +
              - paragraph [ref=e375]: Educators
            - generic [ref=e379]:
              - img [ref=e381]
              - generic [ref=e385]:
                - paragraph [ref=e386]: "0"
                - paragraph [ref=e387]: +
              - paragraph [ref=e388]: App Downloads
        - generic [ref=e392]:
          - generic [ref=e393]:
            - paragraph [ref=e394]: Why Choose Us
            - paragraph [ref=e395]: Everything You Need to Succeed
            - paragraph [ref=e396]: Discover why thousands of students trust OTS for their educational journey. Our platform is designed to make learning effective, engaging, and accessible.
          - generic [ref=e397]:
            - generic [ref=e402] [cursor=pointer]:
              - img [ref=e404]
              - paragraph [ref=e406]: Interactive Video Lessons
              - paragraph [ref=e407]: Engaging video content with visual explanations that make complex concepts easy to understand.
              - generic [ref=e408]:
                - paragraph [ref=e409]: Learn More
                - paragraph [ref=e410]: →
            - generic [ref=e415] [cursor=pointer]:
              - img [ref=e417]
              - paragraph [ref=e419]: Complete Curriculum
              - paragraph [ref=e420]: From KG to Class 12, covering all subjects aligned with Sindh Board, Agha Khan, and Cambridge.
              - generic [ref=e421]:
                - paragraph [ref=e422]: Learn More
                - paragraph [ref=e423]: →
            - generic [ref=e428] [cursor=pointer]:
              - img [ref=e430]
              - paragraph [ref=e432]: Learn Anywhere
              - paragraph [ref=e433]: Access lessons on any device - mobile, tablet, or desktop. Learn on the go with our app.
              - generic [ref=e434]:
                - paragraph [ref=e435]: Learn More
                - paragraph [ref=e436]: →
            - generic [ref=e441] [cursor=pointer]:
              - img [ref=e443]
              - paragraph [ref=e446]: Quizzes & Assessments
              - paragraph [ref=e447]: Test your knowledge with interactive quizzes and track your progress with detailed analytics.
              - generic [ref=e448]:
                - paragraph [ref=e449]: Learn More
                - paragraph [ref=e450]: →
            - generic [ref=e455] [cursor=pointer]:
              - img [ref=e457]
              - paragraph [ref=e459]: Expert Teachers
              - paragraph [ref=e460]: Learn from qualified educators with years of experience in their respective fields.
              - generic [ref=e461]:
                - paragraph [ref=e462]: Learn More
                - paragraph [ref=e463]: →
            - generic [ref=e468] [cursor=pointer]:
              - img [ref=e470]
              - paragraph [ref=e473]: Learn at Your Pace
              - paragraph [ref=e474]: No deadlines, no pressure. Study whenever and wherever suits you best.
              - generic [ref=e475]:
                - paragraph [ref=e476]: Learn More
                - paragraph [ref=e477]: →
            - generic [ref=e482] [cursor=pointer]:
              - img [ref=e484]
              - paragraph [ref=e486]: Safe & Secure
              - paragraph [ref=e487]: Kid-friendly environment with no ads or inappropriate content. Safe for all ages.
              - generic [ref=e488]:
                - paragraph [ref=e489]: Learn More
                - paragraph [ref=e490]: →
            - generic [ref=e495] [cursor=pointer]:
              - img [ref=e497]
              - paragraph [ref=e499]: 100% Free Forever
              - paragraph [ref=e500]: Quality education should be accessible to everyone. All content is completely free.
              - generic [ref=e501]:
                - paragraph [ref=e502]: Learn More
                - paragraph [ref=e503]: →
        - generic [ref=e506]:
          - generic [ref=e507]:
            - paragraph [ref=e508]: The learning Flow
            - paragraph [ref=e509]: How It Works
            - paragraph [ref=e510]: Start your learning journey in just a few simple steps
          - generic [ref=e511]:
            - generic [ref=e513]:
              - generic [ref=e514]:
                - img [ref=e517]
                - generic [ref=e520]: "1"
              - generic [ref=e521]:
                - paragraph [ref=e522]: Create Account
                - paragraph [ref=e523]: Sign up for free in seconds. No credit card required.
            - generic [ref=e528]:
              - generic [ref=e529]:
                - img [ref=e532]
                - generic [ref=e535]: "2"
              - generic [ref=e536]:
                - paragraph [ref=e537]: Choose Your Class
                - paragraph [ref=e538]: Select your grade level and subjects you want to learn.
            - generic [ref=e543]:
              - generic [ref=e544]:
                - img [ref=e547]
                - generic [ref=e549]: "3"
              - generic [ref=e550]:
                - paragraph [ref=e551]: Start Learning
                - paragraph [ref=e552]: Watch engaging video lessons and practise with quizzes.
            - generic [ref=e557]:
              - generic [ref=e558]:
                - img [ref=e561]
                - generic [ref=e564]: "4"
              - generic [ref=e565]:
                - paragraph [ref=e566]: Track Progress
                - paragraph [ref=e567]: Monitor your improvement and celebrate your achievements.
          - link [ref=e569] [cursor=pointer]:
            - /url: /signup
            - text: Get Start
            - img [ref=e571]
        - generic [ref=e576]:
          - generic [ref=e577]:
            - generic [ref=e578]:
              - img [ref=e579]
              - paragraph [ref=e581]: Video Lessons
            - heading [level=2] [ref=e582]: Our YouTube Learning Hub
            - paragraph [ref=e583]: Explore our educational content and empower your learning journey with free video lessons.
          - generic [ref=e586]:
            - generic [ref=e587]:
              - img [ref=e589]
              - generic [ref=e590]:
                - heading [level=3] [ref=e591]: Loading...
                - generic [ref=e592]:
                  - generic [ref=e593]:
                    - img [ref=e594]
                    - paragraph [ref=e599]: Loading... Subs
                  - paragraph [ref=e600]: •
                  - generic [ref=e601]:
                    - img [ref=e602]
                    - paragraph [ref=e605]: Loading... Videos
                  - paragraph [ref=e606]: •
                  - generic [ref=e607]:
                    - img [ref=e608]
                    - paragraph [ref=e611]: Loading... Views
            - link [ref=e612] [cursor=pointer]:
              - /url: https://www.youtube.com/@otsedtech?sub_confirmation=1
              - img [ref=e614]
              - text: Subscribe
          - generic [ref=e616]:
            - link [ref=e617] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=d0aNEJfvH_o
              - generic [ref=e618]:
                - generic [ref=e620]:
                  - img [ref=e621]
                  - img [ref=e625]
                  - generic [ref=e627]: HD
                - generic [ref=e628]:
                  - paragraph [ref=e629]: Chapter 04 | Iteration/Loop | 10th Class | Computer | Sindh Board | @otsedtech
                  - generic [ref=e630]:
                    - generic [ref=e631]:
                      - img [ref=e632]
                      - paragraph [ref=e635]: 18K views
                    - paragraph [ref=e636]: •
                    - paragraph [ref=e637]: Off The School
            - link [ref=e638] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=mAGGOmv75hw
              - generic [ref=e639]:
                - generic [ref=e641]:
                  - img [ref=e642]
                  - img [ref=e646]
                  - generic [ref=e648]: HD
                - generic [ref=e649]:
                  - paragraph [ref=e650]: "Chapter 20: Theory of Quadratic Equations | Exercise 20.3 | 10th Class | Sindh Board | @otsedtech"
                  - generic [ref=e651]:
                    - generic [ref=e652]:
                      - img [ref=e653]
                      - paragraph [ref=e656]: 14K views
                    - paragraph [ref=e657]: •
                    - paragraph [ref=e658]: Off The School
            - link [ref=e659] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=VCtBlSio-eQ
              - generic [ref=e660]:
                - generic [ref=e662]:
                  - img [ref=e663]
                  - img [ref=e667]
                  - generic [ref=e669]: HD
                - generic [ref=e670]:
                  - paragraph [ref=e671]: "Unit 1: The Voice of God | 10th Class | English | Sindh Board | @otsedtech"
                  - generic [ref=e672]:
                    - generic [ref=e673]:
                      - img [ref=e674]
                      - paragraph [ref=e677]: 29K views
                    - paragraph [ref=e678]: •
                    - paragraph [ref=e679]: Off The School
            - link [ref=e680] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=IhpDT9_eMzE
              - generic [ref=e681]:
                - generic [ref=e683]:
                  - img [ref=e684]
                  - img [ref=e688]
                  - generic [ref=e690]: HD
                - generic [ref=e691]:
                  - paragraph [ref=e692]: Ideology of Pakistan | 10th Class | PST | Sindh Board | @otsedtech
                  - generic [ref=e693]:
                    - generic [ref=e694]:
                      - img [ref=e695]
                      - paragraph [ref=e698]: 50K views
                    - paragraph [ref=e699]: •
                    - paragraph [ref=e700]: Off The School
            - link [ref=e701] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=gjGaI5szJGA
              - generic [ref=e702]:
                - generic [ref=e704]:
                  - img [ref=e705]
                  - img [ref=e709]
                  - generic [ref=e711]: HD
                - generic [ref=e712]:
                  - paragraph [ref=e713]: Homeostasis | 10th Class | Biology | Sindh Board | @otsedtech
                  - generic [ref=e714]:
                    - generic [ref=e715]:
                      - img [ref=e716]
                      - paragraph [ref=e719]: 14K views
                    - paragraph [ref=e720]: •
                    - paragraph [ref=e721]: Off The School
            - link [ref=e722] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=j_1_V5vrBOE
              - generic [ref=e723]:
                - generic [ref=e725]:
                  - img [ref=e726]
                  - img [ref=e730]
                  - generic [ref=e732]: HD
                - generic [ref=e733]:
                  - paragraph [ref=e734]: 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝟗𝐭𝐡 𝐂𝐡𝐞𝐦𝐢𝐬𝐭𝐫𝐲 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐍𝐨𝐭𝐞𝐬 | @otsedtech | @Off-The-School
                  - generic [ref=e735]:
                    - generic [ref=e736]:
                      - img [ref=e737]
                      - paragraph [ref=e740]: 49K views
                    - paragraph [ref=e741]: •
                    - paragraph [ref=e742]: Off The School
          - link [ref=e744] [cursor=pointer]:
            - /url: https://www.youtube.com/@otsedtech
            - text: View All Videos
            - img [ref=e746]
        - generic [ref=e751]:
          - generic [ref=e752]:
            - generic [ref=e754]: Daily Micro Learning
            - heading [level=2] [ref=e757]: Learn Something New In A Minute
            - paragraph [ref=e759]: Scroll, Tap and Learn.
            - link [ref=e761] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - img [ref=e763]
              - text: Follow us on Instagram
          - generic [ref=e766]:
            - generic [ref=e768] [cursor=pointer]:
              - generic [ref=e769]:
                - img [ref=e770]
                - generic [ref=e772]:
                  - paragraph [ref=e773]: Our Tech Is Killing Us
                  - generic [ref=e774]:
                    - generic [ref=e775]:
                      - img [ref=e776]
                      - paragraph [ref=e779]: 5.4K
                    - generic [ref=e780]:
                      - img [ref=e781]
                      - paragraph [ref=e783]: Flip to watch
              - generic [ref=e786]:
                - img [ref=e787]
                - paragraph [ref=e790]: Watch on Instagram
                - link [ref=e791]:
                  - /url: https://www.instagram.com/reel/DT77VXwDxgs/
                  - text: Watch Reel
                  - img [ref=e793]
            - generic [ref=e798] [cursor=pointer]:
              - generic [ref=e799]:
                - img [ref=e800]
                - generic [ref=e802]:
                  - paragraph [ref=e803]: Japan's 1,500 Quakes Explained
                  - generic [ref=e804]:
                    - generic [ref=e805]:
                      - img [ref=e806]
                      - paragraph [ref=e809]: 9.1K
                    - generic [ref=e810]:
                      - img [ref=e811]
                      - paragraph [ref=e813]: Flip to watch
              - generic [ref=e816]:
                - img [ref=e817]
                - paragraph [ref=e820]: Watch on Instagram
                - link [ref=e821]:
                  - /url: https://www.instagram.com/reel/DTnGeWAFCR5/
                  - text: Watch Reel
                  - img [ref=e823]
            - generic [ref=e828] [cursor=pointer]:
              - generic [ref=e829]:
                - img [ref=e830]
                - generic [ref=e832]:
                  - paragraph [ref=e833]: "GenZ's Pakistan: From Consumer to Creator"
                  - generic [ref=e834]:
                    - generic [ref=e835]:
                      - img [ref=e836]
                      - paragraph [ref=e839]: 5.8K
                    - generic [ref=e840]:
                      - img [ref=e841]
                      - paragraph [ref=e843]: Flip to watch
              - generic [ref=e846]:
                - img [ref=e847]
                - paragraph [ref=e850]: Watch on Instagram
                - link [ref=e851]:
                  - /url: https://www.instagram.com/reel/DQ4Av80CONR/
                  - text: Watch Reel
                  - img [ref=e853]
            - generic [ref=e858] [cursor=pointer]:
              - generic [ref=e859]:
                - img [ref=e860]
                - generic [ref=e862]:
                  - paragraph [ref=e863]: The Eco Friendly Currency
                  - generic [ref=e864]:
                    - generic [ref=e865]:
                      - img [ref=e866]
                      - paragraph [ref=e869]: 6.7K
                    - generic [ref=e870]:
                      - img [ref=e871]
                      - paragraph [ref=e873]: Flip to watch
              - generic [ref=e876]:
                - img [ref=e877]
                - paragraph [ref=e880]: Watch on Instagram
                - link [ref=e881]:
                  - /url: https://www.instagram.com/reel/DQO6WC5ATaN/
                  - text: Watch Reel
                  - img [ref=e883]
          - generic [ref=e888]:
            - generic [ref=e889]:
              - paragraph [ref=e890]: 0s
              - paragraph [ref=e891]: Avg reel length
            - generic [ref=e892]:
              - paragraph [ref=e893]: 0+
              - paragraph [ref=e894]: Concepts simplified
            - generic [ref=e895]:
              - paragraph [ref=e896]: 0K+
              - paragraph [ref=e897]: Monthly views
            - link [ref=e899] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - generic [ref=e900]: Start Learning
              - img [ref=e902]
        - generic [ref=e909]:
          - generic [ref=e910]:
            - generic [ref=e911]:
              - generic [ref=e912]: 
              - text: Our YouTube Channels
            - heading [level=2] [ref=e913]:
              - generic [ref=e914]: Explore Our
              - text: Educational Network
            - paragraph [ref=e915]: Discover our diverse range of YouTube channels, each dedicated to different aspects of education and learning
          - generic [ref=e916]:
            - generic [ref=e917]:
              - link [ref=e919] [cursor=pointer]:
                - /url: https://www.youtube.com/@Off-The-School
                - generic [ref=e921]:
                  - generic [ref=e922]:
                    - img [ref=e924]
                    - img [ref=e927]
                  - paragraph [ref=e929]: Off The School
                  - paragraph [ref=e930]: Comprehensive educational content
                  - img [ref=e931]
              - link [ref=e934] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsednews
                - generic [ref=e936]:
                  - generic [ref=e937]:
                    - img [ref=e939]
                    - img [ref=e942]
                  - paragraph [ref=e944]: EdNews
                  - paragraph [ref=e945]: Latest education sector updates
                  - img [ref=e946]
            - generic [ref=e948]:
              - link [ref=e950] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - generic [ref=e952]:
                  - generic [ref=e953]:
                    - img [ref=e955]
                    - img [ref=e958]
                  - paragraph [ref=e960]: EdTech
                  - paragraph [ref=e961]: Technology-driven education
                  - img [ref=e962]
              - link [ref=e965] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedsense
                - generic [ref=e967]:
                  - generic [ref=e968]:
                    - img [ref=e970]
                    - img [ref=e973]
                  - paragraph [ref=e975]: EdSense
                  - paragraph [ref=e976]: Educational insights & discussions
                  - img [ref=e977]
              - link [ref=e980] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedfun
                - generic [ref=e982]:
                  - generic [ref=e983]:
                    - img [ref=e985]
                    - img [ref=e988]
                  - paragraph [ref=e990]: EdFun
                  - paragraph [ref=e991]: Fun & engaging learning
                  - img [ref=e992]
          - link [ref=e995] [cursor=pointer]:
            - /url: https://www.youtube.com/@Off-The-School
            - img [ref=e997]
            - text: Subscribe Our Channels
        - generic [ref=e1003]:
          - generic [ref=e1007]:
            - generic [ref=e1009]:
              - img [ref=e1010]
              - paragraph [ref=e1013]: Stay Updated
            - heading [level=2] [ref=e1015]:
              - generic [ref=e1016]: Subscribe to our
              - text: Newsletter
            - paragraph [ref=e1018]: Get the latest educational tips, course updates, and exclusive content delivered straight to your inbox.
            - generic [ref=e1020]:
              - textbox [ref=e1021]:
                - /placeholder: Enter your email address
              - button [ref=e1022] [cursor=pointer]:
                - text: Subscribe
                - img [ref=e1024]
            - paragraph [ref=e1028]: 🔒 No spam, unsubscribe anytime
          - generic [ref=e1030]:
            - img [ref=e1033]
            - heading [level=2] [ref=e1036]: Oops!
            - button [ref=e1037] [cursor=pointer]: Try Again
        - generic [ref=e1043]:
          - generic [ref=e1044]:
            - generic [ref=e1046]:
              - img [ref=e1047]
              - paragraph [ref=e1049]: Download Our App
            - paragraph [ref=e1051]: Learning Together
            - paragraph [ref=e1053]: Download our mobile app and access all courses offline. Learn anytime, anywhere with a seamless experience.
            - generic [ref=e1054]:
              - generic [ref=e1055]:
                - img [ref=e1056]
                - img [ref=e1058]
                - img [ref=e1060]
                - img [ref=e1062]
                - img [ref=e1064]
              - paragraph [ref=e1066]: 4.9 • 1000+ Reviews
            - generic [ref=e1067]:
              - link [ref=e1068] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.otsapp
                - img [ref=e1070]
                - generic [ref=e1072]:
                  - paragraph [ref=e1073]: GET IT ON
                  - paragraph [ref=e1074]: Google Play
              - link [ref=e1075] [cursor=pointer]:
                - /url: /signup
                - text: Try Web Version
                - img [ref=e1077]
          - img [ref=e1082]
        - generic [ref=e1084]:
          - generic [ref=e1085]:
            - generic [ref=e1087]:
              - img [ref=e1089]
              - paragraph [ref=e1090]: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
              - generic [ref=e1091]:
                - paragraph [ref=e1092]: Stay Updated
                - generic [ref=e1093]:
                  - textbox [ref=e1094]:
                    - /placeholder: Enter your email
                  - button [ref=e1095] [cursor=pointer]:
                    - img [ref=e1096]
              - generic [ref=e1100]:
                - link [ref=e1101] [cursor=pointer]:
                  - /url: https://www.facebook.com/OTS.Edtech/
                  - img [ref=e1102]
                - link [ref=e1104] [cursor=pointer]:
                  - /url: https://x.com/offtheschool
                  - img [ref=e1105]
                - link [ref=e1107] [cursor=pointer]:
                  - /url: https://www.instagram.com/otsedtech/
                  - img [ref=e1108]
                - link [ref=e1110] [cursor=pointer]:
                  - /url: https://linkedin.com/company/off-the-school/
                  - img [ref=e1111]
                - link [ref=e1113] [cursor=pointer]:
                  - /url: https://www.youtube.com/@otsedtech
                  - img [ref=e1114]
            - generic [ref=e1117]:
              - heading [level=4] [ref=e1118]: Quick Links
              - generic [ref=e1119]:
                - link [ref=e1120] [cursor=pointer]:
                  - /url: /aboutus
                  - img [ref=e1121]
                  - text: About Us
                - link [ref=e1124] [cursor=pointer]:
                  - /url: /contactus
                  - img [ref=e1125]
                  - text: Contact
                - link [ref=e1128] [cursor=pointer]:
                  - /url: /faq
                  - img [ref=e1129]
                  - text: FAQ
                - link [ref=e1132] [cursor=pointer]:
                  - /url: /privacy-policy
                  - img [ref=e1133]
                  - text: Privacy Policy
                - link [ref=e1136] [cursor=pointer]:
                  - /url: /terms-of-use
                  - img [ref=e1137]
                  - text: Terms of Use
            - generic [ref=e1141]:
              - heading [level=4] [ref=e1142]: Contact Us
              - generic [ref=e1143]:
                - generic [ref=e1144]:
                  - img [ref=e1146]
                  - paragraph [ref=e1149]: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
                - generic [ref=e1150]:
                  - img [ref=e1152]
                  - link [ref=e1155] [cursor=pointer]:
                    - /url: mailto:info@offtheschool.io
                    - text: info@offtheschool.io
                - generic [ref=e1156]:
                  - img [ref=e1158]
                  - link [ref=e1160] [cursor=pointer]:
                    - /url: tel:+923010687687
                    - text: +92 301 0687687
            - generic [ref=e1162]:
              - heading [level=4] [ref=e1163]: Download App
              - generic [ref=e1164]:
                - paragraph [ref=e1165]: Get our app for a better learning experience
                - generic [ref=e1167]:
                  - img [ref=e1168]
                  - generic [ref=e1169]:
                    - paragraph [ref=e1170]: Scan to Download
                    - link [ref=e1171] [cursor=pointer]:
                      - /url: https://play.google.com/store
                      - img [ref=e1172]
          - generic [ref=e1174]:
            - paragraph [ref=e1175]: © 2026 Off The School. All rights reserved.
            - generic [ref=e1176]:
              - link [ref=e1177] [cursor=pointer]:
                - /url: /privacy-policy
                - text: Privacy
              - link [ref=e1178] [cursor=pointer]:
                - /url: /terms-of-use
                - text: Terms
              - link [ref=e1179] [cursor=pointer]:
                - /url: /faq
                - text: FAQ
        - button [ref=e1180] [cursor=pointer]:
          - img [ref=e1181]
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
  - dialog [ref=e1185]:
    - generic [ref=e1187]:
      - button "Close" [active] [ref=e1192] [cursor=pointer]:
        - img [ref=e1193]
      - img "Off The School App" [ref=e1201]
      - generic [ref=e1203]:
        - generic [ref=e1205]:
          - img [ref=e1206]
          - paragraph [ref=e1208]: Off The School App
        - heading "Start Learning Smarter Anytime, Anywhere" [level=2] [ref=e1210]:
          - text: Start Learning Smarter
          - text: Anytime, Anywhere
        - paragraph [ref=e1212]: Download our app and unlock courses, quizzes, and a personalized learning experience.
        - generic [ref=e1213]:
          - generic [ref=e1215]:
            - img [ref=e1216]
            - paragraph [ref=e1218]: 100+ Courses
          - generic [ref=e1220]:
            - img [ref=e1221]
            - paragraph [ref=e1223]: Free Download
        - generic [ref=e1225]:
          - img [ref=e1226]
          - img [ref=e1228]
          - img [ref=e1230]
          - img [ref=e1232]
          - img [ref=e1234]
          - paragraph [ref=e1236]: 4.8 Rating
        - link "Google Play Get it on Google Play" [ref=e1238] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.otsapp
          - generic [ref=e1240]:
            - img "Google Play" [ref=e1241]
            - generic [ref=e1242]:
              - paragraph [ref=e1243]: Get it on
              - paragraph [ref=e1244]: Google Play
```

# Test source

```ts
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
> 172 |     await this.getStartLink.click();
      |                             ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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