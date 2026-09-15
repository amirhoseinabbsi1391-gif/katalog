/**
 * CryptoLab — Presentation Website Script
 * Handles: Language switching, navigation, animations, counters
 */

(function() {
    'use strict';

    // ==========================================
    // TRANSLATIONS
    // ==========================================
    const translations = {
        fa: {
            brand: 'صندوقچه اسرارآمیز',
            'nav.overview': 'معرفی',
            'nav.features': 'امکانات',
            'nav.tools': 'ابزارها',
            'nav.education': 'آموزش',
            'nav.architecture': 'معماری',
            'nav.tech': 'فناوری',
            'nav.cta': 'شروع کنید',
            
            'hero.badge': 'نسخه فعال توسعه',
            'hero.title': 'صندوقچه اسرارآمیز',
            'hero.subtitle': 'پلتفرم جامع آموزش و ابزار رمزنگاری مبتنی بر وب',
            'hero.desc': 'ترکیبی از ابزارهای عملی رمزگذاری متن و فایل، آموزش تعاملی مفاهیم رمزنگاری، شبیه‌سازی پروتکل‌های امنیتی و بازی‌های آموزشی — همه در مرورگر شما و بدون نیاز به نصب.',
            'hero.cta1': 'مشاهده ابزارها',
            'hero.cta2': 'شروع یادگیری',
            
            'overview.title': 'درباره پروژه',
            'overview.desc': 'رمزنگار یک پلتفرم وب‌محور است که شکاف بین آموزش تئوری رمزنگاری و پیاده‌سازی عملی را پر می‌کند.',
            'overview.purpose.title': 'هدف',
            'overview.purpose.desc': 'آموزش مفاهیم رمزنگاری از پایه تا پیشرفته همراه با ابزارهای عملی قابل استفاده',
            'overview.audience.title': 'مخاطبان',
            'overview.audience.desc': 'دانشجویان امنیت، توسعه‌دهندگان، علاقه‌مندان به رمزنگاری و مدرسین',
            'overview.security.title': 'امنیت',
            'overview.security.desc': 'تمام عملیات رمزنگاری در سمت کلاینت و با استفاده از Web Crypto API مرورگر انجام می‌شود',
            'overview.education.title': 'آموزش',
            'overview.education.desc': 'بیش از ۲۰ ماژول آموزشی از مفاهیم پایه تا رمزنگاری کوانتومی',
            
            'features.title': 'امکانات کلیدی',
            'features.desc': 'مجموعه‌ای کامل از ابزارها و قابلیت‌ها برای یادگیری و استفاده عملی',
            'features.text.title': 'رمزگذاری متن',
            'features.text.desc': 'پشتیبانی از ۱۳+ الگوریتم شامل AES-GCM، RSA، Caesar، Vigenere، OTP و بیشتر',
            'features.text.badge': '۱۳+ الگوریتم',
            'features.file.title': 'رمزگذاری فایل',
            'features.file.desc': 'رمزگذاری و رمزگشایی فایل‌ها با AES-GCM/CBC/CTR و مدیریت Salt و IV تصادفی',
            'features.file.badge': 'Streaming',
            'features.edu.title': 'آموزش تعاملی',
            'features.edu.desc': 'ماژول‌های آموزشی با مثال عملی، آزمایشگاه و آزمون برای هر مفهوم',
            'features.edu.badge': '۲۰+ ماژول',
            'features.keys.title': 'مدیریت کلید',
            'features.keys.desc': 'تولید جفت‌کلید RSA-4096 و ECDSA P-256 با خروجی PEM',
            'features.keys.badge': 'RSA/ECC',
            'features.sim.title': 'شبیه‌سازی پروتکل',
            'features.sim.desc': 'شبیه‌سازی آموزشی TLS Handshake، بلاکچین و تبادل کلید Diffie-Hellman',
            'features.sim.badge': 'آموزشی',
            'features.game.title': 'بازی حمله/دفاع',
            'features.game.desc': 'تمرین تصمیم‌گیری امنیتی در قالب بازی آموزشی با نقش مهاجم و مدافع',
            'features.game.badge': 'Gamification',
            'features.strength.title': 'سنجش قدرت رمز',
            'features.strength.desc': 'تحلیل قدرت رمز عبور و تولید رمز تصادفی امن با Web Crypto',
            'features.strength.badge': 'Real-time',
            'features.i18n.title': 'دوزبانه',
            'features.i18n.desc': 'پشتیبانی کامل از فارسی (RTL) و انگلیسی (LTR) با تغییر آنی',
            'features.i18n.badge': 'FA / EN',
            
            'tools.title': 'ابزارهای عملی',
            'tools.desc': 'ابزارهای رمزنگاری کاملاً کاربردی که در مرورگر شما اجرا می‌شوند',
            'tools.text.title': 'رمزگذاری پیشرفته متن',
            'tools.text.desc': 'رمزگذاری و رمزگشایی متن با الگوریتم‌های مدرن و کلاسیک',
            'tools.text.f1': 'AES-GCM / AES-CBC با PBKDF2',
            'tools.text.f2': 'RSA-OAEP 4096-bit',
            'tools.text.f3': 'SHA-256 / SHA-512 hashing',
            'tools.text.f4': 'Caesar, Vigenere, Playfair, OTP',
            'tools.text.f5': 'Morse, ROT13, RC4, Base64',
            'tools.text.f6': 'خروجی Base64, Hex, Binary',
            'tools.file.title': 'رمزگذاری فایل',
            'tools.file.desc': 'رمزگذاری و رمزگشایی فایل با نمایش پیشرفت عملیات',
            'tools.file.f1': 'AES-GCM (پیشنهادی)',
            'tools.file.f2': 'AES-CBC / AES-CTR',
            'tools.file.f3': 'Salt و IV تصادفی',
            'tools.file.f4': 'نمایش پیشرفت خواندن/نوشتن',
            'tools.file.f5': 'تاریخچه عملیات',
            'tools.keys.title': 'تولید و مدیریت کلید',
            'tools.keys.desc': 'تولید جفت‌کلیدهای امن با خروجی استاندارد',
            'tools.keys.f1': 'RSA-OAEP 4096-bit',
            'tools.keys.f2': 'ECDSA P-256',
            'tools.keys.f3': 'خروجی PEM / SPKI / PKCS8',
            'tools.keys.f4': 'امضا و اعتبارسنجی',
            
            'edu.title': 'مسیر آموزش',
            'edu.desc': 'از مفاهیم پایه تا موضوعات پیشرفته — با مثال عملی و آزمایشگاه تعاملی',
            'edu.level1': 'مقدماتی',
            'edu.level2': 'متوسط',
            'edu.level3': 'پیشرفته',
            'edu.m1': 'محرمانگی و یکپارچگی',
            'edu.m2': 'احراز هویت',
            'edu.m3': 'مدیریت کلید',
            'edu.m4': 'هش‌ها (SHA-256)',
            'edu.m5': 'Base64 و کدگذاری',
            'edu.m6': 'AES-GCM گام به گام',
            'edu.m7': 'RSA-OAEP',
            'edu.m8': 'ECDSA',
            'edu.m9': 'HMAC-SHA256',
            'edu.m10': 'PBKDF2 و Argon2',
            'edu.m11': 'TLS/HTTPS',
            'edu.m12': 'بلاکچین',
            'edu.m13': 'OAuth2 / JWT',
            'edu.m14': 'اثبات دانش صفر (ZKP)',
            'edu.m15': 'محاسبات چندجانبه (MPC)',
            'edu.m16': 'رمزنگاری همومورفیک',
            'edu.m17': 'رمزنگاری کوانتومی',
            'edu.m18': 'حملات کانال جانبی',
            'edu.lab.title': 'آزمایشگاه عملی',
            'edu.lab.desc': 'هر مفهوم با مثال قابل اجرا همراه است',
            'edu.quiz.title': 'آزمون و کارنامه',
            'edu.quiz.desc': 'سنجش یادگیری با آزمون‌های تعاملی و کارنامه گرافیکی',
            'edu.ethics.title': 'اخلاق و قوانین',
            'edu.ethics.desc': 'تأکید بر استفاده آموزشی و غیرمخرب از ابزارها',
            
            'arch.title': 'معماری فنی',
            'arch.desc': 'معماری سمت کلاینت با تمرکز بر امنیت و حریم خصوصی',
            'arch.layer1': 'لایه ارائه (UI)',
            'arch.layer2': 'لایه منطق (Logic)',
            'arch.layer3': 'لایه رمزنگاری (Web Crypto API)',
            'arch.layer4': 'لایه ذخیره‌سازی',
            'arch.p1.title': '🛡️ عدم ارسال داده به سرور',
            'arch.p1.desc': 'تمام عملیات رمزنگاری در مرورگر کاربر انجام می‌شود. متن و کلید هرگز از دستگاه خارج نمی‌شوند.',
            'arch.p2.title': '🎲 Salt و IV تصادفی',
            'arch.p2.desc': 'برای هر عملیات رمزنگاری، Salt و IV یکتا تولید و همراه خروجی ذخیره می‌شود.',
            'arch.p3.title': '⚡ مشتق‌سازی کلید امن',
            'arch.p3.desc': 'استفاده از PBKDF2 با ۱۰۰,۰۰۰ تکرار برای تبدیل رمز عبور به کلید AES-256.',
            
            'tech.title': 'فناوری‌های استفاده‌شده',
            'tech.desc': 'سبک، مدرن و بدون وابستگی به فریمورک‌های سنگین',
            'tech.wc.desc': 'عملیات رمزنگاری استاندارد مرورگر با عملکرد بالا و امنیت سطح سیستم‌عامل',
            'tech.css.desc': 'طراحی مدرن با Grid، Flexbox، متغیرهای CSS و افکت شیشه‌ای',
            'tech.js.desc': 'بدون فریمورک — کد سبک، سریع و بدون وابستگی خارجی',
            'tech.php.desc': 'سرور بک‌اند برای آنالیتیکس و ردیابی بازدید (غیرمرتبط با رمزنگاری)',
            'tech.te.desc': 'تبدیل استاندارد متن به بایت و بالعکس برای پشتیبانی از UTF-8',
            'tech.rt.desc': 'طراحی واکنش‌گرا با پشتیبانی کامل از راست‌به‌چپ و منطقی CSS',
            
            'stats.title': 'آمار پروژه',
            'stats.algos': 'الگوریتم رمزنگاری',
            'stats.modules': 'ماژول آموزشی',
            'stats.pages': 'صفحه اصلی',
            'stats.zero.title': 'داده ارسالی به سرور',
            'stats.zero.desc': 'تمام عملیات سمت کلاینت',
            
            'roadmap.title': 'نقشه راه',
            'roadmap.desc': 'توسعه آینده بر اساس قابلیت‌های موجود و پتانسیل پروژه',
            'roadmap.r1.title': 'ابزارهای رمزگذاری متن و فایل',
            'roadmap.r1.desc': 'پیاده‌سازی کامل با Web Crypto API و الگوریتم‌های کلاسیک',
            'roadmap.r2.title': 'پلتفرم آموزشی جامع',
            'roadmap.r2.desc': '۲۰+ ماژول آموزشی با آزمایشگاه، آزمون و بازی',
            'roadmap.r3.title': 'بهبود تجربه کاربری',
            'roadmap.r3.desc': 'بهینه‌سازی رابط، انیمیشن‌ها و دسترسی‌پذیری',
            'roadmap.r4.title': 'پشتیبانی از Argon2 در مرورگر',
            'roadmap.r4.desc': 'اضافه کردن KDF مدرن Argon2 با کتابخانه WASM',
            'roadmap.r5.title': 'الگوریتم‌های Post-Quantum',
            'roadmap.r5.desc': 'پیاده‌سازی آموزشی Kyber و Dilithium',
            'roadmap.done': 'تکمیل شده',
            'roadmap.progress': 'در حال توسعه',
            'roadmap.planned': 'برنامه‌ریزی شده',
            
            'faq.title': 'سؤالات متداول',
            'faq.q1': 'آیا داده‌های من به سرور ارسال می‌شوند؟',
            'faq.a1': 'خیر. تمام عملیات رمزنگاری در مرورگر شما و با استفاده از Web Crypto API انجام می‌شود. متن، کلید و فایل‌های شما هرگز از دستگاهتان خارج نمی‌شوند.',
            'faq.q2': 'کدام الگوریتم برای رمزگذاری متن پیشنهاد می‌شود؟',
            'faq.a2': 'AES-GCM با کلید ۲۵۶ بیتی. این الگوریتم هم رمزنگاری می‌کند و هم یکپارچگی داده را تضمین می‌کند (AEAD). برای فایل نیز AES-GCM پیشنهاد شده است.',
            'faq.q3': 'آیا الگوریتم‌های کلاسیک (Caesar, Vigenere) امن هستند؟',
            'faq.a3': 'خیر. این الگوریتم‌ها صرفاً جنبه آموزشی دارند و برای محافظت از اطلاعات واقعی مناسب نیستند. برای امنیت واقعی از AES-GCM یا RSA استفاده کنید.',
            'faq.q4': 'چرا SHA-256 قابل رمزگشایی نیست؟',
            'faq.a4': 'SHA-256 یک تابع هش یک‌طرفه است. طراحی آن به‌گونه‌ای است که بازگرداندن ورودی از خروجی عملاً غیرممکن باشد. برای تأیید یکپارچگی داده استفاده می‌شود.',
            'faq.q5': 'آیا می‌توانم از این پروژه در محیط تولیدی استفاده کنم؟',
            'faq.a5': 'ابزارهای رمزگذاری از استانداردهای معتبر استفاده می‌کنند اما این پروژه عمدتاً آموزشی است. برای محیط تولیدی، بررسی امنیتی مستقل و استفاده از KMS/HSM توصیه می‌شود.',
            
            'cta.title': 'آماده شروع هستید؟',
            'cta.desc': 'ابزارهای رمزنگاری و آموزش تعاملی — همه در مرورگر شما',
            'cta.btn1': 'رمزگذاری متن',
            'cta.btn2': 'شروع آموزش',
            
            'footer.desc': 'پلتفرم آموزش و ابزار رمزنگاری — توسعه‌یافته با تمرکز بر امنیت و حریم خصوصی',
            'footer.warning': '⚠️ این ابزار صرفاً آموزشی است — استفاده مخرب ممنوع'
        },
        en: {
            brand: 'Mysterious chest',
            'nav.overview': 'Overview',
            'nav.features': 'Features',
            'nav.tools': 'Tools',
            'nav.education': 'Education',
            'nav.architecture': 'Architecture',
            'nav.tech': 'Technology',
            'nav.cta': 'Get Started',
            
            'hero.badge': 'Active Development',
            'hero.title': 'Mysterious chest',
            'hero.subtitle': 'Comprehensive Web-Based Cryptography Education & Tools Platform',
            'hero.desc': 'A combination of practical text & file encryption tools, interactive cryptography education, security protocol simulations, and educational games — all running in your browser with no installation required.',
            'hero.cta1': 'Explore Tools',
            'hero.cta2': 'Start Learning',
            
            'overview.title': 'About the Project',
            'overview.desc': 'CryptoLab is a web-based platform that bridges the gap between theoretical cryptography education and practical implementation.',
            'overview.purpose.title': 'Purpose',
            'overview.purpose.desc': 'Teaching cryptography concepts from basics to advanced, with practical usable tools',
            'overview.audience.title': 'Audience',
            'overview.audience.desc': 'Security students, developers, cryptography enthusiasts, and educators',
            'overview.security.title': 'Security',
            'overview.security.desc': 'All cryptographic operations run client-side using the browser\'s Web Crypto API',
            'overview.education.title': 'Education',
            'overview.education.desc': 'Over 20 educational modules from basic concepts to quantum cryptography',
            
            'features.title': 'Key Features',
            'features.desc': 'A complete set of tools and capabilities for learning and practical use',
            'features.text.title': 'Text Encryption',
            'features.text.desc': 'Support for 13+ algorithms including AES-GCM, RSA, Caesar, Vigenere, OTP and more',
            'features.text.badge': '13+ Algorithms',
            'features.file.title': 'File Encryption',
            'features.file.desc': 'Encrypt and decrypt files with AES-GCM/CBC/CTR with random Salt and IV management',
            'features.file.badge': 'Streaming',
            'features.edu.title': 'Interactive Education',
            'features.edu.desc': 'Educational modules with practical examples, labs, and quizzes for each concept',
            'features.edu.badge': '20+ Modules',
            'features.keys.title': 'Key Management',
            'features.keys.desc': 'Generate RSA-4096 and ECDSA P-256 key pairs with PEM output',
            'features.keys.badge': 'RSA/ECC',
            'features.sim.title': 'Protocol Simulation',
            'features.sim.desc': 'Educational simulation of TLS Handshake, Blockchain, and Diffie-Hellman key exchange',
            'features.sim.badge': 'Educational',
            'features.game.title': 'Attack/Defense Game',
            'features.game.desc': 'Practice security decision-making through an educational game with attacker and defender roles',
            'features.game.badge': 'Gamification',
            'features.strength.title': 'Password Strength',
            'features.strength.desc': 'Password strength analysis and secure random password generation with Web Crypto',
            'features.strength.badge': 'Real-time',
            'features.i18n.title': 'Bilingual',
            'features.i18n.desc': 'Full support for Persian (RTL) and English (LTR) with instant switching',
            'features.i18n.badge': 'FA / EN',
            
            'tools.title': 'Practical Tools',
            'tools.desc': 'Fully functional cryptographic tools that run in your browser',
            'tools.text.title': 'Advanced Text Encryption',
            'tools.text.desc': 'Encrypt and decrypt text with modern and classic algorithms',
            'tools.text.f1': 'AES-GCM / AES-CBC with PBKDF2',
            'tools.text.f2': 'RSA-OAEP 4096-bit',
            'tools.text.f3': 'SHA-256 / SHA-512 hashing',
            'tools.text.f4': 'Caesar, Vigenere, Playfair, OTP',
            'tools.text.f5': 'Morse, ROT13, RC4, Base64',
            'tools.text.f6': 'Base64, Hex, Binary output',
            'tools.file.title': 'File Encryption',
            'tools.file.desc': 'Encrypt and decrypt files with progress tracking',
            'tools.file.f1': 'AES-GCM (recommended)',
            'tools.file.f2': 'AES-CBC / AES-CTR',
            'tools.file.f3': 'Random Salt & IV',
            'tools.file.f4': 'Read/write progress display',
            'tools.file.f5': 'Operation history',
            'tools.keys.title': 'Key Generation & Management',
            'tools.keys.desc': 'Generate secure key pairs with standard output formats',
            'tools.keys.f1': 'RSA-OAEP 4096-bit',
            'tools.keys.f2': 'ECDSA P-256',
            'tools.keys.f3': 'PEM / SPKI / PKCS8 output',
            'tools.keys.f4': 'Sign & verify',
            
            'edu.title': 'Learning Path',
            'edu.desc': 'From basic concepts to advanced topics — with practical examples and interactive labs',
            'edu.level1': 'Beginner',
            'edu.level2': 'Intermediate',
            'edu.level3': 'Advanced',
            'edu.m1': 'Confidentiality & Integrity',
            'edu.m2': 'Authentication',
            'edu.m3': 'Key Management',
            'edu.m4': 'Hashes (SHA-256)',
            'edu.m5': 'Base64 & Encoding',
            'edu.m6': 'AES-GCM Step by Step',
            'edu.m7': 'RSA-OAEP',
            'edu.m8': 'ECDSA',
            'edu.m9': 'HMAC-SHA256',
            'edu.m10': 'PBKDF2 & Argon2',
            'edu.m11': 'TLS/HTTPS',
            'edu.m12': 'Blockchain',
            'edu.m13': 'OAuth2 / JWT',
            'edu.m14': 'Zero Knowledge Proofs (ZKP)',
            'edu.m15': 'Multi-Party Computation (MPC)',
            'edu.m16': 'Homomorphic Encryption',
            'edu.m17': 'Quantum Cryptography',
            'edu.m18': 'Side-Channel Attacks',
            'edu.lab.title': 'Practical Lab',
            'edu.lab.desc': 'Every concept comes with runnable examples',
            'edu.quiz.title': 'Quizzes & Report Card',
            'edu.quiz.desc': 'Assess learning with interactive quizzes and graphical report cards',
            'edu.ethics.title': 'Ethics & Rules',
            'edu.ethics.desc': 'Emphasis on educational and non-malicious use of tools',
            
            'arch.title': 'Technical Architecture',
            'arch.desc': 'Client-side architecture focused on security and privacy',
            'arch.layer1': 'Presentation Layer (UI)',
            'arch.layer2': 'Logic Layer',
            'arch.layer3': 'Cryptographic Layer (Web Crypto API)',
            'arch.layer4': 'Storage Layer',
            'arch.p1.title': '🛡️ No Data Sent to Server',
            'arch.p1.desc': 'All cryptographic operations run in the user\'s browser. Text and keys never leave the device.',
            'arch.p2.title': '🎲 Random Salt & IV',
            'arch.p2.desc': 'For each encryption operation, a unique Salt and IV are generated and stored with the output.',
            'arch.p3.title': '⚡ Secure Key Derivation',
            'arch.p3.desc': 'Using PBKDF2 with 100,000 iterations to convert passwords to AES-256 keys.',
            
            'tech.title': 'Technologies Used',
            'tech.desc': 'Lightweight, modern, and free from heavy framework dependencies',
            'tech.wc.desc': 'Standard browser cryptographic operations with high performance and OS-level security',
            'tech.css.desc': 'Modern design with Grid, Flexbox, CSS variables, and glassmorphism effects',
            'tech.js.desc': 'No framework — lightweight, fast code with zero external dependencies',
            'tech.php.desc': 'Backend server for analytics and visit tracking (unrelated to encryption)',
            'tech.te.desc': 'Standard text-to-bytes conversion for UTF-8 support',
            'tech.rt.desc': 'Responsive design with full RTL support and CSS logical properties',
            
            'stats.title': 'Project Statistics',
            'stats.algos': 'Cryptographic Algorithms',
            'stats.modules': 'Educational Modules',
            'stats.pages': 'Main Pages',
            'stats.zero.title': 'Data Sent to Server',
            'stats.zero.desc': 'All operations run client-side',
            
            'roadmap.title': 'Roadmap',
            'roadmap.desc': 'Future development based on existing capabilities and project potential',
            'roadmap.r1.title': 'Text & File Encryption Tools',
            'roadmap.r1.desc': 'Full implementation with Web Crypto API and classic algorithms',
            'roadmap.r2.title': 'Comprehensive Education Platform',
            'roadmap.r2.desc': '20+ educational modules with labs, quizzes, and games',
            'roadmap.r3.title': 'UX Improvements',
            'roadmap.r3.desc': 'Interface optimization, animations, and accessibility',
            'roadmap.r4.title': 'Browser Argon2 Support',
            'roadmap.r4.desc': 'Adding modern Argon2 KDF with WASM library',
            'roadmap.r5.title': 'Post-Quantum Algorithms',
            'roadmap.r5.desc': 'Educational implementation of Kyber and Dilithium',
            'roadmap.done': 'Completed',
            'roadmap.progress': 'In Progress',
            'roadmap.planned': 'Planned',
            
            'faq.title': 'Frequently Asked Questions',
            'faq.q1': 'Is my data sent to a server?',
            'faq.a1': 'No. All cryptographic operations run in your browser using the Web Crypto API. Your text, keys, and files never leave your device.',
            'faq.q2': 'Which algorithm is recommended for text encryption?',
            'faq.a2': 'AES-GCM with a 256-bit key. This algorithm provides both encryption and data integrity (AEAD). AES-GCM is also recommended for files.',
            'faq.q3': 'Are classic algorithms (Caesar, Vigenere) secure?',
            'faq.a3': 'No. These algorithms are purely educational and not suitable for protecting real information. For actual security, use AES-GCM or RSA.',
            'faq.q4': 'Why can\'t SHA-256 be decrypted?',
            'faq.a4': 'SHA-256 is a one-way hash function. It is designed so that recovering the input from the output is practically impossible. It is used for data integrity verification.',
            'faq.q5': 'Can I use this project in production?',
            'faq.a5': 'The encryption tools use established standards, but this project is primarily educational. For production environments, independent security review and KMS/HSM usage is recommended.',
            
            'cta.title': 'Ready to Start?',
            'cta.desc': 'Cryptographic tools and interactive education — all in your browser',
            'cta.btn1': 'Encrypt Text',
            'cta.btn2': 'Start Learning',
            
            'footer.desc': 'Cryptography education and tools platform — developed with focus on security and privacy',
            'footer.warning': '⚠️ This tool is purely educational — malicious use is prohibited'
        }
    };

    // ==========================================
    // LANGUAGE SYSTEM
    // ==========================================
    let currentLang = localStorage.getItem('cryptolab-lang') || 'fa';

    function setLanguage(lang) {
        currentLang = lang;
        const html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update page title
        document.title = lang === 'fa' 
            ? 'رمزنگار — پلتفرم آموزش و ابزار رمزنگاری' 
            : 'CryptoLab — Cryptography Education & Tools Platform';

        localStorage.setItem('cryptolab-lang', lang);
    }

    // ==========================================
    // NAVIGATION
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    function toggleMobileMenu() {
        const isActive = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive);
    }

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    // ==========================================
    // SCROLL REVEAL
    // ==========================================
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.overview-card, .feature-card, .tool-card, .tech-card, .stat-card, .edu-path, .edu-feature, .principle, .roadmap-item');
        
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            reveals.forEach(el => el.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        reveals.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }

    // ==========================================
    // COUNTER ANIMATION
    // ==========================================
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'));
                    animateNumber(el, 0, target, 1500);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    function animateNumber(el, start, end, duration) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(start + (end - start) * eased);
            el.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    closeMobileMenu();
                }
            });
        });
    }

    // ==========================================
    // ACTIVE NAV LINK
    // ==========================================
    function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

        sections.forEach(section => observer.observe(section));
    }

    // ==========================================
    // NAV SCROLL EFFECT
    // ==========================================
    function initNavScroll() {
        const header = document.getElementById('navHeader');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.background = 'rgba(10, 14, 26, 0.95)';
            } else {
                header.style.background = 'rgba(10, 14, 26, 0.85)';
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================
    function init() {
        // Set initial language
        setLanguage(currentLang);

        // Language switcher
        document.getElementById('langSwitcher').addEventListener('click', () => {
            setLanguage(currentLang === 'fa' ? 'en' : 'fa');
        });

        // Mobile menu
        navToggle.addEventListener('click', toggleMobileMenu);

        // Close menu on link click
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Initialize features
        initScrollReveal();
        animateCounters();
        initSmoothScroll();
        initActiveNav();
        initNavScroll();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
