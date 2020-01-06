import { useRouter } from 'next/router';
import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Index() {
    const { query } = useRouter();
    debugger;
    const { data, error } = useSWR(
        `/api/locale${query ? '?locale=' + query.locale : ''}`,
        fetcher
    );
    // The following line has optional chaining, added in Next.js v9.1.5,
    // is the same as `data && data.author`
    const title = data?.title;
    let quote = data?.quote;

    if (!data) quote = 'Loading...';
    if (error) quote = 'Failed to fetch the quote.';

    return (
        <h1>{title}</h1>
    );
}
