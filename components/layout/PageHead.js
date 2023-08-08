import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "CRS -Central Roofing System"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
