// قاعدة بيانات المنيو (أفضل الأطباق لكل دولة)
const menusDB = {
    egypt: [
        { dish: "كشري", restaurant: "أبو طارق", price: "50 EGP", rating: "⭐⭐⭐⭐⭐" },
        { dish: "مشويات مشكلة", restaurant: "صبحي كابر", price: "350 EGP", rating: "⭐⭐⭐⭐⭐" },
        { dish: "حمام محشي", restaurant: "فرحات", price: "180 EGP", rating: "⭐⭐⭐⭐" },
        { dish: "فطير مشلتت", restaurant: "المنوفي", price: "120 EGP", rating: "⭐⭐⭐⭐" }
    ],
    saudi: [
        { dish: "كبسة دجاج", restaurant: "الرومانسية", price: "45 SAR", rating: "⭐⭐⭐⭐⭐" },
        { dish: "مندي لحم", restaurant: "السدة", price: "85 SAR", rating: "⭐⭐⭐⭐⭐" },
        { dish: "مسحب", restaurant: "البيك", price: "18 SAR", rating: "⭐⭐⭐⭐⭐" },
        { dish: "جريش", restaurant: "القرية النجدية", price: "40 SAR", rating: "⭐⭐⭐⭐" }
    ],
    italy: [
        { dish: "بيتزا مارجريتا", restaurant: "Da Michele", price: "8 €", rating: "⭐⭐⭐⭐⭐" },
        { dish: "باستا كاربونارا", restaurant: "Roscioli", price: "15 €", rating: "⭐⭐⭐⭐" },
        { dish: "ريزوتو", restaurant: "Osteria Francescana", price: "40 €", rating: "⭐⭐⭐⭐⭐" }
    ],
    usa: [
        { dish: "برجر كلاسيك", restaurant: "Shake Shack", price: "12 $", rating: "⭐⭐⭐⭐" },
        { dish: "ستيك ريب آي", restaurant: "Peter Luger", price: "60 $", rating: "⭐⭐⭐⭐⭐" },
        { dish: "أجنحة دجاج", restaurant: "Buffalo Wild Wings", price: "15 $", rating: "⭐⭐⭐⭐" }
    ]
};

// الإمساك بعناصر الصفحة
const countrySelect = document.getElementById('country-select');
const menuContainer = document.getElementById('menu-items-container');
const menuTitle = document.getElementById('menu-title');

// وظيفة لعرض المنيو بناءً على الاختيار
countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;
    menuContainer.innerHTML = ""; // مسح المحتوى القديم

    if (selectedCountry && menusDB[selectedCountry]) {
        // تغيير العنوان
        const countryName = this.options[this.selectedIndex].text;
        menuTitle.textContent = `أفضل قائمة طعام في: ${countryName}`;

        // جلب البيانات وإنشاء البطاقات
        const items = menusDB[selectedCountry];
        
        items.forEach(item => {
            // إنشاء كود HTML لكل طبق
            const card = document.createElement('div');
            card.className = 'food-card';
            card.innerHTML = `
                <div class="dish-name">${item.dish}</div>
                <div class="restaurant-name">🏛️ مطعم: ${item.restaurant}</div>
                <div class="price">💰 السعر: ${item.price}</div>
                <div class="rating">${item.rating}</div>
            `;
            menuContainer.appendChild(card);
        });
    } else {
        menuTitle.textContent = "الرجاء اختيار دولة لعرض المنيو";
    }
});
