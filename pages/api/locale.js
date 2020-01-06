import localeRu from '../../locale/ru.json';
import localeEn from '../../locale/en.json';

export default (req, res) => {
    const { locale } = req.query;
    debugger;
    let result;

    switch (locale) {
        case 'ru': {
            result = localeRu;
            break;
        }
        case 'en': {
            result = localeEn;
            break;
        }
    }

    res.status(200).json(result);
};
