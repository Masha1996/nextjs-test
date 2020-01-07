import localeRu from '../../locale/ru.json';
import localeEn from '../../locale/en.json';

const Index = props => (
        <h1>{props.data.title}</h1>
);

Index.getInitialProps = async function(context) {
    const { id } = context.query;
    let data = localeRu;

    switch (id) {
        case 'ru': {
            data = localeRu;
            break;
        }
        case 'en': {
            data = localeEn;
            break;
        }
    }

    return { data }
};

export default Index;
