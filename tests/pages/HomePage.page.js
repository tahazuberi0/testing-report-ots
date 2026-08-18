/**
 * Page Object for the OTS EdTech marketing homepage.
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 */
export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Navigation & Header ---
    this.logo = page.getByRole('img', { name: 'Logo', exact: true });
    // MISSING LIVE: selectors.md lists OTS Logo, but current DOM has no img named "OTS Logo"
    this.otsLogo = page.getByRole('img', { name: 'OTS Logo' });
    // Prefer link role: getByText('Home'|'Reels') matched 2 nodes live
    this.homeNav = page.getByRole('link', { name: 'Home' });
    this.exploreNav = page.getByText('Explore', { exact: true });
    this.reelsNav = page.getByRole('link', { name: 'Reels' });
    // FALLBACK CSS: selectors.md only lists brittle dynamic id `menu-button-:rvd:`
    this.headerMenuButton = page.locator('[id^="menu-button-"]').first();
    this.dashboardMenuItem = page.getByRole('menuitem', { name: 'Dashboard' });
    this.registerMenuItem = page.getByRole('menuitem', { name: 'Register' });

    // --- Hero Section & Search ---
    // FALLBACK nth: selectors.md uses .nth(1) for this badge
    this.heroBadge = page
      .locator('div')
      .filter({ hasText: /^Pakistan's First Free EdTech Platform$/ })
      .nth(1);
    this.heroJourneyText = page.getByText('Your Journey to');
    this.heroGrowthText = page.getByText('Growth');
    this.heroValuePropText = page.getByText('Free,world-class education');
    this.searchInput = page.getByRole('textbox', { name: 'Search chapters by title (e.g' });
    this.startLearningFreeLink = page.getByRole('link', { name: "Start Learning — It's Free" });

    // --- Digital School & Skills ---
    this.digitalSchoolHeading = page.getByText('Digital School');
    this.kindergartenLink = page.getByRole('link', { name: 'Kindergarten Early learning' });
    this.primaryLink = page.getByRole('link', { name: 'Primary Classes 1-5 with core' });
    this.secondaryLink = page.getByRole('link', { name: 'Secondary Classes 6-8 with' });
    this.higherSecondaryLink = page.getByRole('link', { name: 'Higher Secondary Classes 9-12' });
    this.appliedLearningText = page.getByText('Applied Learning');
    this.skilledCoursesText = page.getByText('Skilled Courses');
    this.viewAllSkillsLink = page.getByRole('link', { name: 'View All Skills' });
    this.basicComputerLink = page.getByRole('link', { name: 'Basic Computer Fundamentals' });
    this.canvaDesignLink = page.getByRole('link', { name: 'Canva Design Graphic design' });
    this.webDesignLink = page.getByRole('link', { name: 'Web Design Canva, Photoshop' });

    // --- Impact & Learning Flow ---
    this.ourImpactText = page.getByText('Our Impact');
    this.numbersThatSpeakText = page.getByText('Numbers That Speak');
    this.transformingEducationText = page.getByText('Transforming education across');
    // LIVE ADJUSTMENT: selectors.md used "5,000+Active Students" etc.; live Impact
    // counters animate from "0 +" with separate labels (Active Students / EdTech videos / …)
    this.activeStudentsStat = page.getByText('Active Students', { exact: true });
    this.edTechVideosStat = page.getByText('EdTech videos', { exact: true });
    this.lessonsCoveredStat = page.getByText('lessons covered', { exact: true });
    this.educatorsStat = page.getByText('Educators', { exact: true });
    this.learningFlowText = page.getByText('The learning Flow');
    this.howItWorksText = page.getByText('How It Works', { exact: true });
    this.startYourJourneyText = page.getByText('Start your learning journey');
    this.createAccountText = page.getByText('Create Account');
    this.signUpFreeText = page.getByText('Sign up for free in seconds.');
    this.chooseYourClassText = page.getByText('Choose Your Class');
    this.selectGradeText = page.getByText('Select your grade level and');
    this.startLearningParagraph = page.getByRole('paragraph').filter({ hasText: 'Start Learning' });
    this.watchEngagingText = page.getByText('Watch engaging video lessons');
    this.trackProgressText = page.getByText('Track Progress');
    this.monitorImprovementText = page.getByText('Monitor your improvement and');
    this.getStartLink = page.getByRole('link', { name: 'Get Start' });

    // --- YouTube Hub & Social ---
    this.videoLessonsMarker = page.locator('div').filter({ hasText: /^Video Lessons$/ });
    this.youtubeHubHeading = page.getByRole('heading', { name: 'Our YouTube Learning Hub' });
    this.youtubeHubCopy = page.getByText(
      'Explore our educational content and empower your learning journey with free'
    );
    this.channelLogo = page.getByRole('img', { name: 'Channel Logo' });
    this.otsEdTechHeading = page.getByRole('heading', { name: 'OTS EdTech' });
    // LIVE ADJUSTMENT: selectors.md hard-coded "2.0K Subs" / "496 Videos" / "146.2K Views"
    // (counts change; avoid /Subs/ which also matches "Subscribe")
    this.subsText = page.getByText(/\d+(\.\d+)?K Subs/);
    this.videosCountText = page.getByText(/\d+ Videos/);
    this.viewsText = page.getByText(/\d+(\.\d+)?K Views/);
    this.subscribeLink = page.getByRole('link', { name: 'Subscribe', exact: true });
    this.viewAllVideosLink = page.getByRole('link', { name: 'View All Videos' });
    this.dailyMicroLearningText = page.getByText('Daily Micro Learning');
    this.learnSomethingHeading = page.getByRole('heading', { name: 'Learn Something New In A' });
    this.scrollTapLearnText = page.getByText('Scroll, Tap and Learn.');
    this.followInstagramLink = page.getByRole('link', { name: 'Follow us on Instagram' });
    this.avgReelLengthText = page.getByText('Avg reel length');
    this.conceptsSimplifiedText = page.getByText('Concepts simplified');
    this.monthlyViewsText = page.getByText('Monthly views');
    // LIVE ADJUSTMENT: selectors.md "500+" / "100K+" not present on current homepage build
    this.conceptsCountText = page.getByText('Concepts simplified');
    this.monthlyViewsCountText = page.getByText('Monthly views');
    this.startLearningExactLink = page.getByRole('link', { name: 'Start Learning', exact: true });
    this.ourYoutubeChannelsText = page.getByText('Our YouTube Channels');
    this.exploreOurText = page.getByText('Explore Our', { exact: true });
    this.educationalNetworkText = page.getByText('Educational Network');
    this.offTheSchoolChannelLink = page.getByRole('link', { name: 'Off The School Comprehensive' });
    this.edNewsLink = page.getByRole('link', { name: 'EdNews Latest education' });
    this.edTechChannelLink = page.getByRole('link', { name: 'EdTech Technology-driven' });
    this.edSenseLink = page.getByRole('link', { name: 'EdSense Educational insights' });
    this.edFunLink = page.getByRole('link', { name: 'EdFun Fun & engaging learning' });
    this.subscribeOurChannelsLink = page.getByRole('link', { name: 'Subscribe Our Channels' });

    // --- Footer ---
    this.stayUpdatedText = page.getByText('Stay UpdatedSubscribe to our');
    // FALLBACK nth: selectors.md uses filter + .nth(5) for footer tagline container
    this.footerTagline = page
      .locator('div')
      .filter({
        hasText:
          "Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere",
      })
      .nth(5);
  }

  async goto(url = 'https://edu.offtheschool.io/') {
    await this.page.goto(url);
    await this.heroJourneyText.first().waitFor({ state: 'visible' });
  }

  async searchChapters(query) {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }

  async openHeaderMenu() {
    await this.headerMenuButton.click();
  }

  async clickHomeNav() {
    await this.homeNav.first().click();
  }

  async clickExploreNav() {
    await this.exploreNav.click();
  }

  async clickReelsNav() {
    await this.reelsNav.first().click();
  }

  async clickLogo() {
    await this.logo.first().click();
  }

  async clickRegisterMenuItem() {
    await this.openHeaderMenu();
    await this.registerMenuItem.click();
  }

  async clickDashboardMenuItem() {
    await this.openHeaderMenu();
    await this.dashboardMenuItem.click();
  }

  async clickStartLearningFree() {
    await this.startLearningFreeLink.click();
  }

  async clickGetStart() {
    await this.getStartLink.click();
  }

  async clickViewAllSkills() {
    await this.viewAllSkillsLink.click();
  }

  async clickDigitalSchoolCategory(name) {
    await this.page.getByRole('link', { name }).click();
  }

  async clickSkillCourse(name) {
    await this.page.getByRole('link', { name }).click();
  }

  async clickChannelLink(name) {
    await this.page.getByRole('link', { name }).click();
  }

  async clickFollowInstagram() {
    await this.followInstagramLink.click();
  }

  async clickSubscribe() {
    await this.subscribeLink.click();
  }

  async clickViewAllVideos() {
    await this.viewAllVideosLink.click();
  }

  async clickStartLearningExact() {
    await this.startLearningExactLink.click();
  }

  async clickSubscribeOurChannels() {
    await this.subscribeOurChannelsLink.click();
  }
}
