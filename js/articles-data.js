/**
 * AppsChance - Comprehensive Articles Database
 * Rich guides, tutorials, and practical walk-throughs
 */

const APPSCHANCE_ARTICLES = [
  {
    id: "age-calculator",
    title: "How to Calculate Your Exact Age",
    excerpt: "A step-by-step guide to calculate your age in years, months and days with examples and simple formula breakdown.",
    category: "Utilities",
    categoryClass: "tag-utilities",
    date: "Mar 10, 2025",
    readTime: "4 min read",
    author: "Anjali Gupta",
    authorRole: "Founder & App Developer",
    authorPhoto: "assets/images/author_anjali.jpg",
    image: "assets/images/article_age_calc.jpg",
    content: `
      <p class="lead-text">
        Calculating someone's age seems straightforward until you need to account for leap years, differing days per month (28, 30, or 31 days), and precise timezones. Whether you're filling out legal forms, verifying exam eligibility, or setting up milestone reminders, here is the ultimate guide to calculating exact age down to the day.
      </p>

      <div class="article-callout">
        <h4>💡 Quick Summary</h4>
        <p>To find your exact age: subtract the birth day from today's day (borrowing days from the previous month if needed), subtract birth month from current month, then subtract birth year from current year.</p>
      </div>

      <h2>1. The Manual Age Calculation Formula</h2>
      <p>
        When calculating age manually on paper, write today's date on top in <strong>YYYY / MM / DD</strong> format, and your birth date right below it.
      </p>

      <div class="code-box">
        <strong>Example:</strong><br>
        Current Date: &nbsp;&nbsp;2025 / 03 / 10<br>
        Birth Date: &nbsp;&nbsp;&nbsp;&nbsp;1998 / 07 / 24<br>
        --------------------------------<br>
        Result: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26 Years, 7 Months, 14 Days
      </div>

      <h3>Step-by-Step Breakdown:</h3>
      <ul>
        <li><strong>Step 1 (Days):</strong> If the current day is smaller than the birth day, borrow 30 or 31 days from the current month (based on the previous month's length) and add it to the current day.</li>
        <li><strong>Step 2 (Months):</strong> If the current month is smaller than the birth month, borrow 12 months from the current year.</li>
        <li><strong>Step 3 (Years):</strong> Subtract the birth year from the adjusted current year.</li>
      </ul>

      <h2>2. Common Pitfalls to Avoid</h2>
      <p>
        The most common mistake when computing age is assuming every month has exactly 30 days. When borrowing, you must check the exact number of days in the preceding calendar month. For example, borrowing in March requires borrowing from February (28 days in non-leap years, 29 in leap years).
      </p>

      <div class="article-tip-box">
        <h4>⚡ Use an Automated Age Calculator</h4>
        <p>Don't want to calculate leap years by hand? Our lightweight Android Age Calculator automatically handles every calendar anomaly and provides instant stats such as your total days lived, upcoming birthday countdown, and weekday of birth.</p>
      </div>

      <h2>3. Frequently Asked Questions</h2>
      <div class="faq-item">
        <strong>Q: How do leap years affect my exact age?</strong>
        <p>A: A leap year adds February 29th (366 days instead of 365). An accurate age calculator tracks every leap year between your birth year and the current year to ensure day counts remain 100% accurate.</p>
      </div>
      <div class="faq-item">
        <strong>Q: Can age calculators tell me the day of the week I was born?</strong>
        <p>A: Yes! Using Zeller's Congruence algorithm, our tools instantly determine whether you were born on a Monday, Friday, or Sunday.</p>
      </div>
    `
  },
  {
    id: "pregnancy-due-date",
    title: "Pregnancy Due Date Calculator: Complete Guide",
    excerpt: "Learn how due dates are calculated, important factors, Naegele's rule, ultrasound correlations and week-by-week pregnancy milestones.",
    category: "Pregnancy",
    categoryClass: "tag-pregnancy",
    date: "Mar 8, 2025",
    readTime: "6 min read",
    author: "Anjali Gupta",
    authorRole: "Founder & App Developer",
    authorPhoto: "assets/images/author_anjali.jpg",
    image: "assets/images/article_pregnancy.jpg",
    content: `
      <p class="lead-text">
        Finding out you are expecting is one of life's most unforgettable moments. Almost immediately, the first question on every parent's mind is: <em>"When is my baby due?"</em> Understanding how your estimated due date (EDD) is calculated helps you plan medical appointments, nursery preparations, and track crucial fetal milestones.
      </p>

      <div class="article-callout">
        <h4>🌸 Key Takeaway</h4>
        <p>A typical pregnancy lasts 280 days (40 weeks) from the first day of your Last Menstrual Period (LMP). Only about 4% to 5% of babies arrive precisely on their due date; most arrive within 2 weeks before or after.</p>
      </div>

      <h2>1. How Doctors Calculate Due Dates: Naegele's Rule</h2>
      <p>
        The gold standard clinical method used by obstetricians worldwide is known as <strong>Naegele's Rule</strong>. It assumes an average menstrual cycle of 28 days:
      </p>

      <div class="code-box">
        <strong>The Formula:</strong><br>
        1. Identify the first day of your Last Menstrual Period (LMP).<br>
        2. Add 1 year.<br>
        3. Subtract 3 months.<br>
        4. Add 7 days.<br><br>
        <em>Example: LMP on May 12, 2024 → Due Date: February 19, 2025.</em>
      </div>

      <h2>2. What if You Have Irregular Cycles?</h2>
      <p>
        If your menstrual cycle is longer or shorter than 28 days, standard LMP calculation needs adjustments:
      </p>
      <ul>
        <li><strong>Longer Cycles (e.g., 35 days):</strong> Ovulation likely happened around day 21 instead of day 14. Your due date will be about 7 days later than the standard LMP result.</li>
        <li><strong>Shorter Cycles (e.g., 24 days):</strong> Ovulation likely occurred earlier (around day 10), so your due date moves forward by about 4 days.</li>
      </ul>

      <h2>3. First Trimester Ultrasound Dating</h2>
      <p>
        Between weeks 8 and 13, your doctor will perform a dating ultrasound measuring the <strong>Crown-Rump Length (CRL)</strong>. Because all healthy embryos grow at nearly identical rates during the first trimester, an early ultrasound is considered the most accurate predictor of your due date, often within 3 to 5 days.
      </p>

      <h2>4. The Three Trimesters at a Glance</h2>
      <div class="milestone-table-wrapper">
        <table class="milestone-table">
          <thead>
            <tr>
              <th>Trimester</th>
              <th>Weeks</th>
              <th>Key Baby Development</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>First Trimester</strong></td>
              <td>Weeks 1 – 12</td>
              <td>Heartbeat begins, facial features form, vital organs establish.</td>
            </tr>
            <tr>
              <td><strong>Second Trimester</strong></td>
              <td>Weeks 13 – 26</td>
              <td>Baby starts kicking, hearing develops, gender visible on scan.</td>
            </tr>
            <tr>
              <td><strong>Third Trimester</strong></td>
              <td>Weeks 27 – 40+</td>
              <td>Rapid brain growth, lungs mature, baby gains protective fat.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "phone-finder",
    title: "How Phone Finder Apps Work",
    excerpt: "Understand how clap and whistle to find phone apps work, sound frequency detection algorithms, and how to use them effectively without draining battery.",
    category: "Android",
    categoryClass: "tag-android",
    date: "Mar 5, 2025",
    readTime: "5 min read",
    author: "Anjali Gupta",
    authorRole: "Founder & App Developer",
    authorPhoto: "assets/images/author_anjali.jpg",
    image: "assets/images/article_phone_finder.svg",
    content: `
      <p class="lead-text">
        We have all experienced that sudden panic of misplacing our smartphone under sofa cushions, in bed sheets, or in another room while it's set to silent mode. Modern "Find Phone by Sound" apps let you locate your device simply by clapping your hands or whistling. But how does this technology work behind the scenes?
      </p>

      <h2>1. Acoustic Pattern Recognition (Audio DSP)</h2>
      <p>
        A hand clap is not just generic noise—in digital signal processing (DSP), a clap produces a distinct <strong>transient acoustic impulse</strong> with a rapid rise time (under 5 milliseconds) and energy concentrated in the 2.5 kHz to 4.5 kHz frequency band.
      </p>

      <div class="article-callout">
        <h4>🔍 The Detection Pipeline</h4>
        <ol>
          <li><strong>Microphone Buffer:</strong> Samples incoming ambient audio in small 20ms chunks.</li>
          <li><strong>Bandpass Filter:</strong> Ignores low hums (traffic, AC fans) and human speech (300 Hz – 1 kHz).</li>
          <li><strong>Peak Envelope Threshold:</strong> Detects sharp transients that match double or triple clap signatures.</li>
          <li><strong>Trigger:</strong> Activates max volume ringing, flashlight strobe, and vibration even on Silent Mode!</li>
        </ol>
      </div>

      <h2>2. Why Battery Efficiency is Crucial</h2>
      <p>
        Keeping the microphone active 24/7 could easily drain your battery in hours if coded poorly. Efficient apps like <strong>Find Phone by Sounds</strong> use Android's low-power hardware wake-locks, sub-sampling audio only when motion sensors detect the phone is resting still.
      </p>

      <h2>3. Tips for Maximum Reliability</h2>
      <ul>
        <li><strong>Set Sensitivity to Medium:</strong> High sensitivity may trigger on TV clapping or door slams; low sensitivity might require very loud claps.</li>
        <li><strong>Allow Microphone Background Permission:</strong> Ensure battery optimization is disabled for the app in Android Settings so it doesn't get closed by the OS.</li>
      </ul>
    `
  },
  {
    id: "compress-images",
    title: "How to Compress Images on Android Without Losing Quality",
    excerpt: "Learn how to shrink large 10MB camera photos down to under 500KB for WhatsApp, email attachments, and online portal submissions.",
    category: "Utilities",
    categoryClass: "tag-utilities",
    date: "Feb 26, 2025",
    readTime: "4 min read",
    author: "Anjali Gupta",
    authorRole: "Founder & App Developer",
    authorPhoto: "assets/images/author_anjali.jpg",
    image: "assets/images/article_compress_img.svg",
    content: `
      <p class="lead-text">
        Modern smartphone cameras snap incredible photos with 50MP and 108MP sensors, but each photo easily weighs between 8 MB and 25 MB! When you need to upload IDs to government portals, attach photos to emails, or save internal storage space, heavy image files become a bottleneck.
      </p>

      <h2>1. Lossless vs Lossy Compression: The Key Difference</h2>
      <p>
        Understanding how compression works allows you to reduce file size without any visible difference to the human eye:
      </p>
      <ul>
        <li><strong>Lossless Compression:</strong> Removes redundant metadata (EXIF camera tags, GPS location) without modifying pixel data. Reduces size by 15% - 25%.</li>
        <li><strong>Perceptual Lossy Compression:</strong> Removes micro-chrominance variations that human eyes cannot perceive. Reduces file size by <strong>80% to 95%</strong> while retaining razor-sharp clarity on phone screens and prints!</li>
      </ul>

      <div class="article-callout">
        <h4>⚡ DropSize Android App Advantage</h4>
        <p>With DropSize, you can select an exact target size (e.g., "Compress to exactly 200 KB for exam form submission") and the app's iterative compression algorithm calibrates the optimal resolution and quality ratio automatically.</p>
      </div>

      <h2>2. Ideal Compression Settings for Common Uses</h2>
      <div class="milestone-table-wrapper">
        <table class="milestone-table">
          <thead>
            <tr>
              <th>Use Case</th>
              <th>Recommended Size</th>
              <th>Recommended Quality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Job / Exam Form Uploads</td>
              <td>100 KB – 300 KB</td>
              <td>75% – 80%</td>
            </tr>
            <tr>
              <td>Email Attachments</td>
              <td>500 KB – 1 MB</td>
              <td>85%</td>
            </tr>
            <tr>
              <td>WhatsApp / Chat Sharing</td>
              <td>300 KB – 600 KB</td>
              <td>80%</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "vrat-fasting-calendar",
    title: "Complete Guide to Hindu Vrats and Fasting Days in 2025",
    excerpt: "Important Ekadashi, Pradosh Vrat, Sankashti Chaturthi, and Navratri fasting rules, dates, parana timings and significance.",
    category: "Lifestyle",
    categoryClass: "tag-lifestyle",
    date: "Feb 18, 2025",
    readTime: "7 min read",
    author: "Anjali Gupta",
    authorRole: "Founder & App Developer",
    authorPhoto: "assets/images/author_anjali.jpg",
    image: "assets/images/article_vrat.svg",
    content: `
      <p class="lead-text">
        Fasting (Vrat) has been an integral pillar of spiritual discipline and bodily wellness in Sanatan tradition for thousands of years. Observing fasts with proper knowledge of Tithi timings, Muhurat, and Parana (breaking the fast) ensures spiritual fulfillment and digestive balance.
      </p>

      <h2>1. The Significance of Ekadashi Vrat</h2>
      <p>
        Falling on the 11th lunar day of both Shukla Paksha (waxing moon) and Krishna Paksha (waning moon), Ekadashi is dedicated to Bhagwan Vishnu. Scientifically, fasting during these fortnightly lunar phases aligns with planetary gravitational cycles, detoxifying the lymphatic system and improving mental clarity.
      </p>

      <h2>2. Essential Vrat Rules (Niyam)</h2>
      <ul>
        <li><strong>Falahar Diet:</strong> Consume satvic foods such as sabudana, kuttu ka atta, fruits, milk, almonds, and sendha namak (rock salt).</li>
        <li><strong>Parana Timings:</strong> Breaking the fast during the specified Parana Muhurat on Dwadashi tithi is considered essential for full spiritual merit.</li>
        <li><strong>Mindfulness:</strong> Avoid negative speech, anger, and excessive physical exertion during fasting hours.</li>
      </ul>

      <div class="article-callout">
        <h4>🪔 Never Miss a Tithi with Vrat Sathi</h4>
        <p>Vrat Sathi provides accurate, location-based sunrise/sunset calculations for every Ekadashi, Pradosham, Purnima, Amavasya, and monthly Shivratri, with customizable reminder notifications.</p>
      </div>
    `
  },
  {
    id: "baby-kick-counter",
    title: "How to Count Baby Kicks During Pregnancy: When and Why",
    excerpt: "Why tracking fetal movement starting around week 28 is essential, how to do the 'Count to 10' method, and when to consult your doctor.",
    category: "Pregnancy",
    categoryClass: "tag-pregnancy",
    date: "Feb 10, 2025",
    readTime: "5 min read",
    author: "Anjali Gupta",
    authorRole: "Founder & App Developer",
    authorPhoto: "assets/images/author_anjali.jpg",
    image: "assets/images/article_baby_kick.svg",
    content: `
      <p class="lead-text">
        Feeling your baby's first flutter—known as 'quickening'—is an unforgettable milestone. As your pregnancy progresses into the third trimester (around week 28), doctors recommend daily fetal movement monitoring, often called "kick counting." Here is how to do it correctly.
      </p>

      <h2>1. The "Count-to-10" Method</h2>
      <p>
        The most widely accepted medical guideline is finding <strong>10 distinct movements within a 2-hour window</strong>. Movements include kicks, rolls, swishes, and flutters (hiccups are generally not counted).
      </p>

      <div class="code-box">
        <strong>Best Practice Routine:</strong><br>
        1. Choose a time when your baby is most active (typically after dinner or when resting quietly).<br>
        2. Sit comfortably with your feet elevated, or lie on your left side for optimal blood flow.<br>
        3. Start your timer in the Pregnancy Calculator Kick Counter tool.<br>
        4. Tap the counter each time you feel a kick, jab, or turn.<br>
        5. Most mothers reach 10 kicks in less than 30 minutes!
      </div>

      <h2>2. When Should You Call Your Healthcare Provider?</h2>
      <p>
        Every baby has their own unique sleep-wake cycle. However, you should contact your doctor or maternity triage if:
      </p>
      <ul>
        <li>You feel fewer than 10 movements in a 2-hour period of focused counting.</li>
        <li>There is a significant and noticeable decrease in your baby's normal movement pattern.</li>
        <li>Your baby doesn't respond to a glass of cold water or a snack after resting on your left side.</li>
      </ul>
    `
  },
  {
    id: "battery-saving-tips",
    title: "Top 7 Proven Tips to Extend Your Android Battery Life",
    excerpt: "No snake oil, just real hardware and system-level tweaks that can give your Android phone an extra 3 to 6 hours of screen time daily.",
    category: "Android",
    categoryClass: "tag-android",
    date: "Feb 2, 2025",
    readTime: "5 min read",
    author: "Anjali Gupta",
    authorRole: "Founder & App Developer",
    authorPhoto: "assets/images/author_anjali.jpg",
    image: "assets/images/article_battery.svg",
    content: `
      <p class="lead-text">
        Many users install shady "battery booster" apps that do more harm than good by constantly running background tasks and displaying invasive ads. Here are 7 verified, system-level configurations that genuinely optimize Android battery longevity.
      </p>

      <h2>1. Use True AMOLED Dark Mode</h2>
      <p>
        On OLED and AMOLED displays, black pixels are completely powered off (emitting zero light). Setting your system theme and frequently used apps (WhatsApp, Chrome, YouTube) to Dark Theme saves up to 30% display power.
      </p>

      <h2>2. Disable Unnecessary Nearby Scanning</h2>
      <p>
        By default, Android frequently searches for Bluetooth devices and Wi-Fi networks even when your Wi-Fi and Bluetooth switches are off.
      </p>
      <ul>
        <li>Go to <em>Settings > Location > Location Services</em>.</li>
        <li>Turn off <strong>Wi-Fi scanning</strong> and <strong>Bluetooth scanning</strong>.</li>
      </ul>

      <h2>3. Identify Rogue Background Apps</h2>
      <p>
        Head to <em>Settings > Battery > Battery Usage</em>. Look for apps consuming more than 5% power without active screen time. Set their battery usage permission to <strong>"Restricted"</strong>.
      </p>
    `
  }
];

// Helper to find article by id
function getArticleById(id) {
  if (!id) return APPSCHANCE_ARTICLES[0];
  return APPSCHANCE_ARTICLES.find(a => a.id === id) || APPSCHANCE_ARTICLES[0];
}

// Export for browser or node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APPSCHANCE_ARTICLES, getArticleById };
}
