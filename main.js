/**
 * File: main.js
 * Description: Handles all the interactive functionality for the Quang Vinh Concrete website,
 * including language switching, form submissions, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', function () {

    // --- TRANSLATION DATA ---
    const translations = {
        vi: {
            site_title: "Công ty Bê tông Quang Vinh - Chất lượng tạo nên thương hiệu",
            company_name: "Bê Tông Quang Vinh",
            nav_about: "Giới thiệu",
            nav_order: "Đặt Bê Tông",
            nav_contact: "Liên hệ",
            nav_call: "Gọi Ngay",
            nav_about_mobile: "Giới thiệu",
            nav_order_mobile: "Đặt Bê Tông",
            nav_contact_mobile: "Liên hệ",
            nav_call_mobile: "Gọi Ngay",
            hero_title: "Bê Tông Quang Vinh",
            hero_subtitle: "Chất lượng tạo nên thương hiệu - Nền tảng vững chắc cho mọi công trình.",
            about_title: "Về Chúng Tôi",
            about_desc: "Công ty Bê Tông Quang Vinh tự hào là nhà cung cấp bê tông tươi hàng đầu, mang đến những giải pháp tối ưu cho các công trình xây dựng. Với hệ thống trạm trộn hiện đại và đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp sản phẩm chất lượng cao, đúng mác, đủ khối lượng và dịch vụ giao hàng tận nơi nhanh chóng, đáp ứng mọi yêu cầu khắt khe nhất của khách hàng.",
            feature1_title: "Chất lượng Vượt Trội",
            feature1_desc: "Sử dụng nguyên vật liệu cao cấp, quy trình kiểm soát chất lượng nghiêm ngặt theo tiêu chuẩn quốc tế.",
            feature2_title: "Dịch vụ Chuyên Nghiệp",
            feature2_desc: "Đội ngũ tư vấn tận tình, hỗ trợ kỹ thuật và vận chuyển 24/7, đảm bảo tiến độ công trình.",
            feature3_title: "Giá cả Cạnh Tranh",
            feature3_desc: "Chúng tôi luôn nỗ lực tối ưu hóa chi phí để mang đến cho khách hàng mức giá hợp lý nhất.",
            order_title: "Đặt Bê Tông Nhanh Chóng",
            form_area: "Diện tích mặt sàn (m²)",
            form_area_placeholder: "Ví dụ: 80",
            form_grade: "Chọn mác bê tông",
            form_grade_option: "-- Chọn mác --",
            form_suggest_btn: "Gợi ý",
            form_quantity: "Số lượng (khối - m³)",
            form_quantity_placeholder: "Ví dụ: 10",
            form_name: "Họ và tên",
            form_name_placeholder: "Nguyễn Văn A",
            form_phone: "Số điện thoại",
            form_phone_placeholder: "09xxxxxxxx",
            form_address: "Địa chỉ công trình",
            form_address_placeholder: "Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố",
            form_submit_btn: "Gửi Yêu Cầu Đặt Hàng",
            contact_title: "Liên Hệ Với Chúng Tôi",
            contact_info_title: "Thông tin liên hệ",
            contact_info_desc: "Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho bạn. Đừng ngần ngại liên hệ với Bê Tông Quang Vinh để nhận được báo giá và dịch vụ tốt nhất.",
            contact_call_btn: "Gọi tư vấn ngay",
            contact_address_label: "Địa chỉ",
            contact_hotline_label: "Hotline",
            contact_email_label: "Email",
            contact_form_title: "Gửi tin nhắn cho chúng tôi",
            contact_form_name_placeholder: "Họ và tên của bạn",
            contact_form_email_placeholder: "Email của bạn",
            contact_form_message_placeholder: "Nội dung tin nhắn...",
            contact_form_submit_btn: "Gửi Tin Nhắn",
            footer_copyright: "© 2024 Công ty Bê tông Quang Vinh. All Rights Reserved.",
            footer_tagline: "Nền tảng vững chắc cho mọi công trình.",
            modal_fill_info: "Vui lòng điền đầy đủ các thông tin cần thiết.",
            modal_order_success_title: "Đặt hàng thành công!",
            modal_order_success_msg: "Chúng tôi đã nhận được yêu cầu của bạn. Nhân viên của Quang Vinh sẽ liên hệ để xác nhận trong thời gian sớm nhất. Xin cảm ơn!",
            modal_contact_success_title: "Gửi tin nhắn thành công!",
            modal_contact_success_msg: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.",
            modal_close_btn: "Đóng",
            suggestion_prompt: "Vui lòng nhập diện tích hợp lệ.",
            suggestion_lt50: "Gợi ý: Mác 200 cho công trình nhỏ, chịu tải thấp.",
            suggestion_50_150: "Gợi ý: Mác 250 phổ biến cho nhà ở dân dụng.",
            suggestion_150_300: "Gợi ý: Mác 300 cho công trình lớn, sàn, đường đi.",
            suggestion_gt300: "Gợi ý: Mác 350+ cho sàn công nghiệp, chịu tải cao.",
        },
        en: {
            site_title: "Quang Vinh Concrete Company - Quality Creates the Brand",
            company_name: "Quang Vinh Concrete",
            nav_about: "About Us",
            nav_order: "Order Concrete",
            nav_contact: "Contact",
            nav_call: "Call Now",
            nav_about_mobile: "About Us",
            nav_order_mobile: "Order Concrete",
            nav_contact_mobile: "Contact",
            nav_call_mobile: "Call Now",
            hero_title: "Quang Vinh Concrete",
            hero_subtitle: "Quality Creates the Brand - A Solid Foundation for Every Project.",
            about_title: "About Us",
            about_desc: "Quang Vinh Concrete Company is proud to be a leading supplier of ready-mixed concrete, delivering optimal solutions for construction projects. With a modern mixing plant system and a professional team, we are committed to providing high-quality products, accurate grades, sufficient volume, and prompt delivery services, meeting the most stringent customer requirements.",
            feature1_title: "Superior Quality",
            feature1_desc: "Using premium raw materials and a strict quality control process according to international standards.",
            feature2_title: "Professional Service",
            feature2_desc: "A dedicated consulting team, technical support, and 24/7 transportation to ensure project progress.",
            feature3_title: "Competitive Pricing",
            feature3_desc: "We always strive to optimize costs to offer our customers the most reasonable prices.",
            order_title: "Quick Concrete Ordering",
            form_area: "Floor Area (m²)",
            form_area_placeholder: "Example: 80",
            form_grade: "Select Concrete Grade",
            form_grade_option: "-- Select grade --",
            form_suggest_btn: "Suggest",
            form_quantity: "Quantity (m³)",
            form_quantity_placeholder: "Example: 10",
            form_name: "Full Name",
            form_name_placeholder: "John Doe",
            form_phone: "Phone Number",
            form_phone_placeholder: "09xxxxxxxx",
            form_address: "Project Address",
            form_address_placeholder: "Street number, road, ward/commune, district, city/province",
            form_submit_btn: "Submit Order Request",
            contact_title: "Contact Us",
            contact_info_title: "Contact Information",
            contact_info_desc: "We are always ready to listen and advise you. Do not hesitate to contact Quang Vinh Concrete for the best quotes and services.",
            contact_call_btn: "Call for consultation",
            contact_address_label: "Address",
            contact_hotline_label: "Hotline",
            contact_email_label: "Email",
            contact_form_title: "Send us a message",
            contact_form_name_placeholder: "Your full name",
            contact_form_email_placeholder: "Your email",
            contact_form_message_placeholder: "Message content...",
            contact_form_submit_btn: "Send Message",
            footer_copyright: "© 2024 Quang Vinh Concrete Company. All Rights Reserved.",
            footer_tagline: "A solid foundation for every project.",
            modal_fill_info: "Please fill in all required information.",
            modal_order_success_title: "Order Successful!",
            modal_order_success_msg: "We have received your request. A Quang Vinh representative will contact you for confirmation shortly. Thank you!",
            modal_contact_success_title: "Message Sent Successfully!",
            modal_contact_success_msg: "Thank you for contacting us. We will respond as soon as possible.",
            modal_close_btn: "Close",
            suggestion_prompt: "Please enter a valid area.",
            suggestion_lt50: "Suggestion: Grade 200 for small, low-load projects.",
            suggestion_50_150: "Suggestion: Grade 250 is common for residential houses.",
            suggestion_150_300: "Suggestion: Grade 300 for large projects, floors, paths.",
            suggestion_gt300: "Suggestion: Grade 350+ for industrial floors, high load.",
        },
        lo: {
            site_title: "ບໍລິສັດ ເບຕົງ ກວາງວິງ - ຄຸນນະພາບສ້າງແບຣນ",
            company_name: "ເບຕົງ ກວາງວິງ",
            nav_about: "ກ່ຽວກັບພວກເຮົາ",
            nav_order: "ສັ່ງເບຕົງ",
            nav_contact: "ຕິດຕໍ່",
            nav_call: "ໂທດຽວນີ້",
            nav_about_mobile: "ກ່ຽວກັບພວກເຮົາ",
            nav_order_mobile: "ສັ່ງເບຕົງ",
            nav_contact_mobile: "ຕິດຕໍ່",
            nav_call_mobile: "ໂທດຽວນີ້",
            hero_title: "ເບຕົງ ກວາງວິງ",
            hero_subtitle: "ຄຸນນະພາບສ້າງແບຣນ - ຮາກຖານທີ່ໝັ້ນຄົງສຳລັບທຸກໂຄງການ.",
            about_title: "ກ່ຽວກັບພວກເຮົາ",
            about_desc: "ບໍລິສັດ ເບຕົງ ກວາງວິງ ພູມໃຈເປັນຜູ້ສະໜອງເບຕົງສົດຊັ້ນນໍາ, ສະເໜີທາງອອກທີ່ດີທີ່ສຸດສໍາລັບໂຄງການກໍ່ສ້າງ. ດ້ວຍລະບົບໂຮງງານປະສົມທີ່ທັນສະໄໝ ແລະ ທີມງານມືອາຊີບ, ພວກເຮົາໝັ້ນໝາຍທີ່ຈະສະໜອງຜະລິດຕະພັນຄຸນນະພາບສູງ, ຖືກຕ້ອງຕາມມາດຕະຖານ, ພຽງພໍຕາມປະລິມານ ແລະ ບໍລິການສົ່ງເຖິງທີ່ວ່ອງໄວ, ຕອບສະໜອງທຸກຄວາມຕ້ອງການທີ່ເຂັ້ມງວດທີ່ສຸດຂອງລູກຄ້າ.",
            feature1_title: "ຄຸນນະພາບທີ່ເໜືອກວ່າ",
            feature1_desc: "ນໍາໃຊ້ວັດຖຸດິບຄຸນນະພາບສູງ, ຂະບວນການຄວບຄຸມຄຸນນະພາບທີ່ເຂັ້ມງວດຕາມມາດຕະຖານສາກົນ.",
            feature2_title: "ການບໍລິການແບບມືອາຊີບ",
            feature2_desc: "ທີມງານໃຫ້ຄໍາປຶກສາທີ່ເອົາໃຈໃສ່, ສະໜັບສະໜູນດ້ານເຕັກນິກ ແລະ ການຂົນສົ່ງ 24/7, ຮັບປະກັນຄວາມຄືບໜ້າຂອງໂຄງການ.",
            feature3_title: "ລາຄາທີ່ແຂ່ງຂັນໄດ້",
            feature3_desc: "ພວກເຮົາພະຍາຍາມສະເໝີເພື່ອຫຼຸດຕົ້ນທຶນເພື່ອສະເໜີລາຄາທີ່ສົມເຫດສົມຜົນທີ່ສຸດໃຫ້ແກ່ລູກຄ້າ.",
            order_title: "ສັ່ງເບຕົງໄດ້ໄວ",
            form_area: "ເນື້ອທີ່ພື້ນ (m²)",
            form_area_placeholder: "ຕົວຢ່າງ: 80",
            form_grade: "ເລືອກເກຣດເບຕົງ",
            form_grade_option: "-- ເລືອກເກຣດ --",
            form_suggest_btn: "ແນະນຳ",
            form_quantity: "ປະລິມານ (m³)",
            form_quantity_placeholder: "ຕົວຢ່າງ: 10",
            form_name: "ຊື່​ແລະ​ນາມ​ສະ​ກຸນ",
            form_name_placeholder: "ທ້າວ ຄຳດີ",
            form_phone: "ເບີ​ໂທລະ​ສັບ",
            form_phone_placeholder: "020xxxxxxxx",
            form_address: "ທີ່ຢູ່ໂຄງການ",
            form_address_placeholder: "ເລກທີ່ເຮືອນ, ຖະໜົນ, ບ້ານ/ຕາແສງ, ເມືອງ, ແຂວງ/ນະຄອນຫຼວງ",
            form_submit_btn: "ສົ່ງຄຳຂໍສັ່ງຊື້",
            contact_title: "ຕິດຕໍ່ພວກເຮົາ",
            contact_info_title: "ຂໍ້ມູນການຕິດຕໍ່",
            contact_info_desc: "ພວກເຮົາພ້ອມຮັບຟັງ ແລະ ໃຫ້ຄຳປຶກສາແກ່ທ່ານສະເໝີ. ຢ່າລັງເລທີ່ຈະຕິດຕໍ່ ເບຕົງ ກວາງວິງ ເພື່ອຮັບໃບສະເໜີລາຄາ ແລະ ບໍລິການທີ່ດີທີ່ສຸດ.",
            contact_call_btn: "ໂທປຶກສາດຽວນີ້",
            contact_address_label: "ທີ່ຢູ່",
            contact_hotline_label: "ສາຍດ່ວນ",
            contact_email_label: "ອີເມວ",
            contact_form_title: "ສົ່ງຂໍ້ຄວາມຫາພວກເຮົາ",
            contact_form_name_placeholder: "ຊື່ ແລະ ນາມສະກຸນຂອງທ່ານ",
            contact_form_email_placeholder: "ອີເມວຂອງທ່ານ",
            contact_form_message_placeholder: "ເນື້ອໃນຂໍ້ຄວາມ...",
            contact_form_submit_btn: "ສົ່ງຂໍ້ຄວາມ",
            footer_copyright: "© 2024 ບໍລິສັດ ເບຕົງ ກວາງວິງ. ສະຫງວນລິຂະສິດ.",
            footer_tagline: "ຮາກຖານທີ່ໝັ້ນຄົງສຳລັບທຸກໂຄງການ.",
            modal_fill_info: "ກະລຸນາຕື່ມຂໍ້ມູນທີ່ຈຳເປັນທັງໝົດ.",
            modal_order_success_title: "ສັ່ງຊື້ສຳເລັດ!",
            modal_order_success_msg: "ພວກເຮົາໄດ້ຮັບຄຳຂໍຂອງທ່ານແລ້ວ. ພະນັກງານຂອງ ກວາງວິງ ຈະຕິດຕໍ່ຫາທ່ານເພື່ອຢືນຢັນໃນໄວໆນີ້. ຂໍຂອບໃຈ!",
            modal_contact_success_title: "ສົ່ງຂໍ້ຄວາມສຳເລັດ!",
            modal_contact_success_msg: "ຂອບໃຈທີ່ຕິດຕໍ່ພວກເຮົາ. ພວກເຮົາຈະຕອບກັບໂດຍໄວທີ່ສຸດ.",
            modal_close_btn: "ປິດ",
            suggestion_prompt: "ກະລຸນາປ້ອນເນື້ອທີ່ທີ່ຖືກຕ້ອງ.",
            suggestion_lt50: "ຄຳແນະນຳ: ເກຣດ 200 ສຳລັບໂຄງການຂະໜາດນ້ອຍ, ຮັບນ້ຳໜັກຕ່ຳ.",
            suggestion_50_150: "ຄຳແນະນຳ: ເກຣດ 250 ເປັນທີ່ນິຍົມສຳລັບເຮືອນຢູ່ອາໄສ.",
            suggestion_150_300: "ຄຳແນະນຳ: ເກຣດ 300 ສຳລັບໂຄງການຂະໜາດໃຫຍ່, ພື້ນ, ທາງຍ່າງ.",
            suggestion_gt300: "ຄຳແນະນຳ: ເກຣດ 350+ ສຳລັບພື້ນໂຮງງານອຸດສາຫະກຳ, ຮັບນ້ຳໜັກສູງ.",
        }
    };

    // --- LANGUAGE SWITCHER LOGIC ---
    function setLanguage(lang) {
        // Set html lang attribute
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = translations[lang][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update current language display
        const langUpper = lang.toUpperCase();
        document.getElementById('current-lang').textContent = langUpper;
        document.getElementById('current-lang-mobile').textContent = langUpper;

        // Save language to localStorage
        localStorage.setItem('language', lang);
    }

    function setupSwitcher(buttonId, optionsId) {
        const button = document.getElementById(buttonId);
        const options = document.getElementById(optionsId);
        
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            options.classList.toggle('hidden');
        });
    }

    setupSwitcher('language-switcher-button', 'language-options');
    setupSwitcher('language-switcher-button-mobile', 'language-options-mobile');

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            document.getElementById('language-options').classList.add('hidden');
            document.getElementById('language-options-mobile').classList.add('hidden');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        document.getElementById('language-options').classList.add('hidden');
        document.getElementById('language-options-mobile').classList.add('hidden');
    });

    // --- GENERAL UI LOGIC ---
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- FORM LOGIC ---

    // Concrete Grade Suggestion Logic
    const suggestGradeBtn = document.getElementById('suggest-grade-btn');
    const floorAreaInput = document.getElementById('floor-area');
    const concreteGradeSelect = document.getElementById('concrete-grade');
    const suggestionText = document.getElementById('suggestion-text');

    suggestGradeBtn.addEventListener('click', () => {
        const area = parseFloat(floorAreaInput.value);
        const currentLang = localStorage.getItem('language') || 'vi';
        let suggestedGrade = '';
        let suggestionMessage = '';

        if (isNaN(area) || area <= 0) {
            suggestionMessage = translations[currentLang]['suggestion_prompt'];
            suggestedGrade = '';
        } else if (area < 50) {
            suggestedGrade = '200';
            suggestionMessage = translations[currentLang]['suggestion_lt50'];
        } else if (area >= 50 && area < 150) {
            suggestedGrade = '250';
            suggestionMessage = translations[currentLang]['suggestion_50_150'];
        } else if (area >= 150 && area < 300) {
            suggestedGrade = '300';
            suggestionMessage = translations[currentLang]['suggestion_150_300'];
        } else {
            suggestedGrade = '350';
            suggestionMessage = translations[currentLang]['suggestion_gt300'];
        }

        concreteGradeSelect.value = suggestedGrade;
        suggestionText.textContent = suggestionMessage;
    });

    // Modal Notification
    const modal = document.getElementById('notification-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function showModal(titleKey, messageKey) {
        const currentLang = localStorage.getItem('language') || 'vi';
        modalTitle.textContent = translations[currentLang][titleKey] || titleKey;
        modalMessage.textContent = translations[currentLang][messageKey] || messageKey;
        modalCloseBtn.textContent = translations[currentLang]['modal_close_btn'];
        modal.classList.remove('hidden');
    }

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Form Submission Handling
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('customer-name').value;
        const phone = document.getElementById('phone').value;
        const quantity = document.getElementById('quantity').value;
        const grade = document.getElementById('concrete-grade').value;

        if (!name || !phone || !quantity || !grade) {
            showModal('modal_fill_info', 'modal_fill_info');
            return;
        }
        
        console.log('New Order Submitted:', {
            name, phone,
            address: document.getElementById('address').value,
            floorArea: document.getElementById('floor-area').value,
            grade,
            quantity,
        });

        showModal('modal_order_success_title', 'modal_order_success_msg');
        orderForm.reset();
        suggestionText.textContent = '';
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        if (!name || !email || !message) {
            showModal('modal_fill_info', 'modal_fill_info');
            return;
        }
        
        console.log('New Contact Message:', { name, email, message });
         
        showModal('modal_contact_success_title', 'modal_contact_success_msg');
        contactForm.reset();
    });

    // --- INITIALIZATION ---
    
    // Load the saved language or default to Vietnamese
    const savedLang = localStorage.getItem('language') || 'vi';
    setLanguage(savedLang);

});
