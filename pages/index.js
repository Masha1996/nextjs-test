import Link from 'next/link';

export default function Index() {
    return (
        <div>
            Локализованные странички:
            <ul>
                <li><Link href="/test/ru/"><a>Русский язык</a></Link></li>
                <li><Link href="/test/en/"><a>Английский язык</a></Link></li>
            </ul>
        </div>
    );
}
