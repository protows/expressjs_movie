var task = require('../model/model_task');

module.exports =
    function (req, res) {
        res.send(
            { "id": 520468, "id_kinopoisk": 326, "url": "529004-pobeg-iz-shoushenka-1994", "type": "movie", "title": "Побег из Шоушенка", "title_alternative": "The Shawshank Redemption", "tagline": "«Страх - это кандалы. Надежда - это свобода»", "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.", "year": 1994, "poster": "images.kinopoisk.cloud\/posters\/326.jpg", "trailer": "https:\/\/www.youtube.com\/embed\/m_0oN0jgsg8", "age": "зрителям, достигшим 16 лет", "actors": ["Тим Роббинс", "Морган Фриман", "Боб Гантон", "Уильям Сэдлер", "Клэнси Браун", "Джил Беллоуз", "Марк Ролстон", "Джеймс Уитмор", "Джеффри ДеМанн", "Ларри Бранденбург", "Диомид Виноградов", "Игорь Старосельцев", "Никита Прозоровский", "Олег Вирозуб", "Василий Дахненко"], "countries": ["США"], "genres": ["Драма"], "directors": ["Фрэнк Дарабонт"], "screenwriters": ["Фрэнк Дарабонт", "Стивен Кинг"], "producers": ["Лиз Глоцер", "Дэвид В. Лестер", "Ники Марвин"], "operators": ["Роджер Дикинс"], "composers": ["Томас Ньюман"], "painters": ["Теренс Марш", "Soheil", "Питер Лэндсдаун Смит"], "editors": ["Ричард Фрэнсис-Брюс"], "budget": "$25000000", "rating_kinopoisk": 9.1, "rating_imdb": 9.3, "kinopoisk_votes": null, "imdb_votes": null, "fees_world": "$28418687", "fees_russia": "$87432", "premiere_world": "10 сентября 1994", "premiere_russia": "24 октября 2019", "frames": ["https:\/\/st.kp.yandex.net\/im\/kadr\/4\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-44864.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/4\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-44865.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/4\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-44866.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/4\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-44867.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/4\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-44868.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/4\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-44869.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/4\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-44870.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531686.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531687.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531689.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531690.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531691.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531692.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531693.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/5\/3\/1\/kinopoisk.ru-The-Shawshank-Redemption-531695.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/9\/2\/4\/kinopoisk.ru-The-Shawshank-Redemption-924911.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/9\/2\/4\/kinopoisk.ru-The-Shawshank-Redemption-924912.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/9\/2\/4\/kinopoisk.ru-The-Shawshank-Redemption-924913.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/9\/2\/4\/kinopoisk.ru-The-Shawshank-Redemption-924914.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/9\/2\/4\/kinopoisk.ru-The-Shawshank-Redemption-924915.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477323.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477324.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477325.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477326.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477327.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477328.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477332.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477333.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477334.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477335.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477336.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477337.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477338.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477339.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477340.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477341.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477342.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477343.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477344.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477345.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477346.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477347.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/7\/kinopoisk.ru-The-Shawshank-Redemption-1477348.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485749.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485750.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485751.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485752.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485754.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485757.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485758.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485759.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485760.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/4\/8\/kinopoisk.ru-The-Shawshank-Redemption-1485761.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/5\/2\/kinopoisk.ru-The-Shawshank-Redemption-1523739.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/5\/2\/kinopoisk.ru-The-Shawshank-Redemption-1523740.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/5\/2\/kinopoisk.ru-The-Shawshank-Redemption-1523741.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/5\/2\/kinopoisk.ru-The-Shawshank-Redemption-1523742.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/5\/2\/kinopoisk.ru-The-Shawshank-Redemption-1523743.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/5\/2\/kinopoisk.ru-The-Shawshank-Redemption-1523744.jpg"], "screenshots": ["https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132882.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132883.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132885.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132887.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132889.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132890.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132891.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132892.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132894.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132896.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132901.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132902.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132903.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132906.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132907.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132910.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132911.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132914.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132916.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132918.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132919.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132922.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132924.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132925.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132929.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132930.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132932.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132933.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132936.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132937.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132940.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132941.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132944.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132945.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132947.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132948.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132950.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132951.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132953.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132955.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132957.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132959.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132961.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132964.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132965.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132967.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132969.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132971.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132974.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132976.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132977.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132980.jpg", "https:\/\/st.kp.yandex.net\/im\/kadr\/1\/1\/3\/kinopoisk.ru-The-Shawshank-Redemption-1132981.jpg"], "videocdn": { "url": ["\/movie\/b00eabf79a13cf75ebbfde77257b7437\/iframe"], "quality": ["HDRip"], "duration": null, "voice": ["Дубляж"] }, "hdvb": { "url": null, "quality": null, "duration": null, "voice": null }, "collapse": { "url": ["\/embed\/movie\/162"], "quality": ["HD (720p)"], "duration": ["142 мин. \/ 02:22"], "voice": ["Рус. Проф. многоголосый", "Eng.Original"] }, "kodik": { "url": null, "quality": null, "duration": null, "voice": null } }
        );
    };


