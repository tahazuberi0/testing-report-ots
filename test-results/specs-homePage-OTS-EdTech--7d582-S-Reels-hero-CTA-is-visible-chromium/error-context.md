# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_026: "New: OTS Reels" hero CTA is visible
- Location: tests\specs\homePage.spec.js:658:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByText('Your Journey to').first() to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - img "Logo" [ref=e7] [cursor=pointer]
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
    - button "Open reels" [ref=e19] [cursor=pointer]:
      - img [ref=e20]
    - main [ref=e24]:
      - generic [ref=e25]:
        - generic [ref=e26]:
          - button "Toggle theme" [ref=e28] [cursor=pointer]:
            - img [ref=e29]
          - generic:
            - generic [ref=e41] [cursor=pointer]:
              - img [ref=e44]
              - paragraph [ref=e46]: Maths
            - generic [ref=e48] [cursor=pointer]:
              - img [ref=e51]
              - paragraph [ref=e53]: Urdu
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - paragraph: Computer
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - paragraph: English
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - paragraph: Physics
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - paragraph: Biology
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - paragraph: Science
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - paragraph: Chemistry
          - generic [ref=e55]:
            - generic [ref=e57]:
              - img [ref=e58]
              - paragraph [ref=e60]: Pakistan's First Free EdTech Platform
              - img [ref=e61]
            - heading "Your Journey to Growth" [level=2] [ref=e64]:
              - text: Your Journey to
              - generic [ref=e66]: Growth
            - paragraph [ref=e68]: Free,world-class education for every student in Pakistan from Kindergarten to Class 12 with interactive lessons & expert teachers.
            - generic [ref=e71]:
              - generic:
                - img
              - textbox "Search chapters by title (e.g., Grammar, Algebra)" [ref=e72]
            - generic [ref=e73]:
              - link "Start Learning — It's Free" [ref=e74] [cursor=pointer]:
                - /url: /explore
                - text: Start Learning — It's Free
                - img [ref=e76]
              - 'link "New: OTS Reels" [ref=e78] [cursor=pointer]':
                - /url: /reels
                - img [ref=e80]
                - text: "New: OTS Reels"
              - link "Watch How It Works" [ref=e82] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - img [ref=e84]
                - text: Watch How It Works
        - generic [ref=e89]:
          - generic [ref=e90]:
            - generic [ref=e91]:
              - paragraph [ref=e92]: Explore School
              - paragraph [ref=e93]: Digital School
            - link "View All Categories" [ref=e95] [cursor=pointer]:
              - /url: /explore/digitalschool
              - img [ref=e97]
              - text: View All Categories
          - generic [ref=e102]:
            - link "Kindergarten Early learning and foundational skills for young learners 50+ Courses" [ref=e104] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - img [ref=e112]
                  - paragraph [ref=e115]: Kindergarten
                  - paragraph [ref=e116]: Early learning and foundational skills for young learners
                - generic [ref=e117]:
                  - paragraph [ref=e118]: 50+ Courses
                  - img [ref=e120]
            - link "Primary Classes 1-5 with core subjects and activities 80+ Courses" [ref=e123] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e128]:
                - generic [ref=e129]:
                  - img [ref=e131]
                  - paragraph [ref=e134]: Primary
                  - paragraph [ref=e135]: Classes 1-5 with core subjects and activities
                - generic [ref=e136]:
                  - paragraph [ref=e137]: 80+ Courses
                  - img [ref=e139]
            - link "Secondary Classes 6-8 with comprehensive academic courses 100+ Courses" [ref=e142] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e147]:
                - generic [ref=e148]:
                  - img [ref=e150]
                  - paragraph [ref=e153]: Secondary
                  - paragraph [ref=e154]: Classes 6-8 with comprehensive academic courses
                - generic [ref=e155]:
                  - paragraph [ref=e156]: 100+ Courses
                  - img [ref=e158]
            - link "Higher Secondary Classes 9-12 with advanced subjects and career prep 120+ Courses" [ref=e161] [cursor=pointer]:
              - /url: /explore
              - generic [ref=e166]:
                - generic [ref=e167]:
                  - img [ref=e169]
                  - paragraph [ref=e172]: Higher Secondary
                  - paragraph [ref=e173]: Classes 9-12 with advanced subjects and career prep
                - generic [ref=e174]:
                  - paragraph [ref=e175]: 120+ Courses
                  - img [ref=e177]
          - generic [ref=e179]:
            - generic [ref=e180]:
              - paragraph [ref=e181]: Applied Learning
              - paragraph [ref=e182]: Skilled Courses
            - link "View All Skills" [ref=e184] [cursor=pointer]:
              - /url: /explore/skilledbased
              - img [ref=e186]
              - text: View All Skills
        - generic [ref=e197]:
          - generic [ref=e198]:
            - paragraph [ref=e199]: Our Impact
            - paragraph [ref=e200]: Numbers That Speak
            - paragraph [ref=e201]: Transforming education across Pakistan with accessible, quality learning
          - generic [ref=e202]:
            - generic [ref=e206]:
              - img [ref=e208]
              - generic [ref=e214]:
                - paragraph [ref=e215]: "0"
                - paragraph [ref=e216]: +
              - paragraph [ref=e217]: Active Students
            - generic [ref=e221]:
              - img [ref=e223]
              - generic [ref=e227]:
                - paragraph [ref=e228]: "0"
                - paragraph [ref=e229]: +
              - paragraph [ref=e230]: EdTech videos
            - generic [ref=e234]:
              - img [ref=e236]
              - generic [ref=e240]:
                - paragraph [ref=e241]: "0"
                - paragraph [ref=e242]: +
              - paragraph [ref=e243]: lessons covered
            - generic [ref=e247]:
              - img [ref=e249]
              - generic [ref=e252]:
                - paragraph [ref=e253]: "0"
                - paragraph [ref=e254]: +
              - paragraph [ref=e255]: Educators
            - generic [ref=e259]:
              - img [ref=e261]
              - generic [ref=e265]:
                - paragraph [ref=e266]: "0"
                - paragraph [ref=e267]: +
              - paragraph [ref=e268]: App Downloads
        - generic [ref=e272]:
          - generic [ref=e273]:
            - paragraph [ref=e274]: Why Choose Us
            - paragraph [ref=e275]: Everything You Need to Succeed
            - paragraph [ref=e276]: Discover why thousands of students trust OTS for their educational journey. Our platform is designed to make learning effective, engaging, and accessible.
          - generic [ref=e277]:
            - generic [ref=e282] [cursor=pointer]:
              - img [ref=e284]
              - paragraph [ref=e286]: Interactive Video Lessons
              - paragraph [ref=e287]: Engaging video content with visual explanations that make complex concepts easy to understand.
              - generic [ref=e288]:
                - paragraph [ref=e289]: Learn More
                - paragraph [ref=e290]: →
            - generic [ref=e295] [cursor=pointer]:
              - img [ref=e297]
              - paragraph [ref=e299]: Complete Curriculum
              - paragraph [ref=e300]: From KG to Class 12, covering all subjects aligned with Sindh Board, Agha Khan, and Cambridge.
              - generic [ref=e301]:
                - paragraph [ref=e302]: Learn More
                - paragraph [ref=e303]: →
            - generic [ref=e308] [cursor=pointer]:
              - img [ref=e310]
              - paragraph [ref=e312]: Learn Anywhere
              - paragraph [ref=e313]: Access lessons on any device - mobile, tablet, or desktop. Learn on the go with our app.
              - generic [ref=e314]:
                - paragraph [ref=e315]: Learn More
                - paragraph [ref=e316]: →
            - generic [ref=e321] [cursor=pointer]:
              - img [ref=e323]
              - paragraph [ref=e326]: Quizzes & Assessments
              - paragraph [ref=e327]: Test your knowledge with interactive quizzes and track your progress with detailed analytics.
              - generic [ref=e328]:
                - paragraph [ref=e329]: Learn More
                - paragraph [ref=e330]: →
            - generic [ref=e335] [cursor=pointer]:
              - img [ref=e337]
              - paragraph [ref=e339]: Expert Teachers
              - paragraph [ref=e340]: Learn from qualified educators with years of experience in their respective fields.
              - generic [ref=e341]:
                - paragraph [ref=e342]: Learn More
                - paragraph [ref=e343]: →
            - generic [ref=e348] [cursor=pointer]:
              - img [ref=e350]
              - paragraph [ref=e353]: Learn at Your Pace
              - paragraph [ref=e354]: No deadlines, no pressure. Study whenever and wherever suits you best.
              - generic [ref=e355]:
                - paragraph [ref=e356]: Learn More
                - paragraph [ref=e357]: →
            - generic [ref=e362] [cursor=pointer]:
              - img [ref=e364]
              - paragraph [ref=e366]: Safe & Secure
              - paragraph [ref=e367]: Kid-friendly environment with no ads or inappropriate content. Safe for all ages.
              - generic [ref=e368]:
                - paragraph [ref=e369]: Learn More
                - paragraph [ref=e370]: →
            - generic [ref=e375] [cursor=pointer]:
              - img [ref=e377]
              - paragraph [ref=e379]: 100% Free Forever
              - paragraph [ref=e380]: Quality education should be accessible to everyone. All content is completely free.
              - generic [ref=e381]:
                - paragraph [ref=e382]: Learn More
                - paragraph [ref=e383]: →
        - generic [ref=e386]:
          - generic [ref=e387]:
            - paragraph [ref=e388]: The learning Flow
            - paragraph [ref=e389]: How It Works
            - paragraph [ref=e390]: Start your learning journey in just a few simple steps
          - generic [ref=e391]:
            - generic [ref=e393]:
              - generic [ref=e394]:
                - img [ref=e397]
                - generic [ref=e400]: "1"
              - generic [ref=e401]:
                - paragraph [ref=e402]: Create Account
                - paragraph [ref=e403]: Sign up for free in seconds. No credit card required.
            - generic [ref=e407]:
              - generic [ref=e408]:
                - img [ref=e411]
                - generic [ref=e414]: "2"
              - generic [ref=e415]:
                - paragraph [ref=e416]: Choose Your Class
                - paragraph [ref=e417]: Select your grade level and subjects you want to learn.
            - generic [ref=e421]:
              - generic [ref=e422]:
                - img [ref=e425]
                - generic [ref=e427]: "3"
              - generic [ref=e428]:
                - paragraph [ref=e429]: Start Learning
                - paragraph [ref=e430]: Watch engaging video lessons and practise with quizzes.
            - generic [ref=e434]:
              - generic [ref=e435]:
                - img [ref=e438]
                - generic [ref=e441]: "4"
              - generic [ref=e442]:
                - paragraph [ref=e443]: Track Progress
                - paragraph [ref=e444]: Monitor your improvement and celebrate your achievements.
          - link "Get Start" [ref=e446] [cursor=pointer]:
            - /url: /signup
            - text: Get Start
            - img [ref=e448]
        - generic [ref=e453]:
          - generic [ref=e454]:
            - generic [ref=e455]:
              - img [ref=e456]
              - paragraph [ref=e458]: Video Lessons
            - heading "Our YouTube Learning Hub" [level=2] [ref=e459]
            - paragraph [ref=e460]: Explore our educational content and empower your learning journey with free video lessons.
          - generic [ref=e463]:
            - generic [ref=e464]:
              - img "Channel Logo" [ref=e466]
              - generic [ref=e467]:
                - heading "Loading..." [level=3] [ref=e468]
                - generic [ref=e469]:
                  - generic [ref=e470]:
                    - img [ref=e471]
                    - paragraph [ref=e476]: Loading... Subs
                  - paragraph [ref=e477]: •
                  - generic [ref=e478]:
                    - img [ref=e479]
                    - paragraph [ref=e482]: Loading... Videos
                  - paragraph [ref=e483]: •
                  - generic [ref=e484]:
                    - img [ref=e485]
                    - paragraph [ref=e488]: Loading... Views
            - link "Subscribe" [ref=e489] [cursor=pointer]:
              - /url: https://www.youtube.com/@otsedtech?sub_confirmation=1
              - img [ref=e491]
              - text: Subscribe
          - link "View All Videos" [ref=e494] [cursor=pointer]:
            - /url: https://www.youtube.com/@otsedtech
            - text: View All Videos
            - img [ref=e496]
        - generic [ref=e501]:
          - generic [ref=e502]:
            - generic [ref=e504]: Daily Micro Learning
            - heading "Learn Something New In A Minute" [level=2] [ref=e507]
            - paragraph [ref=e509]: Scroll, Tap and Learn.
            - link "Follow us on Instagram" [ref=e511] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - img [ref=e513]
              - text: Follow us on Instagram
          - generic [ref=e516]:
            - generic [ref=e518] [cursor=pointer]:
              - generic [ref=e519]:
                - img "Our Tech Is Killing Us" [ref=e520]
                - generic [ref=e522]:
                  - paragraph [ref=e523]: Our Tech Is Killing Us
                  - generic [ref=e524]:
                    - generic [ref=e525]:
                      - img [ref=e526]
                      - paragraph [ref=e529]: 5.4K
                    - generic [ref=e530]:
                      - img [ref=e531]
                      - paragraph [ref=e533]: Flip to watch
              - generic [ref=e536]:
                - img [ref=e537]
                - paragraph [ref=e540]: Watch on Instagram
                - link "Watch Reel" [ref=e541]:
                  - /url: https://www.instagram.com/reel/DT77VXwDxgs/
                  - text: Watch Reel
                  - img [ref=e543]
            - generic [ref=e548] [cursor=pointer]:
              - generic [ref=e549]:
                - img "Japan's 1,500 Quakes Explained" [ref=e550]
                - generic [ref=e552]:
                  - paragraph [ref=e553]: Japan's 1,500 Quakes Explained
                  - generic [ref=e554]:
                    - generic [ref=e555]:
                      - img [ref=e556]
                      - paragraph [ref=e559]: 9.1K
                    - generic [ref=e560]:
                      - img [ref=e561]
                      - paragraph [ref=e563]: Flip to watch
              - generic [ref=e566]:
                - img [ref=e567]
                - paragraph [ref=e570]: Watch on Instagram
                - link "Watch Reel" [ref=e571]:
                  - /url: https://www.instagram.com/reel/DTnGeWAFCR5/
                  - text: Watch Reel
                  - img [ref=e573]
            - generic [ref=e578] [cursor=pointer]:
              - generic [ref=e579]:
                - 'img "GenZ''s Pakistan: From Consumer to Creator" [ref=e580]'
                - generic [ref=e582]:
                  - paragraph [ref=e583]: "GenZ's Pakistan: From Consumer to Creator"
                  - generic [ref=e584]:
                    - generic [ref=e585]:
                      - img [ref=e586]
                      - paragraph [ref=e589]: 5.8K
                    - generic [ref=e590]:
                      - img [ref=e591]
                      - paragraph [ref=e593]: Flip to watch
              - generic [ref=e596]:
                - img [ref=e597]
                - paragraph [ref=e600]: Watch on Instagram
                - link "Watch Reel" [ref=e601]:
                  - /url: https://www.instagram.com/reel/DQ4Av80CONR/
                  - text: Watch Reel
                  - img [ref=e603]
            - generic [ref=e608] [cursor=pointer]:
              - generic [ref=e609]:
                - img "The Eco Friendly Currency" [ref=e610]
                - generic [ref=e612]:
                  - paragraph [ref=e613]: The Eco Friendly Currency
                  - generic [ref=e614]:
                    - generic [ref=e615]:
                      - img [ref=e616]
                      - paragraph [ref=e619]: 6.7K
                    - generic [ref=e620]:
                      - img [ref=e621]
                      - paragraph [ref=e623]: Flip to watch
              - generic [ref=e626]:
                - img [ref=e627]
                - paragraph [ref=e630]: Watch on Instagram
                - link "Watch Reel" [ref=e631]:
                  - /url: https://www.instagram.com/reel/DQO6WC5ATaN/
                  - text: Watch Reel
                  - img [ref=e633]
          - generic [ref=e638]:
            - generic [ref=e639]:
              - paragraph [ref=e640]: 0s
              - paragraph [ref=e641]: Avg reel length
            - generic [ref=e642]:
              - paragraph [ref=e643]: 0+
              - paragraph [ref=e644]: Concepts simplified
            - generic [ref=e645]:
              - paragraph [ref=e646]: 0K+
              - paragraph [ref=e647]: Monthly views
            - link "Start Learning" [ref=e649] [cursor=pointer]:
              - /url: https://www.instagram.com/otsedtech/
              - generic [ref=e650]: Start Learning
              - img [ref=e652]
        - generic [ref=e659]:
          - generic [ref=e660]:
            - generic [ref=e661]:
              - generic [ref=e662]: 
              - text: Our YouTube Channels
            - heading "Explore Our Educational Network" [level=2] [ref=e663]:
              - generic [ref=e664]: Explore Our
              - text: Educational Network
            - paragraph [ref=e665]: Discover our diverse range of YouTube channels, each dedicated to different aspects of education and learning
          - generic [ref=e666]:
            - generic [ref=e667]:
              - link "Off The School Comprehensive educational content" [ref=e669] [cursor=pointer]:
                - /url: https://www.youtube.com/@Off-The-School
                - generic [ref=e671]:
                  - generic [ref=e672]:
                    - img [ref=e674]
                    - img [ref=e677]
                  - paragraph [ref=e679]: Off The School
                  - paragraph [ref=e680]: Comprehensive educational content
                  - img [ref=e681]
              - link "EdNews Latest education sector updates" [ref=e684] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsednews
                - generic [ref=e686]:
                  - generic [ref=e687]:
                    - img [ref=e689]
                    - img [ref=e692]
                  - paragraph [ref=e694]: EdNews
                  - paragraph [ref=e695]: Latest education sector updates
                  - img [ref=e696]
            - generic [ref=e698]:
              - link "EdTech Technology-driven education" [ref=e700] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedtech
                - generic [ref=e702]:
                  - generic [ref=e703]:
                    - img [ref=e705]
                    - img [ref=e708]
                  - paragraph [ref=e710]: EdTech
                  - paragraph [ref=e711]: Technology-driven education
                  - img [ref=e712]
              - link "EdSense Educational insights & discussions" [ref=e715] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedsense
                - generic [ref=e717]:
                  - generic [ref=e718]:
                    - img [ref=e720]
                    - img [ref=e723]
                  - paragraph [ref=e725]: EdSense
                  - paragraph [ref=e726]: Educational insights & discussions
                  - img [ref=e727]
              - link "EdFun Fun & engaging learning" [ref=e730] [cursor=pointer]:
                - /url: https://www.youtube.com/@otsedfun
                - generic [ref=e732]:
                  - generic [ref=e733]:
                    - img [ref=e735]
                    - img [ref=e738]
                  - paragraph [ref=e740]: EdFun
                  - paragraph [ref=e741]: Fun & engaging learning
                  - img [ref=e742]
          - link "Subscribe Our Channels" [ref=e745] [cursor=pointer]:
            - /url: https://www.youtube.com/@Off-The-School
            - img [ref=e747]
            - text: Subscribe Our Channels
        - generic [ref=e753]:
          - generic [ref=e754]:
            - generic:
              - generic:
                - img
            - generic:
              - generic:
                - img
            - generic [ref=e757]:
              - generic [ref=e759]:
                - img [ref=e760]
                - paragraph [ref=e763]: Stay Updated
              - heading "Subscribe to our Newsletter" [level=2] [ref=e765]:
                - generic [ref=e766]: Subscribe to our
                - text: Newsletter
              - paragraph [ref=e768]: Get the latest educational tips, course updates, and exclusive content delivered straight to your inbox.
              - generic [ref=e770]:
                - textbox "Enter your email address" [ref=e771]
                - button "Subscribe" [ref=e772] [cursor=pointer]:
                  - text: Subscribe
                  - img [ref=e774]
              - paragraph [ref=e778]: 🔒 No spam, unsubscribe anytime
          - generic [ref=e780]:
            - img [ref=e783]
            - heading "Oops!" [level=2] [ref=e786]
            - paragraph
            - button "Try Again" [ref=e787] [cursor=pointer]
        - generic [ref=e789]:
          - generic [ref=e793]:
            - generic [ref=e794]:
              - generic [ref=e796]:
                - img [ref=e797]
                - paragraph [ref=e799]: Download Our App
              - paragraph [ref=e801]: Learning Together
              - paragraph [ref=e803]: Download our mobile app and access all courses offline. Learn anytime, anywhere with a seamless experience.
              - generic [ref=e804]:
                - generic [ref=e805]:
                  - img [ref=e806]
                  - img [ref=e808]
                  - img [ref=e810]
                  - img [ref=e812]
                  - img [ref=e814]
                - paragraph [ref=e816]: 4.9 • 1000+ Reviews
              - generic [ref=e817]:
                - link "GET IT ON Google Play" [ref=e818] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.otsapp
                  - img [ref=e820]
                  - generic [ref=e822]:
                    - paragraph [ref=e823]: GET IT ON
                    - paragraph [ref=e824]: Google Play
                - link "Try Web Version" [ref=e825] [cursor=pointer]:
                  - /url: /signup
                  - text: Try Web Version
                  - img [ref=e827]
            - generic:
              - generic:
                - generic:
                  - img "OTS Mobile App"
          - generic:
            - generic:
              - img "Scan to Download"
              - paragraph: Scan to Download
        - generic [ref=e830]:
          - generic [ref=e831]:
            - generic [ref=e833]:
              - generic:
                - img "Off The School"
              - paragraph [ref=e834]: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
              - generic [ref=e835]:
                - paragraph [ref=e836]: Stay Updated
                - generic [ref=e837]:
                  - textbox "Enter your email" [ref=e838]
                  - button [ref=e839] [cursor=pointer]:
                    - img [ref=e840]
              - generic [ref=e844]:
                - link "Facebook" [ref=e845] [cursor=pointer]:
                  - /url: https://www.facebook.com/OTS.Edtech/
                  - img [ref=e846]
                - link "Twitter" [ref=e848] [cursor=pointer]:
                  - /url: https://x.com/offtheschool
                  - img [ref=e849]
                - link "Instagram" [ref=e851] [cursor=pointer]:
                  - /url: https://www.instagram.com/otsedtech/
                  - img [ref=e852]
                - link "LinkedIn" [ref=e854] [cursor=pointer]:
                  - /url: https://linkedin.com/company/off-the-school/
                  - img [ref=e855]
                - link "YouTube" [ref=e857] [cursor=pointer]:
                  - /url: https://www.youtube.com/@otsedtech
                  - img [ref=e858]
            - generic [ref=e861]:
              - heading "Quick Links" [level=4] [ref=e862]
              - generic [ref=e863]:
                - link "About Us" [ref=e864] [cursor=pointer]:
                  - /url: /aboutus
                  - img [ref=e865]
                  - text: About Us
                - link "Contact" [ref=e868] [cursor=pointer]:
                  - /url: /contactus
                  - img [ref=e869]
                  - text: Contact
                - link "FAQ" [ref=e872] [cursor=pointer]:
                  - /url: /faq
                  - img [ref=e873]
                  - text: FAQ
                - link "Privacy Policy" [ref=e876] [cursor=pointer]:
                  - /url: /privacy-policy
                  - img [ref=e877]
                  - text: Privacy Policy
                - link "Terms of Use" [ref=e880] [cursor=pointer]:
                  - /url: /terms-of-use
                  - img [ref=e881]
                  - text: Terms of Use
            - generic [ref=e885]:
              - heading "Contact Us" [level=4] [ref=e886]
              - generic [ref=e887]:
                - generic [ref=e888]:
                  - img [ref=e890]
                  - paragraph [ref=e893]: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
                - generic [ref=e894]:
                  - img [ref=e896]
                  - link "info@offtheschool.io" [ref=e899] [cursor=pointer]:
                    - /url: mailto:info@offtheschool.io
                - generic [ref=e900]:
                  - img [ref=e902]
                  - link "+92 301 0687687" [ref=e904] [cursor=pointer]:
                    - /url: tel:+923010687687
            - generic [ref=e906]:
              - heading "Download App" [level=4] [ref=e907]
              - generic [ref=e908]:
                - paragraph [ref=e909]: Get our app for a better learning experience
                - generic [ref=e911]:
                  - img "QR Code" [ref=e912]
                  - generic [ref=e913]:
                    - paragraph [ref=e914]: Scan to Download
                    - link "Google Play":
                      - /url: https://play.google.com/store
                      - img "Google Play"
          - generic [ref=e916]:
            - paragraph [ref=e917]: © 2026 Off The School. All rights reserved.
            - generic [ref=e918]:
              - link "Privacy" [ref=e919] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Terms" [ref=e920] [cursor=pointer]:
                - /url: /terms-of-use
              - link "FAQ" [ref=e921] [cursor=pointer]:
                - /url: /faq
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
```

# Test source

```ts
  29  |       .filter({ hasText: /^Pakistan's First Free EdTech Platform$/ })
  30  |       .nth(1);
  31  |     this.heroJourneyText = page.getByText('Your Journey to');
  32  |     this.heroGrowthText = page.getByText('Growth');
  33  |     this.heroValuePropText = page.getByText('Free,world-class education');
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
> 129 |     await this.heroJourneyText.first().waitFor({ state: 'visible' });
      |                                        ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
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