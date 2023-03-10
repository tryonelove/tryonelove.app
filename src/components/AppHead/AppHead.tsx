import Head from 'next/head';

export function AppHead() {
    return (
        <Head>
            <title>personal app.</title>
            <meta
                name='description'
                content='Ilya Zdanovich personal webapp'
            />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <link
                rel='icon'
                href='/favicon.ico'
            />
        </Head>
    );
}
